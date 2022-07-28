/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedDataValue } from "../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";
import { EShapeDataValue, EShapeDataValueParent } from "./e-shape-data-value";
import { EShapeDataValueRange } from "./e-shape-data-value-range";
import { EShapeDataValueRangeImpl } from "./e-shape-data-value-range-impl";
import { EShapeDataValueOrder } from "./e-shape-data-value-order";
import { EShapeDataValueType } from "./e-shape-data-value-type";
import { EShapeDataValueScope } from "./e-shape-data-value-scope";
import { EShapeDataValueFormatter } from "./e-shape-data-value-formatter";
import { EShapeDataValueState } from "./e-shape-data-value-state";

const INDEX_COMPARATOR = (a: number, b: number): number => {
	return a - b;
};

export class EShapeDataValueImpl implements EShapeDataValue {
	id: string;
	as: string;
	type: EShapeDataValueType;
	scope: EShapeDataValueScope;
	initial: string;
	format: string;
	range: EShapeDataValueRange;

	protected _value: unknown;
	protected _time: number;
	protected _state: EShapeDataValueState;

	protected _values: unknown[] | undefined;
	protected _times: number[] | undefined;
	protected _states: EShapeDataValueState[] | undefined;

	protected _capacity: number;
	protected _order: EShapeDataValueOrder;

	protected _parent?: EShapeDataValueParent;

	formatter?: EShapeDataValueFormatter;

	constructor() {
		this.id = "";
		this.as = "";
		this.type = EShapeDataValueType.NUMBER;
		this.scope = EShapeDataValueScope.PUBLIC;
		this.initial = "";
		this.format = "";
		this.range = new EShapeDataValueRangeImpl();
		this._value = 0;
		this._time = 0;
		this._state = EShapeDataValueState.UNKOWN;
		this._capacity = 0;
		this._order = EShapeDataValueOrder.ASCENDING;
	}

	get parent(): EShapeDataValueParent | undefined {
		return this._parent;
	}

	set parent(parent: EShapeDataValueParent | undefined) {
		if (this._parent !== parent) {
			this._parent = parent;
			this.range.parent = parent;
		}
	}

	get value(): unknown {
		return this._value;
	}

	set value(newValue: unknown) {
		const formatter = this.formatter;
		if (formatter != null) {
			newValue = formatter(newValue);
		}

		const capacity = this._capacity;
		if (capacity <= 0) {
			if (this._value !== newValue) {
				this._value = newValue;
				const parent = this.parent;
				if (parent != null) {
					parent.isChanged = true;
				}
			}
		} else {
			let values = this._values;
			if (values == null) {
				values = [];
				this._values = values;
			}

			// Update the value
			this._value = newValue;

			// Update the values
			const order = this._order;
			if (order === EShapeDataValueOrder.ASCENDING) {
				values.push(newValue);
			} else {
				values.unshift(newValue);
			}

			// Remove the unnecessary values
			const count = values.length - capacity;
			if (0 < count) {
				if (order === EShapeDataValueOrder.ASCENDING) {
					for (let i = 0; i < count; ++i) {
						values.shift();
					}
				} else {
					values.length = capacity;
				}
			}

			// Tell the parent it's changed
			const parent = this.parent;
			if (parent != null) {
				parent.isChanged = true;
			}
		}
	}

	get nvalue(): number {
		return this.range.normalize(this._value as number);
	}

	get values(): unknown[] {
		let result = this._values;
		if (result == null) {
			result = [];
			this._values = result;
		}
		return result;
	}

	set values(newValues: unknown[]) {
		const newValuesLength = newValues.length;
		if (0 < newValuesLength) {
			const capacity = this._capacity;
			if (capacity <= 0) {
				let newValue = newValues[newValuesLength - 1];
				const formatter = this.formatter;
				if (formatter != null) {
					newValue = formatter(newValue);
				}
				if (this._value !== newValue) {
					this._value = newValue;
					const parent = this.parent;
					if (parent != null) {
						parent.isChanged = true;
					}
				}
			} else {
				let values = this._values;
				if (values == null) {
					values = [];
					this._values = values;
				}

				const order = this._order;
				const formatter = this.formatter;
				if (formatter != null) {
					// Update the value
					this._value = formatter(newValues[newValuesLength - 1]);

					// Update the values
					if (order === EShapeDataValueOrder.ASCENDING) {
						for (let i = 0; i < newValuesLength; ++i) {
							values.push(formatter(newValues[i]));
						}
					} else {
						for (let i = 0; i < newValuesLength; ++i) {
							values.unshift(formatter(newValues[i]));
						}
					}
				} else {
					// Update the value
					this._value = newValues[newValuesLength - 1];

					// Update the values
					if (order === EShapeDataValueOrder.ASCENDING) {
						for (let i = 0; i < newValuesLength; ++i) {
							values.push(newValues[i]);
						}
					} else {
						for (let i = 0; i < newValuesLength; ++i) {
							values.unshift(newValues[i]);
						}
					}
				}

				// Remove the unnecessary values
				const count = values.length - capacity;
				if (0 < count) {
					if (order === EShapeDataValueOrder.ASCENDING) {
						for (let i = 0; i < count; ++i) {
							values.shift();
						}
					} else {
						values.length = capacity;
					}
				}

				// Tell the parent it's changed
				const parent = this.parent;
				if (parent != null) {
					parent.isChanged = true;
				}
			}
		}
	}

	get time(): number {
		return this._time;
	}

	set time(newTime: number) {
		const capacity = this._capacity;
		if (capacity <= 0) {
			if (this._time !== newTime) {
				this._time = newTime;
				const parent = this.parent;
				if (parent != null) {
					parent.isChanged = true;
				}
			}
		} else {
			// Update the times
			let times = this._times;
			if (times == null) {
				times = [];
				this._times = times;
			}

			// Update the time
			this._time = newTime;

			// Update the times
			const order = this._order;
			if (order === EShapeDataValueOrder.ASCENDING) {
				times.push(newTime);
			} else {
				times.unshift(newTime);
			}

			// Remove the unnecessary times
			const count = times.length - capacity;
			if (0 < count) {
				if (order === EShapeDataValueOrder.ASCENDING) {
					for (let i = 0; i < count; ++i) {
						times.shift();
					}
				} else {
					times.length = capacity;
				}
			}

			// Tell the parent it's changed
			const parent = this.parent;
			if (parent != null) {
				parent.isChanged = true;
			}
		}
	}

	get times(): number[] {
		let result = this._times;
		if (result == null) {
			result = [];
			this._times = result;
		}
		return result;
	}

	set times(newTimes: number[]) {
		const newTimesLength = newTimes.length;
		if (0 < newTimesLength) {
			const capacity = this._capacity;
			if (capacity <= 0) {
				const newTime = newTimes[newTimesLength - 1];
				if (this._time !== newTime) {
					this._time = newTime;
					const parent = this.parent;
					if (parent != null) {
						parent.isChanged = true;
					}
				}
			} else {
				// Update the times
				let times = this._times;
				if (times == null) {
					times = [];
					this._times = times;
				}

				// Update the value
				this._time = newTimes[newTimesLength - 1];

				//
				const order = this._order;
				if (order === EShapeDataValueOrder.ASCENDING) {
					for (let i = 0; i < newTimesLength; ++i) {
						times.push(newTimes[i]);
					}
				} else {
					for (let i = 0; i < newTimesLength; ++i) {
						times.unshift(newTimes[i]);
					}
				}

				//
				const count = times.length - capacity;
				if (0 < count) {
					if (order === EShapeDataValueOrder.ASCENDING) {
						for (let i = 0; i < count; ++i) {
							times.shift();
						}
					} else {
						times.length = capacity;
					}
				}

				// Tell the parent it's changed
				const parent = this.parent;
				if (parent != null) {
					parent.isChanged = true;
				}
			}
		}
	}

	get state(): EShapeDataValueState {
		return this._state;
	}

	set state(newState: number) {
		const capacity = this._capacity;
		if (capacity <= 0) {
			if (this._state !== newState) {
				this._state = newState;
				const parent = this.parent;
				if (parent != null) {
					parent.isChanged = true;
				}
			}
		} else {
			// Update the states
			let states = this._states;
			if (states == null) {
				states = [];
				this._states = states;
			}

			// Update the state
			this._state = newState;

			// Update the states
			const order = this._order;
			if (order === EShapeDataValueOrder.ASCENDING) {
				states.push(newState);
			} else {
				states.unshift(newState);
			}

			// Remove the unnecessary states
			const count = states.length - capacity;
			if (0 < count) {
				if (order === EShapeDataValueOrder.ASCENDING) {
					for (let i = 0; i < count; ++i) {
						states.shift();
					}
				} else {
					states.length = capacity;
				}
			}

			// Tell the parent it's changed
			const parent = this.parent;
			if (parent != null) {
				parent.isChanged = true;
			}
		}
	}

	get states(): EShapeDataValueState[] {
		let result = this._states;
		if (result == null) {
			result = [];
			this._states = result;
		}
		return result;
	}

	set states(newStates: number[]) {
		const newStatesLength = newStates.length;
		if (0 < newStatesLength) {
			const capacity = this._capacity;
			if (capacity <= 0) {
				const newState = newStates[newStatesLength - 1];
				if (this._state !== newState) {
					this._state = newState;
					const parent = this.parent;
					if (parent != null) {
						parent.isChanged = true;
					}
				}
			} else {
				// Update the states
				let states = this._states;
				if (states == null) {
					states = [];
					this._states = states;
				}

				// Update the value
				this._state = newStates[newStatesLength - 1];

				//
				const order = this._order;
				if (order === EShapeDataValueOrder.ASCENDING) {
					for (let i = 0; i < newStatesLength; ++i) {
						states.push(newStates[i]);
					}
				} else {
					for (let i = 0; i < newStatesLength; ++i) {
						states.unshift(newStates[i]);
					}
				}

				//
				const count = states.length - capacity;
				if (0 < count) {
					if (order === EShapeDataValueOrder.ASCENDING) {
						for (let i = 0; i < count; ++i) {
							states.shift();
						}
					} else {
						states.length = capacity;
					}
				}

				// Tell the parent it's changed
				const parent = this.parent;
				if (parent != null) {
					parent.isChanged = true;
				}
			}
		}
	}

	get capacity(): number {
		return this._capacity;
	}

	set capacity(capacity: number) {
		if (this._capacity < capacity) {
			this._capacity = capacity;
		} else if (capacity < this._capacity) {
			this._capacity = capacity;

			let isChanged = false;

			// Values
			const order = this._order;
			const values = this._values;
			if (values != null) {
				const count = values.length - capacity;
				if (0 < count) {
					if (order === EShapeDataValueOrder.ASCENDING) {
						for (let i = 0; i < count; ++i) {
							values.shift();
						}
					} else {
						values.length = capacity;
					}
					isChanged = true;
				}
			}

			// Times
			const times = this._times;
			if (times != null) {
				const count = times.length - capacity;
				if (0 < count) {
					if (order === EShapeDataValueOrder.ASCENDING) {
						for (let i = 0; i < count; ++i) {
							times.shift();
						}
					} else {
						times.length = capacity;
					}
					isChanged = true;
				}
			}

			// States
			const states = this._states;
			if (states != null) {
				const count = states.length - capacity;
				if (0 < count) {
					if (order === EShapeDataValueOrder.ASCENDING) {
						for (let i = 0; i < count; ++i) {
							states.shift();
						}
					} else {
						states.length = capacity;
					}
					isChanged = true;
				}
			}

			if (isChanged) {
				const parent = this.parent;
				if (parent != null) {
					parent.isChanged = true;
				}
			}
		}
	}

	get order(): EShapeDataValueOrder {
		return this._order;
	}

	set order(order: EShapeDataValueOrder) {
		this._order = order;
	}

	remove(index: number): void {
		let isChanged = false;

		// Values
		const values = this._values;
		if (values != null) {
			if (0 <= index && index < values.length) {
				values.splice(index, 1);
				isChanged = true;
			}
		}

		// Times
		const times = this._times;
		if (times != null) {
			if (0 <= index && index < times.length) {
				times.splice(index, 1);
				isChanged = true;
			}
		}

		// States
		const states = this._states;
		if (states != null) {
			if (0 <= index && index < states.length) {
				states.splice(index, 1);
				isChanged = true;
			}
		}

		if (isChanged) {
			const parent = this.parent;
			if (parent != null) {
				parent.isChanged = true;
			}
		}
	}

	removeAll(indices: number[]): void {
		let isChanged = false;

		const sorted = indices.slice(0).sort(INDEX_COMPARATOR);
		const sortedLength = sorted.length;

		// Values
		const values = this._values;
		if (values != null) {
			for (let i = sortedLength - 1; 0 <= i; --i) {
				const index = sorted[i];
				if (0 <= index && index < values.length) {
					values.splice(index, 1);
					isChanged = true;
				}
			}
		}

		// Times
		const times = this._times;
		if (times != null) {
			for (let i = sortedLength - 1; 0 <= i; --i) {
				const index = sorted[i];
				if (0 <= index && index < times.length) {
					times.splice(index, 1);
					isChanged = true;
				}
			}
		}

		// States
		const states = this._states;
		if (states != null) {
			for (let i = sortedLength - 1; 0 <= i; --i) {
				const index = sorted[i];
				if (0 <= index && index < states.length) {
					states.splice(index, 1);
					isChanged = true;
				}
			}
		}

		if (isChanged) {
			const parent = this.parent;
			if (parent != null) {
				parent.isChanged = true;
			}
		}
	}

	clear(): void {
		let isChanged = false;

		// Values
		const values = this._values;
		if (values != null) {
			values.length = 0;
			isChanged = true;
		}

		// Times
		const times = this._times;
		if (times != null) {
			times.length = 0;
			isChanged = true;
		}

		// States
		const states = this._states;
		if (states != null) {
			states.length = 0;
			isChanged = true;
		}

		// Change flag
		if (isChanged) {
			const parent = this.parent;
			if (parent != null) {
				parent.isChanged = true;
			}
		}
	}

	toDirty(): void {
		const parent = this.parent;
		if (parent != null) {
			parent.isChanged = true;
		}
	}

	/**
	 * This method does not copy the `#values` and `#times` for the performance.
	 *
	 * @param target a copy target
	 */
	copy(target: EShapeDataValue): this {
		this.id = target.id;
		this.type = target.type;
		this.scope = target.scope;
		this.initial = target.initial;
		this.format = target.format;
		this.formatter = target.formatter;
		this.range.copy(target.range);
		this._value = target.value;
		this._time = target.time;
		this._state = target.state;
		this._capacity = target.capacity;
		return this;
	}

	isEquals(target: EShapeDataValue): boolean {
		return (
			this.id === target.id &&
			this.type === target.type &&
			this.scope === target.scope &&
			this.initial === target.initial &&
			this.formatter === target.formatter &&
			this.range.isEquals(target.range)
		);
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		const id = manager.addData(this.id);
		const initial = manager.addResource(this.initial);
		const format = manager.addResource(this.format.trim());
		const range = this.range.serialize(manager);
		const as = manager.addResource(this.as);
		return manager.addResource(
			`[${id},${initial},${format},${range},${this._capacity},${this._order},${this.type},${this.scope},${as}]`
		);
	}

	deserialize(target: number, manager: EShapeResourceManagerDeserialization): this {
		const resources = manager.resources;
		if (0 <= target && target < resources.length) {
			let parsed = manager.getDataValue(target);
			if (parsed == null) {
				parsed = JSON.parse(resources[target]) as DDiagramSerializedDataValue;
				manager.setDataValue(target, parsed);
			}
			this.id = manager.data[parsed[0]] || "";
			const as = parsed[8];
			this.as = as != null ? resources[as] || "" : "";
			this.type = parsed[6] ?? EShapeDataValueType.NUMBER;
			this.scope = parsed[7] ?? EShapeDataValueScope.PUBLIC;
			this.initial = resources[parsed[1]] || "";
			this.format = resources[parsed[2]] || "";
			this.range.deserialize(parsed[3], manager);
			this._capacity = parsed[4];
			this._order = parsed[5];
		}

		return this;
	}
}

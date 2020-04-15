/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedTagValue } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeTagValue, EShapeTagValueOrder, EShapeTagValueParent } from "../e-shape-tag-value";
import { EShapeTagValueRange } from "../e-shape-tag-value-range";
import { EShapeTagValueRangeImpl } from "./e-shape-tag-value-range-impl";

const INDEX_COMPARATOR = ( a: number, b: number ): number => {
	return a - b;
};

export class EShapeTagValueImpl implements EShapeTagValue {
	id: string;
	initial: string;
	format: string;
	range: EShapeTagValueRange;
	protected _value: unknown;
	protected _time: number;

	protected _values: unknown[] | undefined;
	protected _times: number[] | undefined;
	protected _capacity: number;
	protected _order: EShapeTagValueOrder;

	protected _parent?: EShapeTagValueParent;

	formatter?: ( value: unknown ) => unknown;

	constructor() {
		this.id = "";
		this.initial = "";
		this.format = "";
		this.range = new EShapeTagValueRangeImpl();
		this._value = 0;
		this._time = 0;
		this._capacity = 0;
		this._order = EShapeTagValueOrder.ASCENDING;
	}

	get parent(): EShapeTagValueParent | undefined {
		return this._parent;
	}

	set parent( parent: EShapeTagValueParent | undefined ) {
		if( this._parent !== parent ) {
			this._parent = parent;
			this.range.parent = parent;
		}
	}

	get value(): unknown {
		return this._value;
	}

	set value( newValue: unknown ) {
		const formatter = this.formatter;
		if( formatter != null ) {
			newValue = formatter( newValue );
		}

		const capacity = this._capacity;
		if( capacity <= 0 ) {
			if( this._value !== newValue ) {
				this._value = newValue;
				const parent = this.parent;
				if( parent != null ) {
					parent.isChanged = true;
				}
			}
		} else {
			let values = this._values;
			if( values == null ) {
				values = [];
				this._values = values;
			}

			// Update the value
			this._value = newValue;

			// Update the values
			const order = this._order;
			if( order === EShapeTagValueOrder.ASCENDING ) {
				values.push( newValue );
			} else {
				values.unshift( newValue );
			}

			// Remove the unnecessary values
			const count = values.length - capacity;
			if( 0 < count ) {
				if( order === EShapeTagValueOrder.ASCENDING ) {
					for( let i = 0; i < count; ++i ) {
						values.shift();
					}
				} else {
					values.length = capacity;
				}
			}

			// Tell the parent it's changed
			const parent = this.parent;
			if( parent != null ) {
				parent.isChanged = true;
			}
		}
	}

	get nvalue(): number {
		return this.range.normalize( this._value as number );
	}

	get values(): unknown[] {
		let result = this._values;
		if( result == null ) {
			result = [];
			this._values = result;
		}
		return result;
	}

	set values( newValues: unknown[] ) {
		if( 0 < newValues.length ) {
			const capacity = this._capacity;
			if( capacity <= 0 ) {
				let newValue = newValues[ newValues.length - 1 ];
				const formatter = this.formatter;
				if( formatter != null ) {
					newValue = formatter( newValue );
				}
				if( this._value !== newValue ) {
					this._value = newValue;
					const parent = this.parent;
					if( parent != null ) {
						parent.isChanged = true;
					}
				}
			} else {
				let values = this._values;
				if( values == null ) {
					values = [];
					this._values = values;
				}

				const order = this._order;
				const formatter = this.formatter;
				if( formatter != null ) {
					// Update the value
					this._value = formatter( newValues[ newValues.length - 1 ] );

					// Update the values
					if( order === EShapeTagValueOrder.ASCENDING ) {
						for( let i = 0, imax = newValues.length; i < imax; ++i ) {
							values.push( formatter( newValues[ i ] ) );
						}
					} else {
						for( let i = 0, imax = newValues.length; i < imax; ++i ) {
							values.unshift( formatter( newValues[ i ] ) );
						}
					}
				} else {
					// Update the value
					this._value = newValues[ newValues.length - 1 ];

					// Update the values
					if( order === EShapeTagValueOrder.ASCENDING ) {
						for( let i = 0, imax = newValues.length; i < imax; ++i ) {
							values.push( newValues[ i ] );
						}
					} else {
						for( let i = 0, imax = newValues.length; i < imax; ++i ) {
							values.unshift( newValues[ i ] );
						}
					}
				}

				// Remove the unnecessary values
				const count = values.length - capacity;
				if( 0 < count ) {
					if( order === EShapeTagValueOrder.ASCENDING ) {
						for( let i = 0; i < count; ++i ) {
							values.shift();
						}
					} else {
						values.length = capacity;
					}
				}

				// Tell the parent it's changed
				const parent = this.parent;
				if( parent != null ) {
					parent.isChanged = true;
				}
			}
		}
	}

	get time(): number {
		return this._time;
	}

	set time( newTime: number ) {
		const capacity = this._capacity;
		if( capacity <= 0 ) {
			if( this._time !== newTime ) {
				this._time = newTime;
				const parent = this.parent;
				if( parent != null ) {
					parent.isChanged = true;
				}
			}
		} else {
			// Update the times
			let times = this._times;
			if( times == null ) {
				times = [];
				this._times = times;
			}

			// Update the time
			this._time = newTime;

			// Update the times
			const order = this._order;
			if( order === EShapeTagValueOrder.ASCENDING ) {
				times.push( newTime );
			} else {
				times.unshift( newTime );
			}

			// Remove the unnecessary times
			const count = times.length - capacity;
			if( 0 < count ) {
				if( order === EShapeTagValueOrder.ASCENDING ) {
					for( let i = 0; i < count; ++i ) {
						times.shift();
					}
				} else {
					times.length = capacity;
				}
			}

			// Tell the parent it's changed
			const parent = this.parent;
			if( parent != null ) {
				parent.isChanged = true;
			}
		}
	}

	get times(): number[] {
		let result = this._times;
		if( result == null ) {
			result = [];
			this._times = result;
		}
		return result;
	}

	set times( newTimes: number[] ) {
		if( 0 < newTimes.length ) {
			const capacity = this._capacity;
			if( capacity <= 0 ) {
				const newTime = newTimes[ newTimes.length - 1 ];
				if( this._time !== newTime ) {
					this._time = newTime;
					const parent = this.parent;
					if( parent != null ) {
						parent.isChanged = true;
					}
				}
			} else {
				// Update the times
				let times = this._times;
				if( times == null ) {
					times = [];
					this._times = times;
				}

				// Update the value
				this._time = newTimes[ newTimes.length - 1 ];

				//
				const order = this._order;
				if( order === EShapeTagValueOrder.ASCENDING ) {
					for( let i = 0, imax = newTimes.length; i < imax; ++i ) {
						times.push( newTimes[ i ] );
					}
				} else {
					for( let i = 0, imax = newTimes.length; i < imax; ++i ) {
						times.unshift( newTimes[ i ] );
					}
				}

				//
				const count = times.length - capacity;
				if( 0 < count ) {
					if( order === EShapeTagValueOrder.ASCENDING ) {
						for( let i = 0; i < count; ++i ) {
							times.shift();
						}
					} else {
						times.length = capacity;
					}
				}

				// Tell the parent it's changed
				const parent = this.parent;
				if( parent != null ) {
					parent.isChanged = true;
				}
			}
		}
	}

	get capacity(): number {
		return this._capacity;
	}

	set capacity( capacity: number ) {
		if( this._capacity < capacity ) {
			this._capacity = capacity;
		} else if( capacity < this._capacity ) {
			this._capacity = capacity;

			let isChanged = false;

			// Values
			const order = this._order;
			const values = this._values;
			if( values != null ) {
				const count = values.length - capacity;
				if( 0 < count ) {
					if( order === EShapeTagValueOrder.ASCENDING ) {
						for( let i = 0; i < count; ++i ) {
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
			if( times != null ) {
				const count = times.length - capacity;
				if( 0 < count ) {
					if( order === EShapeTagValueOrder.ASCENDING ) {
						for( let i = 0; i < count; ++i ) {
							times.shift();
						}
					} else {
						times.length = capacity;
					}
					isChanged = true;
				}
			}

			if( isChanged ) {
				const parent = this.parent;
				if( parent != null ) {
					parent.isChanged = true;
				}
			}
		}
	}

	get order(): EShapeTagValueOrder {
		return this._order;
	}

	set order( order: EShapeTagValueOrder ) {
		this._order = order;
	}

	remove( index: number ): void {
		let isChanged = false;

		// Values
		const values = this._values;
		if( values != null ) {
			if( 0 <= index && index < values.length ) {
				values.splice( index, 1 );
				isChanged = true;
			}
		}

		// Times
		const times = this._times;
		if( times != null ) {
			if( 0 <= index && index < times.length ) {
				times.splice( index, 1 );
				isChanged = true;
			}
		}

		if( isChanged ) {
			const parent = this.parent;
			if( parent != null ) {
				parent.isChanged = true;
			}
		}
	}

	removeAll( indices: number[] ): void {
		let isChanged = false;

		const values = this._values;
		const times = this._times;
		const sorted = indices.slice(0).sort( INDEX_COMPARATOR );
		if( values != null ) {
			if( times != null ) {
				for( let i = sorted.length - 1; 0 <= i; --i ) {
					const index = sorted[ i ];
					if( 0 <= index ) {
						if( index < values.length ) {
							values.splice( index, 1 );
							isChanged = true;
						}
						if( index < times.length ) {
							times.splice( index, 1 );
							isChanged = true;
						}
					}
				}
			} else {
				for( let i = sorted.length - 1; 0 <= i; --i ) {
					const index = sorted[ i ];
					if( 0 <= index && index < values.length ) {
						values.splice( index, 1 );
						isChanged = true;
					}
				}
			}
		} else {
			if( times != null ) {
				for( let i = sorted.length - 1; 0 <= i; --i ) {
					const index = sorted[ i ];
					if( 0 <= index && index < times.length ) {
						times.splice( index, 1 );
						isChanged = true;
					}
				}
			}
		}

		if( isChanged ) {
			const parent = this.parent;
			if( parent != null ) {
				parent.isChanged = true;
			}
		}
	}

	clear(): void {
		let isChanged = false;

		// Values
		const values = this._values;
		if( values != null ) {
			values.length = 0;
			isChanged = true;
		}

		// Times
		const times = this._times;
		if( times != null ) {
			times.length = 0;
			isChanged = true;
		}

		// Change flag
		if( isChanged ) {
			const parent = this.parent;
			if( parent != null ) {
				parent.isChanged = true;
			}
		}
	}

	/**
	 * This method does not copy the `#values` and `#times` for the performance.
	 *
	 * @param target a copy target
	 */
	copy( target: EShapeTagValue ): this {
		this.id = target.id;
		this.initial = target.initial;
		this.format = target.format;
		this.formatter = target.formatter;
		this.range.copy( target.range );
		this._value = target.value;
		this._time = target.time;
		this._capacity = target.capacity;
		return this;
	}

	isEquals( target: EShapeTagValue ): boolean {
		return (
			this.id === target.id &&
			this.initial === target.initial &&
			this.formatter === target.formatter &&
			this.range.isEquals( target.range )
		);
	}

	serialize( manager: EShapeResourceManagerSerialization ): number {
		const idSerialized = manager.addTag( this.id );
		const initialSerialized = manager.addResources( this.initial );
		const formatSerialized = manager.addResources( this.format.trim() );
		const rangeSerialized = this.range.serialize( manager );
		return manager.addResources(
			`[${idSerialized},${initialSerialized},${formatSerialized},${rangeSerialized},${this._capacity},${this._order}]`
		);
	}

	deserialize( target: number, manager: EShapeResourceManagerDeserialization ): this {
		const resources = manager.resources;
		if( 0 <= target && target < resources.length ) {
			let parsed = manager.getTagValue( target );
			if( parsed == null ) {
				parsed = JSON.parse( resources[ target ] ) as DDiagramSerializedTagValue;
				manager.setTagValue( target, parsed );
			}
			this.id = manager.tags[ parsed[ 0 ] ] || "";
			this.initial = resources[ parsed[ 1 ] ] || "";
			this.format = resources[ parsed[ 2 ] ] || "";
			this.range.deserialize( parsed[ 3 ], manager );
			this._capacity = parsed[ 4 ];
			this._order = parsed[ 5 ];
		}

		return this;
	}
}

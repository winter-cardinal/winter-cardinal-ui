/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramCanvasData } from "./d-diagram-canvas-data";
import { EShapeDataScoped } from "./shape/e-shape-data-scoped";
import { EShapeDataScopedImpl } from "./shape/e-shape-data-scoped-impl";
import { EShapeDataValue } from "./shape/e-shape-data-value";
import { EShapeDataValueRangeType } from "./shape/e-shape-data-value-range";
import { EShapeDataValueState } from "./shape/e-shape-data-value-state";

export class DDiagramCanvasDataImpl implements DDiagramCanvasData {
	protected _data?: Map<string, EShapeDataValue[]>;
	protected _private?: EShapeDataScoped;
	protected _protected?: EShapeDataScoped;
	protected _extended?: EShapeDataScoped;

	get private(): EShapeDataScoped {
		let result = this._private;
		if (result == null) {
			result = this.newPrivate();
			this._private = result;
		}
		return result;
	}

	protected newPrivate(): EShapeDataScoped {
		return new EShapeDataScopedImpl();
	}

	get protected(): EShapeDataScoped {
		let result = this._protected;
		if (result == null) {
			result = this.newProtected();
			this._protected = result;
		}
		return result;
	}

	protected newProtected(): EShapeDataScoped {
		return new EShapeDataScopedImpl();
	}

	get extended(): EShapeDataScoped {
		let result = this._extended;
		if (result == null) {
			result = this.newExtended();
			this._extended = result;
		}
		return result;
	}

	protected newExtended(): EShapeDataScoped {
		return new EShapeDataScopedImpl();
	}

	get ids(): string[] {
		const data = this._data;
		if (data == null) {
			return [];
		}
		const result: string[] = [];
		data.forEach((value, id): void => {
			result.push(id);
		});
		return result;
	}

	each(iteratee: (id: string) => boolean | void): string | null {
		const data = this._data;
		if (data == null) {
			return null;
		}
		let result: string | null = null;
		data.forEach((value, id): void => {
			if (result == null) {
				if (iteratee(id) === false) {
					result = id;
				}
			}
		});
		return result;
	}

	add(id: string, value: EShapeDataValue): void {
		const data = (this._data ??= new Map<string, EShapeDataValue[]>());
		const list = data.get(id);
		if (list == null) {
			data.set(id, [value]);
		} else {
			list.push(value);
		}
	}

	set(
		id: string,
		value: unknown,
		time?: number,
		state?: EShapeDataValueState,
		from?: number | null,
		to?: number | null
	): boolean {
		const data = this._data;
		if (data == null) {
			return false;
		}
		const datum = data.get(id);
		if (datum == null) {
			return false;
		}
		const size = datum.length;
		if (size <= 0) {
			return false;
		}
		for (let i = 0; i < size; ++i) {
			const datumValue = datum[i];
			const range = datumValue.range;

			// Range
			range.set(from, to);

			// Time
			if (time !== undefined) {
				datumValue.time = time;
			}

			// State
			if (state !== undefined) {
				datumValue.state = state;
			}

			// Value
			datumValue.value = value;
		}
		return true;
	}

	get(id: string): EShapeDataValue[] | null {
		const data = this._data;
		if (data == null) {
			return null;
		}
		const datum = data.get(id);
		if (datum == null) {
			return null;
		}
		return datum;
	}

	clear(id: string): boolean {
		const data = this._data;
		if (data == null) {
			return false;
		}
		const datum = data.get(id);
		if (datum == null) {
			return false;
		}
		const size = datum.length;
		if (size <= 0) {
			return false;
		}
		for (let i = 0; i < size; ++i) {
			datum[i].clear();
		}
		return true;
	}

	toDirty(id: string): boolean {
		const data = this._data;
		if (data == null) {
			return false;
		}
		const datum = data.get(id);
		if (datum == null) {
			return false;
		}
		const size = datum.length;
		if (size <= 0) {
			return false;
		}
		for (let i = 0; i < size; ++i) {
			datum[i].toDirty();
		}
		return true;
	}

	setAll(
		id: string,
		values: unknown[],
		times?: number[],
		states?: EShapeDataValueState[],
		from?: number | null,
		to?: number | null
	): boolean {
		const data = this._data;
		if (data == null) {
			return false;
		}
		const datum = data.get(id);
		if (datum == null) {
			return false;
		}
		const size = datum.length;
		if (size <= 0) {
			return false;
		}
		for (let i = 0; i < size; ++i) {
			const datumValue = datum[i];
			const range = datumValue.range;

			// Range
			range.set(from, to);

			// Time
			if (times !== undefined) {
				datumValue.times = times;
			}

			// State
			if (states !== undefined) {
				datumValue.states = states;
			}

			// Value
			datumValue.values = values;
		}
		return true;
	}

	setValue(id: string, value: unknown): boolean {
		const data = this._data;
		if (data == null) {
			return false;
		}
		const datum = data.get(id);
		if (datum == null) {
			return false;
		}
		const size = datum.length;
		if (size <= 0) {
			return false;
		}
		for (let i = 0; i < size; ++i) {
			datum[i].value = value;
		}
		return true;
	}

	setValues(id: string, values: unknown[]): boolean {
		const data = this._data;
		if (data == null) {
			return false;
		}
		const datum = data.get(id);
		if (datum == null) {
			return false;
		}
		const size = datum.length;
		if (size <= 0) {
			return false;
		}
		for (let i = 0; i < size; ++i) {
			datum[i].values = values;
		}
		return true;
	}

	setTime(id: string, time: number): boolean {
		const data = this._data;
		if (data == null) {
			return false;
		}
		const datum = data.get(id);
		if (datum == null) {
			return false;
		}
		const size = datum.length;
		if (size <= 0) {
			return false;
		}
		for (let i = 0; i < size; ++i) {
			datum[i].time = time;
		}
		return true;
	}

	setTimes(id: string, times: number[]): boolean {
		const data = this._data;
		if (data == null) {
			return false;
		}
		const datum = data.get(id);
		if (datum == null) {
			return false;
		}
		const size = datum.length;
		if (size <= 0) {
			return false;
		}
		for (let i = 0; i < size; ++i) {
			datum[i].times = times;
		}
		return true;
	}

	setState(id: string, state: EShapeDataValueState): boolean {
		const data = this._data;
		if (data == null) {
			return false;
		}
		const datum = data.get(id);
		if (datum == null) {
			return false;
		}
		const size = datum.length;
		if (size <= 0) {
			return false;
		}
		for (let i = 0; i < size; ++i) {
			datum[i].state = state;
		}
		return true;
	}

	setStates(id: string, states: EShapeDataValueState[]): boolean {
		const data = this._data;
		if (data == null) {
			return false;
		}
		const datum = data.get(id);
		if (datum == null) {
			return false;
		}
		const size = datum.length;
		if (size <= 0) {
			return false;
		}
		for (let i = 0; i < size; ++i) {
			datum[i].states = states;
		}
		return true;
	}

	setRange(id: string, from?: number | null, to?: number | null): boolean {
		const data = this._data;
		if (data == null) {
			return false;
		}
		const datum = data.get(id);
		if (datum == null) {
			return false;
		}
		const size = datum.length;
		if (size <= 0) {
			return false;
		}
		for (let i = 0; i < size; ++i) {
			const range = datum[i].range;
			if (from !== undefined) {
				if (from !== null) {
					range.type |= EShapeDataValueRangeType.FROM;
					range.from = from;
				} else {
					range.type &= ~EShapeDataValueRangeType.FROM;
				}
			}
			if (to !== undefined) {
				if (to !== null) {
					range.type |= EShapeDataValueRangeType.TO;
					range.to = to;
				} else {
					range.type &= ~EShapeDataValueRangeType.TO;
				}
			}
		}
		return true;
	}
}

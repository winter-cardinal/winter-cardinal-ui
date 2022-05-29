/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramCanvasData } from "./d-diagram-canvas-data";
import { DDiagramCanvasDataPrivate } from "./d-diagram-canvas-data-private";
import { DDiagramCanvasDataPrivateImpl } from "./d-diagram-canvas-data-private-impl";
import { EShapeDataValue } from "./shape/e-shape-data-value";
import { EShapeDataValueRangeType } from "./shape/e-shape-data-value-range";

export class DDiagramCanvasDataImpl implements DDiagramCanvasData {
	protected _data?: Map<string, EShapeDataValue[]>;
	protected _private?: DDiagramCanvasDataPrivate;

	get private(): DDiagramCanvasDataPrivate {
		let result = this._private;
		if (result == null) {
			result = this.newPrivate();
			this._private = result;
		}
		return result;
	}

	protected newPrivate(): DDiagramCanvasDataPrivate {
		return new DDiagramCanvasDataPrivateImpl();
	}

	get ids(): string[] {
		const data = this._data;
		if (data != null) {
			const result: string[] = [];
			data.forEach((value, id): void => {
				result.push(id);
			});
			return result;
		}
		return [];
	}

	each(callback: (id: string) => boolean | void): string | null {
		const data = this._data;
		if (data != null) {
			let result: string | null = null;
			data.forEach((value, id): void => {
				if (result == null) {
					if (callback(id) === false) {
						result = id;
					}
				}
			});
			return result;
		}
		return null;
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
		from?: number | null,
		to?: number | null
	): boolean {
		const data = this._data;
		if (data != null) {
			const datum = data.get(id);
			if (datum != null) {
				for (let i = 0, imax = datum.length; i < imax; ++i) {
					const datumValue = datum[i];
					const range = datumValue.range;

					// Range
					range.set(from, to);

					// Time
					if (time !== undefined) {
						datumValue.time = time;
					}

					// Value
					datumValue.value = value;
				}
				return true;
			}
		}
		return false;
	}

	clear(id: string): boolean {
		const data = this._data;
		if (data != null) {
			const datum = data.get(id);
			if (datum != null) {
				for (let i = 0, imax = datum.length; i < imax; ++i) {
					datum[i].clear();
				}
				return true;
			}
		}
		return false;
	}

	setAll(
		id: string,
		values: unknown[],
		times?: number[],
		from?: number | null,
		to?: number | null
	): boolean {
		const data = this._data;
		if (data != null) {
			const datum = data.get(id);
			if (datum != null) {
				for (let i = 0, imax = datum.length; i < imax; ++i) {
					const datumValue = datum[i];
					const range = datumValue.range;

					// Range
					range.set(from, to);

					// Time
					if (times !== undefined) {
						datumValue.times = times;
					}

					// Value
					datumValue.values = values;
				}
				return true;
			}
		}
		return false;
	}

	setValue(id: string, value: unknown, time?: number): boolean {
		const data = this._data;
		if (data != null) {
			const datum = data.get(id);
			if (datum != null) {
				for (let i = 0, imax = datum.length; i < imax; ++i) {
					const datumValue = datum[i];

					if (time !== undefined) {
						datumValue.time = time;
					}

					datumValue.value = value;
				}
				return true;
			}
		}
		return false;
	}

	setValues(id: string, values: unknown[], times?: number[]): boolean {
		const data = this._data;
		if (data != null) {
			const datum = data.get(id);
			if (datum != null) {
				for (let i = 0, imax = datum.length; i < imax; ++i) {
					const datumValue = datum[i];

					if (times !== undefined) {
						datumValue.times = times;
					}

					datumValue.values = values;
				}
				return true;
			}
		}
		return false;
	}

	setTime(id: string, time: number): boolean {
		const data = this._data;
		if (data != null) {
			const datum = data.get(id);
			if (datum != null) {
				for (let i = 0, imax = datum.length; i < imax; ++i) {
					datum[i].time = time;
				}
				return true;
			}
		}
		return false;
	}

	setTimes(id: string, times: number[]): boolean {
		const data = this._data;
		if (data != null) {
			const datum = data.get(id);
			if (datum != null) {
				for (let i = 0, imax = datum.length; i < imax; ++i) {
					datum[i].times = times;
				}
				return true;
			}
		}
		return false;
	}

	setRange(id: string, from?: number | null, to?: number | null): boolean {
		const data = this._data;
		if (data != null) {
			const datum = data.get(id);
			if (datum != null) {
				for (let i = 0, imax = datum.length; i < imax; ++i) {
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
		return false;
	}
}

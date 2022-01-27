/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramCanvasDataMap } from "./d-diagram-canvas-data-map";
import { DDiagramDataRemote, DDiagramDataRemoteOptions } from "./d-diagram-data-remote";
import { EShape } from "./shape/e-shape";
import { EShapeDataValue } from "./shape/e-shape-data-value";
import { EShapeDataValueRangeType } from "./shape/e-shape-data-value-range";

export interface DDiagramDataCanvas {
	data: DDiagramCanvasDataMap;
}

export interface DDiagramDataDiagram {
	canvas: DDiagramDataCanvas | null;
}

/**
 * A data mapper.
 *
 * @param dataValue a data value
 */
export type DDiagramDataMapper = (value: EShapeDataValue, shape: EShape) => void;

export interface DDiagramDataOptions {
	/**
	 * A data mapper.
	 */
	mapper?: DDiagramDataMapper;

	/**
	 * Remote data options.
	 */
	remote?: DDiagramDataRemoteOptions;
}

/**
 * A data helper class for diagrams.
 */
export class DDiagramData {
	protected _diagram: DDiagramDataDiagram;
	protected _mapper: DDiagramDataMapper | null;
	protected _remote: DDiagramDataRemote;

	constructor(diagram: DDiagramDataDiagram, options?: DDiagramDataOptions) {
		this._diagram = diagram;
		this._mapper = (options && options.mapper) || null;
		this._remote = new DDiagramDataRemote(options && options.remote);
	}

	update(): void {
		// DO NOTHING
	}

	get mapper(): DDiagramDataMapper | null {
		return this._mapper;
	}

	set mapper(mapper: DDiagramDataMapper | null) {
		this._mapper = mapper;
	}

	get remote(): DDiagramDataRemote {
		return this._remote;
	}

	getIds(): string[] {
		const canvas = this._diagram.canvas;
		if (canvas != null) {
			return Object.keys(canvas.data);
		}
		return [];
	}

	each(callback: (id: string) => boolean | void): string | null {
		const canvas = this._diagram.canvas;
		if (canvas != null) {
			const data = canvas.data;
			for (const id in data) {
				if (callback(id) === false) {
					return id;
				}
			}
		}
		return null;
	}

	set(
		id: string,
		value: unknown,
		time?: number,
		from?: number | null,
		to?: number | null
	): boolean {
		const canvas = this._diagram.canvas;
		if (canvas != null) {
			const datum = canvas.data[id];
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
		const canvas = this._diagram.canvas;
		if (canvas != null) {
			const datum = canvas.data[id];
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
		const canvas = this._diagram.canvas;
		if (canvas != null) {
			const datum = canvas.data[id];
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
		const canvas = this._diagram.canvas;
		if (canvas != null) {
			const datum = canvas.data[id];
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
		const canvas = this._diagram.canvas;
		if (canvas != null) {
			const datum = canvas.data[id];
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
		const canvas = this._diagram.canvas;
		if (canvas != null) {
			const datum = canvas.data[id];
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
		const canvas = this._diagram.canvas;
		if (canvas != null) {
			const datum = canvas.data[id];
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
		const canvas = this._diagram.canvas;
		if (canvas != null) {
			const datum = canvas.data[id];
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

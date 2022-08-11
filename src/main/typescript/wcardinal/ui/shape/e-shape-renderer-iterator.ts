/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "./e-shape";
import { EShapeRendererIteratorDatum } from "./e-shape-renderer-iterator-datum";

export class EShapeRendererIterator {
	protected _index: number;
	protected _data: EShapeRendererIteratorDatum[];
	protected _datum: EShapeRendererIteratorDatum;
	protected _current: EShape | null;

	constructor() {
		this._index = -1;
		this._datum = new EShapeRendererIteratorDatum();
		this._data = [this._datum];
		this._current = null;
	}

	reset(shape: EShape | null, shapes: EShape[]): EShape | null {
		this._index = 0;
		const datum = this._data[0];
		datum.index = -1;
		datum.shapes = shapes;
		datum.current = null;
		this._datum = datum;
		if (shape != null) {
			this._current = shape;
			return shape;
		}
		return this.next();
	}

	get(): EShape | null {
		return this._current;
	}

	next(): EShape | null {
		while (true) {
			const datum = this._datum;
			const shapeIndex = (datum.index += 1);
			const shapes = datum.shapes;
			const shape =
				shapeIndex < shapes.length
					? (datum.current = shapes[shapeIndex])
					: (datum.current = null);
			if (shape != null) {
				const children = shape.children;
				if (0 < children.length) {
					const dataIndex = (this._index += 1);
					const data = this._data;
					if (dataIndex < data.length) {
						const newDatum = data[dataIndex];
						newDatum.index = -1;
						newDatum.shapes = children;
						newDatum.current = null;
						this._datum = newDatum;
					} else {
						const newDatum = new EShapeRendererIteratorDatum();
						data.push(newDatum);
						newDatum.index = -1;
						newDatum.shapes = children;
						newDatum.current = null;
						this._datum = newDatum;
					}
				} else {
					this._current = shape;
					return shape;
				}
			} else {
				const dataIndex = (this._index -= 1);
				const data = this._data;
				if (0 <= dataIndex) {
					const newDatum = data[dataIndex];
					this._datum = newDatum;
					return (this._current = newDatum.current);
				} else {
					return (this._current = null);
				}
			}
		}
	}
}

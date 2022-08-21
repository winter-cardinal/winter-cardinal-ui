/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramCanvasBaseShapeCanvas } from "./d-diagram-canvas-base-shape";
import { DDiagramCanvasBaseShapeImpl } from "./d-diagram-canvas-base-shape-impl";
import { EShape } from "./shape/e-shape";

export class DDiagramCanvasShapeImpl extends DDiagramCanvasBaseShapeImpl {
	protected _data: Map<string, EShape[]>;

	constructor(canvas: DDiagramCanvasBaseShapeCanvas) {
		super(canvas);
		this._data = new Map<string, EShape[]>();
	}

	add(id: string, shape: EShape): void {
		const data = this._data;
		const shapes = data.get(id);
		if (shapes == null) {
			data.set(id, [shape]);
		} else {
			shapes.push(shape);
		}
	}

	get(id: string): EShape | null {
		const shapes = this._data.get(id);
		if (shapes && 0 < shapes.length) {
			return shapes[0];
		}
		return null;
	}

	getAll(id: string): EShape[] {
		return this._data.get(id) || [];
	}
}

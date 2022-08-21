/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import {
	DDiagramCanvasBaseShape,
	DDiagramCanvasBaseShapeCanvas
} from "./d-diagram-canvas-base-shape";
import { EShape } from "./shape/e-shape";
import { EShapeCapabilities } from "./shape/e-shape-capabilities";
import { EShapeCapability } from "./shape/e-shape-capability";

export class DDiagramCanvasBaseShapeImpl implements DDiagramCanvasBaseShape {
	protected _canvas: DDiagramCanvasBaseShapeCanvas;

	constructor(canvas: DDiagramCanvasBaseShapeCanvas) {
		this._canvas = canvas;
	}

	each(iteratee: (shape: EShape) => boolean | void, ignoreCapability?: boolean): this {
		const canvas = this._canvas;
		const layers = canvas.layer.children;
		for (let i = 0, imax = layers.length; i < imax; ++i) {
			if (this.each_(layers[i].children, iteratee, ignoreCapability) === false) {
				break;
			}
		}
		return this;
	}

	protected each_(
		shapes: EShape[],
		iteratee: (shape: EShape) => boolean | void,
		ignoreCapability?: boolean
	): boolean | undefined {
		for (let i = 0, imax = shapes.length; i < imax; ++i) {
			const shape = shapes[i];
			if (iteratee(shape) === false) {
				return false;
			}
			if (ignoreCapability || EShapeCapabilities.contains(shape, EShapeCapability.CHILDREN)) {
				const children = shape.children;
				if (0 < children.length) {
					if (this.each_(children, iteratee, ignoreCapability) === false) {
						return false;
					}
				}
			}
		}
	}
}

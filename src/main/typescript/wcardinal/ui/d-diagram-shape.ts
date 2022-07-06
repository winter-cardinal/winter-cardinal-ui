/*
 * Copyright (C) 2021 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Renderer, utils } from "pixi.js";
import { DApplicationTarget } from "./d-application-like";
import { DApplications } from "./d-applications";
import { DDiagramCanvasShape } from "./d-diagram-canvas-shape";
import { EShape } from "./shape/e-shape";

export interface DDiagramShapeLayer {
	children: EShape[];
}

export interface DDiagramShapeLayerContainer {
	children: DDiagramShapeLayer[];
}

export interface DDiagramShapeCanvas {
	layer: DDiagramShapeLayerContainer;
	shape: DDiagramCanvasShape;
	update(): void;
	onRender(renderer: Renderer): void;
}

export interface DDiagramShapeDiagram extends DApplicationTarget {
	canvas: DDiagramShapeCanvas | null;
}

/**
 * A shape helper class for diagrams.
 */
export class DDiagramShape extends utils.EventEmitter {
	protected _diagram: DDiagramShapeDiagram;
	protected _updateBound: () => void;

	constructor(diagram: DDiagramShapeDiagram) {
		super();
		this._diagram = diagram;
		this._updateBound = (): void => {
			DApplications.update(diagram);
		};
	}

	update(): void {
		const canvas = this._diagram.canvas;
		if (canvas) {
			canvas.update();
		}
	}

	onRender(renderer: Renderer): void {
		const canvas = this._diagram.canvas;
		if (canvas) {
			canvas.onRender(renderer);
		}
	}

	get(id: string): EShape | null {
		const canvas = this._diagram.canvas;
		if (canvas) {
			return canvas.shape.get(id);
		}
		return null;
	}

	getAll(id: string): EShape[] {
		const canvas = this._diagram.canvas;
		if (canvas) {
			return canvas.shape.getAll(id);
		}
		return [];
	}

	each(iteratee: (shape: EShape) => boolean | void, reverse = false): EShape | null {
		const canvas = this._diagram.canvas;
		if (canvas != null) {
			const layers = canvas.layer.children;
			if (!reverse) {
				for (let i = 0, imax = layers.length; i < imax; ++i) {
					const layer = layers[i];
					const children = layer.children;
					for (let j = 0, jmax = children.length; j < jmax; ++j) {
						const child = children[j];
						if (iteratee(child) === false) {
							return child;
						}
					}
				}
			} else {
				for (let i = layers.length - 1; 0 <= i; --i) {
					const layer = layers[i];
					const children = layer.children;
					for (let j = children.length - 1; 0 <= j; --j) {
						const child = children[j];
						if (iteratee(child) === false) {
							return child;
						}
					}
				}
			}
		}
		return null;
	}
}

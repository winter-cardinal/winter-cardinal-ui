/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "./d-base-state-set";
import { EShape } from "./shape/e-shape";
import { EShapeContainer } from "./shape/e-shape-container";
import { EShapeType } from "./shape/e-shape-type";

export interface DDiagramLayersShape {
	parent: EShapeContainer | EShape | null;
}

export interface DDiagramLayersShapeContainer extends EShapeContainer {
	state: DBaseStateSet;
}

export type DDiagramLayersLayer = DDiagramLayersShapeContainer | EShape;

export class DDiagramLayers {
	static toLayers(shape: DDiagramLayersShape, indices: number[]): DDiagramLayersLayer[] {
		const result: DDiagramLayersLayer[] = [];
		const layer = this.toLayer(shape);
		if (layer) {
			const container = layer.parent;
			if (container) {
				const children = container.children as DDiagramLayersLayer[];
				const childrenLength = children.length;
				for (let i = 0, imax = indices.length; i < imax; ++i) {
					const index = indices[i];
					if (0 <= index && index < childrenLength) {
						result.push(children[index]);
					}
				}
			}
		}
		return result;
	}

	static toLayer(shape: DDiagramLayersShape): DDiagramLayersLayer | null | undefined {
		let parent = shape.parent;
		while (parent != null) {
			if (parent instanceof EShapeContainer) {
				return parent as DDiagramLayersShapeContainer;
			}
			if (parent.type === EShapeType.EMBEDDED_LAYER) {
				return parent;
			}
			parent = parent.parent;
		}
		return null;
	}

	static show(target: DDiagramLayersLayer): boolean {
		if (!target.visible) {
			target.visible = true;
			return true;
		}
		return false;
	}

	static showAll(targets: DDiagramLayersLayer[]): boolean {
		let isChanged = false;
		for (let i = 0, imax = targets.length; i < imax; ++i) {
			const layer = targets[i];
			if (!layer.visible) {
				layer.visible = true;
				isChanged = true;
			}
		}
		return isChanged;
	}

	static hide(target: DDiagramLayersLayer): boolean {
		if (target.visible) {
			target.visible = false;
			return true;
		}
		return false;
	}

	static hideAll(targets: DDiagramLayersLayer[]): boolean {
		let isChanged = false;
		for (let i = 0, imax = targets.length; i < imax; ++i) {
			const layer = targets[i];
			if (layer.visible) {
				layer.visible = false;
				isChanged = true;
			}
		}
		return isChanged;
	}

	static bringToFront(target: DDiagramLayersLayer): boolean {
		const parent = target.parent;
		if (parent) {
			return this.doBringToFront(target, parent.children, 0);
		}
		return false;
	}

	static bringAllToFront(targets: DDiagramLayersLayer[]): boolean {
		const targetsLength = targets.length;
		if (0 < targetsLength) {
			const parent = targets[0].parent;
			if (parent) {
				let isChanged = false;
				const layers = parent.children;
				for (let i = 0; i < targetsLength; ++i) {
					const layer = targets[targetsLength - 1 - i];
					if (this.doBringToFront(layer, layers, i)) {
						isChanged = true;
					}
				}
				return isChanged;
			}
		}
		return false;
	}

	protected static doBringToFront(target: unknown, layers: unknown[], offset: number): boolean {
		const layersLength = layers.length;
		const ito = layersLength - 1 - offset;
		for (let i = ito; 0 <= i; --i) {
			const child = layers[i];
			if (child === target) {
				if (i !== ito) {
					for (let j = i + 1; j <= ito; ++j) {
						layers[j - 1] = layers[j];
					}
					layers[ito] = child;
					return true;
				}
				return false;
			}
		}
		return false;
	}
}

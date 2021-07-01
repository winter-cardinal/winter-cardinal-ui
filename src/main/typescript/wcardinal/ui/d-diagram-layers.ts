/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DApplicationTarget } from "./d-application-like";
import { DDiagramLayerContainer } from "./d-diagram-layer-container";
import { EShape } from "./shape/e-shape";
import { EShapeContainer } from "./shape/e-shape-container";
import { EShapeEmbeddedLayerContainer } from "./shape/variant/e-shape-embedded-layer-container";

export interface DDiagramLayersContainer extends DApplicationTarget {
	children: DDiagramLayersLayer[];
}

export interface DDiagramLayersLayer {
	visible: boolean;
}

export class DDiagramLayers {
	static toContainer(shape: {
		parent: EShapeContainer | EShape | null;
	}): DDiagramLayerContainer | EShapeEmbeddedLayerContainer | null | undefined {
		let parent = shape.parent;
		while (parent != null) {
			if (parent instanceof EShapeEmbeddedLayerContainer) {
				return parent;
			}
			if (parent instanceof EShapeContainer) {
				return parent.parent as DDiagramLayerContainer | null | undefined;
			}
			parent = parent.parent;
		}
		return null;
	}

	static toLayers(container: DDiagramLayersContainer, indices: number[]): DDiagramLayersLayer[] {
		const result: DDiagramLayersLayer[] = [];
		const children = container.children;
		const childrenLength = children.length;
		for (let i = 0, imax = indices.length; i < imax; ++i) {
			const index = indices[i];
			if (0 <= index && index < childrenLength) {
				result.push(children[index]);
			}
		}
		return result;
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

	static bringToFront(container: DDiagramLayersContainer, target: DDiagramLayersLayer): boolean {
		return this.doBringToFront(target, container.children, 0);
	}

	static bringAllToFront(
		container: DDiagramLayersContainer,
		targets: DDiagramLayersLayer[]
	): boolean {
		let isChanged = false;
		const layers = container.children;
		const targetsLength = targets.length;
		for (let i = 0; i < targetsLength; ++i) {
			const layer = targets[targetsLength - 1 - i];
			if (this.doBringToFront(layer, layers, i)) {
				isChanged = true;
			}
		}
		return isChanged;
	}

	protected static doBringToFront(
		target: DDiagramLayersLayer,
		layers: DDiagramLayersLayer[],
		offset: number
	): boolean {
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

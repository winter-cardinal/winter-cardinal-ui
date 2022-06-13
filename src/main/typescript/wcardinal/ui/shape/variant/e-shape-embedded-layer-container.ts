/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedLayer } from "../../d-diagram-serialized";
import { EShape } from "../e-shape";
import { EShapeConnectors } from "../e-shape-connectors";
import { EShapeLayerContainer } from "../e-shape-layer-container";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { deserializeEmbeddedLayer } from "./deserialize-embedded-layer";
import { EShapeConnectorLine } from "./e-shape-connector-line";
import { EShapeEmbeddedLayer } from "./e-shape-embedded-layer";

export class EShapeEmbeddedLayerContainer implements EShapeLayerContainer {
	children: EShapeEmbeddedLayer[];
	protected _width: number;
	protected _height: number;
	protected _isEditMode: boolean;
	protected _hasConnectors?: Map<EShapeEmbeddedLayer, boolean>;

	constructor(width: number, height: number, isEditMode: boolean) {
		this.children = [];
		this._width = width;
		this._height = height;
		this._isEditMode = isEditMode;
	}

	protected hasConnectors(shapes: EShape[]): boolean {
		for (let i = 0, imax = shapes.length; i < imax; ++i) {
			const shape = shapes[i];
			if (shape instanceof EShapeConnectorLine) {
				return true;
			}
			const children = shape.children;
			if (0 < children.length) {
				if (this.hasConnectors(children)) {
					return true;
				}
			}
		}
		return false;
	}

	protected newHasConnectors(): Map<EShapeEmbeddedLayer, boolean> {
		const result = new Map<EShapeEmbeddedLayer, boolean>();
		const layers = this.children;
		for (let i = 0, imax = layers.length; i < imax; ++i) {
			const layer = layers[i];
			result.set(layer, this.hasConnectors(layer.children));
		}
		return result;
	}

	copyTo(destination: EShape): void {
		const hasConnectors = (this._hasConnectors ??= this.newHasConnectors());
		const layers = this.children;
		const children = destination.children;
		for (let i = 0, imax = layers.length; i < imax; ++i) {
			const layer = layers[i];
			const clone = layer.clone();
			clone.parent = destination;
			children.push(clone);
			if (hasConnectors.get(layer)) {
				EShapeConnectors.move(layer, clone);
			}
		}
		destination.onChildTransformChange();
		destination.toDirty();
		destination.onAttach();
	}

	deserialize(
		serializedLayers: DDiagramSerializedLayer[],
		manager: EShapeResourceManagerDeserialization
	): void {
		const serializedLayersLength = serializedLayers.length;
		if (0 < serializedLayersLength) {
			const width = this._width;
			const height = this._height;
			for (let i = 0; i < serializedLayersLength; ++i) {
				this.children.push(
					deserializeEmbeddedLayer(serializedLayers[i], manager, width, height)
				);
			}
		}
	}
}

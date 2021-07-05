/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedLayer } from "../../d-diagram-serialized";
import { EShapeLayerContainer } from "../e-shape-layer-container";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeEmbeddedLayer } from "./e-shape-embedded-layer";

export class EShapeEmbeddedLayerContainer implements EShapeLayerContainer {
	children: EShapeEmbeddedLayer[];
	protected _width: number;
	protected _height: number;
	protected _isEditMode: boolean;

	constructor(width: number, height: number, isEditMode: boolean) {
		this.children = [];
		this._width = width;
		this._height = height;
		this._isEditMode = isEditMode;
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
					EShapeEmbeddedLayer.deserialize(serializedLayers[i], manager, width, height)
				);
			}
		}
	}
}

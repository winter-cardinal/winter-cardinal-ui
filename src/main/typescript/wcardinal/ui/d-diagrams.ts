/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramBaseController } from "./d-diagram-base";
import { DDiagramLayerContainer } from "./d-diagram-layer-container";
import {
	DDiagramSerialized,
	DDiagramSerializedSimple,
	DDiagramSerializedSimpleData
} from "./d-diagram-serialized";
import { EShape } from "./shape/e-shape";
import { EShapeLayerContainer } from "./shape/e-shape-layer-container";
import { EShapeResourceManagerDeserialization } from "./shape/e-shape-resource-manager-deserialization";
import { deserializeAll } from "./shape/variant/deserialize-all";
import { EShapeEmbeddedDatum } from "./shape/variant/e-shape-embedded-datum";
import { EShapeEmbeddedLayerContainer } from "./shape/variant/e-shape-embedded-layer-container";

export class DDiagrams {
	static toSimple(serialized: DDiagramSerialized): DDiagramSerializedSimple {
		return {
			version: serialized.version,
			id: serialized.id,
			name: serialized.name,
			thumbnail: serialized.thumbnail,
			data: JSON.stringify({
				width: serialized.width,
				height: serialized.height,
				background: serialized.background,
				tile: serialized.tile,
				resources: serialized.resources,
				data: serialized.data || serialized.tags,
				pieces: serialized.pieces,
				layers: serialized.layers,
				items: serialized.items,
				snap: serialized.snap
			})
		};
	}

	static toSerialized(target: DDiagramSerializedSimple | DDiagramSerialized): DDiagramSerialized {
		if (!("items" in target)) {
			const data: DDiagramSerializedSimpleData = JSON.parse(target.data);
			const result: DDiagramSerialized = {
				version: target.version,
				id: target.id,
				name: target.name,
				width: data.width,
				height: data.height,
				background: data.background,
				tile: data.tile,
				resources: data.resources,
				data: data.data || data.tags,
				pieces: data.pieces,
				layers: data.layers,
				items: data.items,
				snap: data.snap,
				thumbnail: target.thumbnail
			};
			if (result.data == null) {
				const tags = target.tags;
				if (tags != null) {
					result.data = JSON.parse(tags);
				}
			}
			if (result.pieces == null) {
				const pieces = target.pieces;
				if (pieces != null) {
					result.pieces = JSON.parse(pieces);
				}
			}
			return result;
		}
		return target;
	}

	static newLayer(
		serialized: DDiagramSerialized,
		container: DDiagramLayerContainer | EShapeLayerContainer,
		manager: EShapeResourceManagerDeserialization
	): Promise<EShape[]> {
		// Layers
		container.deserialize(serialized.layers, manager);

		// Items
		const serializedItems = serialized.items;
		const shapePromises = deserializeAll(serializedItems, manager);
		if (shapePromises != null) {
			return shapePromises.then((shapes: EShape[]): EShape[] => {
				const layers = container.children;
				for (let i = 0, imax = shapes.length; i < imax; ++i) {
					const serializedItem = serializedItems[i];
					const shape = shapes[i];
					const layer = layers[serializedItem[16]];
					if (layer != null) {
						shape.parent = layer;
						shape.uploaded = undefined;
						layer.children.push(shape);
					}
				}
				for (let i = 0, imax = layers.length; i < imax; ++i) {
					const layer = layers[i];
					layer.onChildTransformChange();
					layer.toDirty();
					const children = layer.children;
					for (let j = 0, jmax = children.length; j < jmax; ++j) {
						children[j].onAttach();
					}
				}
				return shapes;
			});
		} else {
			return Promise.resolve([]);
		}
	}

	static toPieceData(
		controller: DDiagramBaseController | null | undefined,
		pieces: string[] | null | undefined,
		isEditMode: boolean
	): Promise<Map<string, EShapeEmbeddedDatum | null>> {
		const result = new Map<string, EShapeEmbeddedDatum | null>();
		const onFulfilled = () => {
			return result;
		};
		return this.toPieceData_(controller, pieces, result, isEditMode).then(
			onFulfilled,
			onFulfilled
		);
	}

	private static toPieceData_(
		controller: DDiagramBaseController | null | undefined,
		pieces: string[] | null | undefined,
		pieceData: Map<string, EShapeEmbeddedDatum | null>,
		isEditMode: boolean
	): Promise<Array<EShape[] | null>> {
		const promises: Array<Promise<EShape[] | null>> = [];
		if (pieces && 0 < pieces.length && controller) {
			for (let i = 0, imax = pieces.length; i < imax; ++i) {
				const piece = pieces[i];
				if (!pieceData.has(piece)) {
					pieceData.set(piece, null);
					promises.push(
						controller.piece.getByName(piece).then(
							(found) => {
								return this.toPieceData__(
									controller,
									piece,
									found,
									isEditMode,
									pieceData
								);
							},
							() => {
								return null;
							}
						)
					);
				}
			}
		}
		return Promise.all(promises);
	}

	private static toPieceData__(
		controller: DDiagramBaseController,
		name: string,
		serializedOrSimple: DDiagramSerialized | DDiagramSerializedSimple,
		isEditMode: boolean,
		pieceData: Map<string, EShapeEmbeddedDatum | null>
	): Promise<EShape[]> {
		const serialized = this.toSerialized(serializedOrSimple);
		const width = serialized.width;
		const height = serialized.height;
		const container = new EShapeEmbeddedLayerContainer(width, height, isEditMode);

		pieceData.set(name, new EShapeEmbeddedDatum(name, width, height, container));

		const pieces = serialized.pieces;
		return this.toPieceData_(controller, pieces, pieceData, isEditMode).then(() => {
			return this.newLayer(
				serialized,
				container,
				new EShapeResourceManagerDeserialization(serialized, pieces, pieceData, isEditMode)
			);
		});
	}
}

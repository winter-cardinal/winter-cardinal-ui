/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramBaseController } from "./d-diagram-base-controller";
import { DDiagramLayerContainer } from "./d-diagram-layer-container";
import {
	DDiagramSerialized,
	DDiagramSerializedSimple,
	DDiagramSerializedSimpleData
} from "./d-diagram-serialized";
import { EShape } from "./shape/e-shape";
import { EShapeLayerContainer } from "./shape/e-shape-layer-container";
import { EShapeResourceManagerDeserialization } from "./shape/e-shape-resource-manager-deserialization";
import { EShapeResourceManagerDeserializationMode } from "./shape/e-shape-resource-manager-deserialization-mode";
import { deserializeAll } from "./shape/variant/deserialize-all";
import { EShapeEmbeddedDatum } from "./shape/variant/e-shape-embedded-datum";
import { EShapeEmbeddedLayerContainer } from "./shape/variant/e-shape-embedded-layer-container";
import { isArray } from "./util/is-array";
import { isNumber } from "./util/is-number";
import { isString } from "./util/is-string";

export class DDiagrams {
	static parse(target: unknown): DDiagramSerialized | null {
		if (target != null && isString(target)) {
			try {
				const parsed = JSON.parse(target);
				if (parsed != null && isNumber(parsed.version) && isString(parsed.name)) {
					if (
						isNumber(parsed.width) &&
						isNumber(parsed.height) &&
						isArray(parsed.items) &&
						isArray(parsed.resources)
					) {
						return parsed;
					} else if (isString(parsed.data)) {
						return this.toSerialized(parsed);
					}
				}
			} catch (e) {
				// DO NOTHING
			}
		}
		return null;
	}

	static toSimple(serialized: DDiagramSerialized): DDiagramSerializedSimple {
		return {
			version: serialized.version,
			id: serialized.id,
			name: serialized.name,
			label: serialized.label,
			category: serialized.category,
			summary: serialized.summary,
			description: serialized.description,
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
				label: target.label,
				width: data.width,
				height: data.height,
				category: target.category,
				summary: target.summary,
				description: target.description,
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
		mode: EShapeResourceManagerDeserializationMode
	): Promise<Map<string, EShapeEmbeddedDatum | null>> {
		const pieceToDatum = new Map<string, EShapeEmbeddedDatum | null>();
		const pieceToPromise = new Map<string, Promise<EShape[] | null>>();
		const onFulfilled = () => {
			return pieceToDatum;
		};
		return this.toPieceData_(controller, pieces, pieceToDatum, pieceToPromise, mode, 0).then(
			onFulfilled,
			onFulfilled
		);
	}

	private static toPieceData_(
		controller: DDiagramBaseController | null | undefined,
		pieces: string[] | null | undefined,
		pieceToDatum: Map<string, EShapeEmbeddedDatum | null>,
		pieceToPromise: Map<string, Promise<EShape[] | null>>,
		mode: EShapeResourceManagerDeserializationMode,
		depth: number
	): Promise<Array<EShape[] | null>> {
		const promises: Array<Promise<EShape[] | null>> = [];
		if (pieces && 0 < pieces.length && controller) {
			for (let i = 0, imax = pieces.length; i < imax; ++i) {
				const piece = pieces[i];
				const promise = pieceToPromise.get(piece);
				if (promise != null) {
					promises.push(promise);
				} else {
					const newPromise = controller.piece.getByName(piece).then(
						(found) => {
							return this.toPieceData__(
								controller,
								piece,
								found,
								mode,
								depth + 1,
								pieceToDatum,
								pieceToPromise
							);
						},
						() => {
							return null;
						}
					);
					pieceToPromise.set(piece, newPromise);
					promises.push(newPromise);
				}
			}
		}
		return Promise.all(promises);
	}

	private static toPieceData__(
		controller: DDiagramBaseController,
		name: string,
		serializedOrSimple: DDiagramSerialized | DDiagramSerializedSimple,
		mode: EShapeResourceManagerDeserializationMode,
		depth: number,
		pieceToDatum: Map<string, EShapeEmbeddedDatum | null>,
		pieceToPromise: Map<string, Promise<EShape[] | null>>
	): Promise<EShape[]> {
		const serialized = this.toSerialized(serializedOrSimple);
		const width = serialized.width;
		const height = serialized.height;
		const container = new EShapeEmbeddedLayerContainer(width, height);

		pieceToDatum.set(name, new EShapeEmbeddedDatum(name, width, height, container));

		const pieces = serialized.pieces;
		return this.toPieceData_(
			controller,
			pieces,
			pieceToDatum,
			pieceToPromise,
			mode,
			depth
		).then(() => {
			return this.newLayer(
				serialized,
				container,
				new EShapeResourceManagerDeserialization(
					serialized,
					pieces,
					pieceToDatum,
					mode,
					depth
				)
			);
		});
	}
}

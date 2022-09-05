/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramBaseController } from "../../d-diagram-base-controller";
import { DDiagramSerialized, DDiagramSerializedSimple } from "../../d-diagram-serialized";
import { DDiagrams } from "../../d-diagrams";
import { EShapeLayerContainer } from "../e-shape-layer-container";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerDeserializationMode } from "../e-shape-resource-manager-deserialization-mode";
import { EShapeEmbedded } from "./e-shape-embedded";
import { EShapeEmbeddedDatum } from "./e-shape-embedded-datum";
import { EShapeEmbeddedLayerContainer } from "./e-shape-embedded-layer-container";

export class EShapeEmbeddeds {
	static from(
		serializedOrSimple: DDiagramSerialized | DDiagramSerializedSimple,
		controller: DDiagramBaseController | null | undefined,
		mode: EShapeResourceManagerDeserializationMode
	): Promise<EShapeEmbedded> {
		const serialized = DDiagrams.toSerialized(serializedOrSimple);
		const pieces = serialized.pieces;
		return DDiagrams.toPieceData(controller, pieces, mode).then((pieceData) => {
			return this.from_(serialized, mode, pieces, pieceData);
		});
	}

	private static from_(
		serialized: DDiagramSerialized,
		mode: EShapeResourceManagerDeserializationMode,
		pieces?: string[],
		pieceData?: Map<string, EShapeEmbeddedDatum | null>
	): Promise<EShapeEmbedded> {
		const width = serialized.width;
		const height = serialized.height;
		const container = new EShapeEmbeddedLayerContainer(width, height);
		const manager = new EShapeResourceManagerDeserialization(
			serialized,
			pieces,
			pieceData,
			mode,
			1
		);
		return DDiagrams.newLayer(serialized, container, manager).then(() => {
			return this.create(serialized.name, width, height, container, mode, 0);
		});
	}

	static create(
		name: string,
		width: number,
		height: number,
		container: EShapeLayerContainer,
		mode: EShapeResourceManagerDeserializationMode,
		depth: number
	): EShapeEmbedded {
		const shape = new EShapeEmbedded(name, mode, depth);
		shape.size.set(width, height);
		container.copyTo(shape);
		shape.size.init();
		return shape;
	}
}

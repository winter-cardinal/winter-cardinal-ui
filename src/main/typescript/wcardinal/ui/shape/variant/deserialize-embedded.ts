/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeLayerContainer } from "../e-shape-layer-container";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { deserializeBase } from "./deserialize-base";
import { EShapeEmbedded } from "./e-shape-embedded";

const create = (
	name: string,
	width: number,
	height: number,
	container: EShapeLayerContainer,
	manager: EShapeResourceManagerDeserialization,
	item: DDiagramSerializedItem
): Promise<EShapeEmbedded> | EShapeEmbedded => {
	const shape = new EShapeEmbedded(name, manager.isEditMode);
	const result = deserializeBase(item, manager, shape);
	const shapeSize = shape.size;
	const sizeX = shapeSize.x;
	const sizeY = shapeSize.y;
	shape.size.set(width, height);
	container.copyTo(shape);
	shape.size.init();
	shape.size.set(sizeX, sizeY);
	return result;
};

export const deserializeEmbedded = (
	item: DDiagramSerializedItem,
	manager: EShapeResourceManagerDeserialization
): Promise<EShapeEmbedded> | EShapeEmbedded | null => {
	const pieces = manager.pieces;
	const pieceId = item[15];
	if (pieces && 0 <= pieceId && pieceId < pieces.length) {
		const pieceData = manager.pieceData;
		if (pieceData) {
			const piece = pieces[pieceId];
			const pieceDatum = pieceData.get(piece);
			if (pieceDatum) {
				return create(
					piece,
					pieceDatum.width,
					pieceDatum.height,
					pieceDatum.layer,
					manager,
					item
				);
			}
		}
	}
	return null;
};

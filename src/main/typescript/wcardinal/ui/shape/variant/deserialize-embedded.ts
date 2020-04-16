/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeEmbedded } from "./e-shape-embedded";
import { EShapeEmbeddeds } from "./e-shape-embeddeds";

export const deserializeEmbedded = (
	item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization
): Promise<EShapeEmbedded> | EShapeEmbedded | null => {
	const pieces = manager.pieces;
	const pieceId = item[ 15 ];
	if( pieces && 0 <= pieceId && pieceId < pieces.length ) {
		const pieceData = manager.pieceData;
		if( pieceData ) {
			const piece = pieces[ pieceId ];
			const pieceDatum = pieceData.get( piece );
			if( pieceDatum ) {
				return EShapeEmbeddeds.from( piece, pieceDatum.tags, pieceDatum.layer, item, manager );
			}
		}
	}
	return null;
};

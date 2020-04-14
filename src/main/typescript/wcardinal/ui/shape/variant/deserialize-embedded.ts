/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeDeserializer } from "../e-shape-deserializer";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeEmbedded } from "./e-shape-embedded";

export const deserializeEmbedded = (
	item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization
): Promise<EShapeEmbedded> | EShapeEmbedded | null => {
	const pieces = manager.pieces;
	const pieceId = item[ 15 ];
	if( pieces && 0 <= pieceId && pieceId < pieces.length ) {
		const pieceToShapes = manager.pieceToShapes;
		if( pieceToShapes ) {
			const piece = pieces[ pieceId ];
			const shapes = pieceToShapes.get( piece );
			if( shapes ) {
				const shape = new EShapeEmbedded( piece );
				const result = EShapeDeserializer.deserialize( item, manager, shape );
				const layers = shapes.children;
				const children = shape.children;
				for( let i = 0, imax = layers.length; i < imax; ++i ) {
					const clone = layers[ i ].clone();
					clone.parent = shape;
					children.push( clone );
				}
				shape.onChildTransformChange();
				shape.toDirty();
				shape.size.init();
				return result;
			}
		}
	}
	return null;
};

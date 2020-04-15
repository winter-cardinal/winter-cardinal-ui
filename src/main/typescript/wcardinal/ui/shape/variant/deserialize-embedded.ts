/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShape } from "../e-shape";
import { EShapeDefaults } from "../e-shape-defaults";
import { EShapeDeserializer } from "../e-shape-deserializer";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeTagMappingObject } from "../e-shape-tag-mapping";
import { EShapeEmbedded } from "./e-shape-embedded";

const replaceTagsOf = ( mapping: EShapeTagMappingObject, shape: EShape ): void => {
	const tag = shape.tag;
	for( let i = 0, imax = tag.size(); i < imax; ++i ) {
		const value = tag.get( i );
		if( value ) {
			const mappedId = mapping[ value.id ];
			if( mappedId != null ) {
				value.id = mappedId;
			}
		}
	}
	replaceTags( mapping, shape.children );
};

const replaceTags = ( mapping: EShapeTagMappingObject, shapes: EShape[] ): void => {
	for( let i = 0, imax = shapes.length; i < imax; ++i ) {
		replaceTagsOf( mapping, shapes[ i ] );
	}
};

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
				const shape = new EShapeEmbedded( piece );
				shape.tag.mapping.init( pieceDatum.tags );
				const result = EShapeDeserializer.deserialize( item, manager, shape );
				const layers = pieceDatum.layer.children;
				const children = shape.children;
				for( let i = 0, imax = layers.length; i < imax; ++i ) {
					const clone = layers[ i ].clone();
					clone.parent = shape;
					children.push( clone );
				}
				if( ! EShapeDefaults.IS_EDIT_MODE ) {
					replaceTags( shape.tag.mapping.toObject(), shape.children );
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

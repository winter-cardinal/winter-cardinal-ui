/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeDefaults } from "../e-shape-defaults";
import { EShapePointsStyle } from "../e-shape-points";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapes } from "../e-shapes";
import { EShapeLine } from "./e-shape-line";

export class EShapeLines {
	static toStrokeWidth( index: number, resources: string[] ): number {
		if( 0 <= index && index < resources.length  ) {
			try {
				return JSON.parse( resources[ index ] )[ 3 ];
			} catch( e ) {
				//
			}
		}
		return 8;
	}

	static deserialize(
		item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization
	): Promise<EShapeLine> | EShapeLine | null {
		const resources = manager.resources;
		const resourceId = item[ 15 ];
		if( 0 <= resourceId && resourceId < resources.length ) {
			let parsed = manager.extensions.get( resourceId ) as [ number[], number[], number ] | undefined;
			if( parsed == null ) {
				parsed = JSON.parse( resources[ resourceId ] ) as [ number[], number[], number ];
				manager.extensions.set( resourceId, parsed );
			}
			const shape = EShapeLines.create(
				parsed[ 0 ],
				parsed[ 1 ],
				EShapeDefaults.STROKE_WIDTH,
				parsed[ 2 ]
			);
			return EShapes.deserialize( item, manager, shape );
		}
		return null;
	}

	static create(
		points: number[],
		segments: number[],
		strokeWidth: number,
		style: EShapePointsStyle
	): EShapeLine {
		return new EShapeLine( points, segments, strokeWidth, style );
	}
}

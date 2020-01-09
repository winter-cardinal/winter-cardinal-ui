/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeCircleUploaded } from "./e-shape-circle-uploaded";
import { EShapeLineOfCirclesUploaded } from "./e-shape-line-of-circles-uploaded";
import { EShapeLineOfNullsUploaded } from "./e-shape-line-of-nulls-uploaded";
import { EShapeTextUploadeds } from "./e-shape-text-uploadeds";

export class EShapeLineOfCirclesUploadeds {
	static create(
		buffer: EShapeBuffer, shape: EShape,
		voffset: number, ioffset: number,
		antialiasWeight: number
	): EShapeLineOfCirclesUploaded | EShapeLineOfNullsUploaded | null {
		const tcount = EShapeTextUploadeds.getTextCount( shape, buffer.workCount );
		const tvcount = tcount.vertexCount;
		const ticount = tcount.indexCount;
		const points = shape.points;
		const pointCount = ( points ? points.length : 0 );
		const vcount = pointCount * EShapeCircleUploaded.VERTEX_COUNT + tvcount;
		const icount = pointCount * EShapeCircleUploaded.INDEX_COUNT + ticount;
		if( voffset + vcount < buffer.vertexCapacity && ioffset + icount < buffer.indexCapacity ) {
			if( 0 < pointCount ) {
				return new EShapeLineOfCirclesUploaded(
					buffer,
					voffset, ioffset,
					tvcount, ticount,
					vcount, icount,
					antialiasWeight,
					pointCount
				).init( shape );
			} else {
				return new EShapeLineOfNullsUploaded(
					buffer,
					voffset, ioffset,
					tvcount, ticount,
					tvcount, ticount,
					antialiasWeight
				).init( shape );
			}
		}
		return null;
	}
}

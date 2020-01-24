/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapePointsStyle } from "../e-shape-points-style";
import { TEXT_INDEX_COUNT, TEXT_VERTEX_COUNT, toTextBufferCount } from "./build-text";
import { EShapeLineUploaded } from "./e-shape-line-uploaded";

export class EShapeLineUploadeds {
	static create(
		buffer: EShapeBuffer, shape: EShape,
		voffset: number, ioffset: number,
		antialiasWeight: number
	): EShapeLineUploaded | null {
		const points = shape.points;
		const pointsClosed = ( points ? (points.style & EShapePointsStyle.CLOSED) !== 0 : false );
		const pointCount = ( points ? points.length : 0 );
		const tcount = toTextBufferCount( shape );
		const tvcount = tcount * TEXT_VERTEX_COUNT;
		const ticount = tcount * TEXT_INDEX_COUNT;
		let vcount = tvcount;
		let icount = ticount;
		if( 2 <= pointCount ) {
			if( pointsClosed ) {
				vcount += pointCount * 4 + 2;
				icount += pointCount * 4;
			} else {
				vcount += (pointCount - 2) * 4 + 2 + 2;
				icount += (pointCount - 2) * 4 + 2;
			}
		}
		if( voffset + vcount < buffer.vertexCapacity && ioffset + icount < buffer.indexCapacity ) {
			return new EShapeLineUploaded(
				buffer,
				voffset, ioffset,
				tvcount, ticount,
				vcount, icount,
				antialiasWeight,
				pointCount, pointsClosed
			).init( shape );
		}
		return null;
	}
}

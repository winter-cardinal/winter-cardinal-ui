/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { RECTANGLE_ROUNDED_INDEX_COUNT, RECTANGLE_ROUNDED_VERTEX_COUNT } from "./build-rectangle-rounded";
import { EShapeRectangleRoundedUploaded } from "./e-shape-rectangle-rounded-uploaded";
import { EShapeTextUploadeds } from "./e-shape-text-uploadeds";

export class EShapeRectangleRoundedUploadeds {
	static create(
		buffer: EShapeBuffer, shape: EShape,
		voffset: number, ioffset: number,
		antialiasWeight: number
	): EShapeRectangleRoundedUploaded | null {
		const tcount = EShapeTextUploadeds.getTextCount( shape, buffer.workCount );
		const tvcount = tcount.vertexCount;
		const ticount = tcount.indexCount;
		const vcount = RECTANGLE_ROUNDED_VERTEX_COUNT + tvcount;
		const icount = RECTANGLE_ROUNDED_INDEX_COUNT + ticount;
		if( voffset + vcount < buffer.vertexCapacity && ioffset + icount < buffer.indexCapacity ) {
			return new EShapeRectangleRoundedUploaded(
				buffer,
				voffset, ioffset,
				tvcount, ticount,
				vcount, icount,
				antialiasWeight
			).init( shape );
		}
		return null;
	}
}

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeRectangleUploaded } from "./e-shape-rectangle-uploaded";
import { EShapeTextUploadeds } from "./e-shape-text-uploadeds";

export class EShapeRectangleUploadeds {
	static create(
		buffer: EShapeBuffer, shape: EShape,
		voffset: number, ioffset: number,
		antialiasWeight: number
	): EShapeRectangleUploaded | null {
		const tcount = EShapeTextUploadeds.getTextCount( shape, buffer.workCount );
		const tvcount = tcount.vertexCount;
		const ticount = tcount.indexCount;
		const vcount = 12 + tvcount;
		const icount = 8 + ticount;
		if( voffset + vcount < buffer.vertexCapacity && ioffset + icount < buffer.indexCapacity ) {
			return new EShapeRectangleUploaded(
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

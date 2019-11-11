/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeTextUploadeds } from "./e-shape-text-uploadeds";
import { EShapeTriangleUploaded } from "./e-shape-triangle-uploaded";

export class EShapeTriangleUploadeds {
	static create(
		buffer: EShapeBuffer, shape: EShape,
		voffset: number, ioffset: number,
		antialiasWeight: number
	): EShapeTriangleUploaded | null {
		const tcount = EShapeTextUploadeds.getTextCount( shape, buffer.workCount );
		const tvcount = tcount.vertexCount;
		const ticount = tcount.indexCount;
		const vcount = 7 + tvcount;
		const icount = 3 + ticount;
		if( voffset + vcount < buffer.vertexCapacity && ioffset + icount < buffer.indexCapacity ) {
			return new EShapeTriangleUploaded(
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

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeTextUploadeds } from "./e-shape-text-uploadeds";
import { EShapeTriangleRoundedUploaded } from "./e-shape-triangle-rounded-uploaded";

export class EShapeTriangleRoundedUploadeds {
	static create(
		buffer: EShapeBuffer, shape: EShape,
		voffset: number, ioffset: number,
		antialiasWeight: number
	): EShapeTriangleRoundedUploaded | null {
		const tcount = EShapeTextUploadeds.getTextCount( shape, buffer.workCount );
		const tvcount = tcount.vertexCount;
		const ticount = tcount.indexCount;
		const vcount = 22 + tvcount;
		const icount = 15 + ticount;
		if( voffset + vcount < buffer.vertexCapacity && ioffset + icount < buffer.indexCapacity ) {
			return new EShapeTriangleRoundedUploaded(
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

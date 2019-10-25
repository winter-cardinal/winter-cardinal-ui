/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeBarUploaded } from "./e-shape-bar-uploaded";
import { EShapeTextUploadeds } from "./e-shape-text-uploadeds";

export class EShapeBarUploadeds {
	static create(
		buffer: EShapeBuffer, shape: EShape, voffset: number, ioffset: number
	): EShapeBarUploaded | null {
		const tcount = EShapeTextUploadeds.getTextCount( shape, buffer.workCount );
		const tvcount = tcount.vertexCount;
		const ticount = tcount.indexCount;
		const vcount = 4 + tvcount;
		const icount = 2 + ticount;
		if( voffset + vcount < buffer.vertexCapacity && ioffset + icount < buffer.indexCapacity ) {
			return new EShapeBarUploaded(
				buffer, voffset, ioffset, tvcount, ticount, vcount, icount
			).init( shape );
		}
		return null;
	}
}

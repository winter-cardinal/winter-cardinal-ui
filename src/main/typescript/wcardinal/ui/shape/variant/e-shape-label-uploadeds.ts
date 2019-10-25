/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeLabelUploaded } from "./e-shape-label-uploaded";
import { EShapeTextUploadeds } from "./e-shape-text-uploadeds";

export class EShapeLabelUploadeds {
	static create(
		buffer: EShapeBuffer, shape: EShape, voffset: number, ioffset: number
	): EShapeLabelUploaded | null {
		const tcount = EShapeTextUploadeds.getTextCount( shape, buffer.workCount );
		const tvcount = tcount.vertexCount;
		const ticount = tcount.indexCount;
		const vcount = tvcount;
		const icount = ticount;
		if( voffset + vcount < buffer.vertexCapacity && ioffset + icount < buffer.indexCapacity ) {
			return new EShapeLabelUploaded(
				buffer, voffset, ioffset, tvcount, ticount, vcount, icount
			).init( shape );
		}
		return null;
	}
}

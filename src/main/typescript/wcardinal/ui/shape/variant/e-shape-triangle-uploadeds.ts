/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { TEXT_INDEX_COUNT, TEXT_VERTEX_COUNT, toTextBufferCount } from "./build-text";
import { TRIANGLE_INDEX_COUNT, TRIANGLE_VERTEX_COUNT } from "./build-triangle";
import { EShapeTriangleUploaded } from "./e-shape-triangle-uploaded";

export class EShapeTriangleUploadeds {
	static create(
		buffer: EShapeBuffer, shape: EShape,
		voffset: number, ioffset: number,
		antialiasWeight: number
	): EShapeTriangleUploaded | null {
		const tcount = toTextBufferCount( shape );
		const tvcount = tcount * TEXT_VERTEX_COUNT;
		const ticount = tcount * TEXT_INDEX_COUNT;
		const vcount = TRIANGLE_VERTEX_COUNT + tvcount;
		const icount = TRIANGLE_INDEX_COUNT + ticount;
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

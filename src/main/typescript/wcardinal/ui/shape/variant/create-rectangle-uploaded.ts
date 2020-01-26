/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { RECTANGLE_INDEX_COUNT, RECTANGLE_VERTEX_COUNT } from "./build-rectangle";
import { TEXT_INDEX_COUNT, TEXT_VERTEX_COUNT, toTextBufferCount } from "./build-text";
import { EShapeRectangleUploaded } from "./e-shape-rectangle-uploaded";

export const createRectangleUploaded = (
	buffer: EShapeBuffer, shape: EShape,
	voffset: number, ioffset: number,
	antialiasWeight: number
): EShapeRectangleUploaded | null => {
	const tcount = toTextBufferCount( shape );
	const tvcount = tcount * TEXT_VERTEX_COUNT;
	const ticount = tcount * TEXT_INDEX_COUNT;
	const vcount = RECTANGLE_VERTEX_COUNT + tvcount;
	const icount = RECTANGLE_INDEX_COUNT + ticount;
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
};

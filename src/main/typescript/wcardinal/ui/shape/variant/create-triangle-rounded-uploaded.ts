/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { TEXT_INDEX_COUNT, TEXT_VERTEX_COUNT, toTextBufferCount } from "./build-text";
import { TRIANGLE_ROUNDED_INDEX_COUNT, TRIANGLE_ROUNDED_VERTEX_COUNT } from "./build-triangle-rounded";
import { EShapeTriangleRoundedUploaded } from "./e-shape-triangle-rounded-uploaded";

export const createTriangleRoundedUploaded = (
	buffer: EShapeBuffer, shape: EShape,
	voffset: number, ioffset: number,
	antialiasWeight: number
): EShapeTriangleRoundedUploaded | null => {
	const tcount = toTextBufferCount( shape );
	const tvcount = tcount * TEXT_VERTEX_COUNT;
	const ticount = tcount * TEXT_INDEX_COUNT;
	const vcount = TRIANGLE_ROUNDED_VERTEX_COUNT + tvcount;
	const icount = TRIANGLE_ROUNDED_INDEX_COUNT + ticount;
	if( buffer.check( voffset, ioffset, vcount, icount ) ) {
		return new EShapeTriangleRoundedUploaded(
			buffer,
			voffset, ioffset,
			tvcount, ticount,
			vcount, icount,
			antialiasWeight
		).init( shape );
	}
	return null;
};

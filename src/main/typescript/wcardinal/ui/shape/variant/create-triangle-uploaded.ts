/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeUploaded, EShapeUploadedImpl } from "../e-shape-uploaded";
import { TEXT_INDEX_COUNT, TEXT_VERTEX_COUNT, toTextBufferCount } from "./build-text";
import { TRIANGLE_INDEX_COUNT, TRIANGLE_VERTEX_COUNT } from "./build-triangle";
import { BuilderText } from "./builder-text";
import { BuilderTriangle } from "./builder-triangle";

export const createTriangleUploaded = (
	buffer: EShapeBuffer,
	shape: EShape,
	voffset: number,
	ioffset: number,
	antialiasWeight: number
): EShapeUploaded | null => {
	const tcount = toTextBufferCount(shape);
	const tvcount = tcount * TEXT_VERTEX_COUNT;
	const ticount = tcount * TEXT_INDEX_COUNT;
	const vcount = TRIANGLE_VERTEX_COUNT + tvcount;
	const icount = TRIANGLE_INDEX_COUNT + ticount;
	if (buffer.check(voffset, ioffset, vcount, icount)) {
		return new EShapeUploadedImpl(buffer, voffset, ioffset, vcount, icount, [
			new BuilderTriangle(voffset, ioffset, vcount - tvcount, icount - ticount),
			new BuilderText(
				voffset + TRIANGLE_VERTEX_COUNT,
				ioffset + TRIANGLE_INDEX_COUNT,
				tvcount,
				ticount
			)
		]).init(shape);
	}
	return null;
};

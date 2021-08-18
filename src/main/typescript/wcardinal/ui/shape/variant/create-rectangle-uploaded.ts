/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeUploaded, EShapeUploadedImpl } from "../e-shape-uploaded";
import { RECTANGLE_INDEX_COUNT, RECTANGLE_VERTEX_COUNT } from "./build-rectangle";
import { TEXT_INDEX_COUNT, TEXT_VERTEX_COUNT, toTextBufferCount } from "./build-text";
import { BuilderRectangle } from "./builder-rectangle";
import { BuilderText } from "./builder-text";

export const createRectangleUploaded = (
	buffer: EShapeBuffer,
	shape: EShape,
	voffset: number,
	ioffset: number,
	antialiasWeight: number
): EShapeUploaded | null => {
	const tcount = toTextBufferCount(shape);
	const tvcount = tcount * TEXT_VERTEX_COUNT;
	const ticount = tcount * TEXT_INDEX_COUNT;
	const vcount = RECTANGLE_VERTEX_COUNT + tvcount;
	const icount = RECTANGLE_INDEX_COUNT + ticount;
	if (buffer.check(voffset, ioffset, vcount, icount)) {
		return new EShapeUploadedImpl(buffer, voffset, ioffset, vcount, icount, [
			new BuilderRectangle(voffset, ioffset, vcount - tvcount, icount - ticount),
			new BuilderText(
				voffset + RECTANGLE_VERTEX_COUNT,
				ioffset + RECTANGLE_INDEX_COUNT,
				tvcount,
				ticount
			)
		]).init(shape);
	}
	return null;
};

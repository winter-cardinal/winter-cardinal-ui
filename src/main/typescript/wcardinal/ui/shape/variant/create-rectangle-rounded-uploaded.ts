/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeUploaded, EShapeUploadedImpl } from "../e-shape-uploaded";
import {
	RECTANGLE_ROUNDED_INDEX_COUNT,
	RECTANGLE_ROUNDED_VERTEX_COUNT
} from "./build-rectangle-rounded";
import { TEXT_INDEX_COUNT_SHIFT, TEXT_VERTEX_COUNT_SHIFT, toTextBufferCount } from "./build-text";
import { BuilderRectangleRounded } from "./builder-rectangle-rounded";
import { BuilderText } from "./builder-text";

export const createRectangleRoundedUploaded = (
	buffer: EShapeBuffer,
	shape: EShape,
	voffset: number,
	ioffset: number,
	antialiasWeight: number
): EShapeUploaded | null => {
	const tcount = toTextBufferCount(shape);
	const tvcount = tcount << TEXT_VERTEX_COUNT_SHIFT;
	const ticount = tcount << TEXT_INDEX_COUNT_SHIFT;
	const vcount = RECTANGLE_ROUNDED_VERTEX_COUNT + tvcount;
	const icount = RECTANGLE_ROUNDED_INDEX_COUNT + ticount;
	if (buffer.check(voffset, ioffset, vcount, icount)) {
		return new EShapeUploadedImpl(buffer, voffset, ioffset, vcount, icount, [
			new BuilderRectangleRounded(voffset, ioffset, vcount - tvcount, icount - ticount),
			new BuilderText(
				voffset + RECTANGLE_ROUNDED_VERTEX_COUNT,
				ioffset + RECTANGLE_ROUNDED_INDEX_COUNT,
				tvcount,
				ticount
			)
		]).init(shape);
	}
	return null;
};

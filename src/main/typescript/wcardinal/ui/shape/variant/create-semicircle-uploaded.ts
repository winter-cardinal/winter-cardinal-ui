/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeUploaded, EShapeUploadedImpl } from "../e-shape-uploaded";
import { SEMICIRCLE_INDEX_COUNT, SEMICIRCLE_VERTEX_COUNT } from "./build-semicircle";
import { TEXT_INDEX_COUNT_SHIFT, TEXT_VERTEX_COUNT_SHIFT, toTextBufferCount } from "./build-text";
import { BuilderSemicircle } from "./builder-semicircle";
import { BuilderText } from "./builder-text";

export const createSemicircleUploaded = (
	buffer: EShapeBuffer,
	shape: EShape,
	voffset: number,
	ioffset: number,
	antialiasWeight: number
): EShapeUploaded | null => {
	const tcount = toTextBufferCount(shape);
	const tvcount = tcount << TEXT_VERTEX_COUNT_SHIFT;
	const ticount = tcount << TEXT_INDEX_COUNT_SHIFT;
	const vcount = SEMICIRCLE_VERTEX_COUNT + tvcount;
	const icount = SEMICIRCLE_INDEX_COUNT + ticount;
	if (buffer.check(voffset, ioffset, vcount, icount)) {
		return new EShapeUploadedImpl(buffer, voffset, ioffset, vcount, icount, [
			new BuilderSemicircle(buffer, voffset, ioffset),
			new BuilderText(
				buffer,
				voffset + SEMICIRCLE_VERTEX_COUNT,
				ioffset + SEMICIRCLE_INDEX_COUNT,
				tvcount,
				ticount
			)
		]).init(shape);
	}
	return null;
};

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeUploaded, EShapeUploadedImpl } from "../e-shape-uploaded";
import { TEXT_INDEX_COUNT_SHIFT, TEXT_VERTEX_COUNT_SHIFT, toTextBufferCount } from "./build-text";
import { BuilderText } from "./builder-text";

export const createGroupUploaded = (
	buffer: EShapeBuffer,
	shape: EShape,
	voffset: number,
	ioffset: number
): EShapeUploaded | null => {
	const tcount = toTextBufferCount(shape);
	const tvcount = tcount << TEXT_VERTEX_COUNT_SHIFT;
	const ticount = tcount << TEXT_INDEX_COUNT_SHIFT;
	const vcount = tvcount;
	const icount = ticount;
	if (buffer.check(voffset, ioffset, vcount, icount)) {
		return new EShapeUploadedImpl(buffer, voffset, ioffset, vcount, icount, [
			new BuilderText(buffer, voffset, ioffset, tvcount, ticount)
		]).init(shape);
	}
	return null;
};

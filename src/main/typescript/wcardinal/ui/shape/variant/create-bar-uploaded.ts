/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeUploaded, EShapeUploadedImpl } from "../e-shape-uploaded";
import { BAR_INDEX_COUNT, BAR_VERTEX_COUNT } from "./build-bar";
import { TEXT_INDEX_COUNT, TEXT_VERTEX_COUNT, toTextBufferCount } from "./build-text";
import { BuilderBar } from "./builder-bar";
import { BuilderText } from "./builder-text";

export const createBarUploaded = (
	buffer: EShapeBuffer,
	shape: EShape,
	voffset: number,
	ioffset: number,
	antialiasWeight: number
): EShapeUploaded | null => {
	const tcount = toTextBufferCount(shape);
	const tvcount = tcount * TEXT_VERTEX_COUNT;
	const ticount = tcount * TEXT_INDEX_COUNT;
	const vcount = BAR_VERTEX_COUNT + tvcount;
	const icount = BAR_INDEX_COUNT + ticount;
	if (buffer.check(voffset, ioffset, vcount, icount)) {
		return new EShapeUploadedImpl(buffer, voffset, ioffset, vcount, icount, [
			new BuilderBar(voffset, ioffset),
			new BuilderText(voffset + BAR_VERTEX_COUNT, ioffset + BAR_INDEX_COUNT, tvcount, ticount)
		]).init(shape);
	}
	return null;
};

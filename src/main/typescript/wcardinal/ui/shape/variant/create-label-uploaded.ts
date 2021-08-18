/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeUploaded, EShapeUploadedImpl } from "../e-shape-uploaded";
import { TEXT_INDEX_COUNT, TEXT_VERTEX_COUNT, toTextBufferCount } from "./build-text";
import { BuilderLabel } from "./builder-label";
import { BuilderText } from "./builder-text";

export const createLabelUploaded = (
	buffer: EShapeBuffer,
	shape: EShape,
	voffset: number,
	ioffset: number,
	antialiasWeight: number
): EShapeUploaded | null => {
	const tcount = toTextBufferCount(shape);
	const tvcount = tcount * TEXT_VERTEX_COUNT;
	const ticount = tcount * TEXT_INDEX_COUNT;
	const vcount = tvcount;
	const icount = ticount;
	if (buffer.check(voffset, ioffset, vcount, icount)) {
		return new EShapeUploadedImpl(buffer, voffset, ioffset, vcount, icount, [
			new BuilderLabel(voffset, ioffset, vcount - tvcount, icount - ticount),
			new BuilderText(voffset, ioffset, tvcount, ticount)
		]).init(shape);
	}
	return null;
};

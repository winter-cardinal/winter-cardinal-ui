/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeUploaded, EShapeUploadedImpl } from "../e-shape-uploaded";
import {
	SEMICIRCLE_LEGACY_INDEX_COUNT,
	SEMICIRCLE_LEGACY_VERTEX_COUNT
} from "./build-semicircle-legacy";
import { TEXT_INDEX_COUNT_SHIFT, TEXT_VERTEX_COUNT_SHIFT, toTextBufferCount } from "./build-text";
import { BuilderSemicircleLegacy } from "./builder-semicircle-legacy";
import { BuilderText } from "./builder-text";

export const createSemicircleLegacyUploaded = (
	buffer: EShapeBuffer,
	shape: EShape,
	voffset: number,
	ioffset: number,
	antialiasWeight: number
): EShapeUploaded | null => {
	const tcount = toTextBufferCount(shape);
	const tvcount = tcount << TEXT_VERTEX_COUNT_SHIFT;
	const ticount = tcount << TEXT_INDEX_COUNT_SHIFT;
	const vcount = SEMICIRCLE_LEGACY_VERTEX_COUNT + tvcount;
	const icount = SEMICIRCLE_LEGACY_INDEX_COUNT + ticount;
	if (buffer.check(voffset, ioffset, vcount, icount)) {
		return new EShapeUploadedImpl(buffer, voffset, ioffset, vcount, icount, [
			new BuilderSemicircleLegacy(buffer, voffset, ioffset),
			new BuilderText(
				buffer,
				voffset + SEMICIRCLE_LEGACY_VERTEX_COUNT,
				ioffset + SEMICIRCLE_LEGACY_INDEX_COUNT,
				tvcount,
				ticount
			)
		]).init(shape);
	}
	return null;
};

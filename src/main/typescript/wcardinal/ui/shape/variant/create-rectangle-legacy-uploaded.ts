/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeUploaded, EShapeUploadedImpl } from "../e-shape-uploaded";
import {
	RECTANGLE_LEGACY_INDEX_COUNT,
	RECTANGLE_LEGACY_VERTEX_COUNT
} from "./build-rectangle-legacy";
import { TEXT_INDEX_COUNT_SHIFT, TEXT_VERTEX_COUNT_SHIFT, toTextBufferCount } from "./build-text";
import { BuilderRectangleLegacy } from "./builder-rectangle-legacy";
import { BuilderText } from "./builder-text";

export const createRectangleLegacyUploaded = (
	buffer: EShapeBuffer,
	shape: EShape,
	voffset: number,
	ioffset: number,
	antialiasWeight: number
): EShapeUploaded | null => {
	const tcount = toTextBufferCount(shape);
	const tvcount = tcount << TEXT_VERTEX_COUNT_SHIFT;
	const ticount = tcount << TEXT_INDEX_COUNT_SHIFT;
	const vcount = RECTANGLE_LEGACY_VERTEX_COUNT + tvcount;
	const icount = RECTANGLE_LEGACY_INDEX_COUNT + ticount;
	if (buffer.check(voffset, ioffset, vcount, icount)) {
		return new EShapeUploadedImpl(buffer, voffset, ioffset, vcount, icount, [
			new BuilderRectangleLegacy(buffer, voffset, ioffset),
			new BuilderText(
				buffer,
				voffset + RECTANGLE_LEGACY_VERTEX_COUNT,
				ioffset + RECTANGLE_LEGACY_INDEX_COUNT,
				tvcount,
				ticount
			)
		]).init(shape);
	}
	return null;
};

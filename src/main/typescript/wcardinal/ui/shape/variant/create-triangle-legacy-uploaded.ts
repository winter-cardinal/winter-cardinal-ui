/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeUploaded, EShapeUploadedImpl } from "../e-shape-uploaded";
import { TEXT_INDEX_COUNT_SHIFT, TEXT_VERTEX_COUNT_SHIFT, toTextBufferCount } from "./build-text";
import { TRIANGLE_LEGACY_INDEX_COUNT, TRIANGLE_LEGACY_VERTEX_COUNT } from "./build-triangle-legacy";
import { BuilderText } from "./builder-text";
import { BuilderTriangleLegacy } from "./builder-triangle-legacy";

export const createTriangleLegacyUploaded = (
	buffer: EShapeBuffer,
	shape: EShape,
	voffset: number,
	ioffset: number,
	antialiasWeight: number
): EShapeUploaded | null => {
	const tcount = toTextBufferCount(shape);
	const tvcount = tcount << TEXT_VERTEX_COUNT_SHIFT;
	const ticount = tcount << TEXT_INDEX_COUNT_SHIFT;
	const vcount = TRIANGLE_LEGACY_VERTEX_COUNT + tvcount;
	const icount = TRIANGLE_LEGACY_INDEX_COUNT + ticount;
	if (buffer.check(voffset, ioffset, vcount, icount)) {
		return new EShapeUploadedImpl(buffer, voffset, ioffset, vcount, icount, [
			new BuilderTriangleLegacy(buffer, voffset, ioffset),
			new BuilderText(
				buffer,
				voffset + TRIANGLE_LEGACY_VERTEX_COUNT,
				ioffset + TRIANGLE_LEGACY_INDEX_COUNT,
				tvcount,
				ticount
			)
		]).init(shape);
	}
	return null;
};

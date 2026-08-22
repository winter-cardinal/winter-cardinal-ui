/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeUploaded, EShapeUploadedImpl } from "../e-shape-uploaded";
import { CIRCLE_LEGACY_INDEX_COUNT, CIRCLE_LEGACY_VERTEX_COUNT } from "./build-circle-legacy";
import { TEXT_INDEX_COUNT_SHIFT, TEXT_VERTEX_COUNT_SHIFT, toTextBufferCount } from "./build-text";
import { BuilderCircleLegacy } from "./builder-circle-legacy";
import { BuilderText } from "./builder-text";

export const createCircleLegacyUploaded = (
	buffer: EShapeBuffer,
	shape: EShape,
	voffset: number,
	ioffset: number,
	antialiasWeight: number
): EShapeUploaded | null => {
	const tcount = toTextBufferCount(shape);
	const tvcount = tcount << TEXT_VERTEX_COUNT_SHIFT;
	const ticount = tcount << TEXT_INDEX_COUNT_SHIFT;
	const vcount = CIRCLE_LEGACY_VERTEX_COUNT + tvcount;
	const icount = CIRCLE_LEGACY_INDEX_COUNT + ticount;
	if (buffer.check(voffset, ioffset, vcount, icount)) {
		return new EShapeUploadedImpl(buffer, voffset, ioffset, vcount, icount, [
			new BuilderCircleLegacy(buffer, voffset, ioffset),
			new BuilderText(
				buffer,
				voffset + CIRCLE_LEGACY_VERTEX_COUNT,
				ioffset + CIRCLE_LEGACY_INDEX_COUNT,
				tvcount,
				ticount
			)
		]).init(shape);
	}
	return null;
};

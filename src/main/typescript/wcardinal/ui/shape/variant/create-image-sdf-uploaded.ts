/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeUploaded, EShapeUploadedImpl } from "../e-shape-uploaded";
import { IMAGE_SDF_INDEX_COUNT, IMAGE_SDF_VERTEX_COUNT } from "./build-image-sdf";
import { TEXT_INDEX_COUNT_SHIFT, TEXT_VERTEX_COUNT_SHIFT, toTextBufferCount } from "./build-text";
import { BuilderImageSdf } from "./builder-image-sdf";
import { BuilderText } from "./builder-text";

export const createImageSdfUploaded = (
	buffer: EShapeBuffer,
	shape: EShape,
	voffset: number,
	ioffset: number,
	antialiasWeight: number
): EShapeUploaded | null => {
	const tcount = toTextBufferCount(shape);
	const tvcount = tcount << TEXT_VERTEX_COUNT_SHIFT;
	const ticount = tcount << TEXT_INDEX_COUNT_SHIFT;
	const vcount = IMAGE_SDF_VERTEX_COUNT + tvcount;
	const icount = IMAGE_SDF_INDEX_COUNT + ticount;
	if (buffer.check(voffset, ioffset, vcount, icount)) {
		return new EShapeUploadedImpl(buffer, voffset, ioffset, vcount, icount, [
			new BuilderImageSdf(buffer, voffset, ioffset),
			new BuilderText(
				buffer,
				voffset + IMAGE_SDF_VERTEX_COUNT,
				ioffset + IMAGE_SDF_INDEX_COUNT,
				tvcount,
				ticount
			)
		]).init(shape);
	}
	return null;
};

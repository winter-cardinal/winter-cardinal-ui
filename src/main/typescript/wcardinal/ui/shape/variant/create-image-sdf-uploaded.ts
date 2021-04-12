/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { IMAGE_SDF_INDEX_COUNT, IMAGE_SDF_VERTEX_COUNT } from "./build-image-sdf";
import { TEXT_INDEX_COUNT, TEXT_VERTEX_COUNT, toTextBufferCount } from "./build-text";
import { EShapeImageSdfUploaded } from "./e-shape-image-sdf-uploaded";

export const createImageSdfUploaded = (
	buffer: EShapeBuffer,
	shape: EShape,
	voffset: number,
	ioffset: number,
	antialiasWeight: number
): EShapeImageSdfUploaded | null => {
	const tcount = toTextBufferCount(shape);
	const tvcount = tcount * TEXT_VERTEX_COUNT;
	const ticount = tcount * TEXT_INDEX_COUNT;
	const vcount = IMAGE_SDF_VERTEX_COUNT + tvcount;
	const icount = IMAGE_SDF_INDEX_COUNT + ticount;
	if (buffer.check(voffset, ioffset, vcount, icount)) {
		return new EShapeImageSdfUploaded(
			buffer,
			voffset,
			ioffset,
			tvcount,
			ticount,
			vcount,
			icount,
			antialiasWeight
		).init(shape);
	}
	return null;
};

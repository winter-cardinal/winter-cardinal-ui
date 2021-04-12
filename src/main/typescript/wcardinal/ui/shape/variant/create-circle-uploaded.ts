/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { CIRCLE_INDEX_COUNT, CIRCLE_VERTEX_COUNT } from "./build-circle";
import { TEXT_INDEX_COUNT, TEXT_VERTEX_COUNT, toTextBufferCount } from "./build-text";
import { EShapeCircleUploaded } from "./e-shape-circle-uploaded";

export const createCircle = (
	buffer: EShapeBuffer,
	shape: EShape,
	voffset: number,
	ioffset: number,
	antialiasWeight: number
): EShapeCircleUploaded | null => {
	const tcount = toTextBufferCount(shape);
	const tvcount = tcount * TEXT_VERTEX_COUNT;
	const ticount = tcount * TEXT_INDEX_COUNT;
	const vcount = CIRCLE_VERTEX_COUNT + tvcount;
	const icount = CIRCLE_INDEX_COUNT + ticount;
	if (buffer.check(voffset, ioffset, vcount, icount)) {
		return new EShapeCircleUploaded(
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

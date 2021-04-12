/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import {
	RECTANGLE_ROUNDED_INDEX_COUNT,
	RECTANGLE_ROUNDED_VERTEX_COUNT
} from "./build-rectangle-rounded";
import { TEXT_INDEX_COUNT, TEXT_VERTEX_COUNT, toTextBufferCount } from "./build-text";
import { EShapeRectangleRoundedUploaded } from "./e-shape-rectangle-rounded-uploaded";

export const createRectangleRoundedUploaded = (
	buffer: EShapeBuffer,
	shape: EShape,
	voffset: number,
	ioffset: number,
	antialiasWeight: number
): EShapeRectangleRoundedUploaded | null => {
	const tcount = toTextBufferCount(shape);
	const tvcount = tcount * TEXT_VERTEX_COUNT;
	const ticount = tcount * TEXT_INDEX_COUNT;
	const vcount = RECTANGLE_ROUNDED_VERTEX_COUNT + tvcount;
	const icount = RECTANGLE_ROUNDED_INDEX_COUNT + ticount;
	if (buffer.check(voffset, ioffset, vcount, icount)) {
		return new EShapeRectangleRoundedUploaded(
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

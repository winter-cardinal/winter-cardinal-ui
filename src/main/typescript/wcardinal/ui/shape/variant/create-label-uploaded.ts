/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { TEXT_INDEX_COUNT, TEXT_VERTEX_COUNT, toTextBufferCount } from "./build-text";
import { EShapeLabelUploaded } from "./e-shape-label-uploaded";

export const createLabelUploaded = (
	buffer: EShapeBuffer,
	shape: EShape,
	voffset: number,
	ioffset: number,
	antialiasWeight: number
): EShapeLabelUploaded | null => {
	const tcount = toTextBufferCount(shape);
	const tvcount = tcount * TEXT_VERTEX_COUNT;
	const ticount = tcount * TEXT_INDEX_COUNT;
	const vcount = tvcount;
	const icount = ticount;
	if (buffer.check(voffset, ioffset, vcount, icount)) {
		return new EShapeLabelUploaded(
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

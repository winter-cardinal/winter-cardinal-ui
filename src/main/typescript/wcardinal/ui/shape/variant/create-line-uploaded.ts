/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { toLineIndexCount, toLinePointCount, toLineVertexCount } from "./build-line";
import { TEXT_INDEX_COUNT, TEXT_VERTEX_COUNT, toTextBufferCount } from "./build-text";
import { EShapeLineUploaded } from "./e-shape-line-uploaded";

export const createLineUploaded = (
	buffer: EShapeBuffer,
	shape: EShape,
	voffset: number,
	ioffset: number,
	antialiasWeight: number
): EShapeLineUploaded | null => {
	const points = shape.points;
	const pointCount = toLinePointCount(points);
	const tcount = toTextBufferCount(shape);
	const tvcount = tcount * TEXT_VERTEX_COUNT;
	const ticount = tcount * TEXT_INDEX_COUNT;
	const vcount = toLineVertexCount(pointCount, true) + tvcount;
	const icount = toLineIndexCount(pointCount, true) + ticount;
	if (buffer.check(voffset, ioffset, vcount, icount)) {
		return new EShapeLineUploaded(
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

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeUploaded, EShapeUploadedImpl } from "../e-shape-uploaded";
import { toPointCount } from "./build-line";
import { toLineOfAnyPointCount } from "./build-line-of-any";
import { TEXT_INDEX_COUNT_SHIFT, TEXT_VERTEX_COUNT_SHIFT, toTextBufferCount } from "./build-text";
import { Builder, BuilderBuffer } from "./builder";
import { BuilderText } from "./builder-text";

export type BuilderConstructor = new (
	buffer: BuilderBuffer,
	vertexOffset: number,
	indexOffset: number,
	vertexCount: number,
	indexCount: number,
	pointCount: number,
	vcountPerPoint: number,
	icountPerPoint: number
) => Builder;

export const createLineOfAnyUploaded = (
	buffer: EShapeBuffer,
	shape: EShape,
	voffset: number,
	vcountPerPoint: number,
	ioffset: number,
	icountPerPoint: number,
	antialiasWeight: number,
	constructor: BuilderConstructor
): EShapeUploaded | null => {
	const tcount = toTextBufferCount(shape);
	const tvcount = tcount << TEXT_VERTEX_COUNT_SHIFT;
	const ticount = tcount << TEXT_INDEX_COUNT_SHIFT;
	const points = shape.points;
	const pointCount = toLineOfAnyPointCount(toPointCount(points));
	const pvcount = pointCount * vcountPerPoint;
	const picount = pointCount * icountPerPoint;
	const vcount = pvcount + tvcount;
	const icount = picount + ticount;
	if (buffer.check(voffset, ioffset, vcount, icount)) {
		return new EShapeUploadedImpl(buffer, voffset, ioffset, vcount, icount, [
			new constructor(
				buffer,
				voffset,
				ioffset,
				pvcount,
				picount,
				pointCount,
				vcountPerPoint,
				icountPerPoint
			),
			new BuilderText(buffer, voffset + pvcount, ioffset + picount, tvcount, ticount)
		]).init(shape);
	}
	return null;
};

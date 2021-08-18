/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeUploaded, EShapeUploadedImpl } from "../e-shape-uploaded";
import { toPointsCount } from "./build-line";
import { toLineOfAnyPointCount } from "./build-line-of-any";
import { TEXT_INDEX_COUNT, TEXT_VERTEX_COUNT, toTextBufferCount } from "./build-text";
import { Builder } from "./builder";
import { BuilderText } from "./builder-text";

type BuilderConstructor = new (
	vertexOffset: number,
	indexOffset: number,
	vertexCount: number,
	indexCount: number,
	pointCount: number
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
	const tvcount = tcount * TEXT_VERTEX_COUNT;
	const ticount = tcount * TEXT_INDEX_COUNT;
	const points = shape.points;
	const pointCount = toLineOfAnyPointCount(toPointsCount(points));
	const pvcount = pointCount * vcountPerPoint;
	const picount = pointCount * icountPerPoint;
	const vcount = pvcount + tvcount;
	const icount = picount + ticount;
	if (buffer.check(voffset, ioffset, vcount, icount)) {
		return new EShapeUploadedImpl(buffer, voffset, ioffset, vcount, icount, [
			new constructor(voffset, ioffset, pvcount, picount, pointCount),
			new BuilderText(voffset + pvcount, ioffset + picount, tvcount, ticount)
		]).init(shape);
	}
	return null;
};

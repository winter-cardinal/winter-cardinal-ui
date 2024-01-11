/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapePointsMarkerType } from "../e-shape-points-marker-type";
import { EShapeUploadedImpl } from "../e-shape-uploaded";
import { toLineIndexCount, toLinePointCount, toLineVertexCount } from "./build-line";
import { TEXT_INDEX_COUNT_SHIFT, TEXT_VERTEX_COUNT_SHIFT, toTextBufferCount } from "./build-text";
import { Builder } from "./builder";
import { BuilderLine } from "./builder-line";
import { BuilderMarkerTriangleHead } from "./builder-marker-triangle-head";
import { BuilderMarkerTriangleTail } from "./builder-marker-triangle-tail";
import { BuilderMarkerCircleHead } from "./builder-marker-circle-head";
import { BuilderMarkerCircleTail } from "./builder-marker-circle-tail";
import { BuilderNull } from "./builder-null";
import { BuilderText } from "./builder-text";
import { EShapeLinePoints } from "./e-shape-line-points";
import { TRIANGLE_INDEX_COUNT, TRIANGLE_VERTEX_COUNT } from "./build-triangle";
import { CIRCLE_INDEX_COUNT, CIRCLE_VERTEX_COUNT } from "./build-circle";
import { BuilderMarkerRectangleTail } from "./builder-marker-rectangle-tail";
import { BuilderMarkerRectangleHead } from "./builder-marker-rectangle-head";
import { RECTANGLE_INDEX_COUNT, RECTANGLE_VERTEX_COUNT } from "./build-rectangle";

const toMarkerVertexCount = (type: EShapePointsMarkerType): number => {
	switch (type) {
		case EShapePointsMarkerType.NONE:
			return 0;
		case EShapePointsMarkerType.CIRCLE:
			return CIRCLE_VERTEX_COUNT;
		case EShapePointsMarkerType.TRIANGLE:
			return TRIANGLE_VERTEX_COUNT;
		case EShapePointsMarkerType.RECTANGLE:
			return RECTANGLE_VERTEX_COUNT;
	}
	return 0;
};

const toMarkerIndexCount = (type: EShapePointsMarkerType): number => {
	switch (type) {
		case EShapePointsMarkerType.NONE:
			return 0;
		case EShapePointsMarkerType.CIRCLE:
			return CIRCLE_INDEX_COUNT;
		case EShapePointsMarkerType.TRIANGLE:
			return TRIANGLE_INDEX_COUNT;
		case EShapePointsMarkerType.RECTANGLE:
			return RECTANGLE_INDEX_COUNT;
	}
	return 0;
};

const toBuilderMarkerHead = (
	type: EShapePointsMarkerType,
	vertexOffset: number,
	indexOffset: number
): Builder => {
	switch (type) {
		case EShapePointsMarkerType.NONE:
			return new BuilderNull(vertexOffset, indexOffset);
		case EShapePointsMarkerType.CIRCLE:
			return new BuilderMarkerCircleHead(vertexOffset, indexOffset);
		case EShapePointsMarkerType.TRIANGLE:
			return new BuilderMarkerTriangleHead(vertexOffset, indexOffset);
		case EShapePointsMarkerType.RECTANGLE:
			return new BuilderMarkerRectangleHead(vertexOffset, indexOffset);
	}
	return new BuilderNull(vertexOffset, indexOffset);
};

const toBuilderMarkerTail = (
	type: EShapePointsMarkerType,
	vertexOffset: number,
	indexOffset: number
): Builder => {
	switch (type) {
		case EShapePointsMarkerType.NONE:
			return new BuilderNull(vertexOffset, indexOffset);
		case EShapePointsMarkerType.CIRCLE:
			return new BuilderMarkerCircleTail(vertexOffset, indexOffset);
		case EShapePointsMarkerType.TRIANGLE:
			return new BuilderMarkerTriangleTail(vertexOffset, indexOffset);
		case EShapePointsMarkerType.RECTANGLE:
			return new BuilderMarkerRectangleTail(vertexOffset, indexOffset);
	}
	return new BuilderNull(vertexOffset, indexOffset);
};

export const createLineUploaded = (
	buffer: EShapeBuffer,
	shape: EShape,
	voffset: number,
	ioffset: number,
	antialiasWeight: number
): EShapeUploadedImpl | null => {
	// Line
	const points = shape.points;
	const pointCount = toLinePointCount(points);
	const lvcount = toLineVertexCount(pointCount, true);
	const licount = toLineIndexCount(pointCount, true);

	// Markers
	let mttype: EShapePointsMarkerType = EShapePointsMarkerType.NONE;
	let mhtype: EShapePointsMarkerType = EShapePointsMarkerType.NONE;
	if (points && points instanceof EShapeLinePoints) {
		const marker = points.getMarker();
		if (marker) {
			mttype = marker.tail.type;
			mhtype = marker.head.type;
		}
	}
	const mtvcount = toMarkerVertexCount(mttype);
	const mticount = toMarkerIndexCount(mttype);
	const mtvoffset = voffset + lvcount;
	const mtioffset = ioffset + licount;
	const mhvcount = toMarkerVertexCount(mhtype);
	const mhicount = toMarkerIndexCount(mhtype);
	const mhvoffset = mtvoffset + mtvcount;
	const mhioffset = mtioffset + mticount;

	// Text
	const tcount = toTextBufferCount(shape);
	const tvcount = tcount << TEXT_VERTEX_COUNT_SHIFT;
	const ticount = tcount << TEXT_INDEX_COUNT_SHIFT;
	const tvoffset = mhvoffset + mhvcount;
	const tioffset = mhioffset + mhicount;

	// Uploaded
	const vcount = lvcount + mhvcount + mtvcount + tvcount;
	const icount = licount + mhicount + mticount + ticount;
	if (buffer.check(voffset, ioffset, vcount, icount)) {
		return new EShapeUploadedImpl(buffer, voffset, ioffset, vcount, icount, [
			new BuilderLine(voffset, ioffset, lvcount, licount),
			toBuilderMarkerTail(mttype, mtvoffset, mtioffset),
			toBuilderMarkerHead(mhtype, mhvoffset, mhioffset),
			new BuilderText(tvoffset, tioffset, tvcount, ticount)
		]).init(shape);
	}
	return null;
};

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { TEXT_INDEX_COUNT, TEXT_VERTEX_COUNT, toTextBufferCount } from "./build-text";
import { EShapePolygonUploaded } from "./e-shape-polygon-uploaded";
import { Polygon } from "./polygon";

export const createPolygonUploaded = (
	buffer: EShapeBuffer,
	shape: EShape,
	voffset: number,
	ioffset: number,
	antialiasWeight: number,
	polygon: Polygon
): EShapePolygonUploaded | null => {
	const tcount = toTextBufferCount(shape);
	const tvcount = tcount * TEXT_VERTEX_COUNT;
	const ticount = tcount * TEXT_INDEX_COUNT;
	const vcount = polygon.vertexCount + tvcount;
	const icount = polygon.indexCount + ticount;
	if (buffer.check(voffset, ioffset, vcount, icount)) {
		return new EShapePolygonUploaded(
			buffer,
			voffset,
			ioffset,
			tvcount,
			ticount,
			vcount,
			icount,
			antialiasWeight,
			polygon
		).init(shape);
	}
	return null;
};

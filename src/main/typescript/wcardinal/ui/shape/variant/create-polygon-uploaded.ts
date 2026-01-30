/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeUploaded, EShapeUploadedImpl } from "../e-shape-uploaded";
import { TEXT_INDEX_COUNT_SHIFT, TEXT_VERTEX_COUNT_SHIFT, toTextBufferCount } from "./build-text";
import { BuilderPolygon } from "./builder-polygon";
import { BuilderText } from "./builder-text";
import { EShapePolygon } from "./e-shape-polygon";

export const createPolygonUploaded = (
	buffer: EShapeBuffer,
	shape: EShape,
	voffset: number,
	ioffset: number,
	antialiasWeight: number
): EShapeUploaded | null => {
	const tcount = toTextBufferCount(shape);
	const tvcount = tcount << TEXT_VERTEX_COUNT_SHIFT;
	const ticount = tcount << TEXT_INDEX_COUNT_SHIFT;
	let pvcount = 0;
	let picount = 0;
	if (shape instanceof EShapePolygon) {
		const triangulated = shape.triangulated;
		pvcount = triangulated.nvertices;
		picount = triangulated.nindices;
	}
	const vcount = pvcount + tvcount;
	const icount = picount + ticount;
	if (buffer.check(voffset, ioffset, vcount, icount)) {
		return new EShapeUploadedImpl(buffer, voffset, ioffset, vcount, icount, [
			new BuilderPolygon(buffer, voffset, ioffset, pvcount, picount),
			new BuilderText(buffer, voffset + vcount, ioffset + icount, tvcount, ticount)
		]).init(shape);
	}
	return null;
};

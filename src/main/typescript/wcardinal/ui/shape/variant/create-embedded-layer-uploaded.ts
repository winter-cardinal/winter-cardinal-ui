/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { RECTANGLE_INDEX_COUNT, RECTANGLE_VERTEX_COUNT } from "./build-rectangle";
import { EShapeEmbeddedLayerUploaded } from "./e-shape-embedded-layer-uploaded";

export const createEmbeddedLayerUploaded = (
	buffer: EShapeBuffer,
	shape: EShape,
	voffset: number,
	ioffset: number,
	antialiasWeight: number
): EShapeEmbeddedLayerUploaded | null => {
	const vcount = RECTANGLE_VERTEX_COUNT;
	const icount = RECTANGLE_INDEX_COUNT;
	if (buffer.check(voffset, ioffset, vcount, icount)) {
		return new EShapeEmbeddedLayerUploaded(
			buffer,
			voffset,
			ioffset,
			vcount,
			icount,
			antialiasWeight
		).init(shape);
	}
	return null;
};

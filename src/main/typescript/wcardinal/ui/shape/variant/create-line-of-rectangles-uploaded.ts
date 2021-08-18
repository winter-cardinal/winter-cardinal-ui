/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeUploaded } from "../e-shape-uploaded";
import { RECTANGLE_INDEX_COUNT, RECTANGLE_VERTEX_COUNT } from "./build-rectangle";
import { BuilderLineOfRectangles } from "./builder-line-of-rectangles";
import { createLineOfAnyUploaded } from "./create-line-of-any-uploaded";

export const createLineOfRectanglesUploaded = (
	buffer: EShapeBuffer,
	shape: EShape,
	voffset: number,
	ioffset: number,
	antialiasWeight: number
): EShapeUploaded | null => {
	return createLineOfAnyUploaded(
		buffer,
		shape,
		voffset,
		RECTANGLE_VERTEX_COUNT,
		ioffset,
		RECTANGLE_INDEX_COUNT,
		antialiasWeight,
		BuilderLineOfRectangles
	);
};

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeUploaded } from "../e-shape-uploaded";
import { TRIANGLE_INDEX_COUNT, TRIANGLE_VERTEX_COUNT } from "./build-triangle";
import { BuilderLineOfTriangles } from "./builder-line-of-triangles";
import { createLineOfAnyUploaded } from "./create-line-of-any-uploaded";

export const createLineOfTrianglesUploaded = (
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
		TRIANGLE_VERTEX_COUNT,
		ioffset,
		TRIANGLE_INDEX_COUNT,
		antialiasWeight,
		BuilderLineOfTriangles
	);
};

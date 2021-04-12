/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import {
	TRIANGLE_ROUNDED_INDEX_COUNT,
	TRIANGLE_ROUNDED_VERTEX_COUNT
} from "./build-triangle-rounded";
import { createLineOfAnyUploaded } from "./create-line-of-any-uploaded";
import { EShapeLineOfTriangleRoundedsUploaded } from "./e-shape-line-of-triangle-roundeds-uploaded";

export const createLineOfTriangleRoundedsUploaded = (
	buffer: EShapeBuffer,
	shape: EShape,
	voffset: number,
	ioffset: number,
	antialiasWeight: number
): EShapeLineOfTriangleRoundedsUploaded | null => {
	return createLineOfAnyUploaded(
		buffer,
		shape,
		voffset,
		TRIANGLE_ROUNDED_VERTEX_COUNT,
		ioffset,
		TRIANGLE_ROUNDED_INDEX_COUNT,
		antialiasWeight,
		EShapeLineOfTriangleRoundedsUploaded
	);
};

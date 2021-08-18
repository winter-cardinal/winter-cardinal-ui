/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeUploaded } from "../e-shape-uploaded";
import {
	TRIANGLE_ROUNDED_INDEX_COUNT,
	TRIANGLE_ROUNDED_VERTEX_COUNT
} from "./build-triangle-rounded";
import { BuilderLineOfTriangleRoundeds } from "./builder-line-of-triangle-roundeds";
import { createLineOfAnyUploaded } from "./create-line-of-any-uploaded";

export const createLineOfTriangleRoundedsUploaded = (
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
		TRIANGLE_ROUNDED_VERTEX_COUNT,
		ioffset,
		TRIANGLE_ROUNDED_INDEX_COUNT,
		antialiasWeight,
		BuilderLineOfTriangleRoundeds
	);
};

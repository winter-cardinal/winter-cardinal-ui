/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeUploaded } from "../e-shape-uploaded";
import { CIRCLE_INDEX_COUNT, CIRCLE_VERTEX_COUNT } from "./build-circle";
import { BuilderLineOfCircles } from "./builder-line-of-circles";
import { createLineOfAnyUploaded } from "./create-line-of-any-uploaded";

export const createLineOfCirclesUploaded = (
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
		CIRCLE_VERTEX_COUNT,
		ioffset,
		CIRCLE_INDEX_COUNT,
		antialiasWeight,
		BuilderLineOfCircles
	);
};

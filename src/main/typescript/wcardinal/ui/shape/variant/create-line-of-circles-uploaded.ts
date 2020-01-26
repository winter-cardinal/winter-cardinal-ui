/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { CIRCLE_INDEX_COUNT, CIRCLE_VERTEX_COUNT } from "./build-circle";
import { createLineOfAnyUploaded } from "./create-line-of-any-uploaded";
import { EShapeLineOfCirclesUploaded } from "./e-shape-line-of-circles-uploaded";

export const createLineOfCirclesUploaded = (
	buffer: EShapeBuffer, shape: EShape,
	voffset: number, ioffset: number,
	antialiasWeight: number
): EShapeLineOfCirclesUploaded | null => {
	return createLineOfAnyUploaded(
		buffer, shape,
		voffset, CIRCLE_VERTEX_COUNT,
		ioffset, CIRCLE_INDEX_COUNT,
		antialiasWeight,
		EShapeLineOfCirclesUploaded
	);
};

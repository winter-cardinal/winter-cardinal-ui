/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { createLineOfAnyUploaded } from "./create-line-of-any-uploaded";
import { EShapeLineOfAnyUploaded } from "./e-shape-line-of-any-uploaded";
import { PolygonCircle } from "./polygon-circle";

export const createLineOfCirclesUploaded = (
	buffer: EShapeBuffer,
	shape: EShape,
	voffset: number,
	ioffset: number,
	antialiasWeight: number
): EShapeLineOfAnyUploaded | null => {
	return createLineOfAnyUploaded(
		buffer,
		shape,
		voffset,
		ioffset,
		antialiasWeight,
		PolygonCircle.getInstance()
	);
};

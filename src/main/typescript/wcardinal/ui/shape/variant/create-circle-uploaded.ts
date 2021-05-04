/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { createPolygonUploaded } from "./create-polygon-uploaded";
import { EShapePolygonUploaded } from "./e-shape-polygon-uploaded";
import { PolygonCircle } from "./polygon-circle";

export const createCircle = (
	buffer: EShapeBuffer,
	shape: EShape,
	voffset: number,
	ioffset: number,
	antialiasWeight: number
): EShapePolygonUploaded | null => {
	return createPolygonUploaded(
		buffer,
		shape,
		voffset,
		ioffset,
		antialiasWeight,
		PolygonCircle.getInstance()
	);
};

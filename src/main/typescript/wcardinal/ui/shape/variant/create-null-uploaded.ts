/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeNullUploaded } from "./e-shape-null-uploaded";

export const createNullUploaded = (
	buffer: EShapeBuffer,
	shape: EShape,
	voffset: number,
	ioffset: number
): EShapeNullUploaded | null => {
	return new EShapeNullUploaded(buffer, voffset, ioffset).init(shape);
};

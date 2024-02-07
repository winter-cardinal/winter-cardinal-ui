/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeUploadedImpl } from "../e-shape-uploaded";
import { BuilderNull } from "./builder-null";

export const createNullUploaded = (
	buffer: EShapeBuffer,
	shape: EShape,
	voffset: number,
	ioffset: number
): EShapeUploadedImpl | null => {
	return new EShapeUploadedImpl(buffer, voffset, ioffset, 0, 0, [
		new BuilderNull(buffer, voffset, ioffset)
	]).init(shape);
};

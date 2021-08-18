/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeUploaded, EShapeUploadedImpl } from "../e-shape-uploaded";
import { BuilderNull } from "./builder-null";

export const createGroupUploaded = (
	buffer: EShapeBuffer,
	shape: EShape,
	voffset: number,
	ioffset: number
): EShapeUploaded | null => {
	return new EShapeUploadedImpl(buffer, voffset, ioffset, 0, 0, [
		new BuilderNull(voffset, ioffset)
	]).init(shape);
};

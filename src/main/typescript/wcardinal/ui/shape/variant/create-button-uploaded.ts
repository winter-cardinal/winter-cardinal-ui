/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeUploaded } from "../e-shape-uploaded";
import { createRectangleRoundedUploaded } from "./create-rectangle-rounded-uploaded";

export const createButtonUploaded = (
	buffer: EShapeBuffer,
	shape: EShape,
	voffset: number,
	ioffset: number,
	antialiasWeight: number
): EShapeUploaded | null => {
	return createRectangleRoundedUploaded(buffer, shape, voffset, ioffset, antialiasWeight);
};

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { createRectangleRoundedUploaded } from "./create-rectangle-rounded-uploaded";
import { EShapeRectangleRoundedUploaded } from "./e-shape-rectangle-rounded-uploaded";

export const createButtonUploaded = (
	buffer: EShapeBuffer,
	shape: EShape,
	voffset: number,
	ioffset: number,
	antialiasWeight: number
): EShapeRectangleRoundedUploaded | null => {
	return createRectangleRoundedUploaded(buffer, shape, voffset, ioffset, antialiasWeight);
};

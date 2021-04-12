/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeGroupUploaded } from "./e-shape-group-uploaded";

export const createGroupUploaded = (
	buffer: EShapeBuffer,
	shape: EShape,
	voffset: number,
	ioffset: number
): EShapeGroupUploaded | null => {
	return new EShapeGroupUploaded(buffer, voffset, ioffset).init(shape);
};

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { RECTANGLE_INDEX_COUNT, RECTANGLE_VERTEX_COUNT } from "./build-rectangle";
import { EShapeLineOfAnyUploadeds } from "./e-shape-line-of-any-uploadeds";
import { EShapeLineOfRectanglesUploaded } from "./e-shape-line-of-rectangles-uploaded";

export class EShapeLineOfRectanglesUploadeds {
	static create(
		buffer: EShapeBuffer, shape: EShape,
		voffset: number, ioffset: number,
		antialiasWeight: number
	): EShapeLineOfRectanglesUploaded | null {
		return EShapeLineOfAnyUploadeds.create(
			buffer, shape,
			voffset, RECTANGLE_VERTEX_COUNT,
			ioffset, RECTANGLE_INDEX_COUNT,
			antialiasWeight,
			EShapeLineOfRectanglesUploaded
		);
	}
}

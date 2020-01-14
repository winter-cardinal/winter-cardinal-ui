/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeLineOfAnyUploadeds } from "./e-shape-line-of-any-uploadeds";
import { EShapeLineOfNullsUploaded } from "./e-shape-line-of-nulls-uploaded";
import { EShapeLineOfRectanglesUploaded } from "./e-shape-line-of-rectangles-uploaded";
import { EShapeRectangleUploaded } from "./e-shape-rectangle-uploaded";

export class EShapeLineOfRectanglesUploadeds {
	static create(
		buffer: EShapeBuffer, shape: EShape,
		voffset: number, ioffset: number,
		antialiasWeight: number
	): EShapeLineOfRectanglesUploaded | EShapeLineOfNullsUploaded | null {
		return EShapeLineOfAnyUploadeds.create(
			buffer, shape,
			voffset, EShapeRectangleUploaded.VERTEX_COUNT,
			ioffset, EShapeRectangleUploaded.INDEX_COUNT,
			antialiasWeight,
			EShapeLineOfRectanglesUploaded
		);
	}
}

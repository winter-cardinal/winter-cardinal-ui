/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { TRIANGLE_INDEX_COUNT, TRIANGLE_VERTEX_COUNT } from "./build-triangle";
import { EShapeLineOfAnyUploadeds } from "./e-shape-line-of-any-uploadeds";
import { EShapeLineOfNullsUploaded } from "./e-shape-line-of-nulls-uploaded";
import { EShapeLineOfTrianglesUploaded } from "./e-shape-line-of-triangles-uploaded";

export class EShapeLineOfTrianglesUploadeds {
	static create(
		buffer: EShapeBuffer, shape: EShape,
		voffset: number, ioffset: number,
		antialiasWeight: number
	): EShapeLineOfTrianglesUploaded | EShapeLineOfNullsUploaded | null {
		return EShapeLineOfAnyUploadeds.create(
			buffer, shape,
			voffset, TRIANGLE_VERTEX_COUNT,
			ioffset, TRIANGLE_INDEX_COUNT,
			antialiasWeight,
			EShapeLineOfTrianglesUploaded
		);
	}
}
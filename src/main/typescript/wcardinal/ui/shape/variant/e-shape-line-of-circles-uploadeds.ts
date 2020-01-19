/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { CIRCLE_INDEX_COUNT, CIRCLE_VERTEX_COUNT } from "./build-circle";
import { EShapeLineOfAnyUploadeds } from "./e-shape-line-of-any-uploadeds";
import { EShapeLineOfCirclesUploaded } from "./e-shape-line-of-circles-uploaded";
import { EShapeLineOfNullsUploaded } from "./e-shape-line-of-nulls-uploaded";

export class EShapeLineOfCirclesUploadeds {
	static create(
		buffer: EShapeBuffer, shape: EShape,
		voffset: number, ioffset: number,
		antialiasWeight: number
	): EShapeLineOfCirclesUploaded | EShapeLineOfNullsUploaded | null {
		return EShapeLineOfAnyUploadeds.create(
			buffer, shape,
			voffset, CIRCLE_VERTEX_COUNT,
			ioffset, CIRCLE_INDEX_COUNT,
			antialiasWeight,
			EShapeLineOfCirclesUploaded
		);
	}
}

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { RECTANGLE_ROUNDED_INDEX_COUNT, RECTANGLE_ROUNDED_VERTEX_COUNT } from "./build-rectangle-rounded";
import { EShapeLineOfAnyUploadeds } from "./e-shape-line-of-any-uploadeds";
import { EShapeLineOfNullsUploaded } from "./e-shape-line-of-nulls-uploaded";
import { EShapeLineOfRectangleRoundedsUploaded } from "./e-shape-line-of-rectangle-roundeds-uploaded";

export class EShapeLineOfRectangleRoundedsUploadeds {
	static create(
		buffer: EShapeBuffer, shape: EShape,
		voffset: number, ioffset: number,
		antialiasWeight: number
	): EShapeLineOfRectangleRoundedsUploaded | EShapeLineOfNullsUploaded | null {
		return EShapeLineOfAnyUploadeds.create(
			buffer, shape,
			voffset, RECTANGLE_ROUNDED_VERTEX_COUNT,
			ioffset, RECTANGLE_ROUNDED_INDEX_COUNT,
			antialiasWeight,
			EShapeLineOfRectangleRoundedsUploaded
		);
	}
}

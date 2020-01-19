/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeLineOfAnyUploadeds } from "./e-shape-line-of-any-uploadeds";
import { EShapeLineOfNullsUploaded } from "./e-shape-line-of-nulls-uploaded";
import { EShapeLineOfTriangleRoundedsUploaded } from "./e-shape-line-of-triangle-roundeds-uploaded";

export class EShapeLineOfTriangleRoundedsUploadeds {
	static create(
		buffer: EShapeBuffer, shape: EShape,
		voffset: number, ioffset: number,
		antialiasWeight: number
	): EShapeLineOfTriangleRoundedsUploaded | EShapeLineOfNullsUploaded | null {
		return EShapeLineOfAnyUploadeds.create(
			buffer, shape,
			voffset, EShapeLineOfTriangleRoundedsUploaded.VERTEX_COUNT,
			ioffset, EShapeLineOfTriangleRoundedsUploaded.INDEX_COUNT,
			antialiasWeight,
			EShapeLineOfTriangleRoundedsUploaded
		);
	}
}

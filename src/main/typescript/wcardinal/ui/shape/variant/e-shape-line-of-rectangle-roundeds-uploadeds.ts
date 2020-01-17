/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
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
			voffset, EShapeLineOfRectangleRoundedsUploaded.VERTEX_COUNT,
			ioffset, EShapeLineOfRectangleRoundedsUploaded.INDEX_COUNT,
			antialiasWeight,
			EShapeLineOfRectangleRoundedsUploaded
		);
	}
}

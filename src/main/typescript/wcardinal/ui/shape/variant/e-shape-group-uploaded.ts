/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Texture } from "pixi.js";
import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeUploadedBase } from "../e-shape-uploaded";

export class EShapeGroupUploaded extends EShapeUploadedBase {
	constructor( buffer: EShapeBuffer, voffset: number, ioffset: number ) {
		super( buffer, voffset, ioffset, 0, 0, 1 );
	}

	init( shape: EShape ): this {
		super.init( shape );
		this.texture = shape.texture || Texture.WHITE;
		return this;
	}

	update( shape: EShape ): void {
		// DO NOTHING
	}
}

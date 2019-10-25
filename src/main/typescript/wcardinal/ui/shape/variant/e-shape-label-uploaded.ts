/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeTextUploaded } from "./e-shape-text-uploaded";

export class EShapeLabelUploaded extends EShapeTextUploaded {
	init( shape: EShape ): this {
		super.init( shape );
		this.initText();
		this.update( shape );
		return this;
	}

	update( shape: EShape ): void {
		const buffer = this.buffer;
		this.updateLabelVertex( buffer, shape );
		this.updateLabelUv( buffer, shape );
		this.updateText( buffer, shape );
	}

	updateLabelVertex( buffer: EShapeBuffer, shape: EShape ): void {
		const size = shape.size;
		const sizeX = size.x;
		const sizeY = size.y;
		const isSizeChanged = ( sizeX !== this.sizeX || sizeY !== this.sizeY );
		const transformLocalId = this.toTransformLocalId( shape );
		const isTransformChanged = ( this.transformLocalId !== transformLocalId );
		if( isSizeChanged || isTransformChanged ) {
			this.sizeX = sizeX;
			this.sizeY = sizeY;
			this.transformLocalId = transformLocalId;

			// Invalidate the text layout to update the text layout.
			this.textSpacingHorizontal = NaN;
		}
	}

	updateLabelUv( buffer: EShapeBuffer, shape: EShape ): void {
		this.texture = this.toTexture( shape );
	}
}

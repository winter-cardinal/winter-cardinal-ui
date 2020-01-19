/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import {
	buildRectangleClipping, buildRectangleIndex, buildRectangleUv, buildRectangleVertexAndStep
} from "./build-rectangle";
import { EShapeTextUploaded } from "./e-shape-text-uploaded";

export class EShapeRectangleUploaded extends EShapeTextUploaded {
	init( shape: EShape ): this {
		super.init( shape );

		// Clippings
		const buffer = this.buffer;
		buffer.clippingBuffer.update();
		buffer.indexBuffer.update();
		const voffset = this.vertexOffset;
		buildRectangleClipping(
			buffer.clippings,
			voffset
		);
		buildRectangleIndex(
			buffer.indices,
			voffset,
			this.indexOffset
		);

		// Text
		this.initText();

		this.update( shape );
		return this;
	}

	update( shape: EShape ): void {
		const buffer = this.buffer;
		this.updateVertexAndStep( buffer, shape );
		this.updateColor( buffer, shape );
		this.updateUv( buffer, shape );
		this.updateText( buffer, shape );
	}

	protected updateVertexAndStep( buffer: EShapeBuffer, shape: EShape ): void {
		const size = shape.size;
		const sizeX = size.x;
		const sizeY = size.y;
		const isSizeChanged = ( sizeX !== this.sizeX || sizeY !== this.sizeY );

		const transformLocalId = this.toTransformLocalId( shape );
		const isTransformChanged = ( this.transformLocalId !== transformLocalId );

		const stroke = shape.stroke;
		const strokeWidth = (stroke.enable ? stroke.width : 0);
		const strokeAlign = stroke.align;
		const strokeSide = stroke.side;
		const isStrokeChanged = ( this.strokeAlign !== strokeAlign ||
			this.strokeWidth !== strokeWidth || this.strokeSide !== strokeSide );

		if( isSizeChanged || isTransformChanged || isStrokeChanged ) {
			this.sizeX = sizeX;
			this.sizeY = sizeY;
			this.transformLocalId = transformLocalId;
			this.strokeWidth = strokeWidth;
			this.strokeAlign = strokeAlign;
			this.strokeSide = strokeSide;

			// Invalidate the text layout to update the text layout.
			this.textSpacingHorizontal = NaN;

			buffer.vertexBuffer.update();
			buffer.stepBuffer.update();
			buffer.antialiasBuffer.update();
			buildRectangleVertexAndStep(
				buffer.vertices, this.vertexOffset,
				buffer.steps, buffer.antialiases,
				0, 0,
				sizeX, sizeY,
				strokeAlign, strokeWidth, strokeSide, true,
				shape.transform.internalTransform,
				this.antialiasWeight,
				buffer.work, buffer.workStep
			);
		}
	}

	protected updateUv( buffer: EShapeBuffer, shape: EShape ) {
		const texture = this.toTexture( shape );
		const textureTransformId = this.toTextureTransformId( texture );
		if( texture !== this.texture || textureTransformId !== this.textureTransformId ) {
			this.texture = texture;
			this.textureTransformId = textureTransformId;

			buffer.uvBuffer.update();
			const textureUvs = this.toTextureUvs( texture );
			buildRectangleUv( buffer.uvs, this.vertexOffset, textureUvs );
		}
	}
}

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import {
	buildRectangleRoundedClipping, buildRectangleRoundedIndex, buildRectangleRoundedStep,
	buildRectangleRoundedUv, buildRectangleRoundedVertex, RECTANGLE_ROUNDED_WORLD_SIZE
} from "./build-rectangle-rounded";
import { EShapeTextUploaded } from "./e-shape-text-uploaded";

export class EShapeRectangleRoundedUploaded extends EShapeTextUploaded {
	init( shape: EShape ): this {
		super.init( shape );

		// Indices
		const buffer = this.buffer;
		buffer.indexBuffer.update();
		buildRectangleRoundedIndex(
			buffer.indices,
			this.vertexOffset,
			this.indexOffset
		);

		// Text
		this.initText();

		this.update( shape );
		return this;
	}

	update( shape: EShape ): void {
		const buffer = this.buffer;
		this.updateVertexClippingStepAndUv( buffer, shape );
		this.updateColor( buffer, shape );
		this.updateText( buffer, shape );
	}

	protected updateVertexClippingStepAndUv( buffer: EShapeBuffer, shape: EShape ) {
		const size = shape.size;
		const sizeX = size.x;
		const sizeY = size.y;
		const radius = shape.radius;
		const isSizeChanged = ( sizeX !== this.sizeX || sizeY !== this.sizeY || radius !== this.radius );

		const transformLocalId = this.toTransformLocalId( shape );
		const isTransformChanged = ( this.transformLocalId !== transformLocalId );

		const stroke = shape.stroke;
		const strokeWidth = (stroke.enable ? stroke.width : 0);
		const strokeAlign = stroke.align;
		const strokeSide = stroke.side;
		const isStrokeChanged = ( this.strokeAlign !== strokeAlign ||
			this.strokeWidth !== strokeWidth || this.strokeSide !== strokeSide );

		const corner = shape.corner;
		const isCornerChanged = ( corner !== this.corner );

		const texture = this.toTexture( shape );
		const textureTransformId = this.toTextureTransformId( texture );
		const isTextureChanged = ( texture !== this.texture || textureTransformId !== this.textureTransformId );

		const isVertexChanged = isSizeChanged || isStrokeChanged;

		if( isVertexChanged || isTransformChanged || isCornerChanged || isTextureChanged ) {
			this.sizeX = sizeX;
			this.sizeY = sizeY;
			this.radius = radius;
			this.transformLocalId = transformLocalId;
			this.strokeAlign = strokeAlign;
			this.strokeWidth = strokeWidth;
			this.strokeSide = strokeSide;
			this.corner = corner;
			this.texture = texture;
			this.textureTransformId = textureTransformId;

			if( isVertexChanged || isTransformChanged ) {
				// Invalidate the text layout to update the text layout.
				this.textSpacingHorizontal = NaN;
			}

			// Vertices
			const voffset = this.vertexOffset;
			buffer.vertexBuffer.update();
			buildRectangleRoundedVertex(
				buffer.vertices, voffset,
				0, 0,
				sizeX, sizeY,
				strokeAlign, strokeWidth, radius,
				shape.transform.internalTransform,
				RECTANGLE_ROUNDED_WORLD_SIZE,
				buffer.work
			);

			// Steps & antialiases
			if( isVertexChanged || isTransformChanged ) {
				buffer.stepBuffer.update();
				buffer.antialiasBuffer.update();
				buildRectangleRoundedStep(
					buffer.steps,
					buffer.antialiases,
					voffset,
					strokeWidth, strokeSide,
					corner,
					this.antialiasWeight,
					RECTANGLE_ROUNDED_WORLD_SIZE,
					buffer.workStep
				);
			}

			// Clippings
			if( isVertexChanged || isCornerChanged ) {
				buffer.clippingBuffer.update();
				buildRectangleRoundedClipping(
					buffer.clippings,
					voffset,
					corner,
					RECTANGLE_ROUNDED_WORLD_SIZE
				);
			}

			// UVs
			if( isVertexChanged || isTextureChanged ) {
				buffer.uvBuffer.update();
				buildRectangleRoundedUv(
					buffer.uvs,
					voffset,
					this.toTextureUvs( texture ),
					RECTANGLE_ROUNDED_WORLD_SIZE
				);
			}
		}
	}
}

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import {
	buildTriangleRoundedClipping, buildTriangleRoundedIndex, buildTriangleRoundedStep,
	buildTriangleRoundedUv, buildTriangleRoundedVertex, TRIANGLE_ROUNDED_WORLD_SIZE
} from "./build-triangle-rounded";
import { EShapeTextUploaded } from "./e-shape-text-uploaded";

export class EShapeTriangleRoundedUploaded extends EShapeTextUploaded {
	init( shape: EShape ): this {
		super.init( shape );

		// Indices
		const buffer = this.buffer;
		buffer.updateIndices();
		buildTriangleRoundedIndex(
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

	protected updateVertexClippingStepAndUv( buffer: EShapeBuffer, shape: EShape ): void {
		const size = shape.size;
		const sizeX = size.x;
		const sizeY = size.y;
		const isSizeChanged = ( sizeX !== this.sizeX || sizeY !== this.sizeY );

		const radius = shape.radius;
		const isRadiusChanged = ( radius !== this.radius );

		const transformLocalId = this.toTransformLocalId( shape );
		const isTransformChanged = ( this.transformLocalId !== transformLocalId );

		const stroke = shape.stroke;
		const strokeWidth = (stroke.enable ? stroke.width : 0);
		const strokeAlign = stroke.align;
		const isStrokeChanged = ( this.strokeAlign !== strokeAlign || this.strokeWidth !== strokeWidth );

		const corner = shape.corner;
		const isCornerChanged = ( corner !== this.corner );

		const texture = this.toTexture( shape );
		const textureTransformId = this.toTextureTransformId( texture );
		const isTextureChanged = ( texture !== this.texture || textureTransformId !== this.textureTransformId );

		const isVertexChanged = isSizeChanged || isRadiusChanged || isStrokeChanged;

		if( isVertexChanged || isTransformChanged || isCornerChanged || isTextureChanged ) {
			this.sizeX = sizeX;
			this.sizeY = sizeY;
			this.radius = radius;
			this.transformLocalId = transformLocalId;
			this.strokeWidth = strokeWidth;
			this.strokeAlign = strokeAlign;
			this.corner = corner;
			this.texture = texture;
			this.textureTransformId = textureTransformId;

			if( isSizeChanged || isTransformChanged || isStrokeChanged ) {
				// Invalidate the text layout to update the text layout.
				this.textSpacingHorizontal = NaN;
			}

			const voffset = this.vertexOffset;
			const work = buffer.work;

			buffer.updateVertices();
			buildTriangleRoundedVertex(
				buffer.vertices,
				voffset,
				0,
				0,
				sizeX,
				sizeY,
				strokeAlign,
				strokeWidth,
				radius,
				shape.transform.internalTransform,
				TRIANGLE_ROUNDED_WORLD_SIZE,
				work
			);

			if( isRadiusChanged || isCornerChanged ) {
				buffer.updateClippings();
				buildTriangleRoundedClipping(
					buffer.clippings,
					voffset,
					corner,
					radius
				);
			}

			if( isVertexChanged || isTransformChanged || isCornerChanged ) {
				buffer.updateSteps();
				buildTriangleRoundedStep(
					buffer.steps,
					buffer.antialiases,
					buffer.clippings,
					voffset,
					strokeWidth,
					shape.radius,
					this.antialiasWeight,
					TRIANGLE_ROUNDED_WORLD_SIZE,
					buffer.workStep
				);
			}

			if( isVertexChanged || isTextureChanged ) {
				buffer.updateUvs();
				buildTriangleRoundedUv(
					buffer.uvs,
					voffset,
					this.toTextureUvs( texture ),
					radius,
					TRIANGLE_ROUNDED_WORLD_SIZE
				);
			}
		}
	}
}

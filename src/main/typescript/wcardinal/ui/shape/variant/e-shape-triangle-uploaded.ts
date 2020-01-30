/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import {
	buildTriangleClipping, buildTriangleIndex, buildTriangleStep, buildTriangleUv,
	buildTriangleVertex, TRIANGLE_VERTEX_COUNT, TRIANGLE_WORLD_SIZE
} from "./build-triangle";
import { EShapeTextUploaded } from "./e-shape-text-uploaded";

export class EShapeTriangleUploaded extends EShapeTextUploaded {
	init( shape: EShape ): this {
		super.init( shape );

		const buffer = this.buffer;
		buffer.updateClippings();
		buffer.updateIndices();
		buildTriangleClipping(
			buffer.clippings,
			this.vertexOffset
		);
		buildTriangleIndex(
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
		this.updateVertexStepAndUv( buffer, shape );
		this.updateColor( buffer, shape );
		this.updateText( buffer, shape );
	}

	protected updateVertexStepAndUv( buffer: EShapeBuffer, shape: EShape ): void {
		const size = shape.size;
		const sizeX = size.x;
		const sizeY = size.y;
		const isSizeChanged = ( sizeX !== this.sizeX || sizeY !== this.sizeY );

		const transformLocalId = this.toTransformLocalId( shape );
		const isTransformChanged = ( this.transformLocalId !== transformLocalId );

		const stroke = shape.stroke;
		const strokeWidth = (stroke.enable ? stroke.width : 0);
		const strokeAlign = stroke.align;
		const isStrokeChanged = ( this.strokeAlign !== strokeAlign || this.strokeWidth !== strokeWidth );

		const texture = this.toTexture( shape );
		const textureTransformId = this.toTextureTransformId( texture );
		const isTextureChanged = ( texture !== this.texture || textureTransformId !== this.textureTransformId );

		const isVertexChanged = isSizeChanged || isStrokeChanged;

		if( isVertexChanged || isTransformChanged || isTextureChanged ) {
			this.sizeX = sizeX;
			this.sizeY = sizeY;
			this.transformLocalId = transformLocalId;
			this.strokeWidth = strokeWidth;
			this.strokeAlign = strokeAlign;
			this.texture = texture;
			this.textureTransformId = textureTransformId;

			if( isVertexChanged || isTransformChanged ) {
				// Invalidate the text layout to update the text layout.
				this.textSpacingHorizontal = NaN;
			}

			const voffset = this.vertexOffset;

			buffer.updateVertices();
			buildTriangleVertex(
				buffer.vertices,
				voffset,
				0, 0,
				sizeX, sizeY,
				strokeAlign,
				strokeWidth,
				shape.transform.internalTransform,
				TRIANGLE_WORLD_SIZE
			);

			if( isVertexChanged || isTransformChanged ) {
				buffer.updateSteps();
				buildTriangleStep(
					buffer.steps,
					buffer.clippings,
					voffset,
					TRIANGLE_VERTEX_COUNT,
					strokeWidth,
					this.antialiasWeight,
					TRIANGLE_WORLD_SIZE
				);
			}

			if( isVertexChanged || isTextureChanged ) {
				buffer.updateUvs();
				buildTriangleUv(
					buffer.uvs,
					this.toTextureUvs( texture ),
					voffset,
					TRIANGLE_WORLD_SIZE
				);
			}
		}
	}
}

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapePointsStyle } from "../e-shape-points-style";
import { buildLineClippingAndIndex, buildLineUv, buildLineVertexStepAndColorFill } from "./build-line";
import { EShapeTextUploaded } from "./e-shape-text-uploaded";

export class EShapeLineUploaded extends EShapeTextUploaded {
	protected pointCount: number;
	protected pointId: number;
	protected pointsClosed: boolean;
	protected length: number;

	constructor(
		buffer: EShapeBuffer,
		voffset: number, ioffset: number,
		tvcount: number, ticount: number,
		vcount: number, icount: number,
		antialiasWeight: number,
		pointCount: number, pointsClosed: boolean
	) {
		super( buffer, voffset, ioffset, tvcount, ticount, vcount, icount, antialiasWeight );
		this.pointId = NaN;
		this.pointCount = pointCount;
		this.pointsClosed = pointsClosed;
		this.length = 1;
	}

	init( shape: EShape ): this {
		super.init( shape );

		// Clipping & indices
		const buffer = this.buffer;
		const pointCount = this.pointCount;
		const pointsClosed = this.pointsClosed;
		if( 2 <= pointCount ) {
			buffer.clippingBuffer.update();
			buffer.indexBuffer.update();
			buildLineClippingAndIndex(
				buffer.clippings,
				buffer.indices,
				this.vertexOffset,
				this.indexOffset,
				pointCount,
				pointsClosed
			);
		}

		// Text
		this.initText();

		//
		this.update( shape );

		return this;
	}

	update( shape: EShape ): void {
		const buffer = this.buffer;
		this.updateLineVertexStepAndColorFill( buffer, shape );
		this.updateColor( buffer, shape );
		this.updateLineUv( buffer, shape );
		this.updateText( buffer, shape );
	}

	protected updateLineVertexStepAndColorFill( buffer: EShapeBuffer, shape: EShape ): void {
		const points = shape.points;
		if( points && 2 <= points.length ) {
			const pointId = points.id;
			const isPointChanged = ( pointId !== this.pointId );

			const stroke = shape.stroke;
			const strokeWidth = ( stroke.enable ? stroke.width : 0 );
			const isStrokeWidthChanged = ( strokeWidth !== this.strokeWidth );

			const transformLocalId = this.toTransformLocalId( shape );
			const isTransformChanged = ( this.transformLocalId !== transformLocalId );

			if( isPointChanged || isTransformChanged || isStrokeWidthChanged ) {
				this.pointId = pointId;
				this.strokeWidth = strokeWidth;
				this.transformLocalId = transformLocalId;

				if( isPointChanged || isTransformChanged ) {
					// Invalidate the text layout to update the text layout.
					this.textSpacingHorizontal = NaN;
				}
				if( isPointChanged ) {
					// Invalidate the texture transform ID to update the UVs
					this.textureTransformId = NaN;
				}

				buffer.vertexBuffer.update();
				buffer.stepBuffer.update();
				buffer.antialiasBuffer.update();
				buffer.colorFillBuffer.update();
				this.length = buildLineVertexStepAndColorFill(
					buffer.vertices,
					buffer.steps,
					buffer.antialiases,
					buffer.colorFills,
					this.vertexOffset,
					this.pointCount,
					this.pointsClosed,
					points.values,
					points.segments,
					points.style,
					strokeWidth,
					shape.transform.internalTransform,
					buffer.work
				);
			}
		}
	}

	protected updateColorFillAndStroke( buffer: EShapeBuffer, shape: EShape, vertexCount: number ) {
		this.updateColorStroke( buffer, shape, vertexCount );
	}

	isCompatible( shape: EShape ): boolean {
		if( super.isCompatible( shape ) ) {
			const points = shape.points;
			if( points ) {
				return (
					this.pointCount === points.length &&
					this.pointsClosed === (!!( points.style & EShapePointsStyle.CLOSED ))
				);
			} else {
				return (
					this.pointCount === 0 &&
					this.pointsClosed === false
				);
			}
		}
		return false;
	}

	updateLineUv( buffer: EShapeBuffer, shape: EShape ): void {
		const texture = this.toTexture( shape );
		const textureTransformId = this.toTextureTransformId( texture );
		if( texture !== this.texture || textureTransformId !== this.textureTransformId ) {
			this.texture = texture;
			this.textureTransformId = textureTransformId;

			const pointCount = this.pointCount;
			if( 2 <= pointCount ) {
				buffer.uvBuffer.update();
				buildLineUv(
					buffer.uvs,
					buffer.colorFills,
					this.vertexOffset,
					pointCount,
					this.pointsClosed,
					this.toTextureUvs( texture ),
					this.length
				);
			}
		}
	}
}

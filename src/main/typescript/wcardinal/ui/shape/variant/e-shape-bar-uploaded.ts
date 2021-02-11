/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapePointsStyle } from "../e-shape-points-style";
import { buildBarClipping, buildBarIndex, buildBarUv, buildBarVertexStepAndColorFill } from "./build-bar";
import { EShapeBar } from "./e-shape-bar";
import { EShapeTextUploaded } from "./e-shape-text-uploaded";

export class EShapeBarUploaded extends EShapeTextUploaded {
	protected pointsId: number;
	protected pointsStyle: EShapePointsStyle;

	constructor(
		buffer: EShapeBuffer,
		voffset: number, ioffset: number,
		tvcount: number, ticount: number,
		vcount: number, icount: number,
		antialiasWeight: number
	) {
		super( buffer, voffset, ioffset, tvcount, ticount, vcount, icount, antialiasWeight );
		this.pointsId = NaN;
		this.pointsStyle = EShapePointsStyle.NONE;
	}

	init( shape: EShape ): this {
		super.init( shape );

		// Clipping & indices
		const buffer = this.buffer;
		const voffset = this.vertexOffset;
		const ioffset = this.indexOffset;
		buffer.updateClippings();
		buffer.updateIndices();
		buildBarClipping(
			buffer.clippings,
			voffset
		);
		buildBarIndex(
			buffer.indices,
			voffset,
			ioffset
		);

		// Text
		this.initText();

		//
		this.update( shape );
		return this;
	}

	update( shape: EShape ): void {
		const buffer = this.buffer;
		this.updateVertexStepAndColorFill( buffer, shape );
		this.updateColor( buffer, shape );
		this.updateUv( buffer, shape );
		this.updateText( buffer, shape );
	}

	protected updateVertexStepAndColorFill( buffer: EShapeBuffer, shape: EShape ): void {
		if( shape instanceof EShapeBar ) {
			const size = shape.size;
			const sizeX = size.x;
			const sizeY = size.y;
			const isSizeChanged = ( sizeX !== this.sizeX || sizeY !== this.sizeY );

			const stroke = shape.stroke;
			const strokeWidth = ( stroke.enable ? stroke.width : 0 );
			const isStrokeWidthChanged = ( strokeWidth !== this.strokeWidth );

			const transformLocalId = this.toTransformLocalId( shape );
			const isTransformChanged = ( this.transformLocalId !== transformLocalId );

			const points = shape.points;
			const pointsId = points.id;
			const isPointsIdChanged = ( pointsId !== this.pointsId );

			const pointsStyle = points.style;
			const isPointsStyleChanged = ( pointsStyle !== this.pointsStyle );

			if( isSizeChanged || isTransformChanged || isStrokeWidthChanged || isPointsIdChanged || isPointsStyleChanged ) {
				this.sizeX = sizeX;
				this.sizeY = sizeY;
				this.strokeWidth = strokeWidth;
				this.transformLocalId = transformLocalId;
				this.pointsId = pointsId;
				this.pointsStyle = pointsStyle;

				if( isSizeChanged || isTransformChanged ) {
					// Invalidate the text layout to update the text layout.
					this.textSpacingHorizontal = NaN;
				}
				if( isPointsIdChanged ) {
					// Invalidate the texture transform ID to update the UVs
					this.textureTransformId = NaN;
				}

				buffer.updateVertices();
				buffer.updateSteps();
				buffer.updateColorFills();
				buildBarVertexStepAndColorFill(
					buffer.vertices,
					buffer.steps,
					buffer.colorFills,
					this.vertexOffset,
					points.values,
					pointsStyle,
					points.size,
					strokeWidth,
					shape.transform.internalTransform
				);
			}
		}
	}

	protected updateColorFillAndStroke( buffer: EShapeBuffer, shape: EShape, vertexCount: number ): void {
		this.updateColorStroke( buffer, shape, vertexCount );
	}

	protected updateUv( buffer: EShapeBuffer, shape: EShape ): void {
		const texture = this.toTexture( shape );
		const textureTransformId = this.toTextureTransformId( texture );
		if( texture !== this.texture || textureTransformId !== this.textureTransformId ) {
			this.texture = texture;
			this.textureTransformId = textureTransformId;

			buffer.updateUvs();
			buildBarUv(
				buffer.uvs,
				this.vertexOffset,
				this.toTextureUvs( texture )
			);
		}
	}
}

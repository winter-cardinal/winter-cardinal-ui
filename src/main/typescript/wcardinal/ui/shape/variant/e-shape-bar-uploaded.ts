/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Matrix } from "pixi.js";
import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapePointsStyle } from "../e-shape-points";
import { EShapePointsStyleUploadeds } from "../e-shape-points-style-uploadeds";
import { EShapeBar } from "./e-shape-bar";
import { EShapeBarPoints } from "./e-shape-bar-points";
import { EShapeTextUploaded } from "./e-shape-text-uploaded";

const FMIN: number = 0.00001;

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
		const buffer = this.buffer;
		const voffset = this.vertexOffset;
		const ioffset = this.indexOffset;

		// Clipping & indices
		buffer.clippingBuffer.update();
		const clippings = buffer.clippings;
		buffer.indexBuffer.update();
		const indices = buffer.indices;

		// Clippings
		const ic = voffset * 3;
		clippings[ ic +  0 ] = 1;
		clippings[ ic +  1 ] = 0;
		clippings[ ic +  2 ] = 3;

		clippings[ ic +  3 ] = 0;
		clippings[ ic +  4 ] = 1;
		clippings[ ic +  5 ] = 5;

		clippings[ ic +  6 ] = 1;
		clippings[ ic +  7 ] = 0;
		clippings[ ic +  8 ] = 3;

		clippings[ ic +  9 ] = 0;
		clippings[ ic + 10 ] = 1;
		clippings[ ic + 11 ] = 5;

		// Indices
		const ii = ioffset * 3;
		indices[ ii + 0 ] = voffset + 0;
		indices[ ii + 1 ] = voffset + 2;
		indices[ ii + 2 ] = voffset + 1;

		indices[ ii + 3 ] = voffset + 1;
		indices[ ii + 4 ] = voffset + 2;
		indices[ ii + 5 ] = voffset + 3;

		// Text
		this.initText();

		//
		this.update( shape );
		return this;
	}

	update( shape: EShape ): void {
		const buffer = this.buffer;
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
			const pointsId = shape.points.id;
			const isPointsIdChanged = ( pointsId !== this.pointsId );
			const pointsStyle = shape.points.style;
			const isPointsStyleChanged = ( pointsStyle !== this.pointsStyle );
			if( isSizeChanged || isTransformChanged || isStrokeWidthChanged || isPointsIdChanged || isPointsStyleChanged ) {
				this.sizeX = sizeX;
				this.sizeY = sizeY;
				this.strokeWidth = strokeWidth;
				this.transformLocalId = transformLocalId;
				this.pointsId = pointsId;
				this.pointsStyle = pointsStyle;
				buffer.vertexBuffer.update();
				buffer.stepBuffer.update();
				buffer.antialiasBuffer.update();
				buffer.colorFillBuffer.update();

				if( isSizeChanged || isTransformChanged ) {
					// Invalidate the text layout to update the text layout.
					this.textSpacingHorizontal = NaN;
				}
				if( isPointsIdChanged ) {
					// Invalidate the texture transform ID to update the UVs
					this.textureTransformId = NaN;
				}

				const voffset = this.vertexOffset;
				const vcount = this.vertexCount - this.textVertexCount;
				this.updateLineVertexStepAndColorFill(
					buffer,
					shape.points,
					strokeWidth,
					shape.transform.internalTransform,
					voffset, vcount
				);
			}
		}

		this.updateColor( buffer, shape );
		this.updateBarUv( buffer, shape );
		this.updateText( buffer, shape );
	}

	protected updateColorFillAndStroke( buffer: EShapeBuffer, shape: EShape, vertexCount: number ): void {
		this.updateColorStroke( buffer, shape, vertexCount );
	}

	protected updateLineVertexStepAndColorFill(
		buffer: EShapeBuffer,
		points: EShapeBarPoints,
		strokeWidth: number,
		internalTransform: Matrix,
		voffset: number,
		vcount: number
	): void {
		const iv = voffset * 2;
		const ia = voffset * 4;
		const vertices = buffer.vertices;
		const steps = buffer.steps;
		const antialiases = buffer.antialiases;
		const colorFills = buffer.colorFills;
		const pointCount = points.length;
		const pointValues = points.values;
		const pointsStyle = points.style;
		const pointsSize = points.size;
		const scaleInvariant = EShapePointsStyleUploadeds.toScaleInvariant( pointsStyle );

		// First point
		const work = buffer.work;
		work.set( pointValues[ 0 ], pointValues[ 1 ] );
		internalTransform.apply( work, work );
		const p1x = work.x;
		const p1y = work.y;

		// Last point
		const lastIndex = (pointCount - 1) << 1;
		work.set( pointValues[ lastIndex + 0 ], pointValues[ lastIndex + 1 ] );
		internalTransform.apply( work, work );
		let p2x = work.x;
		let p2y = work.y;

		// Normal
		let dx = p2x - p1x;
		let dy = p2y - p1y;
		const d = Math.sqrt( dx * dx + dy * dy );
		let l = d;
		if( 0 <= pointsSize && FMIN < d ) {
			const ratio = pointsSize / d;
			dx *= ratio;
			dy *= ratio;
			p2x = p1x + dx;
			p2y = p1y + dy;
			l = pointsSize;
		}

		// Other points
		const p0x = p1x - dx;
		const p0y = p1y - dy;
		const p3x = p2x + dx;
		const p3y = p2y + dy;

		//
		vertices[ iv + 0 ] = p1x;
		vertices[ iv + 1 ] = p1y;
		vertices[ iv + 2 ] = p1x;
		vertices[ iv + 3 ] = p1y;
		steps[ iv + 0 ] = strokeWidth;
		steps[ iv + 1 ] = scaleInvariant;
		steps[ iv + 2 ] = strokeWidth;
		steps[ iv + 3 ] = scaleInvariant;
		antialiases[ ia + 0 ] = p0x;
		antialiases[ ia + 1 ] = p0y;
		antialiases[ ia + 2 ] = p2x;
		antialiases[ ia + 3 ] = p2y;
		antialiases[ ia + 4 ] = p0x;
		antialiases[ ia + 5 ] = p0y;
		antialiases[ ia + 6 ] = p2x;
		antialiases[ ia + 7 ] = p2y;
		colorFills[ ia + 0 ] = 0.0;
		colorFills[ ia + 4 ] = 0.0;

		vertices[ iv + 4 ] = p2x;
		vertices[ iv + 5 ] = p2y;
		vertices[ iv + 6 ] = p2x;
		vertices[ iv + 7 ] = p2y;
		steps[ iv + 4 ] = strokeWidth;
		steps[ iv + 5 ] = scaleInvariant;
		steps[ iv + 6 ] = strokeWidth;
		steps[ iv + 7 ] = scaleInvariant;
		antialiases[ ia +  8 ] = p1x;
		antialiases[ ia +  9 ] = p1y;
		antialiases[ ia + 10 ] = p3x;
		antialiases[ ia + 11 ] = p3y;
		antialiases[ ia + 12 ] = p1x;
		antialiases[ ia + 13 ] = p1y;
		antialiases[ ia + 14 ] = p3x;
		antialiases[ ia + 15 ] = p3y;
		colorFills[ ia +  8 ] = l;
		colorFills[ ia + 12 ] = l;

		// Total length
		EShapePointsStyleUploadeds.toDash( l, strokeWidth, pointsStyle, work );
		const dash0 = work.x;
		const dash1 = work.y;
		for( let i = voffset * 4, imax = i + vcount * 4; i < imax; i += 4 ) {
			colorFills[ i + 1 ] = dash0;
			colorFills[ i + 2 ] = dash1;
			colorFills[ i + 3 ] = l;
		}
	}

	updateBarUv( buffer: EShapeBuffer, shape: EShape ): void {
		const texture = this.toTexture( shape );
		const textureTransformId = this.toTextureTransformId( texture );
		if( texture !== this.texture || textureTransformId !== this.textureTransformId ) {
			this.texture = texture;
			this.textureTransformId = textureTransformId;

			const textureUvs = this.toTextureUvs( texture );

			// Uvs
			buffer.uvBuffer.update();
			const uvs = buffer.uvs;
			const voffset = this.vertexOffset;
			const iuv = voffset * 2;

			uvs[ iuv + 0 ] = textureUvs.x0;
			uvs[ iuv + 1 ] = textureUvs.y0;
			uvs[ iuv + 2 ] = textureUvs.x3;
			uvs[ iuv + 3 ] = textureUvs.y3;

			uvs[ iuv + 4 ] = textureUvs.x1;
			uvs[ iuv + 5 ] = textureUvs.y1;
			uvs[ iuv + 6 ] = textureUvs.x2;
			uvs[ iuv + 7 ] = textureUvs.y2;
		}
	}
}

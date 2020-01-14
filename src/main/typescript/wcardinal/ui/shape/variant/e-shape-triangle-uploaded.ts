/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeTextUploaded } from "./e-shape-text-uploaded";

export class EShapeTriangleUploaded extends EShapeTextUploaded {
	init( shape: EShape ): this {
		super.init( shape );
		const buffer = this.buffer;
		const voffset = this.vertexOffset;
		const ioffset = this.indexOffset;

		// Clippings
		buffer.clippingBuffer.update();
		const clippings = buffer.clippings;
		const iv = voffset * 3;
		clippings[ iv +  0 ] = 0;
		clippings[ iv +  1 ] = 0;
		clippings[ iv +  2 ] = 0;

		clippings[ iv +  3 ] = 1;
		clippings[ iv +  4 ] = 0;
		clippings[ iv +  5 ] = 0;

		clippings[ iv +  6 ] = 1;
		clippings[ iv +  7 ] = 0;
		clippings[ iv +  8 ] = 0;

		clippings[ iv +  9 ] = 0;
		clippings[ iv + 10 ] = 1;
		clippings[ iv + 11 ] = 0;

		clippings[ iv + 12 ] = 0;
		clippings[ iv + 13 ] = 1;
		clippings[ iv + 14 ] = 0;

		clippings[ iv + 15 ] = 1;
		clippings[ iv + 16 ] = 0;
		clippings[ iv + 17 ] = 0;

		clippings[ iv + 18 ] = 1;
		clippings[ iv + 19 ] = 0;
		clippings[ iv + 20 ] = 0;

		// Indices
		buffer.indexBuffer.update();
		const indices = buffer.indices;
		const ii = ioffset * 3;
		indices[ ii + 0 ] = voffset + 0;
		indices[ ii + 1 ] = voffset + 1;
		indices[ ii + 2 ] = voffset + 2;

		indices[ ii + 3 ] = voffset + 0;
		indices[ ii + 4 ] = voffset + 3;
		indices[ ii + 5 ] = voffset + 4;

		indices[ ii + 6 ] = voffset + 0;
		indices[ ii + 7 ] = voffset + 5;
		indices[ ii + 8 ] = voffset + 6;

		// Text
		this.initText();

		this.update( shape );
		return this;
	}

	update( shape: EShape ): void {
		const buffer = this.buffer;
		this.updateTriangleVertex( buffer, shape );
		this.updateColor( buffer, shape );
		this.updateTriangleStep( buffer, shape );
		this.updateTriangleUv( buffer, shape );
		this.updateText( buffer, shape );
	}

	protected updateTriangleVertex( buffer: EShapeBuffer, shape: EShape ): void {
		const size = shape.size;
		const sizeX = size.x;
		const sizeY = size.y;
		const transformLocalId = this.toTransformLocalId( shape );
		const isSizeChanged = ( sizeX !== this.sizeX || sizeY !== this.sizeY );
		const isTransformChanged = ( this.transformLocalId !== transformLocalId );
		const stroke = shape.stroke;
		const strokeWidth = (stroke.enable ? stroke.width : 0);
		const strokeAlign = stroke.align;
		const isStrokeChanged = ( this.strokeAlign !== strokeAlign || this.strokeWidth !== strokeWidth );
		if( isSizeChanged || isTransformChanged || isStrokeChanged ) {
			this.sizeX = sizeX;
			this.sizeY = sizeY;
			this.transformLocalId = transformLocalId;
			if( isSizeChanged ) {
				// Invalidate the texture transform ID to update the UVs.
				this.textureTransformId = NaN;
			}
			// Invalidate the stroke width to update the steps / antialiases.
			this.strokeWidth = NaN;

			// Invalidate the text layout to update the text layout.
			this.textSpacingHorizontal = NaN;
			buffer.vertexBuffer.update();

			// Calculate the transformed positions
			const s = strokeAlign * strokeWidth;
			const sx = sizeX * 0.5 + (0 <= sizeX ? +s : -s);
			const sy = sizeY * 0.5 + (0 <= sizeY ? +s : -s);
			const sz = Math.sqrt( sx * sx + 4 * sy * sy );
			const sw = 2 * sx * sy / (sx + sz);

			const internalTransform = shape.transform.internalTransform;
			const work = buffer.work;
			work.set( 0, -sy );
			internalTransform.apply( work, work );
			const x0 = work.x;
			const y0 = work.y;
			work.set( +sx, 0 );
			internalTransform.apply( work, work );
			const tx = internalTransform.tx;
			const ty = internalTransform.ty;
			const dx = tx - x0;
			const dy = ty - y0;
			const x1 = work.x + dx;
			const y1 = work.y + dy;
			const x2 = tx + (tx - work.x) + dx;
			const y2 = ty + (ty - work.y) + dy;
			work.set( 0, sy - sw ); // Incenter of a triangle
			internalTransform.apply( work, work );
			const x3 = work.x;
			const y3 = work.y;

			// World size
			const xb = tx + dx;
			const yb = ty + dy;
			this.worldSizeXHalf = this.calcLength( x1, y1, xb, yb );
			this.worldSizeYHalf = this.calcLength( x0, y0, tx, ty );
			this.worldSizeR = this.calcLength( xb, yb, x3, y3 );

			// Vertices
			const voffset = this.vertexOffset;
			const vertices = buffer.vertices;
			const iv = voffset * 2;
			vertices[ iv +  0 ] = x3;
			vertices[ iv +  1 ] = y3;

			vertices[ iv +  2 ] = x0;
			vertices[ iv +  3 ] = y0;
			vertices[ iv +  4 ] = x1;
			vertices[ iv +  5 ] = y1;

			vertices[ iv +  6 ] = x1;
			vertices[ iv +  7 ] = y1;
			vertices[ iv +  8 ] = x2;
			vertices[ iv +  9 ] = y2;

			vertices[ iv + 10 ] = x2;
			vertices[ iv + 11 ] = y2;
			vertices[ iv + 12 ] = x0;
			vertices[ iv + 13 ] = y0;
		}
	}

	protected updateTriangleStep( buffer: EShapeBuffer, shape: EShape ) {
		const stroke = shape.stroke;
		const strokeWidth = (stroke.enable ? stroke.width : 0);
		const strokeAlign = stroke.align;
		if( this.strokeAlign !== strokeAlign || this.strokeWidth !== strokeWidth ) {
			this.strokeWidth = strokeWidth;
			this.strokeAlign = strokeAlign;
			buffer.stepBuffer.update();
			buffer.antialiasBuffer.update();

			const work = buffer.workStep;
			this.calcStep( this.worldSizeR, strokeWidth, work );
			const swc = work[ 0 ];
			const pc0 = work[ 1 ];
			const pc1 = work[ 2 ];

			const voffset = this.vertexOffset;
			const vcount = this.vertexCount - this.textVertexCount;
			this.updateStep(
				buffer.steps, buffer.antialiases, buffer.clippings,
				voffset, vcount, swc, swc, pc0, pc0, pc1, pc1
			);
		}
	}

	protected updateTriangleUv( buffer: EShapeBuffer, shape: EShape ) {
		const texture = this.toTexture( shape );
		const textureTransformId = this.toTextureTransformId( texture );
		if( texture !== this.texture || textureTransformId !== this.textureTransformId ) {
			this.texture = texture;
			this.textureTransformId = textureTransformId;

			const textureUvs = this.toTextureUvs( texture ) as any;
			const x0 = textureUvs.x0;
			const x1 = textureUvs.x1;
			const x2 = textureUvs.x2;
			const x3 = textureUvs.x3;
			const y0 = textureUvs.y0;
			const y1 = textureUvs.y1;
			const y2 = textureUvs.y2;
			const y3 = textureUvs.y3;

			const x4 = 0.5 * ( x0 + x1 );
			const y4 = 0.5 * ( y0 + y1 );

			const c = 1 - 0.5 * this.worldSizeR / this.worldSizeYHalf;
			const x5 = x4 + c * ( x3 - x0 );
			const y5 = y4 + c * ( y3 - y0 );

			// UVs
			buffer.uvBuffer.update();
			const uvs = buffer.uvs;
			const voffset = this.vertexOffset;
			const iuv = voffset * 2;
			uvs[ iuv +  0 ] = x5;
			uvs[ iuv +  1 ] = y5;

			uvs[ iuv +  2 ] = x4;
			uvs[ iuv +  3 ] = y4;
			uvs[ iuv +  4 ] = x2;
			uvs[ iuv +  5 ] = y2;

			uvs[ iuv +  6 ] = x2;
			uvs[ iuv +  7 ] = y2;
			uvs[ iuv +  8 ] = x3;
			uvs[ iuv +  9 ] = y3;

			uvs[ iuv + 10 ] = x3;
			uvs[ iuv + 11 ] = y3;
			uvs[ iuv + 12 ] = x4;
			uvs[ iuv + 13 ] = y4;
		}
	}
}

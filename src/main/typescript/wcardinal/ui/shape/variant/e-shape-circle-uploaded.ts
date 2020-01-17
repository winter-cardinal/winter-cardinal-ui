/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Matrix, Point, TextureUvs } from "pixi.js";
import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeTextUploaded } from "./e-shape-text-uploaded";

export class EShapeCircleUploaded extends EShapeTextUploaded {
	static readonly VERTEX_COUNT = 9;
	static readonly INDEX_COUNT = 8;

	init( shape: EShape ): this {
		super.init( shape );

		// Clippings & indices
		const buffer = this.buffer;
		buffer.clippingBuffer.update();
		buffer.indexBuffer.update();
		this.doInitCircle(
			buffer.clippings,
			buffer.indices,
			this.vertexOffset,
			this.indexOffset
		);

		// Text
		this.initText();

		this.update( shape );
		return this;
	}

	protected doInitCircle(
		clippings: Float32Array,
		indices: Uint16Array | Uint32Array,
		voffset: number,
		ioffset: number
	): void {
		const ic = voffset * 3;
		clippings[ ic +  0 ] = 1;
		clippings[ ic +  1 ] = 1;
		clippings[ ic +  2 ] = 1;

		clippings[ ic +  3 ] = 0;
		clippings[ ic +  4 ] = 1;
		clippings[ ic +  5 ] = 1;

		clippings[ ic +  6 ] = 1;
		clippings[ ic +  7 ] = 1;
		clippings[ ic +  8 ] = 1;

		clippings[ ic +  9 ] = 1;
		clippings[ ic + 10 ] = 0;
		clippings[ ic + 11 ] = 1;

		clippings[ ic + 12 ] = 0;
		clippings[ ic + 13 ] = 0;
		clippings[ ic + 14 ] = 1;

		clippings[ ic + 15 ] = 1;
		clippings[ ic + 16 ] = 0;
		clippings[ ic + 17 ] = 1;

		clippings[ ic + 18 ] = 1;
		clippings[ ic + 19 ] = 1;
		clippings[ ic + 20 ] = 1;

		clippings[ ic + 21 ] = 0;
		clippings[ ic + 22 ] = 1;
		clippings[ ic + 23 ] = 1;

		clippings[ ic + 24 ] = 1;
		clippings[ ic + 25 ] = 1;
		clippings[ ic + 26 ] = 1;

		// Indices
		const ii = ioffset * 3;
		indices[ ii +  0 ] = voffset + 0;
		indices[ ii +  1 ] = voffset + 1;
		indices[ ii +  2 ] = voffset + 3;

		indices[ ii +  3 ] = voffset + 1;
		indices[ ii +  4 ] = voffset + 4;
		indices[ ii +  5 ] = voffset + 3;

		indices[ ii +  6 ] = voffset + 1;
		indices[ ii +  7 ] = voffset + 2;
		indices[ ii +  8 ] = voffset + 4;

		indices[ ii +  9 ] = voffset + 2;
		indices[ ii + 10 ] = voffset + 5;
		indices[ ii + 11 ] = voffset + 4;

		indices[ ii + 12 ] = voffset + 3;
		indices[ ii + 13 ] = voffset + 4;
		indices[ ii + 14 ] = voffset + 6;

		indices[ ii + 15 ] = voffset + 4;
		indices[ ii + 16 ] = voffset + 7;
		indices[ ii + 17 ] = voffset + 6;

		indices[ ii + 18 ] = voffset + 4;
		indices[ ii + 19 ] = voffset + 5;
		indices[ ii + 20 ] = voffset + 7;

		indices[ ii + 21 ] = voffset + 5;
		indices[ ii + 22 ] = voffset + 8;
		indices[ ii + 23 ] = voffset + 7;
	}

	update( shape: EShape ): void {
		const buffer = this.buffer;
		this.updateCircleVertexAndStep( buffer, shape );
		this.updateColor( buffer, shape );
		this.updateCircleUv( buffer, shape );
		this.updateText( buffer, shape );
	}

	protected updateCircleVertexAndStep( buffer: EShapeBuffer, shape: EShape ) {
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

		if( isSizeChanged || isTransformChanged || isStrokeChanged ) {
			this.sizeX = sizeX;
			this.sizeY = sizeY;
			this.transformLocalId = transformLocalId;
			this.strokeWidth = strokeWidth;
			this.strokeAlign = strokeAlign;

			// Invalidate the text layout to update the text layout.
			this.textSpacingHorizontal = NaN;

			// Buffer
			buffer.vertexBuffer.update();
			buffer.stepBuffer.update();
			buffer.antialiasBuffer.update();
			this.doUpdateCircleVertexAndStep(
				buffer.vertices, this.vertexOffset, EShapeCircleUploaded.VERTEX_COUNT,
				buffer.steps, buffer.antialiases, buffer.clippings,
				0, 0,
				sizeX, sizeY,
				strokeAlign, strokeWidth, true,
				shape.transform.internalTransform,
				buffer.work, buffer.workStep
			);
		}
	}

	protected doUpdateCircleVertexAndStep(
		vertices: Float32Array,
		voffset: number,
		vcount: number,
		steps: Float32Array,
		antialiases: Float32Array,
		clippings: Float32Array,
		originX: number,
		originY: number,
		sizeX: number,
		sizeY: number,
		strokeAlign: number,
		strokeWidth: number,
		isStepsDirty: boolean,
		internalTransform: Matrix,
		work: Point,
		workStep: Float32Array
	): void {
		// Calculate the transformed positions
		//
		//  0       1       2
		// |-------|-------|
		// |3      |4      |5
		// |-------|-------|
		// |6      |7      |8
		// |-------|-------|
		//
		const s = strokeAlign * strokeWidth;
		const sx = sizeX * 0.5 + (0 <= sizeX ? +s : -s);
		const sy = sizeY * 0.5 + (0 <= sizeY ? +s : -s);
		work.set( -sx + originX, -sy + originY );
		internalTransform.apply( work, work );
		const x0 = work.x;
		const y0 = work.y;
		work.set( 0 + originX, -sy + originY );
		internalTransform.apply( work, work );
		const x1 = work.x;
		const y1 = work.y;
		const dx = x1 - x0;
		const dy = y1 - y0;
		work.set( originX, originY );
		internalTransform.apply( work, work );
		const x4 = work.x;
		const y4 = work.y;
		const x7 = x4 + (x4 - x1);
		const y7 = y4 + (y4 - y1);
		const x3 = x4 - dx;
		const y3 = y4 - dy;

		// Vertices
		const iv = voffset * 2;
		vertices[ iv +  0 ] = x0;
		vertices[ iv +  1 ] = y0;
		vertices[ iv +  2 ] = x1;
		vertices[ iv +  3 ] = y1;
		vertices[ iv +  4 ] = x1 + dx;
		vertices[ iv +  5 ] = y1 + dy;

		vertices[ iv +  6 ] = x3;
		vertices[ iv +  7 ] = y3;
		vertices[ iv +  8 ] = x4;
		vertices[ iv +  9 ] = y4;
		vertices[ iv + 10 ] = x4 + dx;
		vertices[ iv + 11 ] = y4 + dy;

		vertices[ iv + 12 ] = x7 - dx;
		vertices[ iv + 13 ] = y7 - dy;
		vertices[ iv + 14 ] = x7;
		vertices[ iv + 15 ] = y7;
		vertices[ iv + 16 ] = x7 + dx;
		vertices[ iv + 17 ] = y7 + dy;

		// Steps and antialiases
		if( isStepsDirty ) {
			const worldSizeX = this.calcLength( x0, y0, x1, y1 );
			this.calcStep( worldSizeX, strokeWidth, workStep );
			const swx = workStep[ 0 ];
			const px0 = workStep[ 1 ];
			const px1 = workStep[ 2 ];

			const worldSizeY = this.calcLength( x0, y0, x3, y3 );
			this.calcStep( worldSizeY, strokeWidth, workStep );
			const swy = workStep[ 0 ];
			const py0 = workStep[ 1 ];
			const py1 = workStep[ 2 ];

			this.updateStep(
				steps, antialiases, clippings,
				voffset, vcount,
				swx, swy, px0, py0, px1, py1
			);
		}
	}

	protected updateCircleUv( buffer: EShapeBuffer, shape: EShape ) {
		const texture = this.toTexture( shape );
		const textureTransformId = this.toTextureTransformId( texture );
		if( texture !== this.texture || textureTransformId !== this.textureTransformId ) {
			this.texture = texture;
			this.textureTransformId = textureTransformId;

			buffer.uvBuffer.update();
			const textureUvs = this.toTextureUvs( texture );
			this.doUpdateCircleUv( this.vertexOffset, textureUvs, buffer.uvs );
		}
	}

	protected doUpdateCircleUv(
		voffset: number,
		textureUvs: TextureUvs,
		uvs: Float32Array
	): void {
		const x0 = textureUvs.x0;
		const x1 = textureUvs.x1;
		const x2 = textureUvs.x2;
		const x3 = textureUvs.x3;
		const y0 = textureUvs.y0;
		const y1 = textureUvs.y1;
		const y2 = textureUvs.y2;
		const y3 = textureUvs.y3;

		// UVs
		const iuv = voffset * 2;
		uvs[ iuv +  0 ] = x0;
		uvs[ iuv +  1 ] = y0;
		uvs[ iuv +  2 ] = 0.5 * ( x0 + x1 );
		uvs[ iuv +  3 ] = 0.5 * ( y0 + y1 );
		uvs[ iuv +  4 ] = x1;
		uvs[ iuv +  5 ] = y1;

		uvs[ iuv +  6 ] = 0.5 * ( x0 + x3 );
		uvs[ iuv +  7 ] = 0.5 * ( y0 + y3 );
		uvs[ iuv +  8 ] = 0.5 * ( x0 + x2 );
		uvs[ iuv +  9 ] = 0.5 * ( y0 + y2 );
		uvs[ iuv + 10 ] = 0.5 * ( x1 + x2 );
		uvs[ iuv + 11 ] = 0.5 * ( y1 + y2 );

		uvs[ iuv + 12 ] = x3;
		uvs[ iuv + 13 ] = y3;
		uvs[ iuv + 14 ] = 0.5 * ( x3 + x2 );
		uvs[ iuv + 15 ] = 0.5 * ( y3 + y2 );
		uvs[ iuv + 16 ] = x2;
		uvs[ iuv + 17 ] = y2;
	}
}

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Matrix, Point, TextureUvs } from "pixi.js";
import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeTextUploaded } from "./e-shape-text-uploaded";

export class EShapeTriangleUploaded extends EShapeTextUploaded {
	static readonly VERTEX_COUNT = 7;
	static readonly INDEX_COUNT = 3;
	static readonly WORLD_SIZE: [ number, number, number ] = [ 0, 0, 0 ];

	init( shape: EShape ): this {
		super.init( shape );

		// Clippings
		const buffer = this.buffer;
		buffer.clippingBuffer.update();
		buffer.indexBuffer.update();
		this.doInitTriangle(
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

	protected doInitTriangle(
		clippings: Float32Array,
		indices: Uint16Array | Uint32Array,
		voffset: number,
		ioffset: number
	): void {
		// Clippings
		let iv = voffset * 3;
		clippings[ iv + 0 ] = 0;
		clippings[ iv + 1 ] = 0;
		clippings[ iv + 2 ] = 0;
		iv += 3;

		clippings[ iv + 0 ] = 1;
		clippings[ iv + 1 ] = 0;
		clippings[ iv + 2 ] = 0;
		iv += 3;

		clippings[ iv + 0 ] = 1;
		clippings[ iv + 1 ] = 0;
		clippings[ iv + 2 ] = 0;
		iv += 3;

		clippings[ iv + 0 ] = 0;
		clippings[ iv + 1 ] = 1;
		clippings[ iv + 2 ] = 0;
		iv += 3;

		clippings[ iv + 0 ] = 0;
		clippings[ iv + 1 ] = 1;
		clippings[ iv + 2 ] = 0;
		iv += 3;

		clippings[ iv + 0 ] = 1;
		clippings[ iv + 1 ] = 0;
		clippings[ iv + 2 ] = 0;
		iv += 3;

		clippings[ iv + 0 ] = 1;
		clippings[ iv + 1 ] = 0;
		clippings[ iv + 2 ] = 0;

		// Indices
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
	}

	update( shape: EShape ): void {
		const buffer = this.buffer;
		this.updateTriangleVertexStepAndUv( buffer, shape );
		this.updateColor( buffer, shape );
		this.updateText( buffer, shape );
	}

	protected updateTriangleVertexStepAndUv( buffer: EShapeBuffer, shape: EShape ): void {
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

			const worldSize = EShapeTriangleUploaded.WORLD_SIZE;
			const voffset = this.vertexOffset;
			const vcount = EShapeTriangleUploaded.VERTEX_COUNT;

			buffer.vertexBuffer.update();
			this.doUpdateTriangleVertex(
				buffer.vertices,
				voffset,
				0, 0,
				sizeX, sizeY,
				strokeAlign,
				strokeWidth,
				shape.transform.internalTransform,
				worldSize,
				buffer.work
			);

			if( isVertexChanged || isTransformChanged ) {
				buffer.stepBuffer.update();
				buffer.antialiasBuffer.update();
				this.doUpdateTriangleStep(
					buffer.steps,
					buffer.antialiases,
					buffer.clippings,
					voffset,
					vcount,
					strokeWidth,
					worldSize,
					buffer.workStep
				);
			}

			if( isVertexChanged || isTextureChanged ) {
				buffer.uvBuffer.update();
				this.doUpdateTriangleUv(
					buffer.uvs,
					this.toTextureUvs( texture ),
					voffset,
					worldSize
				);
			}
		}
	}

	protected doUpdateTriangleVertex(
		vertices: Float32Array,
		voffset: number,
		originX: number,
		originY: number,
		sizeX: number,
		sizeY: number,
		strokeAlign: number,
		strokeWidth: number,
		internalTransform: Matrix,
		worldSize: [ number, number, number ],
		work: Point
	): void {
		const s = strokeAlign * strokeWidth;
		const sx = sizeX * 0.5 + (0 <= sizeX ? +s : -s);
		const sy = sizeY * 0.5 + (0 <= sizeY ? +s : -s);
		const sz = Math.sqrt( sx * sx + 4 * sy * sy );
		const sw = 2 * sx * sy / (sx + sz);

		work.set( originX, originY - sy );
		internalTransform.apply( work, work );
		const x0 = work.x;
		const y0 = work.y;
		work.set( originX, originY );
		internalTransform.apply( work, work );
		const tx = work.x;
		const ty = work.y;
		work.set( originX + sx, originY );
		internalTransform.apply( work, work );
		const dx = tx - x0;
		const dy = ty - y0;
		const x1 = work.x + dx;
		const y1 = work.y + dy;
		const x2 = tx + (tx - work.x) + dx;
		const y2 = ty + (ty - work.y) + dy;
		work.set( originX, originY + sy - sw ); // Incenter of a triangle
		internalTransform.apply( work, work );
		const x3 = work.x;
		const y3 = work.y;

		// World size
		const xb = tx + dx;
		const yb = ty + dy;
		worldSize[ 0 ] = this.calcLength( xb, yb, x3, y3 );
		worldSize[ 1 ] = this.calcLength( x1, y1, xb, yb );
		worldSize[ 2 ] = this.calcLength( x0, y0, tx, ty );

		// Vertices
		const iv = voffset << 1;
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

	protected doUpdateTriangleStep(
		steps: Float32Array,
		antialiases: Float32Array,
		clippings: Float32Array,
		voffset: number,
		vcount: number,
		strokeWidth: number,
		worldSize: [ number, number, number ],
		workStep: Float32Array
	): void {
		this.calcStep( worldSize[ 0 ], strokeWidth, workStep );
		const swc = workStep[ 0 ];
		const pc0 = workStep[ 1 ];
		const pc1 = workStep[ 2 ];

		this.updateStep(
			steps,
			antialiases,
			clippings,
			voffset,
			vcount,
			swc, swc,
			pc0, pc0,
			pc1, pc1
		);
	}

	protected doUpdateTriangleUv(
		uvs: Float32Array,
		textureUvs: TextureUvs,
		voffset: number,
		worldSize: [ number, number, number ]
	): void {
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

		const c = 1 - 0.5 * worldSize[ 0 ] / worldSize[ 2 ];
		const x5 = x4 + c * ( x3 - x0 );
		const y5 = y4 + c * ( y3 - y0 );

		const iuv = voffset << 1;
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

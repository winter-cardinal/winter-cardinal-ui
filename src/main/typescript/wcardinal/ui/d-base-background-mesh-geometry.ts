/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Buffer, MeshGeometry, Texture, TextureUvs } from "pixi.js";
import { DCornerMask } from "./d-corner";

export class DBaseBackgroundMeshGeometry extends MeshGeometry {
	protected _texture: Texture;
	protected _width: number;
	protected _height: number;
	protected _borderSize: number;
	protected _cornerMask: DCornerMask;
	protected _isDirty: boolean;
	protected _textureId: number;
	protected _vertices: Float32Array;
	protected _uvs: Float32Array;
	protected _indices: Uint16Array;
	protected _vertexBuffer: Buffer;
	protected _uvBuffer: Buffer;
	protected _indexBuffer: Buffer;

	constructor( texture: Texture, width: number, height: number, borderSize: number, cornerMask: DCornerMask ) {
		super( new Float32Array( 56 ), new Float32Array( 56 ), new Uint16Array( 42 ) );

		this._width = width;
		this._height = height;
		this._texture = texture;
		this._borderSize = borderSize;
		this._cornerMask = cornerMask;
		this._isDirty = true;
		this._textureId = NaN;

		this._vertexBuffer = this.getBuffer( "aVertexPosition" );
		this._vertices = this._vertexBuffer.data as Float32Array;
		this._uvBuffer = this.getBuffer( "aTextureCoord" );
		this._uvs = this._uvBuffer.data as Float32Array;
		this._indexBuffer = this.getIndex();
		this._indices = this._indexBuffer.data as Uint16Array;
	}

	get borderSize(): number {
		return this._borderSize;
	}

	set borderSize( borderSize: number ) {
		if( this._borderSize !== borderSize ) {
			this._borderSize = borderSize;
			this._isDirty = true;
		}
	}

	get cornerMask(): DCornerMask {
		return this._cornerMask;
	}

	set cornerMask( cornerMask: DCornerMask ) {
		if( this._cornerMask !== cornerMask ) {
			this._cornerMask = cornerMask;
			this._isDirty = true;
		}
	}

	get width(): number {
		return this._width;
	}

	set width( width: number ) {
		if( this._width !== width ) {
			this._width = width;
			this._isDirty = true;
		}
	}

	get height(): number {
		return this._height;
	}

	set height( height: number ) {
		if( this._height !== height ) {
			this._height = height;
			this._isDirty = true;
		}
	}

	get texture(): Texture {
		return this._texture;
	}

	set texture( texture: Texture ) {
		if( this._texture !== texture ) {
			this._texture = texture;
			this._isDirty = true;
			this._textureId = NaN;
		}
	}

	protected getTextureId(): number {
		return (this._texture as any)._updateID;
	}

	protected fillVertices( iv: number, array: Float32Array, x0: number, x1: number, y0: number, y1: number ): void {
		array[ iv + 0 ] = x0;
		array[ iv + 1 ] = y0;
		array[ iv + 2 ] = x1;
		array[ iv + 3 ] = y0;
		array[ iv + 4 ] = x0;
		array[ iv + 5 ] = y1;
		array[ iv + 6 ] = x1;
		array[ iv + 7 ] = y1;
	}

	protected fillIndices( ii: number, indices: Uint16Array, iv: number ): void {
		indices[ ii + 0 ] = iv + 0;
		indices[ ii + 1 ] = iv + 1;
		indices[ ii + 2 ] = iv + 2;
		indices[ ii + 3 ] = iv + 1;
		indices[ ii + 4 ] = iv + 3;
		indices[ ii + 5 ] = iv + 2;
	}

	protected fillUvsCorner(
		iv: number, uvs: Float32Array, c: boolean,
		u0: number, u1: number, u2: number, u3: number,
		v0: number, v1: number, v2: number, v3: number
	): void {
		if( c ) {
			this.fillVertices( iv, uvs, u0, u1, v0, v1 );
		} else {
			this.fillVertices( iv, uvs, u3, u2, v0, v1 );
		}
	}

	protected fillUvs( iv: number, uvs: Float32Array, u0: number, u1: number, v0: number, v1: number ): void {
		this.fillVertices( iv, uvs, u0, u1, v0, v1 );
	}

	update(): void {
		const texture = this.texture as any;
		if( ! texture.valid ) {
			return;
		}
		const textureId = this.getTextureId();
		if( this._isDirty || this._textureId !== textureId ) {
			this._isDirty = false;
			this._textureId = textureId;
			const vertices = this._vertices;
			const uvs = this._uvs;
			const indices = this._indices;

			const width = this._width;
			const height = this._height;
			const borderSize = this._borderSize;

			const x0 = 0;
			const x1 = borderSize;
			const x2 = width - borderSize;
			const x3 = width;

			const y0 = 0;
			const y1 = borderSize;
			const y2 = height - borderSize;
			const y3 = height;

			const textureUvs: TextureUvs = texture._uvs;

			const l = textureUvs.x0;
			const r = textureUvs.x1;
			const t = textureUvs.y0;
			const b = textureUvs.y3;
			const w = (r - l) * (borderSize / texture.width);
			const h = (b - t) * (borderSize / texture.height);

			const u0 = l;
			const u1 = l + w;
			const u2 = r - w;
			const u3 = r;

			const v0 = t;
			const v1 = t + h;
			const v2 = b - h;
			const v3 = b;

			const cornerMask = this._cornerMask;
			const ctl = ! (cornerMask & DCornerMask.TOP_LEFT);
			const ctr = ! (cornerMask & DCornerMask.TOP_RIGHT);
			const cbl = ! (cornerMask & DCornerMask.BOTTOM_LEFT);
			const cbr = ! (cornerMask & DCornerMask.BOTTOM_RIGHT);

			// Vertices & UVs
			let iv = 0;
			let ia = 0;
			let ii = 0;

			// Top left
			this.fillVertices( iv, vertices, x0, x1, y0, y1 );
			this.fillUvsCorner( iv, uvs, ctl, u0, u1, u2, u3, v0, v1, v2, v3 );
			this.fillIndices( ii, indices, ia );
			iv += 8;
			ia += 4;
			ii += 6;

			// Top middle
			this.fillVertices( iv, vertices, x1, x2, y0, y1 );
			this.fillUvs( iv, uvs, u1, u2, v0, v1 );
			this.fillIndices( ii, indices, ia );
			iv += 8;
			ia += 4;
			ii += 6;

			// Top right
			this.fillVertices( iv, vertices, x3, x2, y0, y1 );
			this.fillUvsCorner( iv, uvs, ctr, u0, u1, u2, u3, v0, v1, v2, v3 );
			this.fillIndices( ii, indices, ia );
			iv += 8;
			ia += 4;
			ii += 6;

			// Middle
			this.fillVertices( iv, vertices, x0, x3, y1, y2 );
			this.fillUvs( iv, uvs, u0, u3, v1, v2 );
			this.fillIndices( ii, indices, ia );
			iv += 8;
			ia += 4;
			ii += 6;

			// Bottom left
			this.fillVertices( iv, vertices, x0, x1, y3, y2 );
			this.fillUvsCorner( iv, uvs, cbl, u0, u1, u2, u3, v0, v1, v2, v3 );
			this.fillIndices( ii, indices, ia );
			iv += 8;
			ia += 4;
			ii += 6;

			// Bottom middle
			this.fillVertices( iv, vertices, x1, x2, y2, y3 );
			this.fillUvs( iv, uvs, u1, u2, v2, v3 );
			this.fillIndices( ii, indices, ia );
			iv += 8;
			ia += 4;
			ii += 6;

			// Bottom right
			this.fillVertices( iv, vertices, x3, x2, y3, y2 );
			this.fillUvsCorner( iv, uvs, cbr, u3, u2, u1, u0, v3, v2, v1, v0 );
			this.fillIndices( ii, indices, ia );

			this._vertexBuffer.update();
			this._uvBuffer.update();
			this._indexBuffer.update();
		}
	}
}

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { MeshGeometry } from "pixi.js";
import { DynamicFontAtlas } from "./util/dynamic-font-atlas";
import { DynamicFontAtlasCharacter } from "./util/dynamic-font-atlas-character";

export class DDynamicTextGeometry extends MeshGeometry {
	protected static WORK: Uint32Array | null = null;
	width: number;
	height: number;

	constructor() {
		super( new Float32Array( 64 ), new Float32Array( 64 ), new Uint16Array( 48 ) );
		this.width = 0;
		this.height = 0;
	}

	update( text: string, atlas: DynamicFontAtlas | null, clippingWidth: number | undefined ): void {
		const vertexBuffer = this.getBuffer( "aVertexPosition" );
		const uvBuffer = this.getBuffer( "aTextureCoord" );
		const indexBuffer = this.getIndex();

		const result = this.measureText( text, atlas, clippingWidth );
		const requiredTextSize = Math.ceil( result[ 1 ] / 8 ) << 3;
		const requiredVertexSize = requiredTextSize << 3;
		if( (vertexBuffer.data as Float32Array).length < requiredVertexSize ) {
			vertexBuffer.data = new Float32Array( requiredVertexSize );
			uvBuffer.data = new Float32Array( requiredVertexSize );
		}
		const requiredIndexSize = requiredTextSize * 6;
		if( (indexBuffer.data as Uint16Array).length < requiredIndexSize ) {
			indexBuffer.data = new Uint16Array( requiredIndexSize );
		}

		const vertices = vertexBuffer.data as Float32Array;
		const uvs = uvBuffer.data as Float32Array;
		const indices = indexBuffer.data as Uint16Array;

		if( atlas != null ) {
			let x = 0;
			let y = 0;
			let ichar = 0;
			for( let i = 0, imax = result[ 0 ]; i < imax; ++i ) {
				const k = (1 + i) * 3;
				for( let j = result[ k + 0 ], jmax = result[ k + 1 ]; j < jmax; j += 1, ichar += 1 ) {
					const a = atlas.get( text[ j ] );
					if( a != null ) {
						this.writeCharacter(
							vertices, uvs, indices,
							ichar, x, y,
							a, atlas.width, atlas.height
						);
						x += a.advance;
					} else {
						this.writeCharacterEmpty( vertices, uvs, indices, ichar );
					}
				}
				if( result[ k + 2 ] ) {
					const a = atlas.get( "..." );
					if( a != null ) {
						this.writeCharacter(
							vertices, uvs, indices,
							ichar, x, y,
							a, atlas.width, atlas.height
						);
						x += a.advance;
					} else {
						this.writeCharacterEmpty( vertices, uvs, indices, ichar );
					}
					ichar += 1;
				}
				x = 0;
				y += atlas.font.height;
			}
			for( let i = ichar, imax = vertices.length >> 3; i < imax; ++i ) {
				this.writeCharacterEmpty( vertices, uvs, indices, i );
			}
			this.width = result[ 2 ];
			this.height = y;
		} else {
			for( let i = 0, imax = vertices.length >> 3; i < imax; ++i ) {
				this.writeCharacterEmpty( vertices, uvs, indices, i );
			}
			this.width = 0;
			this.height = 0;
		}

		vertexBuffer.update();
		uvBuffer.update();
		indexBuffer.update();
	}

	protected writeCharacter(
		vertices: Float32Array, uvs: Float32Array, indices: Uint16Array,
		index: number, x: number, y: number,
		character: DynamicFontAtlasCharacter,
		width: number, height: number
	): void {
		const offsetX = character.x - character.origin.x;
		const offsetY = 0;

		const iv = index << 3;
		vertices[ iv + 0 ] = x + offsetX;
		vertices[ iv + 1 ] = y + offsetY;
		vertices[ iv + 2 ] = x + offsetX + character.width;
		vertices[ iv + 3 ] = y + offsetY;
		vertices[ iv + 4 ] = x + offsetX + character.width;
		vertices[ iv + 5 ] = y + offsetY + character.height;
		vertices[ iv + 6 ] = x + offsetX;
		vertices[ iv + 7 ] = y + offsetY + character.height;

		const x0 = character.x / width;
		const y0 = character.y / height;
		const x1 = ( character.x + character.width ) / width;
		const y1 = ( character.y + character.height ) / height;
		uvs[ iv + 0 ] = x0;
		uvs[ iv + 1 ] = y0;
		uvs[ iv + 2 ] = x1;
		uvs[ iv + 3 ] = y0;
		uvs[ iv + 4 ] = x1;
		uvs[ iv + 5 ] = y1;
		uvs[ iv + 6 ] = x0;
		uvs[ iv + 7 ] = y1;

		const ii = index * 6;
		const vo = index << 2;
		indices[ ii + 0 ] = vo + 0;
		indices[ ii + 1 ] = vo + 1;
		indices[ ii + 2 ] = vo + 3;
		indices[ ii + 3 ] = vo + 1;
		indices[ ii + 4 ] = vo + 2;
		indices[ ii + 5 ] = vo + 3;
	}

	protected writeCharacterEmpty(
		vertices: Float32Array, uvs: Float32Array, indices: Uint16Array,
		index: number
	): void {
		const iv = index << 3;
		vertices[ iv + 0 ] = 0;
		vertices[ iv + 1 ] = 0;
		vertices[ iv + 2 ] = 0;
		vertices[ iv + 3 ] = 0;
		vertices[ iv + 4 ] = 0;
		vertices[ iv + 5 ] = 0;
		vertices[ iv + 6 ] = 0;
		vertices[ iv + 7 ] = 0;

		uvs[ iv + 0 ] = 0;
		uvs[ iv + 1 ] = 0;
		uvs[ iv + 2 ] = 0;
		uvs[ iv + 3 ] = 0;
		uvs[ iv + 4 ] = 0;
		uvs[ iv + 5 ] = 0;
		uvs[ iv + 6 ] = 0;
		uvs[ iv + 7 ] = 0;

		const ii = index * 6;
		const vo = index << 2;
		indices[ ii + 0 ] = vo + 0;
		indices[ ii + 1 ] = vo + 1;
		indices[ ii + 2 ] = vo + 3;
		indices[ ii + 3 ] = vo + 1;
		indices[ ii + 4 ] = vo + 2;
		indices[ ii + 5 ] = vo + 3;
	}

	protected measureText(
		text: string, atlas: DynamicFontAtlas | null, clippingWidth: number | undefined
	): Uint32Array {
		let result = DDynamicTextGeometry.WORK = DDynamicTextGeometry.WORK || new Uint32Array( 3 * 16 );
		result[ 0 ] = 0;
		result[ 1 ] = 0;
		result[ 2 ] = 0;
		result[ 3 ] = 0;
		if( atlas != null ) {
			let x = 0;
			const l = text.length;
			for( let i = 0; i < l; ++i ) {
				const char = text[ i ];
				if( char === "\n" ) {
					result = this.setResult( result, i, false, x, i + 1 );
					x = 0;
				} else {
					const a = atlas.get( char );
					if( a != null ) {
						if( clippingWidth != null && clippingWidth < x + a.advance ) {
							const dots = atlas.get( "..." );
							const iend = ( (dots != null && clippingWidth < x + dots.advance) ? i - 1 : i );
							let inext = i + 1;
							for( ; inext < l; ++inext ) {
								if( text[ inext ] === "\n" ) {
									inext += 1;
									break;
								}
							}
							result = this.setResult( result, iend, true, x, inext );
							i = inext - 1;
							x = 0;
						} else {
							x += a.advance;
						}
					}
				}
			}
			result = this.setResult( result, l, false, x, l );
		}
		return result;
	}

	protected setResult( result: Uint32Array, iend: number, hasDots: boolean, x: number, inext: number ): Uint32Array {
		const iresult = ( 1 + result[ 0 ] ) * 3;
		let istart = result[ iresult + 0 ];
		if( istart < iend || hasDots ) {
			istart = Math.min( istart, iend );
			result[ iresult + 0 ] = istart;
			result[ iresult + 1 ] = iend;
			result[ iresult + 2 ] = ( hasDots ? 1 : 0 );
			if( result.length <= iresult + 3 ) {
				const newResult = new Uint32Array( result.length + 3 * 16 );
				newResult.set( result );
				result = newResult;
				DDynamicTextGeometry.WORK = newResult;
			}
			result[ 0 ] += 1;
			result[ 1 ] += iend - istart;
			result[ 2 ] = Math.max( result[ 2 ], Math.ceil( x ) );
			result[ iresult + 3 ] = inext;
		} else {
			result[ iresult + 0 ] = inext;
		}
		return result;
	}
}

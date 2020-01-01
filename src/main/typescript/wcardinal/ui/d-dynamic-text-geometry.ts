/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { MeshGeometry } from "pixi.js";
import { DDynamicTextMeasure } from "./d-dynamic-text-measure";
import { DynamicFontAtlas } from "./util/dynamic-font-atlas";
import { DynamicFontAtlasCharacter } from "./util/dynamic-font-atlas-character";

export class DDynamicTextGeometry extends MeshGeometry {
	width: number;
	height: number;
	clipped: boolean;

	constructor() {
		super( new Float32Array( 64 ), new Float32Array( 64 ), new Uint16Array( 48 ) );
		this.width = 0;
		this.height = 0;
		this.clipped = false;
	}

	update( text: string, atlas: DynamicFontAtlas | null, clippingWidth: number | undefined ): void {
		const vertexBuffer = this.getBuffer( "aVertexPosition" );
		const uvBuffer = this.getBuffer( "aTextureCoord" );
		const indexBuffer = this.getIndex();

		const result = DDynamicTextMeasure.measure( text, atlas, clippingWidth );
		const requiredTextSize = Math.ceil( result.count / 8 ) << 3;
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
			const count = result.count;
			const characters = result.characters;
			for( let i = 0; i < count; ++i ) {
				const character = characters[ i ];
				this.writeCharacter(
					vertices, uvs, indices,
					i, character.x, character.y,
					character.character, atlas.width, atlas.height
				);
			}
			for( let i = count, imax = vertices.length >> 3; i < imax; ++i ) {
				this.writeCharacterEmpty( vertices, uvs, indices, i );
			}
			this.width = result.width;
			this.height = result.height;
			this.clipped = result.clipped;
		} else {
			for( let i = 0, imax = vertices.length >> 3; i < imax; ++i ) {
				this.writeCharacterEmpty( vertices, uvs, indices, i );
			}
			this.width = 0;
			this.height = 0;
			this.clipped = false;
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
}

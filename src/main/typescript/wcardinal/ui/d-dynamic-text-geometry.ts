/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Buffer, MeshGeometry } from "pixi.js";
import { DDynamicTextMeasure } from "./d-dynamic-text-measure";
import { DDynamicTextStyleWordWrap } from "./d-dynamic-text-style-word-wrap";
import { DynamicFontAtlas } from "./util/dynamic-font-atlas";
import { DynamicFontAtlasCharacter } from "./util/dynamic-font-atlas-character";

export interface DDynamicTextGeometryModifier {
	clipping: boolean;
	fitting: boolean;
	wordWrap: DDynamicTextStyleWordWrap;
	width: number;
	height: number;
	lineHeight: number;
}

export class DDynamicTextGeometry extends MeshGeometry {
	protected static VERTICES?: Float32Array;
	protected static UVS?: Float32Array;
	protected static INDICES?: Uint16Array;

	width: number;
	height: number;
	scale: number;
	scaled: boolean;
	clipped: boolean;

	nchars: number;
	vertexBuffer: Buffer;
	vertices: Float32Array;
	uvBuffer: Buffer;
	uvs: Float32Array;
	indexBuffer: Buffer;
	indices: Uint16Array;

	constructor() {
		super(
			(DDynamicTextGeometry.VERTICES ??= new Float32Array(0)),
			(DDynamicTextGeometry.UVS ??= new Float32Array(0)),
			(DDynamicTextGeometry.INDICES ??= new Uint16Array(0))
		);
		this.width = 0;
		this.height = 0;
		this.scale = 1;
		this.scaled = false;
		this.clipped = false;

		this.vertexBuffer = this.getBuffer("aVertexPosition");
		this.vertices = DDynamicTextGeometry.VERTICES;
		this.uvBuffer = this.getBuffer("aTextureCoord");
		this.uvs = DDynamicTextGeometry.UVS;
		this.indexBuffer = this.getIndex();
		this.indices = DDynamicTextGeometry.INDICES;

		this.nchars = 0;
	}

	update(
		text: string,
		atlas: DynamicFontAtlas | null,
		modifier: DDynamicTextGeometryModifier
	): void {
		const result = DDynamicTextMeasure.measure(text, atlas, modifier);
		const resultCount = result.count;
		let nchars = ((resultCount >> 3) + (resultCount & 0x7 ? 1 : 0)) << 3;
		if (this.nchars < nchars) {
			this.nchars = nchars;

			const nvertex = nchars << 3;
			this.vertices = new Float32Array(nvertex);
			this.uvs = new Float32Array(nvertex);
			this.vertexBuffer.data = this.vertices;
			this.uvBuffer.data = this.uvs;

			const nindex = (nchars << 2) + (nchars << 1);
			this.indices = new Uint16Array(nindex);
			this.indexBuffer.data = this.indices;
			this.initIndices(this.indices);
			this.indexBuffer.update();
		} else {
			nchars = this.nchars;
		}
		if (nchars <= 0) {
			return;
		}

		const vertices = this.vertices;
		const uvs = this.uvs;
		if (atlas != null) {
			const characters = result.characters;
			const scale = result.scale;
			const fw = 1 / atlas.width;
			const fh = 1 / atlas.height;
			for (let i = 0; i < resultCount; ++i) {
				const character = characters[i];
				const cx = character.x;
				const cy = character.y;
				const cc = character.character;
				this.fill(vertices, uvs, i, cx, cy, scale, cc, fw, fh);
			}
			for (let i = resultCount; i < nchars; ++i) {
				this.fillBlank(vertices, uvs, i);
			}
			this.width = result.width * scale;
			this.height = result.height * scale;
			this.scale = scale;
			this.scaled = result.scaled;
			this.clipped = result.clipped;
		} else {
			for (let i = 0; i < nchars; ++i) {
				this.fillBlank(vertices, uvs, i);
			}
			this.width = 0;
			this.height = 0;
			this.scale = 1;
			this.scaled = false;
			this.clipped = false;
		}
		this.vertexBuffer.update();
		this.uvBuffer.update();
	}

	protected fill(
		vertices: Float32Array,
		uvs: Float32Array,
		index: number,
		x: number,
		y: number,
		scale: number,
		character: DynamicFontAtlasCharacter,
		fw: number,
		fh: number
	): void {
		const cx = character.x;
		const cy = character.y;
		const cw = character.width;
		const ch = character.height;
		const cox = character.origin.x;

		const x0 = (x + (cx - cox)) * scale;
		const y0 = y * scale;
		const x1 = x0 + cw * scale;
		const y1 = y0 + ch * scale;

		const iv = index << 3;
		vertices[iv + 0] = x0;
		vertices[iv + 1] = y0;
		vertices[iv + 2] = x1;
		vertices[iv + 3] = y0;
		vertices[iv + 4] = x1;
		vertices[iv + 5] = y1;
		vertices[iv + 6] = x0;
		vertices[iv + 7] = y1;

		const u0 = cx * fw;
		const v0 = cy * fh;
		const u1 = (cx + cw) * fw;
		const v1 = (cy + ch) * fh;

		uvs[iv + 0] = u0;
		uvs[iv + 1] = v0;
		uvs[iv + 2] = u1;
		uvs[iv + 3] = v0;
		uvs[iv + 4] = u1;
		uvs[iv + 5] = v1;
		uvs[iv + 6] = u0;
		uvs[iv + 7] = v1;
	}

	protected fillBlank(vertices: Float32Array, uvs: Float32Array, index: number): void {
		const iv = index << 3;
		vertices[iv + 0] = 0;
		vertices[iv + 1] = 0;
		vertices[iv + 2] = 0;
		vertices[iv + 3] = 0;
		vertices[iv + 4] = 0;
		vertices[iv + 5] = 0;
		vertices[iv + 6] = 0;
		vertices[iv + 7] = 0;

		uvs[iv + 0] = 0;
		uvs[iv + 1] = 0;
		uvs[iv + 2] = 0;
		uvs[iv + 3] = 0;
		uvs[iv + 4] = 0;
		uvs[iv + 5] = 0;
		uvs[iv + 6] = 0;
		uvs[iv + 7] = 0;
	}

	protected initIndices(indices: Uint16Array): void {
		for (let iv = 0, ivmax = this.nchars << 2, ii = 0; iv < ivmax; iv += 4, ii += 6) {
			indices[ii] = iv;
			indices[ii + 1] = iv + 1;
			indices[ii + 2] = iv + 3;
			indices[ii + 3] = iv + 1;
			indices[ii + 4] = iv + 2;
			indices[ii + 5] = iv + 3;
		}
	}
}

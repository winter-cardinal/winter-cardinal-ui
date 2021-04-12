/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import {
	Buffer,
	Geometry,
	Mesh,
	Point,
	Rectangle,
	Shader,
	Texture,
	TextureUvs,
	utils
} from "pixi.js";
import { DApplications } from "./d-applications";
import { DColorGradient } from "./d-color-gradient";

const VERTEX_SHADER = `
attribute vec2 aPosition;
attribute vec2 aUv;
attribute vec4 aColor;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;

varying vec2 vUv;
varying vec4 vColor;

void main(void) {
	vec3 position = vec3(aPosition.x, aPosition.y, 1.0);
	gl_Position = vec4((projectionMatrix * translationMatrix * position).xy, 0.0, 1.0);
	vUv = aUv;
	vColor = aColor;
}
`;

const FRAGMENT_SHADER = `
varying vec2 vUv;
varying vec4 vColor;

uniform sampler2D uSampler;
uniform vec2 uCheckerColors;

void main(void) {
	vec4 texture = texture2D(uSampler, vUv);
	float cy = step( 1.0, mod( gl_FragCoord.y / 10.0, 2.0 ) );
	float cx = step( 1.0, mod( gl_FragCoord.x / 10.0 + cy, 2.0 ) );
	float c = mix( uCheckerColors.x, uCheckerColors.y, cx );
	gl_FragColor = texture * vec4( mix( vec3( c ), vColor.xyz, vColor.a ), 1.0 );
}`;

type Parts = Array<{ data: DColorGradient | null; rect: Rectangle }>;

export class DPickerColorGradientView extends Mesh {
	protected _nPointsPerData: number;
	protected _vertices: Float32Array;
	protected _uvs: Float32Array;
	protected _colors: Float32Array;
	protected _indices: Uint16Array;
	protected _lastHitIndex: number;

	protected _workColor: number[];
	protected _workPoint: Point;

	protected _parts: Parts;

	protected constructor(
		nPointsPerData: number,
		vertices: Float32Array,
		uvs: Float32Array,
		colors: Float32Array,
		indices: Uint16Array,
		parts: Parts,
		geometry: Geometry,
		shader: Shader
	) {
		super(geometry, shader);

		this.interactive = true;
		this.interactiveChildren = false;
		this.cursor = "pointer";

		this._nPointsPerData = nPointsPerData;
		this._vertices = vertices;
		this._uvs = uvs;
		this._colors = colors;
		this._indices = indices;
		this._lastHitIndex = -1;
		this._workColor = [0, 0, 0];
		this._workPoint = new Point();
		this._parts = parts;

		shader.uniforms.uSampler.on("update", (): void => {
			this.update();
			DApplications.update(this);
		});
		this.update();
	}

	getRectangle(index: number): Rectangle | null {
		const parts = this._parts;
		if (0 <= index && index < parts.length) {
			return parts[index].rect;
		}
		return null;
	}

	setRectangle(index: number, x: number, y: number, width: number, height: number): void {
		const parts = this._parts;
		if (0 <= index && index < parts.length) {
			const rect = parts[index].rect;
			rect.x = x;
			rect.y = y;
			rect.width = width;
			rect.height = height;
		}
	}

	getData(index: number): DColorGradient | null {
		const parts = this._parts;
		if (0 <= index && index < parts.length) {
			return parts[index].data;
		}
		return null;
	}

	setData(index: number, data: DColorGradient | null): void {
		const parts = this._parts;
		if (0 <= index && index < parts.length) {
			parts[index].data = data;
		}
	}

	getLastHitIndex(): number {
		return this._lastHitIndex;
	}

	private setColors(ic: number, colors: Float32Array, rgb: number[], alpha: number) {
		colors[ic + 0] = rgb[0];
		colors[ic + 1] = rgb[1];
		colors[ic + 2] = rgb[2];
		colors[ic + 3] = alpha;
		colors[ic + 4] = rgb[0];
		colors[ic + 5] = rgb[1];
		colors[ic + 6] = rgb[2];
		colors[ic + 7] = alpha;
	}

	private setColorsHex(ic: number, colors: Float32Array, color: number, alpha: number) {
		const rgb = utils.hex2rgb(color, this._workColor);
		this.setColors(ic, colors, rgb, alpha);
	}

	private setColorsWhite(ic: number, colors: Float32Array) {
		const rgb = this._workColor;
		rgb[0] = 1;
		rgb[1] = 1;
		rgb[2] = 1;
		this.setColors(ic, colors, rgb, 0);
	}

	private setColorsPoint(ic: number, data: DColorGradient, index: number, colors: Float32Array) {
		const point = data.points[index];
		if (point != null) {
			this.setColorsHex(ic, colors, point.color, point.alpha);
		} else {
			this.setColorsWhite(ic, colors);
		}
	}

	protected setVertices(
		iv: number,
		vertices: Float32Array,
		position: number,
		rect: Rectangle
	): void {
		const y = rect.y + rect.height * position;
		vertices[iv + 0] = rect.x;
		vertices[iv + 1] = y;
		vertices[iv + 2] = rect.x + rect.width;
		vertices[iv + 3] = y;
	}

	protected setUvs(
		iv: number,
		uvs: Float32Array,
		position: number,
		textureUvs: TextureUvs
	): void {
		const x0 = textureUvs.x0 + (textureUvs.x3 - textureUvs.x0) * position;
		const y0 = textureUvs.y0 + (textureUvs.y3 - textureUvs.y0) * position;
		const x1 = textureUvs.x1 + (textureUvs.x2 - textureUvs.x1) * position;
		const y1 = textureUvs.y1 + (textureUvs.y2 - textureUvs.y1) * position;
		uvs[iv + 0] = x0;
		uvs[iv + 1] = y0;
		uvs[iv + 2] = x1;
		uvs[iv + 3] = y1;
	}

	private newIndices(ii: number, iv: number, size: number, indices: Uint16Array): Uint16Array {
		for (let i = 0; i < size; ++i) {
			indices[ii + 0] = iv + 0;
			indices[ii + 1] = iv + 1;
			indices[ii + 2] = iv + 2;

			indices[ii + 3] = iv + 2;
			indices[ii + 4] = iv + 1;
			indices[ii + 5] = iv + 3;

			ii += 6;
			iv += 2;
		}
		return indices;
	}

	protected _calculateBounds(): void {
		const rect = this._parts[0].rect;
		const bounds = this._bounds;
		const work = this._workPoint;
		work.set(rect.x, rect.y);
		bounds.addPoint(work);
		work.set(rect.x + rect.width, rect.y + rect.height);
		bounds.addPoint(work);
	}

	update(): void {
		const vertices = this._vertices;
		const uvs = this._uvs;
		const colors = this._colors;
		const indices = this._indices;

		const texture = this.shader.uniforms.uSampler;
		if (texture._uvs == null) {
			texture.updateUvs();
		}
		const textureUvs: TextureUvs = texture._uvs;

		let iv = 0;
		let nv = 0;
		let ic = 0;
		let ii = 0;

		const parts = this._parts;
		for (let i = 0, imax = parts.length; i < imax; ++i) {
			const data = parts[i].data;
			const rect = parts[i].rect;
			if (data == null) {
				this.setVertices(iv, vertices, 0, rect);
				this.setUvs(iv, uvs, 0, textureUvs);
				this.setColorsWhite(ic, colors);
				this.setVertices(iv + 4, vertices, 1, rect);
				this.setUvs(iv, uvs, 1, textureUvs);
				this.setColorsWhite(ic + 8, colors);
				this.newIndices(ii, nv, 1, indices);
				iv += 4 * 2;
				ic += 4 * 4;
				nv += 4;
				ii += 6;
			} else {
				this.setVertices(iv, vertices, 0, rect);
				this.setUvs(iv, uvs, 0, textureUvs);
				this.setColorsPoint(ic, data, 0, colors);
				iv += 2 * 2;
				ic += 2 * 4;
				const pointSize = data.points.length;
				for (let j = 0, jmax = Math.min(pointSize, this._nPointsPerData); j < jmax; ++j) {
					const point = data.points[j];
					this.setVertices(iv, vertices, point.position, rect);
					this.setUvs(iv, uvs, point.position, textureUvs);
					this.setColorsHex(ic, colors, point.color, point.alpha);
					iv += 2 * 2;
					ic += 2 * 4;
				}
				this.setVertices(iv, vertices, 1, rect);
				this.setUvs(iv, uvs, 1, textureUvs);
				this.setColorsPoint(ic, data, pointSize - 1, colors);
				iv += 2 * 2;
				ic += 2 * 4;

				this.newIndices(ii, nv, pointSize + 1, indices);
				ii += (pointSize + 1) * 6;
				nv += (pointSize + 2) * 2;
			}
		}

		this.size = ii;

		const geometry = this.geometry;
		geometry.getBuffer("aPosition").update();
		geometry.getBuffer("aUv").update();
		geometry.getBuffer("aColor").update();
		geometry.getIndex().update();
	}

	containsPoint(point: Point): boolean {
		const local = this.toLocal(point, undefined, this._workPoint);
		const parts = this._parts;
		for (let i = 0, imax = parts.length; i < imax; ++i) {
			const rect = parts[i].rect;
			if (rect.contains(local.x, local.y)) {
				this._lastHitIndex = i;
				return true;
			}
		}
		return false;
	}

	static from(
		size: number,
		nPointsPerData: number,
		checkerColors: [number, number],
		texture: Texture = Texture.WHITE
	): DPickerColorGradientView {
		const vertices = new Float32Array(size * (nPointsPerData + 2) * 2 * 2);
		const uvs = new Float32Array(size * (nPointsPerData + 2) * 2 * 2);
		const colors = new Float32Array(size * (nPointsPerData + 2) * 2 * 4);
		const indices = new Uint16Array(size * (nPointsPerData + 1) * 6);

		const parts: Parts = [];
		for (let i = 0; i < size; ++i) {
			parts.push({
				data: null,
				rect: new Rectangle()
			});
		}

		const geometry = new Geometry()
			.addIndex(new Buffer(indices, false, true))
			.addAttribute("aPosition", new Buffer(vertices, false, false), 2)
			.addAttribute("aUv", new Buffer(uvs, false, false), 2)
			.addAttribute("aColor", new Buffer(colors, false, false), 4);
		const shader = Shader.from(VERTEX_SHADER, FRAGMENT_SHADER, {
			uSampler: texture,
			uCheckerColors: checkerColors
		});

		return new DPickerColorGradientView(
			nPointsPerData,
			vertices,
			uvs,
			colors,
			indices,
			parts,
			geometry,
			shader
		);
	}
}

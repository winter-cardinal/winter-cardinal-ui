/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import {
	BaseTexture,
	BLEND_MODES,
	ObjectRenderer,
	Renderer,
	Shader,
	Texture,
	utils
} from "pixi.js";
import { DynamicAtlas } from "../util/dynamic-atlas";
import { DynamicAtlasItemImage } from "../util/dynamic-atlas-item-image";
import { DynamicSDFFontAtlases } from "../util/dynamic-sdf-font-atlases";
import { EShape } from "./e-shape";
import { EShapeBuffer } from "./e-shape-buffer";
import { EShapeContainer } from "./e-shape-container";
import { EShapeRendererIterator } from "./e-shape-renderer-iterator";

const VERTEX_SHADER = `
attribute highp vec2 aPosition;
attribute highp vec2 aStepA;
attribute highp vec4 aStepB;
attribute highp vec3 aColor;
attribute highp vec2 aUv;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mediump float shapeScale;
uniform mediump float antialiasWeight;

varying mediump float vType;
varying mediump vec2 vStepA;
varying mediump vec4 vStepB;
varying mediump vec4 vColorFill;
varying mediump vec4 vColorStroke;
varying mediump vec2 vUv;

vec2 toInverse(in vec2 v) {
	return vec2(-v.y, v.x);
}

vec4 toGeneral(in float v) {
	vec4 c = vec4(1.0, 1.0/64.0, 1.0/64.0/64.0, 1.0/64.0/64.0/64.0) * v;
	c -= fract(c);
	c -= c.yzwx * vec4(64.0, 64.0, 64.0, 0.0);
	return c;
}

float toStrokeWidthScale(in float scale) {
	return (
		scale == 3.0 || scale == 7.0 ?
		shapeScale : (
			scale == 1.0 || scale == 5.0 ?
			min(1.0, shapeScale) : (
				scale == 2.0 || scale == 6.0 ?
				max(1.0, shapeScale) : 1.0
			)
		)
	);
}

vec2 toUnpackedF2x1024(in float v) {
	vec2 c = vec2(1.0, 1.0/1024.0) * v;
	c -= fract(c);
	c -= c.yx * vec2(1024.0, 0.0);
	c /= vec2(1023.0, 1023.0);
	return c;
}

vec3 toUnpackedF3x256(in float v) {
	vec3 c = vec3(1.0, 1.0/256.0, 1.0/256.0/256.0) * v;
	c -= fract(c);
	c -= c.yzx * vec3(256.0, 256.0, 0.0);
	c /= 255.0;
	return c;
}

vec2 toPosition012(in vec2 v) {
	return (projectionMatrix * translationMatrix * vec3(v, 1.0)).xy;
}

vec4 toStepB01(in vec4 sb) {
	return vec4(sb.xy, toUnpackedF2x1024(sb.z));
}

vec4 toStepB2(in vec4 sb, in float strokeWidth) {
	float x = min(0.4, 0.4 / 12.0 * sb.x * antialiasWeight);
	float w = clamp(strokeWidth, 0.0, 1.0) * 0.4;
	float p = w * sb.y + sb.z;
	float y = 0.5 - p;
	float z = 0.5 - p - w;
	return vec4(y, z, y - max(0.01, y - x), z - max(0.01, z - x));
}

vec2 toPosition3(in float type, in vec2 p, in float npacked, in float length, in float strokeWidth, out float shift) {
	vec3 t = vec3(1.0, 1.0/1024.0, 1.0/1024.0/1024.0) * npacked;
	t -= fract(t);
	t -= t.yzx * vec3(1024.0, 1024.0, 0.0);
	t *= vec3(1.0/511.5, 1.0/511.5, 1.0);
	t -= vec3(1.0, 1.0, 0.0);
	vec2 n0 = vec2(t.x, ((0.5 < t.z && t.z < 1.5) || 2.5 < t.z ? +1.0 : -1.0) * sqrt(max(0.0, 1.0 - t.x * t.x)));
	vec2 n1 = vec2(t.y, (1.5 < t.z ? +1.0 : -1.0) * sqrt(max(0.0, 1.0 - t.y * t.y)));

	vec2 n0i = toInverse(n0);
	vec2 n1i = toInverse(n1);
	float direction = sign(4.5 - type);

	// Offset
	float cross = dot(n0i, n1);
	bool bcross = 0.00001 < abs(cross);
	float crossi = (bcross ? 1.0 / cross : 0.0);
	float b = dot(n1 - n0, n0) * crossi;
	float offsetSize = direction * strokeWidth * 0.5;
	vec2 offset = n1 + n1i * b;

	// Miter
	vec2 pmiter = p + offsetSize * offset;
	float miterAngle0 = dot( n0i, offsetSize * offset - length * n0i );
	float miterAngle1 = dot( n1i, offsetSize * offset + length * n1i );
	float miterLength = dot( offset, offset );
	float miterSide = direction * cross;

	// Bevel
	vec2 n = (type == 4.0 || type == 6.0 ? n1 : n0);
	vec2 pbevel = p + offsetSize * n;

	//
	vec2 presult = (
		0.0 <= miterSide ?
		(miterAngle0 < 0.0 && 0.0 <= miterAngle1 && bcross ? pmiter : pbevel) :
		(miterLength < 6.0 && bcross ? pmiter : pbevel)
	);
	vec2 ni = (type == 4.0 || type == 6.0 ? n1i : n0i);
	shift = dot(ni, p - presult);
	return toPosition012(presult);
}

vec2 toStepA3(in float type, in float strokeWidth) {
	return vec2(type < 4.5 ? 1.0 : 0.0, strokeWidth);
}

vec4 toStepB3(in float shift, in float dash, in float strokeScaling, in float strokeWidthScale) {
	float l = aStepB.y + shift;
	float s = aStepA.x * (
		strokeScaling == 4.0 || strokeScaling == 5.0 ||
		strokeScaling == 6.0 || strokeScaling == 7.0 ?
		strokeWidthScale : 1.0
	);
	float lt = aStepB.z;
	return (dash < 0.5 ?
		vec4(l, 2.0 * abs(lt), 0.0, lt) :
		(dash < 3.5 ?
			(dash < 1.5 ?
				vec4(l, s, s, lt) :
				(2.5 < dash ?
					vec4(l, s, 2.0 * s, lt) :
					vec4(l, s, 0.5 * s, lt)
				)
			) :
			(dash < 4.5 ?
				vec4(l, 2.0 * s, s, lt) :
				(5.5 < dash ?
					vec4(l, 2.0 * s, 2.0 * s, lt) :
					vec4(l, 2.0 * s, 0.5 * s, lt)
				)
			)
		)
	);
}

void toColors(in vec3 source, out vec4 fillColor, out vec4 strokeColor) {
	vec2 a = toUnpackedF2x1024(source.z);
	fillColor.xyz = toUnpackedF3x256(source.x).zyx * a.x;
	fillColor.w = a.x;
	strokeColor.xyz = toUnpackedF3x256(source.y).zyx * a.y;
	strokeColor.w = a.y;
}

void main(void) {
	vec4 general = toGeneral(aStepA.y);
	float type = general.x;
	float strokeScaling = general.y;
	float strokeWidthScale = toStrokeWidthScale(strokeScaling);
	float strokeWidth = strokeWidthScale * aStepA.x;

	// Type 0, 1
	vec2 p012 = toPosition012(aPosition);
	vec2 sa012 = strokeWidth * general.zw;
	vec4 sb01 = toStepB01(aStepB);

	// Type 2
	vec4 sb2 = toStepB2(aStepB, strokeWidth);

	// Type 3 ~ 6
	float shift3 = 0.0;
	vec2 p3 = toPosition3(type, aPosition, aStepB.x, aStepB.w, strokeWidth, shift3);
	vec2 sa3 = toStepA3(type, strokeWidth);
	vec4 sb3 = toStepB3(shift3, general.z, strokeScaling, strokeWidthScale);

	//
	gl_Position = vec4((2.5 < type ? p3 : p012), 0.0, 1.0);
	vType = type;
	vStepA = (2.5 < type ? sa3 : sa012);
	vStepB = (1.5 < type ? (2.5 < type ? sb3 : sb2) : sb01);
	toColors(aColor, vColorFill, vColorStroke);
	vUv = aUv;
}`;

const FRAGMENT_SHADER = `
varying mediump float vType;
varying mediump vec2 vStepA;
varying mediump vec4 vStepB;
varying mediump vec4 vColorFill;
varying mediump vec4 vColorStroke;
varying mediump vec2 vUv;

uniform sampler2D sampler;
uniform mediump float antialiasWeight;

vec4 toColor0(in vec4 texture) {
	vec2 d = vStepB.xy;
	vec2 c = vStepB.zw;
	vec2 awd = antialiasWeight / d;
	vec2 swd = vStepA / d;
	vec2 one = vec2(1.0);
	vec2 zero = vec2(0.0);
	vec2 p0 = clamp(one - awd, zero, one);
	vec2 p1 = clamp(one - swd, zero, one);
	vec2 p2 = clamp(one - swd - awd, zero, one);
	vec2 s0 = smoothstep(p0, one, c);
	vec2 s1 = smoothstep(p2, p1, c);
	float s2 = max(s0.x, s0.y);
	float s3 = max(s1.x, s1.y);
	return texture * (
		vColorStroke * (s3 - s2) +
		vColorFill * (1.0 - s3)
	);
}

vec4 toColor1(in vec4 texture) {
	vec2 d = vStepB.xy;
	vec2 c = vStepB.zw;
	vec2 awd = antialiasWeight / d;
	vec2 swd = vStepA / d;
	vec2 one = vec2(1.0);
	vec2 zero = vec2(0.0);
	float s0 = smoothstep(length(c), length(c/clamp(one - awd, zero, one)), 1.0);
	float s1 = smoothstep(length(c/clamp(one - swd, zero, one)), length(c/clamp(one - swd - awd, zero, one)), 1.0);
	return texture * (
		vColorStroke * (s0 - s1) +
		vColorFill * s1
	);
}

vec4 toColor2(in vec4 texture) {
	vec2 p0 = vStepB.xy;
	vec2 p1 = vStepB.zw;
	vec2 d = vec2(dot(texture, vec4(1.0, 1.0/255.0, 1.0/255.0/255.0, 0.0)));
	vec2 s = smoothstep(p0 - p1, p0 + p1, d);
	return vColorStroke * (s.y - s.x) + vColorFill * s.x;
}

vec4 toColor3(in vec4 texture) {
	float l = vStepB.x;
	float lp0 = vStepB.y;
	float lp1 = vStepB.z;
	float lt = vStepB.w;
	float ld = antialiasWeight;
	float lm = mod(l, lp0 + lp1);
	float ls0 = (0.0 < lp1 ? smoothstep(0.0, ld, lm) - smoothstep(lp0, lp0 + ld, lm) : 1.0);
	float ls1 = (0.0 <= lt ? smoothstep(0.0, ld, l) - smoothstep(lt - ld, lt, l) : 1.0);

	float c = vStepA.x;
	float awd = antialiasWeight / vStepA.y;
	float p0 = clamp(awd, 0.0, 1.0);
	float p1 = clamp(1.0 - awd, 0.0, 1.0);
	float s0 = smoothstep(0.0, p0, c);
	float s1 = smoothstep(p1, 1.0, c);
	return texture * vColorStroke * (s0 - s1) * ls0 * ls1;
}

void main(void) {
	vec4 texture = texture2D(sampler, vUv);
	gl_FragColor = (vType < 1.5 ?
		(vType < 0.5 ?
			toColor0(texture) :
			toColor1(texture)
		) :
		(vType < 2.5 ?
			toColor2(texture) :
			toColor3(texture)
		)
	);
}`;

export class EShapeRenderer extends ObjectRenderer {
	static SHADER: Shader | null = null;

	protected _shader: Shader | null;
	protected _iterator: EShapeRendererIterator;
	protected _bufferSizeMax: number;

	constructor(renderer: Renderer) {
		super(renderer);
		EShapeRenderer.SHADER =
			EShapeRenderer.SHADER || Shader.from(VERTEX_SHADER, FRAGMENT_SHADER);
		this._shader = EShapeRenderer.SHADER;
		this._iterator = new EShapeRendererIterator();
		this._bufferSizeMax = this.getBufferSizeMax(renderer);
	}

	protected getBufferSizeMax(renderer: Renderer): number {
		const context = renderer.context;
		const extensions = context.extensions as any;
		if (1 < context.webGLVersion || !!extensions.uint32ElementIndex) {
			return 1431655765; // 2^32 / 3
		}
		return 21845; // 2^16 / 3
	}

	updateAtlas(
		shape: EShape,
		atlas: DynamicAtlas,
		fontAtlases: DynamicSDFFontAtlases,
		defaultTexture: Texture,
		baseTexture: BaseTexture
	): void {
		// Texture
		// Do not access the shape.image.source here.
		// It slows down the rendering speed significantly.
		const image = shape.image;
		if (image != null) {
			const textureItem = atlas.get(image.url);
			if (textureItem != null) {
				shape.texture = textureItem.texture;
			} else {
				const newTextureItem = new DynamicAtlasItemImage(
					image.url,
					image.width,
					image.height,
					image.source,
					baseTexture
				);
				shape.texture = newTextureItem.texture;
				atlas.set(newTextureItem.id, newTextureItem);
			}
		} else {
			shape.texture = defaultTexture;
		}

		// Font texture atlas
		const text = shape.text;
		const textCharacters = text.characters;
		if (0 < textCharacters.length) {
			fontAtlases.add(text.family, textCharacters, text.nacharacters);
		}
	}

	updateAtlases(
		shapes: EShape[],
		atlas: DynamicAtlas,
		fontAtlases: DynamicSDFFontAtlases,
		defaultTexture: Texture,
		baseTexture: BaseTexture
	): void {
		for (let i = 0, imax = shapes.length; i < imax; ++i) {
			const shape = shapes[i];
			this.updateAtlas(shape, atlas, fontAtlases, defaultTexture, baseTexture);
			const children = shape.children;
			for (let j = 0, jmax = children.length; j < jmax; ++j) {
				const child = children[j];
				this.updateAtlas(child, atlas, fontAtlases, defaultTexture, baseTexture);
				this.updateAtlases(child.children, atlas, fontAtlases, defaultTexture, baseTexture);
			}
		}
	}

	updateFontAtlas(
		shape: EShape,
		atlas: DynamicAtlas,
		fontAtlases: DynamicSDFFontAtlases,
		defaultTexture: Texture
	): void {
		const text = shape.text;
		const fontAtlas = fontAtlases.get(text.family);
		if (fontAtlas != null) {
			const textureItem = atlas.get(fontAtlas.id);
			if (textureItem != null) {
				text.atlas = fontAtlas;
				text.texture = textureItem.texture;
			} else {
				text.atlas = undefined;
				text.texture = defaultTexture;
			}
		} else {
			text.atlas = undefined;
			text.texture = defaultTexture;
		}
	}

	updateFontAtlases(
		shapes: EShape[],
		atlas: DynamicAtlas,
		fontAtlases: DynamicSDFFontAtlases,
		defaultTexture: Texture
	): void {
		for (let i = 0, imax = shapes.length; i < imax; ++i) {
			const shape = shapes[i];
			this.updateFontAtlas(shape, atlas, fontAtlases, defaultTexture);
			const children = shape.children;
			for (let j = 0, jmax = children.length; j < jmax; ++j) {
				const child = children[j];
				this.updateFontAtlas(child, atlas, fontAtlases, defaultTexture);
				this.updateFontAtlases(child.children, atlas, fontAtlases, defaultTexture);
			}
		}
	}

	render_(
		container: EShapeContainer,
		shape: EShape | null,
		shapes: EShape[],
		isDirty: boolean
	): void {
		const renderer = this.renderer;
		const shader = this._shader;

		if (shader != null && (shape != null || 0 < shapes.length)) {
			const resolution = renderer.resolution;
			const buffers = container.getBuffers();
			const antialiasWeight = container.toAntialiasWeight(resolution);

			// Update textures
			if (isDirty) {
				// Atlases
				const atlas = container.getAtlas(resolution);
				const fontAtlases = container.getFontAtlases();
				atlas.begin();
				fontAtlases.begin();
				const defaultTexture = atlas.getDefaultTexture();
				const baseTexture: BaseTexture = atlas.getBaseTexture();
				this.updateAtlases(shapes, atlas, fontAtlases, defaultTexture, baseTexture);
				fontAtlases.end();
				fontAtlases.update(atlas);
				this.updateFontAtlases(shapes, atlas, fontAtlases, defaultTexture);
				atlas.end();
				atlas.repack();

				// Update buffers
				this.updateBuffers(shape, shapes, buffers, renderer, antialiasWeight);
			}

			// Render buffers
			shader.uniforms.shapeScale = container.toShapeScale();
			shader.uniforms.antialiasWeight = container.toPixelScale(resolution) * antialiasWeight;
			shader.uniforms.translationMatrix = container.worldTransform.toArray(true);
			renderer.shader.bind(shader, false);
			renderer.state.setBlendMode(utils.correctBlendMode(BLEND_MODES.NORMAL, true));
			const buffersLength = buffers.length;
			if (1 < buffersLength) {
				for (let i = 0; i < buffersLength; ++i) {
					buffers[i].upload();
				}
			}
			for (let i = 0; i < buffersLength; ++i) {
				buffers[i].render(shader);
			}
		}
	}

	updateBuffers(
		shape: EShape | null,
		shapes: EShape[],
		buffers: EShapeBuffer[],
		renderer: Renderer,
		antialiasWeight: number
	): void {
		const iterator = this._iterator;
		iterator.reset(shape, shapes);

		let ib = 0;
		let bufferSize = 0;
		const bufferSizeBase = 5000;
		const bufferSizeMax = this._bufferSizeMax;
		while (iterator.get() != null) {
			let buffer: EShapeBuffer | null = null;
			let noMoreThanOne = false;
			if (0 < bufferSize) {
				buffer = new EShapeBuffer(bufferSize, renderer);
				buffers.splice(ib, 0, buffer);
				noMoreThanOne = true;
			} else if (ib < buffers.length) {
				buffer = buffers[ib];
				noMoreThanOne = false;
			} else {
				buffer = new EShapeBuffer(bufferSizeBase, renderer);
				buffers.push(buffer);
				noMoreThanOne = false;
			}
			if (buffer.update(iterator, antialiasWeight, noMoreThanOne)) {
				bufferSize = 0;
				ib += 1;
			} else {
				bufferSize = buffer.indexCountRequested;
				if (bufferSize <= bufferSizeMax) {
					bufferSize = Math.ceil(bufferSize / bufferSizeBase) * bufferSizeBase;
					bufferSize = Math.min(bufferSize, bufferSizeMax);
				} else {
					// No way to render
					break;
				}
			}
		}

		if (ib < buffers.length) {
			for (let jb = ib, ibmax = buffers.length; jb < ibmax; ++jb) {
				buffers[jb].destroy();
			}
			buffers.length = ib;
		}
	}
}

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
attribute vec2 aPosition;
attribute vec3 aClipping;
attribute vec2 aStep;
attribute vec4 aAntialias;
attribute vec4 aColorFill;
attribute vec4 aColorStroke;
attribute vec2 aUv;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mediump float pixelScale;
uniform mediump float antialiasWeight;

varying mediump vec3 vClipping;
varying mediump vec4 vAntialias;
varying mediump vec4 vColorFill;
varying mediump vec4 vColorStroke;
varying mediump vec2 vUv;

vec2 toInverse(in vec2 v) {
	return vec2(-v.y, v.x);
}

vec2 toPosition2(in vec2 v) {
	return (projectionMatrix * translationMatrix * vec3(v, 1.0)).xy;
}

vec4 toAntialias2(in vec2 step, in vec4 antialias, in float scale) {
	float x = min(0.4, step.x * scale);
	float y = 0.5 - antialias.x;
	float z = 0.5 - antialias.x - step.y;
	return vec4(y, z, y - max(0.01, y - x), z - max(0.01, z - x));
}

vec2 toPosition3(in float type, in vec2 p, in vec2 nprev, in vec2 n, in float strokeWidth, out float shift) {
	vec2 n0 = normalize(nprev);
	vec2 n1 = normalize(n);
	vec2 n0i = toInverse(n0);
	vec2 n1i = toInverse(n1);
	float direction = (type == 5.0 || type == 6.0 || type == 9.0 || type == 10.0 ? +1.0 : -1.0);

	// Offset
	float cross = dot(n0i, n1);
	float crossInverse = (0.00001 < abs(cross) ? 1.0 / cross : 0.0);
	float b = dot(n1 - n0, n0) * crossInverse;
	float offsetSize = direction * (type == 3.0 || type == 6.0 || type == 7.0 || type == 10.0 || type == 11.0 || type == 13.0 ?
		strokeWidth + 1.5 * antialiasWeight * pixelScale : strokeWidth) * 0.5;
	vec2 offset = n1 + n1i * b;

	// Miter
	vec2 pmiter = p + offsetSize * offset;
	float miterLength = dot(offset, offset);
	float miterSide = direction * cross;

	// Bevel
	vec2 n2 = ( type == 7.0 || type == 8.0 || type == 9.0 || type == 10.0 || type == 13.0 || type == 14.0 ? n1 : n0 );
	vec2 pbevel = p + offsetSize * n2;

	// Result
	vec2 presult = ( miterLength < 6.0 || miterSide < 0.0 ? pmiter : pbevel );
	// vec2 presult = ( 0.0 < miterSide ? pbevel : pmiter );

	// Shift
	vec2 ni = (type == 7.0 || type == 8.0 || type == 9.0 || type == 10.0 || type == 13.0 || type == 14.0 ? n1i : n0i);
	shift = dot(ni, p - presult);

	return toPosition2(presult);
}

vec4 toAntialias3(in float type, in float shift, in float scale) {
	float x = aColorFill.x + shift;
	float y = scale * aColorFill.y;
	float z = scale * aColorFill.z;
	float w = aColorFill.w;
	return type < 10.5 ? vec4(x, y, z, w) : vec4(0.0, 0.0, 0.0, -1.0);
}

float toDotAndDashScale(in float scale, in float strokeWidthScale) {
	return (
		scale == 4.0 || scale == 5.0 || scale == 6.0 || scale == 7.0 ?
		strokeWidthScale : 1.0
	);
}

float toStrokeWidthScale(in float scale) {
	return (
		scale == 3.0 || scale == 7.0 ?
		pixelScale : (
			scale == 1.0 || scale == 5.0 ?
			min(1.0, pixelScale) : (
				scale == 2.0 || scale == 6.0 ?
				max(1.0, pixelScale) : 1.0
			)
		)
	);
}

void main(void) {
	float type = aClipping.z;

	// Type 2: SDF Text or SDF Image
	vec2 p2 = toPosition2(aPosition);
	vec4 a2 = toAntialias2(aStep, aAntialias, pixelScale);

	// Type 3 ~ 15: Polyline or Polygon
	float shift = 0.0;
	float strokeWidthScale = toStrokeWidthScale(aStep.y);
	float strokeWidth = strokeWidthScale * aStep.x;
	vec2 p3 = toPosition3(type, aPosition, aAntialias.xy, aAntialias.zw, strokeWidth, shift);
	vec4 a3 = toAntialias3(type, shift, toDotAndDashScale(aStep.y, strokeWidthScale));

	gl_Position = vec4(type < 2.5 ? p2 : p3, 0.0, 1.0);
	vAntialias = type < 2.5 ? a2 : a3;
	vClipping = aClipping;
	vColorFill = aColorFill;
	vColorStroke = aColorStroke;
	vUv = aUv;
}`;

const FRAGMENT_SHADER = `
varying mediump vec3 vClipping;
varying mediump vec4 vAntialias;
varying mediump vec4 vColorFill;
varying mediump vec4 vColorStroke;
varying mediump vec2 vUv;

uniform sampler2D sampler;
uniform mediump float pixelScale;

vec4 toColor2( in vec4 texture ) {
	vec2 a0 = vAntialias.xy;
	vec2 a1 = vAntialias.zw;
	vec2 a2 = vec2( texture.a );
	vec2 a = smoothstep( a0 - a1, a0 + a1, a2 );
	return a.x * vColorFill + ( a.y - a.x ) * vColorStroke;
}

vec4 toColor3( in vec4 texture ) {
	float pos = vAntialias.x;
	float nonSpaceSize = vAntialias.y;
	float spaceSize = vAntialias.z;
	float totalLength = vAntialias.w;
	float delta = 0.5 * pixelScale;
	float posInPattern = mod(pos, nonSpaceSize + spaceSize);
	return vColorStroke *
		(0.0 < spaceSize ? smoothstep(0.0, delta, posInPattern) - smoothstep(nonSpaceSize, nonSpaceSize + delta, posInPattern) : 1.0) *
		(0.0 <= totalLength ? smoothstep(0.0, delta, pos) - smoothstep(totalLength - delta, totalLength, pos) : 1.0);
}

void main(void) {
	vec4 texture = texture2D(sampler, vUv);
	gl_FragColor = vClipping.z < 2.5 ? toColor2(texture) : toColor3(texture);
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
		// Do not access the shape.image.src here.
		// It slows down the rendering speed significantly.
		const imageSrc = shape.imageSrc;
		if (imageSrc != null) {
			const textureItem = atlas.get(imageSrc);
			if (textureItem != null) {
				shape.texture = textureItem.texture;
			} else {
				const image = shape.image;
				if (image != null) {
					const newTextureItem = new DynamicAtlasItemImage(image, baseTexture);
					shape.texture = newTextureItem.texture;
					atlas.set(newTextureItem.id, newTextureItem);
				} else {
					shape.texture = defaultTexture;
				}
			}
		} else {
			shape.texture = defaultTexture;
		}

		// Font texture atlas
		const text = shape.text;
		const textValue = text.value;
		if (0 < textValue.length) {
			fontAtlases.add(text.family, textValue);
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

	render_(container: EShapeContainer, shapes: EShape[], isDirty: boolean): void {
		const renderer = this.renderer;
		const shader = this._shader;

		if (shader != null && 0 < shapes.length) {
			const resolution = renderer.resolution;
			const buffers = container.getBuffers();
			const antialiasWeight = container.getAntialiasWeight(resolution);

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
				this.updateBuffers(shapes, buffers, renderer, antialiasWeight);
			}

			// Render buffers
			shader.uniforms.pixelScale = container.toPixelScale(resolution);
			shader.uniforms.antialiasWeight = antialiasWeight;
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
		shapes: EShape[],
		buffers: EShapeBuffer[],
		renderer: Renderer,
		antialiasWeight: number
	): void {
		const iterator = this._iterator;
		iterator.reset(shapes);

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

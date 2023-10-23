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
import { DynamicAtlas } from "./dynamic-atlas";
import { DynamicAtlasItemImage } from "./dynamic-atlas-item-image";
import { DynamicSDFFontAtlases } from "./dynamic-sdf-font-atlases";
import { DynamicSdfFontGenerator } from "./dynamic-sdf-font-generator-container";

const VERTEX_SHADER = `
attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
varying mediump vec2 vTextureCoord;
void main(void) {
	gl_Position = vec4(aVertexPosition, 0.0, 1.0);
	vTextureCoord = aTextureCoord;
}
`;

const FRAGMENT_SHADER = `
precision mediump float;

varying mediump vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec2 uSize;

float calcDistance( float x, float y, float dx, float dy ) {
	float xd = x + dx;
	float yd = y + dy;
	float u = xd / uSize.x;
	float v = yd / uSize.y;
	float ul = (xd - 1.0) / uSize.x;
	float vt = (yd - 1.0) / uSize.y;

	float m = texture2D(uSampler, vec2(u , v )).a;
	float l = texture2D(uSampler, vec2(ul, v )).a;
	float t = texture2D(uSampler, vec2(u , vt)).a;
	float ddx = -(0.5 - m) / (l - m);
	float ddy = -(0.5 - m) / (t - m);
	bool bl = min(l,m) < 0.5 && 0.5 <= max(l,m);
	bool bt = min(t,m) < 0.5 && 0.5 <= max(t,m);
	return (
		bl ?
		(bt ?
			length(vec2(dx + ddx * 0.5, dy + ddy * 0.5)) :
			length(vec2(dx + ddx, dy))
		) :
		(bt ?
			length(vec2(dx, dy + ddy)) :
			100.0
		)
	);
}

float calcDistancesY( float x, float y, float dx ) {
	float d = 100.0;
	for( float dy=-6.0; dy<6.5; dy++ ) {
		d = min( d, calcDistance( x, y, dx, dy ) );
	}
	return d;
}

float calcDistances( float x, float y ) {
	float d = 100.0;
	for( float dx=-6.0; dx<6.5; dx++ ) {
		d = min( d, calcDistancesY( x, y, dx ) );
	}
	return d;
}

void main(void) {
	float t = texture2D(uSampler, vTextureCoord).a;
	float x = vTextureCoord.x * uSize.x;
	float y = vTextureCoord.y * uSize.y;
	float d = min( 6.0, calcDistances( x, y ) ) / 12.0;
	d = clamp( mix( 0.5 - d, 0.5 + d, step( 0.5, t ) ), 0.0, 1.0 );
	gl_FragColor = vec4(1.0, 1.0, 1.0, d);
}
`;

export class DynamicSDFFontGeneratorRenderer extends ObjectRenderer {
	static SHADER: Shader | null = null;

	protected _shader: Shader | null;

	constructor(renderer: Renderer) {
		super(renderer);
		DynamicSDFFontGeneratorRenderer.SHADER =
			DynamicSDFFontGeneratorRenderer.SHADER || Shader.from(VERTEX_SHADER, FRAGMENT_SHADER);
		this._shader = DynamicSDFFontGeneratorRenderer.SHADER;
	}

	render_(source: HTMLCanvasElement | HTMLImageElement): void {
		const renderer = this.renderer;
		const shader = this._shader;

		if (shader != null) {
			// Render buffers
			shader.uniforms.uSampler = 0;
			shader.uniforms.uSize = [source.width, source.height];
			renderer.shader.bind(shader, false);
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
}

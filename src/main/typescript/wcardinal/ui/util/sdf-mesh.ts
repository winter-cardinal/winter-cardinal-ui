/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Geometry, MIPMAP_MODES, Renderer, Shader, Texture } from "pixi.js";
import { SdfRenderer } from "./sdf-renderer";

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

export class SdfMesh extends DisplayObject {
	protected static SHADER?: Shader;

	shader: Shader;
	canvas: HTMLCanvasElement;
	texture: Texture;
	geometry: Geometry;

	protected _fontRenderer?: SdfRenderer;

	constructor() {
		super();
		SdfMesh.SHADER ??= Shader.from(VERTEX_SHADER, FRAGMENT_SHADER);
		this.shader = SdfMesh.SHADER;

		const canvas = document.createElement("canvas");
		this.canvas = canvas;
		canvas.width = 64;
		canvas.height = 64;

		const texture = Texture.from(canvas, {
			mipmap: MIPMAP_MODES.OFF,
			resolution: 1
		});
		this.texture = texture;

		const geometry = new Geometry();
		geometry.addAttribute("aVertexPosition", [-1, 1, 1, 1, -1, -1, 1, -1], 2);
		geometry.addAttribute("aTextureCoord", [0, 1, 1, 1, 0, 0, 1, 0], 2);
		geometry.addIndex([0, 1, 2, 1, 3, 2]);
		this.geometry = geometry;
	}

	render(renderer: Renderer): void {
		if (!this.visible || this.worldAlpha <= 0 || !this.renderable) {
			return;
		}

		let fontRenderer = this._fontRenderer;
		if (fontRenderer == null) {
			this._fontRenderer = new SdfRenderer(renderer);
			fontRenderer = this._fontRenderer;
		}
		renderer.batch.setObjectRenderer(fontRenderer);

		const mask = this.mask;
		if (mask) {
			renderer.mask.push(this, mask);
			fontRenderer.render(this);
			renderer.mask.pop(this);
		} else {
			fontRenderer.render(this);
		}
	}
}

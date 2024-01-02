/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import {
	BLEND_MODES,
	DisplayObject,
	Geometry,
	MIPMAP_MODES,
	Renderer,
	SCALE_MODES,
	Shader,
	State,
	Texture,
	utils
} from "pixi.js";
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
	float ur = (xd + 1.0) / uSize.x;
	float vb = (yd + 1.0) / uSize.y;
	float m = texture2D(uSampler, vec2(u , v )).a;
	float l = texture2D(uSampler, vec2(ul, v )).a;
	float t = texture2D(uSampler, vec2(u , vt)).a;
	float r = texture2D(uSampler, vec2(ur, v )).a;
	float b = texture2D(uSampler, vec2(u , vb)).a;
	float ddl = (0.5 - m) / (l - m);
	float ddt = (0.5 - m) / (t - m);
	float ddr = (0.5 - m) / (r - m);
	float ddb = (0.5 - m) / (b - m);
	bool bl = min(l,m) < 0.5 && 0.5 <= max(l,m);
	bool bt = min(t,m) < 0.5 && 0.5 <= max(t,m);
	bool br = min(r,m) < 0.5 && 0.5 <= max(r,m);
	bool bb = min(b,m) < 0.5 && 0.5 <= max(b,m);
	float rl = bl ? length(vec2(dx - ddl, dy      )) : 100.0;
	float rt = bt ? length(vec2(dx      , dy - ddt)) : 100.0;
	float rr = br ? length(vec2(dx + ddr, dy      )) : 100.0;
	float rb = bb ? length(vec2(dx      , dy + ddb)) : 100.0;
	float rlt = bl && bt ? length(vec2(dx - ddl * 0.5, dy - ddt * 0.5)) : 100.0;
	float rtr = bt && br ? length(vec2(dx + ddr * 0.5, dy - ddt * 0.5)) : 100.0;
	float rrb = br && bb ? length(vec2(dx + ddr * 0.5, dy + ddb * 0.5)) : 100.0;
	float rbl = bb && bl ? length(vec2(dx - ddl * 0.5, dy + ddb * 0.5)) : 100.0;
	return min(
		min(
			min(rl, rt),
			min(rr, rb)
		),
		min(
			min(rlt, rtr),
			min(rrb, rbl)
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
	d = d * 255.0;
	float r = floor(d);
	d = (d - r) * 255.0;
	float g = floor(d);
	gl_FragColor = vec4(r * 0.00392156862745098, g * 0.00392156862745098, d - g, 1.0);
}
`;

export class SdfMesh extends DisplayObject {
	protected static SHADER?: Shader;

	shader: Shader;
	canvas: HTMLCanvasElement;
	texture: Texture;
	geometry: Geometry;
	state: State;

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
			scaleMode: SCALE_MODES.LINEAR,
			resolution: 1
		});
		this.texture = texture;

		const geometry = new Geometry();
		geometry.addAttribute("aVertexPosition", [-1, 1, 1, 1, -1, -1, 1, -1], 2);
		geometry.addAttribute("aTextureCoord", [0, 1, 1, 1, 0, 0, 1, 0], 2);
		geometry.addIndex([0, 1, 2, 1, 3, 2]);
		this.geometry = geometry;

		const state = new State();
		state.depthTest = false;
		state.blend = true;
		state.blendMode = utils.correctBlendMode(BLEND_MODES.NORMAL, true);
		this.state = state;
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

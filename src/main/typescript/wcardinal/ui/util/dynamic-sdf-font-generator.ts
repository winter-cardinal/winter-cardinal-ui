/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

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

export class DynamicSDFFontGenerator {
	protected static _INSTANCE: DynamicSDFFontGenerator | null = null;

	protected _canvas: HTMLCanvasElement | null;
	protected _onLostBound: EventListener;
	protected _onRestoreBound: EventListener;
	protected _onUnloadBound: EventListener;
	protected _gl: WebGLRenderingContext | null;
	protected _texture: WebGLTexture | null;
	protected _shaderProgram: WebGLProgram | null;
	protected _vertexPositionAttribute: number;
	protected _textureCoordAttribute: number;
	protected _samplerUniform: WebGLUniformLocation | null;
	protected _sizeUniform: WebGLUniformLocation | null;
	protected _vb: WebGLBuffer | null;
	protected _uvb: WebGLBuffer | null;

	constructor() {
		this._gl = null;
		this._texture = null;
		this._shaderProgram = null;
		this._vertexPositionAttribute = NaN;
		this._textureCoordAttribute = NaN;
		this._samplerUniform = NaN;
		this._sizeUniform = NaN;
		this._vb = null;
		this._uvb = null;

		const canvas = (this._canvas = document.createElement("canvas"));
		canvas.width = 64;
		canvas.height = 64;
		this._onLostBound = (e: Event): void => {
			e.preventDefault();
		};
		this._onRestoreBound = (): void => {
			this.restore();
		};
		this._onUnloadBound = (): void => {
			this.destroy();
		};
		canvas.addEventListener("webglcontextlost", this._onLostBound, false);
		canvas.addEventListener("webglcontextrestored", this._onRestoreBound, false);
		window.addEventListener("unload", this._onUnloadBound, false);
	}

	init(): this {
		const canvas = this._canvas;
		if (canvas != null && (this._gl == null || this._gl.isContextLost())) {
			const config: WebGLContextAttributes = {
				alpha: true,
				antialias: false,
				depth: false,
				stencil: false,
				premultipliedAlpha: false
			};
			const gl =
				canvas.getContext("webgl", config) ||
				(canvas.getContext("experimental-webgl", config) as WebGLRenderingContext | null);
			this._gl = gl;
			if (gl != null) {
				gl.clearColor(1.0, 1.0, 1.0, 0.0);
				this.makeVertexBuffer();
				this.makeUvBuffer();
				this.makeShaders();
				this._texture = null;
			}
		}
		return this;
	}

	restore(): void {
		this.init();
	}

	getCanvas(): HTMLCanvasElement | null {
		return this._canvas;
	}

	getShader(gl: WebGLRenderingContext, code: string, type: boolean): WebGLShader | null {
		const shader = type
			? gl.createShader(gl.FRAGMENT_SHADER)
			: gl.createShader(gl.VERTEX_SHADER);
		if (shader != null) {
			gl.shaderSource(shader, code);
			gl.compileShader(shader);
			if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
				console &&
					console.error(`Failed to compile the shader: ${gl.getShaderInfoLog(shader)}`);
				return null;
			}
		}
		return shader;
	}

	makeShaders(): WebGLShader | null {
		const gl = this._gl;
		if (gl != null && gl.isContextLost() !== true) {
			const vertexShader = this.getShader(gl, VERTEX_SHADER, false);
			if (vertexShader != null) {
				const fragmentShader = this.getShader(gl, FRAGMENT_SHADER, true);
				if (fragmentShader != null) {
					const shaderProgram = (this._shaderProgram = gl.createProgram());
					if (shaderProgram != null) {
						gl.attachShader(shaderProgram, vertexShader);
						gl.attachShader(shaderProgram, fragmentShader);
						gl.linkProgram(shaderProgram);
						if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
							console &&
								console.error(`Failed to link the program: ${gl.getError()}`);
							gl.deleteShader(vertexShader);
							gl.deleteShader(fragmentShader);
							return null;
						} else {
							gl.deleteShader(vertexShader);
							gl.deleteShader(fragmentShader);

							gl.useProgram(shaderProgram);
							this._vertexPositionAttribute = gl.getAttribLocation(
								shaderProgram,
								"aVertexPosition"
							);
							this._textureCoordAttribute = gl.getAttribLocation(
								shaderProgram,
								"aTextureCoord"
							);
							this._samplerUniform = gl.getUniformLocation(shaderProgram, "uSampler");
							this._sizeUniform = gl.getUniformLocation(shaderProgram, "uSize");
							gl.useProgram(null);
							return shaderProgram;
						}
					} else {
						gl.deleteShader(vertexShader);
						gl.deleteShader(fragmentShader);
					}
				} else {
					gl.deleteShader(vertexShader);
				}
			}
		}
		return null;
	}

	destroyShaders(): void {
		const gl = this._gl;
		if (gl != null && gl.isContextLost() !== true) {
			const shaderProgram = this._shaderProgram;
			if (shaderProgram != null) {
				this._shaderProgram = null;
				gl.useProgram(null);
				gl.deleteProgram(shaderProgram);
			}
		}
	}

	updateTexture(
		source:
			| ImageBitmap
			| ImageData
			| HTMLImageElement
			| HTMLCanvasElement
			| HTMLVideoElement
			| OffscreenCanvas
	): WebGLTexture | null {
		const gl = this._gl;
		const canvas = this._canvas;
		if (gl != null && gl.isContextLost() !== true && canvas != null) {
			const width = source.width;
			const height = source.height;
			if (canvas.width !== width || canvas.height !== height) {
				canvas.width = width;
				canvas.height = height;
				gl.viewport(0, 0, width, height);
			}

			let texture = this._texture;
			if (texture == null) {
				texture = this._texture = gl.createTexture();
				gl.bindTexture(gl.TEXTURE_2D, texture);
				gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
				gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
				gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
				gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
				gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
				gl.bindTexture(gl.TEXTURE_2D, null);
			} else {
				gl.bindTexture(gl.TEXTURE_2D, texture);
				gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
				gl.bindTexture(gl.TEXTURE_2D, null);
			}
			return texture;
		}
		return null;
	}

	destroyTexture(): void {
		const gl = this._gl;
		const texture = this._texture;
		if (gl != null && gl.isContextLost() !== true && texture != null) {
			this._texture = null;
			gl.bindTexture(gl.TEXTURE_2D, null);
			gl.deleteTexture(texture);
		}
	}

	makeVertexBuffer(): WebGLBuffer | null {
		const gl = this._gl;
		if (gl != null && gl.isContextLost() !== true) {
			const vb = (this._vb = gl.createBuffer());
			gl.bindBuffer(gl.ARRAY_BUFFER, vb);

			const vertices = [-1.0, +1.0, +1.0, +1.0, -1.0, -1.0, +1.0, -1.0];

			gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
			return vb;
		}
		return null;
	}

	destroyVertexBuffer(): void {
		const gl = this._gl;
		const vb = this._vb;
		if (gl != null && gl.isContextLost() !== true && vb != null) {
			this._vb = null;
			gl.bindBuffer(gl.ARRAY_BUFFER, null);
			gl.deleteBuffer(vb);
		}
	}

	makeUvBuffer(): WebGLBuffer | null {
		const gl = this._gl;
		if (gl != null && gl.isContextLost() !== true) {
			const uvb = (this._uvb = gl.createBuffer());
			gl.bindBuffer(gl.ARRAY_BUFFER, uvb);

			const uvs = [0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 1.0];

			gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(uvs), gl.STATIC_DRAW);
			return uvb;
		}
		return null;
	}

	destroyUvBuffer(): void {
		const gl = this._gl;
		const uvb = this._uvb;
		if (gl != null && gl.isContextLost() !== true && uvb != null) {
			this._uvb = null;
			gl.bindBuffer(gl.ARRAY_BUFFER, null);
			gl.deleteBuffer(uvb);
		}
	}

	render(): void {
		const gl = this._gl;
		const canvas = this._canvas;
		const shaderProgram = this._shaderProgram;
		const vb = this._vb;
		const uvb = this._uvb;
		const texture = this._texture;
		if (
			gl != null &&
			gl.isContextLost() !== true &&
			canvas != null &&
			shaderProgram != null &&
			vb != null &&
			uvb != null &&
			texture != null
		) {
			gl.clear(gl.COLOR_BUFFER_BIT);

			gl.useProgram(shaderProgram);

			gl.bindBuffer(gl.ARRAY_BUFFER, vb);
			const vertexPositionAttribute = this._vertexPositionAttribute;
			gl.enableVertexAttribArray(vertexPositionAttribute);
			gl.vertexAttribPointer(vertexPositionAttribute, 2, gl.FLOAT, false, 0, 0);

			gl.bindBuffer(gl.ARRAY_BUFFER, uvb);
			const textureCoordAttribute = this._textureCoordAttribute;
			gl.enableVertexAttribArray(textureCoordAttribute);
			gl.vertexAttribPointer(textureCoordAttribute, 2, gl.FLOAT, false, 0, 0);

			gl.activeTexture(gl.TEXTURE0);
			gl.bindTexture(gl.TEXTURE_2D, texture);
			gl.uniform1i(this._samplerUniform, 0);
			gl.uniform2f(this._sizeUniform, canvas.width, canvas.height);

			gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

			gl.bindTexture(gl.TEXTURE_2D, null);
			gl.bindBuffer(gl.ARRAY_BUFFER, null);
			gl.useProgram(null);
		}
	}

	read(copyCanvas: HTMLCanvasElement): void {
		const gl = this._gl;
		const canvas = this._canvas;
		if (gl != null && gl.isContextLost() !== true && canvas != null) {
			const width = canvas.width;
			const height = canvas.height;
			copyCanvas.width = width;
			copyCanvas.height = height;
			const copyContext = copyCanvas.getContext("2d");
			if (copyContext != null) {
				copyContext.drawImage(canvas, 0, 0);
			}
		}
	}

	destroy(): void {
		this.destroyVertexBuffer();
		this.destroyUvBuffer();
		this.destroyShaders();

		const canvas = this._canvas;
		if (canvas != null) {
			this._canvas = null;
			canvas.removeEventListener("webglcontextlost", this._onLostBound, false);
			canvas.removeEventListener("webglcontextrestored", this._onRestoreBound, false);
			window.removeEventListener("unload", this._onUnloadBound, false);
		}

		const gl = this._gl;
		if (gl != null) {
			this._gl = null;
			const WebGLLoseContext = gl.getExtension("WEBGL_lose_context");
			if (WebGLLoseContext != null) {
				WebGLLoseContext.loseContext();
			}
		}
	}

	static getInstance(): DynamicSDFFontGenerator {
		if (DynamicSDFFontGenerator._INSTANCE == null) {
			DynamicSDFFontGenerator._INSTANCE = new DynamicSDFFontGenerator();
		}
		return DynamicSDFFontGenerator._INSTANCE;
	}
}

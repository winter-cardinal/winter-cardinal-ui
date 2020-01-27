/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { BaseTexture, BLEND_MODES, ObjectRenderer, Renderer, Shader, Texture, utils } from "pixi.js";
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
varying mediump vec2 vStep;
varying mediump vec4 vAntialias;
varying mediump vec4 vColorFill;
varying mediump vec4 vColorStroke;
varying mediump vec2 vUv;

vec2 toInverse( in vec2 v ) {
	return vec2( -v.y, v.x );
}

vec2 toTransformedPosition( in vec2 v ) {
	return (projectionMatrix * translationMatrix * vec3(v, 1.0)).xy;
}

vec4 toAntialias01( in vec4 antialias, in float scale ) {
	// Taylor series of 1 / ( 1 - a ) = 1 + a + a^2 + ....
	return 1.0 + min( vec4( 1.0 ), antialias * scale );
}

vec4 toAntialias2( in vec2 step, in vec4 antialias, in float scale ) {
	float x = min( 0.4, step.x * scale );
	float y = 0.5 - antialias.x;
	float z = 0.5 - antialias.x - step.y;
	return vec4( y, z, y - max( 0.01, y - x ), z - max( 0.01, z - x ) );
}

vec2 toPosition3456( in float type, in vec2 p, in vec2 pprev, in vec2 pnext, in float strokeWidth, out float shift ) {
	vec2 d0 = p - pprev;
	vec2 d1 = pnext - p;
	float l0 = dot( d0, d0 );
	float l1 = dot( d1, d1 );
	vec2 nd0 = normalize( toInverse( d0 ) );
	vec2 nd1 = normalize( toInverse( d1 ) );
	vec2 n0 = 0.00001 < l0 ? nd0 : nd1;
	vec2 n1 = 0.00001 < l1 ? nd1 : nd0;
	vec2 n0i = toInverse( n0 );
	vec2 n1i = toInverse( n1 );
	float direction = sign( 4.5 - type );

	// Offset
	float cross = dot( n0i, n1 );
	float crossInverse = ( 0.00001 < abs( cross ) ? 1.0 / cross : 0.0 );
	float b = dot(n1 - n0, n0) * crossInverse;
	float offsetSize = direction * strokeWidth * 0.5;
	vec2 offset = n1 + n1i * b;

	// Miter
	vec2 pmiter = p + offsetSize * offset;
	float miterAngle0 = dot( n0i, pmiter - pprev );
	float miterAngle1 = dot( n1i, pmiter - pnext );
	float miterLength = dot( offset, offset );
	float miterSide = direction * cross;

	// Bevel
	vec2 n = ( type == 4.0 || type == 6.0 ? n1 : n0 );
	vec2 pbevel = p + offsetSize * n;

	//
	vec2 presult = (
		0.0 <= miterAngle0 || miterAngle1 < 0.0 || miterSide < 0.0 ?
		pbevel : pmiter
	);
	/*
	vec2 presult = (
		miterAngle0 < 0.0 && 0.0 <= miterAngle1 && miterLength < 50.0 ?
		pmiter : pbevel
	);
	*/
	vec2 ni = ( type == 4.0 || type == 6.0 ? n1i : n0i );
	shift = dot( ni, p - presult );
	return toTransformedPosition( presult );
}

vec2 toStep3456( in float type ) {
	return ( type < 4.5 ? vec2( 1.0, 0.0 ) : vec2( 0.0, 1.0 ) );
}

vec4 toAntialias3456( in float strokeWidth, in float scale ) {
	float a = antialiasWeight / max( 0.0001, strokeWidth );
	return toAntialias01( vec4( a, a, a, a ), scale );
}

float toDotAndDashScale( in float scale, in float strokeWidthScale ) {
	return (
		scale == 4.0 || scale == 5.0 || scale == 6.0 || scale == 7.0 ?
		strokeWidthScale : 1.0
	);
}

vec4 toColorStroke3456( in float shift, in float scale ) {
	float x = aColorFill.x + shift;
	float y = scale * aColorFill.y;
	float z = scale * aColorFill.z;
	float w = aColorFill.w;
	return vec4( x, y, z, w );
}

float toStrokeWidthScale( in float scale ) {
	return (
		scale == 3.0 || scale == 7.0 ?
		pixelScale : (
			scale == 1.0 || scale == 5.0 ?
			min( 1.0, pixelScale ) : (
				scale == 2.0 || scale == 6.0 ?
				max( 1.0, pixelScale ) : 1.0
			)
		)
	);
}

void main(void) {
	vec2 p012 = toTransformedPosition( aPosition );

	float type = aClipping.z;

	// type === 0 or 1
	vec4 a01 = toAntialias01( aAntialias, pixelScale );

	// type === 2
	vec4 a2 = toAntialias2( aStep, aAntialias, pixelScale );

	// type === 3, 4, 5 or 6
	float shift3456 = 0.0;
	float strokeWidthScale = toStrokeWidthScale( aStep.y );
	float strokeWidth = strokeWidthScale * aStep.x;
	vec2 p3456 = toPosition3456( type, aPosition, aAntialias.xy, aAntialias.zw, strokeWidth, shift3456 );
	vec2 step3456 = toStep3456( type );
	vec4 a3456 = toAntialias3456( strokeWidth, pixelScale );
	vec4 colorStroke3456 = toColorStroke3456( shift3456, toDotAndDashScale( aStep.y, strokeWidthScale ) );

	//
	gl_Position = vec4( ( 2.5 < type ? p3456 : p012 ), 0.0, 1.0 );
	vAntialias = ( 1.5 < type ? ( 2.5 < type ? a3456 : a2 ) : a01 );
	vClipping = aClipping;
	vStep = ( 2.5 < type ? step3456 : aStep );
	vColorFill = ( 2.5 < type ? aColorStroke : aColorFill );
	vColorStroke = ( 2.5 < type ? colorStroke3456 : aColorStroke );
	vUv = aUv;
}`;

const FRAGMENT_SHADER_NO_AA = `
varying mediump vec3 vClipping;
varying mediump vec2 vStep;
varying mediump vec4 vAntialias;
varying mediump vec4 vColorFill;
varying mediump vec4 vColorStroke;
varying mediump vec2 vUv;

uniform sampler2D sampler;
uniform mediump float pixelScale;

void main(void) {
	vec4 texture = texture2D(sampler, vUv);
	float type = vClipping.z;
	vec2 v0 = vStep;
	vec2 v1 = vClipping.xy;
	vec2 v2 = v0 * vAntialias.xy;
	vec2 v3 = v1 * vAntialias.zw;
	vec2 d01 = ( v0.x < v0.y ? vec2( v0.y, v2.y ) : vec2( v0.x, v2.x ) );
	vec2 d02 = ( v1.x < v1.y ? vec2( v1.y, v3.y ) : vec2( v1.x, v3.x ) );
	vec4 d0 = vec4( d01.x, d02.x, d01.y, d02.y );
	vec4 d1 = vec4( dot( v0, v0 ), dot( v1, v1 ), dot( v2, v2 ), dot( v3, v3 ) );
	vec4 d = ( type == 1.0 ? d1 : d0 );
	vec2 s = step( vec2( 1.0 ), d.xy );
	vec4 color01 = texture * (vColorStroke * (s.x - s.y) + vColorFill * (1.0 - s.x));

	float l = vColorStroke.x;
	float lp0 = vColorStroke.y;
	float lp1 = vColorStroke.z;
	float lt = vColorStroke.w;
	float lm = mod( l, lp0 + lp1 );
	float ls0 = step( 0.0, lm );
	float ls1 = step( lp0, lm );
	float ls2 = ( 0.0 <= lt ? 1.0 - step( lt, l ) : 1.0 );
	vec4 color3456 = color01 * ( ls0 - ls1 ) * ls2;

	vec2 a0 = vAntialias.xy;
	vec2 a1 = vAntialias.zw;
	vec2 a2 = vec2( texture.a );
	vec2 a = smoothstep( a0 - a1, a0 + a1, a2 );
	vec4 color2 = a.x * vColorFill + ( a.y - a.x ) * vColorStroke;
	gl_FragColor = ( type == 2.0 ? color2 : (2.5 < type ? color3456 : color01) );
}`;

const FRAGMENT_SHADER = `
varying mediump vec3 vClipping;
varying mediump vec2 vStep;
varying mediump vec4 vAntialias;
varying mediump vec4 vColorFill;
varying mediump vec4 vColorStroke;
varying mediump vec2 vUv;

uniform sampler2D sampler;
uniform mediump float pixelScale;

void main(void) {
	vec4 texture = texture2D(sampler, vUv);
	float type = vClipping.z;
	vec2 v0 = vStep;
	vec2 v1 = vClipping.xy;
	vec2 v2 = v0 * vAntialias.xy;
	vec2 v3 = v1 * vAntialias.zw;
	vec2 d01 = ( v0.x < v0.y ? vec2( v0.y, v2.y ) : vec2( v0.x, v2.x ) );
	vec2 d02 = ( v1.x < v1.y ? vec2( v1.y, v3.y ) : vec2( v1.x, v3.x ) );
	vec4 d0 = vec4( d01.x, d02.x, d01.y, d02.y );
	vec4 d1 = vec4( dot( v0, v0 ), dot( v1, v1 ), dot( v2, v2 ), dot( v3, v3 ) );
	vec4 d = ( type == 1.0 ? d1 : d0 );
	vec2 s = smoothstep( 1.0 - (d.zw - d.xy), vec2( 1.0 ), d.xy );
	vec4 color01 = texture * (vColorStroke * (s.x - s.y) + vColorFill * (1.0 - s.x));

	float l = vColorStroke.x;
	float lp0 = vColorStroke.y;
	float lp1 = vColorStroke.z;
	float lt = vColorStroke.w;
	float ld = 0.5 * pixelScale;
	float lm = mod( l, lp0 + lp1 );
	float ls0 = smoothstep( 0.0, 0.0 + ld, lm );
	float ls1 = smoothstep( lp0, lp0 + ld, lm );
	float ls2 = ( 0.0 <= lt ? 1.0 - smoothstep( lt - ld, lt, l ) : 1.0 );
	vec4 color3456 = color01 * ( ls0 - ls1 ) * ls2;

	vec2 a0 = vAntialias.xy;
	vec2 a1 = vAntialias.zw;
	vec2 a2 = vec2( texture.a );
	vec2 a = smoothstep( a0 - a1, a0 + a1, a2 );
	vec4 color2 = a.x * vColorFill + ( a.y - a.x ) * vColorStroke;
	gl_FragColor = ( type == 2.0 ? color2 : (2.5 < type ? color3456 : color01) );
}`;

export class EShapeRenderer extends ObjectRenderer {
	static SHADER: Shader | null = null;

	protected _shader: Shader | null;
	protected _iterator: EShapeRendererIterator;
	protected _bufferSize: number;
	protected _bufferSizeMax: number;

	constructor( renderer: Renderer ) {
		super( renderer );
		EShapeRenderer.SHADER = EShapeRenderer.SHADER || Shader.from( VERTEX_SHADER, FRAGMENT_SHADER );
		this._shader = EShapeRenderer.SHADER;
		this._iterator = new EShapeRendererIterator();
		this._bufferSize = 5000;
		this._bufferSizeMax = this.getBufferSizeMax( renderer );
	}

	protected getBufferSizeMax( renderer: Renderer ): number {
		const context = renderer.context;
		const extensions = context.extensions as any;
		if( 1 < context.webGLVersion || !! extensions.uint32ElementIndex ) {
			return 1431655765; // 2^32 / 3
		}
		return 21845; // 2^16 / 3
	}

	updateAtlas(
		shape: EShape,
		atlas: DynamicAtlas, fontAtlases: DynamicSDFFontAtlases,
		defaultTexture: Texture, baseTexture: BaseTexture
	): void {
		// Texture
		// Do not access the shape.image.src here.
		// It slows down the rendering speed significantly.
		const imageSrc = shape.imageSrc;
		if( imageSrc != null ) {
			const textureItem = atlas.get( imageSrc );
			if( textureItem != null ) {
				shape.texture = textureItem.texture;
			} else {
				const newTextureItem = new DynamicAtlasItemImage( shape.image!, baseTexture );
				shape.texture = newTextureItem.texture;
				atlas.set( newTextureItem.id, newTextureItem );
			}
		} else {
			shape.texture = defaultTexture;
		}

		// Font texture atlas
		const text = shape.text;
		const textValue = text.value;
		if( 0 < textValue.length ) {
			fontAtlases.add( text.family, textValue );
		}
	}

	updateAtlases(
		shapes: EShape[],
		atlas: DynamicAtlas, fontAtlases: DynamicSDFFontAtlases,
		defaultTexture: Texture, baseTexture: BaseTexture
	): void {
		for( let i = 0, imax = shapes.length; i < imax; ++i ) {
			const shape = shapes[ i ];
			this.updateAtlas( shape, atlas, fontAtlases, defaultTexture, baseTexture );
			const children = shape.children;
			for( let j = 0, jmax = children.length; j < jmax; ++j ) {
				const child = children[ j ];
				this.updateAtlas( child, atlas, fontAtlases, defaultTexture, baseTexture );
				this.updateAtlases( child.children, atlas, fontAtlases, defaultTexture, baseTexture );
			}
		}
	}

	updateFontAtlas(
		shape: EShape,
		atlas: DynamicAtlas, fontAtlases: DynamicSDFFontAtlases,
		defaultTexture: Texture
	): void {
		const text = shape.text;
		const fontAtlas = fontAtlases.get( text.family );
		if( fontAtlas != null ) {
			const textureItem = atlas.get( fontAtlas.id );
			if( textureItem != null ) {
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
		atlas: DynamicAtlas, fontAtlases: DynamicSDFFontAtlases,
		defaultTexture: Texture
	): void {
		for( let i = 0, imax = shapes.length; i < imax; ++i ) {
			const shape = shapes[ i ];
			this.updateFontAtlas( shape, atlas, fontAtlases, defaultTexture );
			const children = shape.children;
			for( let j = 0, jmax = children.length; j < jmax; ++j ) {
				const child = children[ j ];
				this.updateFontAtlas( child, atlas, fontAtlases, defaultTexture );
				this.updateFontAtlases( child.children, atlas, fontAtlases, defaultTexture );
			}
		}
	}

	render_( container: EShapeContainer, shapes: EShape[], isDirty: boolean ): void {
		const renderer = this.renderer;
		const shader = this._shader;

		if( shader != null && 0 < shapes.length ) {
			const resolution = renderer.resolution;
			const buffers = container.getBuffers();
			const antialiasWeight = container.getAntialiasWeight( resolution );

			// Update textures
			if( isDirty ) {
				// Atlases
				const atlas = container.getAtlas( resolution );
				const fontAtlases = container.getFontAtlases();
				atlas.begin();
				fontAtlases.begin();
				const defaultTexture = atlas.getDefaultTexture();
				const baseTexture: BaseTexture = atlas.getBaseTexture();
				this.updateAtlases( shapes, atlas, fontAtlases, defaultTexture, baseTexture );
				fontAtlases.end();
				fontAtlases.update( atlas );
				this.updateFontAtlases( shapes, atlas, fontAtlases, defaultTexture );
				atlas.end();
				atlas.repack();

				// Update buffers
				this.updateBuffers( shapes, buffers, renderer, shader, antialiasWeight );
			}

			// Render buffers
			shader.uniforms.pixelScale = container.toPixelScale( resolution );
			shader.uniforms.antialiasWeight = antialiasWeight;
			shader.uniforms.translationMatrix = container.worldTransform.toArray( true );
			renderer.shader.bind( shader, false );
			renderer.state!.setBlendMode(utils.correctBlendMode(BLEND_MODES.NORMAL, true));
			for( let i = 0, imax = buffers.length; i < imax; ++i ) {
				buffers[ i ].render( shader );
			}
		}
	}

	protected increaseBufferSize(): boolean {
		const bufferSize = this._bufferSize;
		const bufferSizeMax = this._bufferSizeMax;
		if( bufferSize < bufferSizeMax ) {
			this._bufferSize = Math.min( bufferSizeMax, bufferSize << 1 );
			return true;
		}
		return false;
	}

	protected getBufferSize(): number {
		return this._bufferSize;
	}

	updateBuffers(
		shapes: EShape[], buffers: EShapeBuffer[],
		renderer: Renderer, shader: Shader,
		antialiasWeight: number
	): void {
		const iterator = this._iterator;
		iterator.reset( shapes );
		let ib = 0;
		const ibmax = buffers.length;
		for( ; iterator.get() != null && ib < ibmax; ++ib ) {
			if( ! buffers[ ib ].update( iterator, antialiasWeight ) ) {
				// Failed to update the shapes.
				// This is most likely caused by small buffers.
				// So increase the buffer size.
				this.increaseBufferSize();
				break;
			}
		}

		if( ib < ibmax ) {
			for( let jb = ib; jb < ibmax; ++jb ) {
				buffers[ jb ].destroy();
			}
			buffers.length = ib;
		}

		while( iterator.get() != null ) {
			const buffer = new EShapeBuffer( this.getBufferSize(), renderer, shader );
			if( buffer.update( iterator, antialiasWeight ) ) {
				buffers.push( buffer );
			} else {
				buffer.destroy();

				// Again, increase the buffer size;
				if( ! this.increaseBufferSize() ) {
					// No way to render
					return;
				}
			}
		}
	}
}

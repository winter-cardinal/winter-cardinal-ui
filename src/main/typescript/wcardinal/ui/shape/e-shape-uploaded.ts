/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Texture, TextureUvs, utils } from "pixi.js";
import { EShape } from "./e-shape";
import { EShapeBuffer } from "./e-shape-buffer";
import { EShapeBufferUnitBuilder } from "./e-shape-buffer-unit-builder";
import { EShapeCorner } from "./e-shape-corner";

const FMIN: number = 0.00001;

export interface EShapeUploaded {
	update( shape: EShape ): void;
	isCompatible( shape: EShape ): boolean;
	getBuffer(): EShapeBuffer;
	getVertexOffset(): number;
	getVertexCount(): number;
	getIndexOffset(): number;
	getIndexCount(): number;
	buildUnit( builder: EShapeBufferUnitBuilder ): void;
}

export abstract class EShapeUploadedBase implements EShapeUploaded {
	protected buffer: EShapeBuffer;

	protected transformLocalId: number;

	protected vertexOffset: number;
	protected vertexCount: number;
	protected indexOffset: number;
	protected indexCount: number;

	protected colorFill: number;
	protected alphaFill: number;
	protected colorStroke: number;
	protected alphaStroke: number;

	protected sizeX: number;
	protected sizeY: number;
	protected worldSizeXHalf: number;
	protected worldSizeYHalf: number;
	protected worldSizeZHalf: number;
	protected worldSizeWHalf: number;
	protected worldSizeR: number;
	protected strokeWidth: number;
	protected strokeAlign: number;
	protected strokeSide: number;
	protected radius: number;
	protected corner: EShapeCorner;

	protected texture: Texture | null;
	protected textureTransformId: number;

	protected antialiasWeight: number;

	constructor(
		buffer: EShapeBuffer,
		voffset: number, ioffset: number,
		vcount: number, icount: number,
		antialiasWeight: number
	) {
		this.buffer = buffer;

		this.transformLocalId = -1;

		this.vertexOffset = voffset;
		this.vertexCount = vcount;
		this.indexOffset = ioffset;
		this.indexCount = icount;

		this.colorFill = NaN;
		this.alphaFill = -1;
		this.colorStroke = NaN;
		this.alphaStroke = -1;

		this.sizeX = NaN;
		this.sizeY = NaN;
		this.worldSizeXHalf = NaN;
		this.worldSizeYHalf = NaN;
		this.worldSizeZHalf = NaN;
		this.worldSizeWHalf = NaN;
		this.worldSizeR = NaN;
		this.strokeWidth = NaN;
		this.strokeAlign = NaN;
		this.strokeSide = NaN;
		this.radius = NaN;
		this.corner = NaN;

		this.texture = null;
		this.textureTransformId = NaN;

		this.antialiasWeight = antialiasWeight;
	}

	init( shape: EShape ): this {
		shape.uploaded = this;
		return this;
	}

	abstract update( shape: EShape ): void;

	isCompatible( shape: EShape ): boolean {
		return true;
	}

	getBuffer(): EShapeBuffer {
		return this.buffer;
	}

	getVertexOffset(): number {
		return this.vertexOffset;
	}

	getVertexCount(): number {
		return this.vertexCount;
	}

	getIndexOffset(): number {
		return this.indexOffset;
	}

	getIndexCount(): number {
		return this.indexCount;
	}

	protected toTransformLocalId( shape: EShape ) {
		shape.updateTransform();
		return shape.transform.getLocalId();
	}

	protected toTexture( shape: EShape ) {
		return shape.texture || Texture.WHITE;
	}

	protected toTextureTransformId( texture: Texture ): number {
		const textureAny = texture as any;
		if( textureAny._uvs == null ) {
			texture.updateUvs();
		}
		return textureAny._updateID;
	}

	protected toTextureUvs( texture: Texture ): TextureUvs {
		return (texture as any)._uvs;
	}

	protected fillColor( color: number, alpha: number, voffset: number, count: number, colors: Float32Array ) {
		const rgba = utils.premultiplyTintToRgba( color, alpha, this.buffer.workColor );
		const r = rgba[ 0 ];
		const g = rgba[ 1 ];
		const b = rgba[ 2 ];
		const a = rgba[ 3 ];

		for( let i = voffset * 4, imax = i + count * 4; i < imax; i += 4 ) {
			colors[ i + 0 ] = r;
			colors[ i + 1 ] = g;
			colors[ i + 2 ] = b;
			colors[ i + 3 ] = a;
		}
	}

	protected updateColorFill( buffer: EShapeBuffer, shape: EShape, vertexCount: number ) {
		const fill = shape.fill;
		const isEnabled = shape.visible && fill.enable;
		const color = fill.color;
		const alpha = (isEnabled ? fill.alpha : 0);
		if( color !== this.colorFill || alpha !== this.alphaFill ) {
			this.colorFill = color;
			this.alphaFill = alpha;
			buffer.colorFillBuffer.update();

			this.fillColor(
				color, alpha,
				this.vertexOffset,
				vertexCount,
				buffer.colorFills
			);
		}
	}

	protected updateColorStroke( buffer: EShapeBuffer, shape: EShape, vertexCount: number ) {
		const stroke = shape.stroke;
		const isEnabled = shape.visible && stroke.enable && 0 < stroke.width;
		const color = stroke.color;
		const alpha = (isEnabled ? stroke.alpha : 0);
		if( color !== this.colorStroke || alpha !== this.alphaStroke ) {
			this.colorStroke = color;
			this.alphaStroke = alpha;
			buffer.colorStrokeBuffer.update();

			this.fillColor(
				color, alpha,
				this.vertexOffset,
				vertexCount,
				buffer.colorStrokes
			);
		}
	}

	protected updateColorFillAndStroke( buffer: EShapeBuffer, shape: EShape, vertexCount: number ) {
		this.updateColorFill( buffer, shape, vertexCount );
		this.updateColorStroke( buffer, shape, vertexCount );
	}

	protected calcStep( size: number, strokeWidth: number, result: Float32Array ): Float32Array {
		const antialiasWeight = this.antialiasWeight;
		if( FMIN < strokeWidth ) {
			const dpc0 = size - strokeWidth;
			if( FMIN < dpc0 ) {
				const pc0 = antialiasWeight / dpc0;
				const pc1 = antialiasWeight / Math.max( FMIN, size );
				const swc = 1 / Math.max( FMIN, 1 - strokeWidth / size );
				result[ 0 ] = swc;
				result[ 1 ] = pc0;
				result[ 2 ] = pc1;
			} else {
				const pc0 = antialiasWeight / FMIN;
				const pc1 = antialiasWeight / Math.max( FMIN, size );
				const swc = 1 / FMIN;
				result[ 0 ] = swc;
				result[ 1 ] = pc0;
				result[ 2 ] = pc1;
			}
		} else {
			// Assumes strokeWidth === 0
			const pc = antialiasWeight / Math.max( FMIN, size );
			result[ 0 ] = 1;
			result[ 1 ] = pc;
			result[ 2 ] = pc;
		}
		return result;
	}

	protected updateStep(
		steps: Float32Array,
		antialiases: Float32Array,
		clippings: Float32Array,
		voffset: number, vcount: number,
		swx: number, swy: number, px0: number, py0: number, px1: number, py1: number
	) {
		const istart = voffset * 2;
		const imax = istart + vcount * 2;
		const jstart = voffset * 3;
		const kstart = voffset * 4;
		for( let i = istart, j = jstart, k = kstart; i < imax; i += 2, j += 3, k += 4 ) {
			const cx = clippings[ j + 0 ];
			const cy = clippings[ j + 1 ];
			steps[ i + 0 ] = swx * cx;
			steps[ i + 1 ] = swy * cy;
			antialiases[ k + 0 ] = px0;
			antialiases[ k + 1 ] = py0;
			antialiases[ k + 2 ] = px1;
			antialiases[ k + 3 ] = py1;
		}
	}

	protected updateStepIf(
		buffer: EShapeBuffer,
		voffset: number, vcount: number,
		swc: number, pc0: number, pc1: number,
		swx: number, swy: number, px0: number, py0: number, px1: number, py1: number
	) {
		const steps = buffer.steps;
		const antialiases = buffer.antialiases;
		const clippings = buffer.clippings;
		const istart = voffset * 2;
		const imax = istart + vcount * 2;
		const jstart = voffset * 3;
		const kstart = voffset * 4;
		for( let i = istart, j = jstart, k = kstart; i < imax; i += 2, j += 3, k += 4 ) {
			const cx = clippings[ j + 0 ];
			const cy = clippings[ j + 1 ];
			const cz = clippings[ j + 2 ];
			if( 0.5 < cz ) {
				steps[ i + 0 ] = swc * cx;
				steps[ i + 1 ] = swc * cy;
				antialiases[ k + 0 ] = pc0;
				antialiases[ k + 1 ] = pc0;
				antialiases[ k + 2 ] = pc1;
				antialiases[ k + 3 ] = pc1;
			} else {
				steps[ i + 0 ] = swx * cx;
				steps[ i + 1 ] = swy * cy;
				antialiases[ k + 0 ] = px0;
				antialiases[ k + 1 ] = py0;
				antialiases[ k + 2 ] = px1;
				antialiases[ k + 3 ] = py1;
			}
		}
	}

	protected calcLength( p0x: number, p0y: number, p1x: number, p1y: number ) {
		const dx01 = p1x - p0x;
		const dy01 = p1y - p0y;
		return Math.sqrt( dx01 * dx01 + dy01 * dy01 );
	}

	buildUnit( builder: EShapeBufferUnitBuilder ) {
		const texture = this.texture || Texture.WHITE;
		const baseTexture = texture.baseTexture;
		if( baseTexture !== builder.baseTexture ) {
			builder.baseTexture = baseTexture;
			const indexOffset = this.indexOffset;
			builder.push( texture, indexOffset );
		}
	}
}

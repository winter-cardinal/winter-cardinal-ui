/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Texture, TextureUvs } from "pixi.js";
import { EShape } from "./e-shape";
import { EShapeBuffer } from "./e-shape-buffer";
import { EShapeBufferUnitBuilder } from "./e-shape-buffer-unit-builder";
import { EShapeCorner } from "./e-shape-corner";
import { buildColor } from "./variant/build-color";

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

	protected updateColorFill( buffer: EShapeBuffer, shape: EShape, vertexCount: number ) {
		const fill = shape.fill;
		const isEnabled = shape.visible && fill.enable;
		const color = fill.color;
		const alpha = (isEnabled ? fill.alpha : 0);
		if( color !== this.colorFill || alpha !== this.alphaFill ) {
			this.colorFill = color;
			this.alphaFill = alpha;
			buffer.colorFillBuffer.update();

			buildColor(
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

			buildColor(
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

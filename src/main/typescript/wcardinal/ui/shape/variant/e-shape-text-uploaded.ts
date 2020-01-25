/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Texture } from "pixi.js";
import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeBufferUnitBuilder } from "../e-shape-buffer-unit-builder";
import { EShapeTextAtlas } from "../e-shape-text";
import { EShapeUploadedBase } from "../e-shape-uploaded";
import { buildColor } from "./build-color";
import {
	buildTextClipping, buildTextIndex, buildTextStep, buildTextVertex,
	TEXT_VERTEX_COUNT, toTextBufferCount
} from "./build-text";

export abstract class EShapeTextUploaded extends EShapeUploadedBase {
	protected textTexture: Texture | null;
	protected textTextureTransformId: number;
	protected textValue: string;
	protected textFamily: string;
	protected textSize: number;
	protected textColor: number;
	protected textAlpha: number;
	protected textWeight: number;
	protected textStyle: number;
	protected textAlignHorizontal: number;
	protected textAlignVertical: number;
	protected textOffsetHorizontal: number;
	protected textOffsetVertical: number;
	protected textOutlineWidth: number;
	protected textOutlineColor: number;
	protected textOutlineAlpha: number;
	protected textSpacingHorizontal: number;
	protected textSpacingVertical: number;
	protected textDirection: number;
	protected textPaddingHorizontal: number;
	protected textPaddingVertical: number;
	protected textClipping: boolean;
	protected textVertexOffset: number;
	protected textIndexOffset: number;
	protected textVertexCount: number;
	protected textIndexCount: number;

	constructor(
		buffer: EShapeBuffer,
		voffset: number, ioffset: number,
		tvcount: number, ticount: number,
		vcount: number, icount: number,
		antialiasWeight: number
	) {
		super( buffer, voffset, ioffset, vcount, icount, antialiasWeight );

		this.textSize = NaN;
		this.textFamily = "auto";
		this.textValue = "";
		this.textTexture = null;
		this.textTextureTransformId = NaN;
		this.textColor = NaN;
		this.textAlpha = NaN;
		this.textWeight = NaN;
		this.textStyle = NaN;
		this.textAlignHorizontal = NaN;
		this.textAlignVertical = NaN;
		this.textOffsetHorizontal = NaN;
		this.textOffsetVertical = NaN;
		this.textOutlineWidth = NaN;
		this.textOutlineColor = NaN;
		this.textOutlineAlpha = NaN;
		this.textSpacingHorizontal = NaN;
		this.textSpacingVertical = NaN;
		this.textDirection = NaN;
		this.textPaddingHorizontal = NaN;
		this.textPaddingVertical = NaN;
		this.textClipping = false;
		this.textVertexOffset = this.vertexOffset + this.vertexCount - tvcount;
		this.textIndexOffset = this.indexOffset + this.indexCount - ticount;
		this.textVertexCount = tvcount;
		this.textIndexCount = ticount;
	}

	initText(): void {
		const vcount = this.textVertexCount;
		if( 0 < vcount ) {
			// Clippings
			const buffer = this.buffer;
			const voffset = this.textVertexOffset;
			buffer.clippingBuffer.update();
			buildTextClipping(
				buffer.clippings,
				voffset,
				vcount
			);

			// Indices
			buffer.indexBuffer.update();
			buildTextIndex(
				buffer.indices,
				voffset,
				this.textIndexOffset,
				this.textIndexCount
			);
		}
	}

	isCompatible( shape: EShape ): boolean {
		if( super.isCompatible( shape ) ) {
			return ( toTextBufferCount( shape ) * TEXT_VERTEX_COUNT === this.textVertexCount );
		}
		return false;
	}

	protected updateText( buffer: EShapeBuffer, shape: EShape ) {
		const vcount = this.textVertexCount;
		if( 0 < vcount ) {
			const textAtlas = shape.text.atlas;
			if( textAtlas != null ) {
				this.updateTextVertex( buffer, shape, textAtlas );
				this.updateTextColorFill( buffer, shape );
				this.updateTextColorStroke( buffer, shape );
				this.updateTextStep( buffer, shape );
			}
		}
	}

	protected updateColor( buffer: EShapeBuffer, shape: EShape ) {
		const vertexCount = this.vertexCount - this.textVertexCount;
		this.updateColorFillAndStroke( buffer, shape, vertexCount );
	}

	protected updateTextVertex( buffer: EShapeBuffer, shape: EShape, textAtlas: EShapeTextAtlas ) {
		const text = shape.text;
		const textSize = text.size;
		const textFamily = text.family;
		const textValue = text.value;
		const textStyle = text.style;
		const textAlignHorizontal = text.align.horizontal;
		const textAlignVertical = text.align.vertical;
		const textOffsetHorizontal = text.offset.horizontal;
		const textOffsetVertical = text.offset.vertical;
		const textSpacingHorizontal = text.spacing.horizontal;
		const textSpacingVertical = text.spacing.vertical;
		const textDirection = text.direction;
		const textPaddingHorizontal = text.padding.horizontal;
		const textPaddingVertical = text.padding.vertical;
		const textClipping = text.clipping;
		const textTexture = text.texture || Texture.WHITE;
		const textTextureTransformId = this.toTextureTransformId( textTexture );

		const isCharChanged = (textValue !== this.textValue || textFamily !== this.textFamily);
		const isCharSizeChanged = (textSize !== this.textSize);
		const isCharStyleChanged = (textStyle !== this.textStyle);
		const isCharAlignChanged = (textAlignHorizontal !== this.textAlignHorizontal ||
			textAlignVertical !== this.textAlignVertical);
		const isCharOffsetChanged = (textOffsetHorizontal !== this.textOffsetHorizontal ||
			textOffsetVertical !== this.textOffsetVertical);
		const isCharSpacingChanged = (textSpacingHorizontal !== this.textSpacingHorizontal ||
			textSpacingVertical !== this.textSpacingVertical ||
			textPaddingHorizontal !== this.textPaddingHorizontal ||
			textPaddingVertical !== this.textPaddingVertical);
		const isCharDirectionChanged = (textDirection !== this.textDirection);
		const isClippingChanged = ( this.textClipping !== textClipping );
		const isTextureChanged = ( textTexture !== this.textTexture ||
			textTextureTransformId !== this.textTextureTransformId );

		if( isCharChanged || isCharSizeChanged || isCharStyleChanged ||
			isCharAlignChanged || isCharOffsetChanged || isCharSpacingChanged ||
			isCharDirectionChanged || isClippingChanged || isTextureChanged ) {
			this.textSize = textSize;
			this.textFamily = textFamily;
			this.textValue = textValue;
			this.textStyle = textStyle;
			this.textAlignHorizontal = textAlignHorizontal;
			this.textAlignVertical = textAlignVertical;
			this.textOffsetHorizontal = textOffsetHorizontal;
			this.textOffsetVertical = textOffsetVertical;
			this.textSpacingHorizontal = textSpacingHorizontal;
			this.textSpacingVertical = textSpacingVertical;
			this.textDirection = textDirection;
			this.textPaddingHorizontal = textPaddingHorizontal;
			this.textPaddingVertical = textPaddingVertical;
			this.textClipping = textClipping;
			this.textTexture = textTexture;
			this.textTextureTransformId = textTextureTransformId;

			if( isCharSizeChanged ) {
				// Invalidate the text weight to update the text steps.
				this.textWeight = NaN;
			}

			// Vertices & UVs
			buffer.vertexBuffer.update();
			buffer.uvBuffer.update();
			const shapeSize = shape.size;
			const textWorld = text.world = text.world || new Float32Array( 8 );
			buildTextVertex(
				buffer.vertices,
				buffer.uvs,
				this.textVertexOffset,
				this.textVertexCount,
				0,
				0,
				shapeSize.x,
				shapeSize.y,
				textAtlas,
				textSize,
				textValue,
				textStyle,
				textAlignHorizontal,
				textAlignVertical,
				textOffsetHorizontal,
				textOffsetVertical,
				textSpacingHorizontal,
				textSpacingVertical,
				textDirection,
				textPaddingHorizontal,
				textPaddingVertical,
				textClipping,
				textWorld,
				this.toTextureUvs( textTexture ),
				shape.transform.internalTransform,
				buffer.work
			);
		}
	}

	protected updateTextColorFill( buffer: EShapeBuffer, shape: EShape ) {
		const text = shape.text;
		const color = text.color;
		const alpha = ( shape.visible && text.enable ? text.alpha : 0 );
		if( color !== this.textColor || alpha !== this.textAlpha ) {
			this.textColor = color;
			this.textAlpha = alpha;
			buffer.colorFillBuffer.update();

			buildColor(
				color, alpha,
				this.textVertexOffset,
				this.textVertexCount,
				buffer.colorFills
			);
		}
	}

	protected updateTextColorStroke( buffer: EShapeBuffer, shape: EShape ) {
		const text = shape.text;
		const outline = text.outline;
		const color = outline.color;
		const alpha = ( shape.visible && text.enable ? outline.alpha : 0 );
		if( color !== this.textOutlineColor || alpha !== this.textOutlineAlpha ) {
			this.textOutlineColor = color;
			this.textOutlineAlpha = alpha;
			buffer.colorStrokeBuffer.update();

			buildColor(
				color, alpha,
				this.textVertexOffset,
				this.textVertexCount,
				buffer.colorStrokes
			);
		}
	}

	protected updateTextStep( buffer: EShapeBuffer, shape: EShape ) {
		const text = shape.text;
		const textOutline = text.outline;
		const textOutlineWidth = (textOutline.enable ? textOutline.width : 0);
		const textWeight = text.weight;
		if( textWeight !== this.textWeight || textOutlineWidth !== this.textOutlineWidth ) {
			this.textWeight = textWeight;
			this.textOutlineWidth = textOutlineWidth;

			buffer.stepBuffer.update();
			buffer.antialiasBuffer.update();
			buildTextStep(
				buffer.steps,
				buffer.antialiases,
				this.textVertexOffset,
				this.textVertexCount,
				text.atlas,
				text.size,
				textOutlineWidth,
				textWeight
			);
		}
	}

	buildUnit( builder: EShapeBufferUnitBuilder ) {
		super.buildUnit( builder );

		if( 0 < this.textVertexCount ) {
			const textTexture = this.textTexture || Texture.WHITE;
			const textBaseTexture = textTexture.baseTexture;
			if( textBaseTexture !== builder.baseTexture ) {
				builder.baseTexture = textBaseTexture;
				builder.push( textTexture, this.textIndexOffset );
			}
		}
	}
}

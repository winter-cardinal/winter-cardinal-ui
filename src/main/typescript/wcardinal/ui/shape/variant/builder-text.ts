/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Texture } from "pixi.js";
import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeBufferUnitBuilder } from "../e-shape-buffer-unit-builder";
import { EShapeTextAtlas } from "../e-shape-text";
import { buildColor } from "./build-color";
import {
	buildTextClipping,
	buildTextIndex,
	buildTextStep,
	buildTextVertex,
	TEXT_FMIN,
	TEXT_VERTEX_COUNT,
	toTextBufferCount
} from "./build-text";
import { Builder } from "./builder";
import { toTextureTransformId, toTextureUvs, toTransformLocalId } from "./builders";

export class BuilderText implements Builder {
	readonly vertexOffset: number;
	readonly indexOffset: number;
	readonly vertexCount: number;
	readonly indexCount: number;

	protected sizeX: number;
	protected sizeY: number;
	protected transformLocalId: number;
	protected scaleX: number;
	protected scaleY: number;

	protected texture: Texture | null;
	protected textureTransformId: number;
	protected value: string;
	protected family: string;
	protected size: number;
	protected color: number;
	protected alpha: number;
	protected weight: number;
	protected style: number;
	protected alignHorizontal: number;
	protected alignVertical: number;
	protected offsetHorizontal: number;
	protected offsetVertical: number;
	protected outlineWidth: number;
	protected outlineColor: number;
	protected outlineAlpha: number;
	protected spacingHorizontal: number;
	protected spacingVertical: number;
	protected direction: number;
	protected paddingHorizontal: number;
	protected paddingVertical: number;
	protected clipping: boolean;
	protected fitting: boolean;

	constructor(
		vertexOffset: number,
		indexOffset: number,
		vertexCount: number,
		indexCount: number
	) {
		this.vertexOffset = vertexOffset;
		this.indexOffset = indexOffset;
		this.vertexCount = vertexCount;
		this.indexCount = indexCount;

		this.sizeX = NaN;
		this.sizeY = NaN;

		this.transformLocalId = NaN;

		this.scaleX = 1;
		this.scaleY = 1;

		this.size = NaN;
		this.family = "auto";
		this.value = "";
		this.texture = null;
		this.textureTransformId = NaN;
		this.color = NaN;
		this.alpha = NaN;
		this.weight = NaN;
		this.style = NaN;
		this.alignHorizontal = NaN;
		this.alignVertical = NaN;
		this.offsetHorizontal = NaN;
		this.offsetVertical = NaN;
		this.outlineWidth = NaN;
		this.outlineColor = NaN;
		this.outlineAlpha = NaN;
		this.spacingHorizontal = NaN;
		this.spacingVertical = NaN;
		this.direction = NaN;
		this.paddingHorizontal = NaN;
		this.paddingVertical = NaN;
		this.clipping = false;
		this.fitting = false;
	}

	init(buffer: EShapeBuffer): void {
		const vcount = this.vertexCount;
		if (0 < vcount) {
			// Clippings
			const voffset = this.vertexOffset;
			buffer.updateClippings();
			buildTextClipping(buffer.clippings, voffset, vcount);

			// Indices
			buffer.updateIndices();
			buildTextIndex(buffer.indices, voffset, this.indexOffset, this.indexCount);
		}
	}

	isCompatible(shape: EShape): boolean {
		return toTextBufferCount(shape) * TEXT_VERTEX_COUNT === this.vertexCount;
	}

	update(buffer: EShapeBuffer, shape: EShape): void {
		const vcount = this.vertexCount;
		if (0 < vcount) {
			const textAtlas = shape.text.atlas;
			if (textAtlas != null) {
				this.updateVertex(buffer, shape, textAtlas);
				this.updateColorFill(buffer, shape);
				this.updateColorStroke(buffer, shape);
				this.updateStep(buffer, shape);
			}
		}
	}

	protected updateVertex(buffer: EShapeBuffer, shape: EShape, textAtlas: EShapeTextAtlas): void {
		const size = shape.size;
		const sizeX = size.x;
		const sizeY = size.y;
		const isSizeChanged = sizeX !== this.sizeX || sizeY !== this.sizeY;

		const transformLocalId = toTransformLocalId(shape);
		const isTransformChanged = this.transformLocalId !== transformLocalId;

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
		const textFitting = text.fitting;
		const textTexture = text.texture || Texture.WHITE;
		const textTextureTransformId = toTextureTransformId(textTexture);

		const isCharChanged = textValue !== this.value || textFamily !== this.family;
		const isCharSizeChanged = textSize !== this.size;
		const isCharStyleChanged = textStyle !== this.style;
		const isCharAlignChanged =
			textAlignHorizontal !== this.alignHorizontal ||
			textAlignVertical !== this.alignVertical;
		const isCharOffsetChanged =
			textOffsetHorizontal !== this.offsetHorizontal ||
			textOffsetVertical !== this.offsetVertical;
		const isCharSpacingChanged =
			textSpacingHorizontal !== this.spacingHorizontal ||
			textSpacingVertical !== this.spacingVertical ||
			textPaddingHorizontal !== this.paddingHorizontal ||
			textPaddingVertical !== this.paddingVertical;
		const isCharDirectionChanged = textDirection !== this.direction;
		const isClippingChanged = this.clipping !== textClipping;
		const isFittingChanged = this.fitting !== textFitting;
		const isTextureChanged =
			textTexture !== this.texture || textTextureTransformId !== this.textureTransformId;

		if (
			isSizeChanged ||
			isTransformChanged ||
			isCharChanged ||
			isCharSizeChanged ||
			isCharStyleChanged ||
			isCharAlignChanged ||
			isCharOffsetChanged ||
			isCharSpacingChanged ||
			isCharDirectionChanged ||
			isClippingChanged ||
			isFittingChanged ||
			isTextureChanged
		) {
			this.size = textSize;
			this.family = textFamily;
			this.value = textValue;
			this.style = textStyle;
			this.alignHorizontal = textAlignHorizontal;
			this.alignVertical = textAlignVertical;
			this.offsetHorizontal = textOffsetHorizontal;
			this.offsetVertical = textOffsetVertical;
			this.spacingHorizontal = textSpacingHorizontal;
			this.spacingVertical = textSpacingVertical;
			this.direction = textDirection;
			this.paddingHorizontal = textPaddingHorizontal;
			this.paddingVertical = textPaddingVertical;
			this.clipping = textClipping;
			this.fitting = textFitting;
			this.texture = textTexture;
			this.textureTransformId = textTextureTransformId;

			if (isCharSizeChanged || isFittingChanged || (textFitting && isSizeChanged)) {
				// Invalidate the text weight to update the text steps.
				this.weight = NaN;
			}

			// Vertices & UVs
			buffer.updateVertices();
			buffer.updateUvs();
			const shapeSize = shape.size;
			let textWorld = text.world;
			if (textWorld == null) {
				textWorld = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
				text.world = textWorld;
			}
			buildTextVertex(
				buffer.vertices,
				buffer.uvs,
				this.vertexOffset,
				this.vertexCount,
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
				textFitting,
				textWorld,
				toTextureUvs(textTexture),
				shape.transform.internalTransform
			);
		}
	}

	protected updateColorFill(buffer: EShapeBuffer, shape: EShape): void {
		const text = shape.text;
		const color = text.color;
		const alpha = shape.visible && text.enable ? text.alpha : 0;
		if (color !== this.color || alpha !== this.alpha) {
			this.color = color;
			this.alpha = alpha;
			buffer.updateColorFills();

			buildColor(color, alpha, this.vertexOffset, this.vertexCount, buffer.colorFills);
		}
	}

	protected updateColorStroke(buffer: EShapeBuffer, shape: EShape): void {
		const text = shape.text;
		const outline = text.outline;
		const color = outline.color;
		const alpha = shape.visible && text.enable ? outline.alpha : 0;
		if (color !== this.outlineColor || alpha !== this.outlineAlpha) {
			this.outlineColor = color;
			this.outlineAlpha = alpha;
			buffer.updateColorStrokes();

			buildColor(color, alpha, this.vertexOffset, this.vertexCount, buffer.colorStrokes);
		}
	}

	protected updateStep(buffer: EShapeBuffer, shape: EShape): void {
		const text = shape.text;

		const textOutline = text.outline;
		const textOutlineWidth = textOutline.enable ? textOutline.width : 0;
		const isOutlineWidthChanged = textOutlineWidth !== this.outlineWidth;

		const textWeight = text.weight;
		const isWeightChanged = textWeight !== this.weight;

		let scaleX = 1;
		let scaleY = 1;
		const textWorld = text.world;
		if (textWorld != null) {
			scaleX = textWorld[8];
			scaleY = textWorld[9];
		}
		const isScaleChanged =
			TEXT_FMIN < Math.abs(this.scaleX - scaleX) ||
			TEXT_FMIN < Math.abs(this.scaleY - scaleY);

		if (isWeightChanged || isOutlineWidthChanged || isScaleChanged) {
			this.weight = textWeight;
			this.outlineWidth = textOutlineWidth;
			this.scaleX = scaleX;
			this.scaleY = scaleY;

			buffer.updateSteps();
			buildTextStep(
				buffer.steps,
				this.vertexOffset,
				this.vertexCount,
				text.atlas,
				text.size,
				textOutlineWidth,
				textWeight,
				this.scaleX,
				this.scaleY
			);
		}
	}

	buildUnit(builder: EShapeBufferUnitBuilder): void {
		if (0 < this.vertexCount) {
			const textTexture = this.texture || Texture.WHITE;
			const textBaseTexture = textTexture.baseTexture;
			if (textBaseTexture !== builder.baseTexture) {
				builder.baseTexture = textBaseTexture;
				builder.push(textTexture, this.indexOffset);
			}
		}
	}
}

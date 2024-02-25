/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Texture } from "pixi.js";
import { EShape } from "../e-shape";
import { EShapeBufferUnitBuilder } from "../e-shape-buffer-unit-builder";
import { EShapeTextAtlas } from "../e-shape-text";
import { buildColor } from "./build-color";
import {
	buildTextIndex,
	buildTextStep,
	buildTextVertex,
	TEXT_FMIN,
	TEXT_INDEX_COUNT_SHIFT,
	TEXT_VERTEX_COUNT_SHIFT,
	toTextBufferCount
} from "./build-text";
import { Builder, BuilderBuffer, BuilderFlag } from "./builder";
import { toTextureTransformId, toTextureUvs, toTransformLocalId } from "./builders";

export class BuilderText implements Builder {
	buffer: BuilderBuffer;
	vertexOffset: number;
	indexOffset: number;
	vertexCount: number;
	indexCount: number;

	protected inited: BuilderFlag;

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
		buffer: BuilderBuffer,
		vertexOffset: number,
		indexOffset: number,
		vertexCount: number,
		indexCount: number
	) {
		this.buffer = buffer;
		this.vertexOffset = vertexOffset;
		this.indexOffset = indexOffset;
		this.vertexCount = vertexCount;
		this.indexCount = indexCount;

		this.inited = BuilderFlag.NONE;

		this.sizeX = 0;
		this.sizeY = 0;

		this.transformLocalId = 0;

		this.scaleX = 1;
		this.scaleY = 1;

		this.size = 0;
		this.family = "auto";
		this.value = "";
		this.texture = null;
		this.textureTransformId = 0;
		this.color = 0;
		this.alpha = 0;
		this.weight = 0;
		this.style = 0;
		this.alignHorizontal = 0;
		this.alignVertical = 0;
		this.offsetHorizontal = 0;
		this.offsetVertical = 0;
		this.outlineWidth = 0;
		this.outlineColor = 0;
		this.outlineAlpha = 0;
		this.spacingHorizontal = 0;
		this.spacingVertical = 0;
		this.direction = 0;
		this.paddingHorizontal = 0;
		this.paddingVertical = 0;
		this.clipping = false;
		this.fitting = false;
	}

	init(): this {
		const vcount = this.vertexCount;
		if (0 < vcount) {
			// Indices
			const buffer = this.buffer;
			const voffset = this.vertexOffset;
			buffer.updateIndices();
			buildTextIndex(buffer.indices, voffset, this.indexOffset, this.indexCount);
		}
		this.inited |= BuilderFlag.INDEX;
		return this;
	}

	reinit(
		buffer: BuilderBuffer,
		shape: EShape,
		vertexOffset: number,
		indexOffset: number
	): boolean {
		const tcount = toTextBufferCount(shape);
		const vertexCount = tcount << TEXT_VERTEX_COUNT_SHIFT;
		const indexCount = tcount << TEXT_INDEX_COUNT_SHIFT;
		if (
			this.buffer !== buffer ||
			this.vertexOffset !== vertexOffset ||
			this.indexOffset !== indexOffset ||
			this.vertexCount !== vertexCount ||
			this.indexCount !== indexCount
		) {
			if (buffer.check(vertexOffset, indexOffset, vertexCount, indexCount)) {
				this.inited = BuilderFlag.NONE;
				this.buffer = buffer;
				this.vertexOffset = vertexOffset;
				this.indexOffset = indexOffset;
				this.vertexCount = vertexCount;
				this.indexCount = indexCount;
				this.init();
				return true;
			} else {
				return false;
			}
		} else {
			return true;
		}
	}

	isCompatible(shape: EShape): boolean {
		return toTextBufferCount(shape) << TEXT_VERTEX_COUNT_SHIFT === this.vertexCount;
	}

	update(shape: EShape): this {
		const vcount = this.vertexCount;
		if (0 < vcount) {
			const textAtlas = shape.text.atlas;
			if (textAtlas != null) {
				const buffer = this.buffer;
				this.updateVertex(buffer, shape, textAtlas);
				this.updateColor(buffer, shape);
				this.updateStep(buffer, shape);
			}
		}
		return this;
	}

	protected updateVertex(buffer: BuilderBuffer, shape: EShape, textAtlas: EShapeTextAtlas): void {
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

		const isNotInited = !(this.inited & BuilderFlag.VERTEX);

		if (
			isNotInited ||
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
			this.inited |= BuilderFlag.VERTEX;
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
				// Invalidate the step buffer.
				this.inited &= ~BuilderFlag.STEP;
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

	protected updateColor(buffer: BuilderBuffer, shape: EShape): void {
		const text = shape.text;
		const color = text.color;
		const alpha = shape.visible && text.enable ? text.alpha : 0;

		const outline = text.outline;
		const outlineColor = outline.color;
		const outlineAlpha = shape.visible && text.enable ? outline.alpha : 0;
		const isNotInited = !(this.inited & BuilderFlag.COLOR);

		if (
			isNotInited ||
			color !== this.color ||
			alpha !== this.alpha ||
			color !== this.outlineColor ||
			alpha !== this.outlineAlpha
		) {
			this.inited |= BuilderFlag.COLOR;
			this.color = color;
			this.alpha = alpha;
			this.outlineColor = outlineColor;
			this.outlineAlpha = outlineAlpha;
			buffer.updateColors();

			buildColor(
				color,
				alpha,
				outlineColor,
				outlineAlpha,
				this.vertexOffset,
				this.vertexCount,
				buffer.colors
			);
		}
	}

	protected updateStep(buffer: BuilderBuffer, shape: EShape): void {
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

		const isNotInited = !(this.inited & BuilderFlag.STEP);

		if (isNotInited || isWeightChanged || isOutlineWidthChanged || isScaleChanged) {
			this.inited |= BuilderFlag.STEP;
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

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Texture } from "pixi.js";
import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeBufferUnitBuilder } from "../e-shape-buffer-unit-builder";
import { EShapeStrokeSide } from "../e-shape-stroke-side";
import { EShapeStrokeStyle } from "../e-shape-stroke-style";
import { buildColor } from "./build-color";
import { Builder } from "./builder";

export abstract class BuilderBase implements Builder {
	readonly vertexOffset: number;
	readonly vertexCount: number;
	readonly indexOffset: number;
	readonly indexCount: number;

	protected sizeX: number;
	protected sizeY: number;

	protected transformLocalId: number;

	protected strokeAlign: number;
	protected strokeWidth: number;
	protected strokeSide: EShapeStrokeSide;
	protected strokeStyle: EShapeStrokeStyle;

	protected colorFill: number;
	protected alphaFill: number;
	protected colorStroke: number;
	protected alphaStroke: number;

	protected texture: Texture | null;
	protected textureTransformId: number;

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

		this.transformLocalId = -1;

		this.strokeAlign = NaN;
		this.strokeWidth = NaN;
		this.strokeSide = NaN;
		this.strokeStyle = NaN;

		this.colorFill = NaN;
		this.alphaFill = -1;
		this.colorStroke = NaN;
		this.alphaStroke = -1;

		this.texture = null;
		this.textureTransformId = NaN;
	}

	abstract init(buffer: EShapeBuffer): void;

	isCompatible(shape: EShape): boolean {
		return true;
	}

	abstract update(buffer: EShapeBuffer, shape: EShape): void;

	protected updateColorFill(buffer: EShapeBuffer, shape: EShape): void {
		const fill = shape.fill;
		const isEnabled = shape.visible && fill.enable;
		const color = fill.color;
		const alpha = isEnabled ? fill.alpha : 0;
		if (color !== this.colorFill || alpha !== this.alphaFill) {
			this.colorFill = color;
			this.alphaFill = alpha;
			buffer.updateColorFills();

			buildColor(color, alpha, this.vertexOffset, this.vertexCount, buffer.colorFills);
		}
	}

	protected updateColorStroke(buffer: EShapeBuffer, shape: EShape): void {
		const stroke = shape.stroke;
		const isEnabled = shape.visible && stroke.enable && 0 < stroke.width;
		const color = stroke.color;
		const alpha = isEnabled ? stroke.alpha : 0;
		if (color !== this.colorStroke || alpha !== this.alphaStroke) {
			this.colorStroke = color;
			this.alphaStroke = alpha;
			buffer.updateColorStrokes();

			buildColor(color, alpha, this.vertexOffset, this.vertexCount, buffer.colorStrokes);
		}
	}

	buildUnit(builder: EShapeBufferUnitBuilder): void {
		const texture = this.texture || Texture.WHITE;
		const baseTexture = texture.baseTexture;
		if (baseTexture !== builder.baseTexture) {
			builder.baseTexture = baseTexture;
			const indexOffset = this.indexOffset;
			builder.push(texture, indexOffset);
		}
	}
}

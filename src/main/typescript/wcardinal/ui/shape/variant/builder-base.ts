/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Texture } from "pixi.js";
import { EShape } from "../e-shape";
import { EShapeBufferUnitBuilder } from "../e-shape-buffer-unit-builder";
import { buildColor } from "./build-color";
import { Builder, BuilderBuffer, BuilderFlag } from "./builder";
import { EShapeStrokeSide } from "../e-shape-stroke-side";
import { EShapeStrokeStyle } from "../e-shape-stroke-style";

export abstract class BuilderBase implements Builder {
	readonly vertexOffset: number;
	readonly vertexCount: number;
	readonly indexOffset: number;
	readonly indexCount: number;

	protected inited: BuilderFlag;

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

		this.inited = BuilderFlag.NONE;

		this.sizeX = 0;
		this.sizeY = 0;

		this.transformLocalId = -1;

		this.strokeAlign = 0;
		this.strokeWidth = 0;
		this.strokeSide = EShapeStrokeSide.NONE;
		this.strokeStyle = EShapeStrokeStyle.NONE;

		this.colorFill = 0;
		this.alphaFill = 0;
		this.colorStroke = 0;
		this.alphaStroke = 0;

		this.texture = null;
		this.textureTransformId = -1;
	}

	abstract init(buffer: BuilderBuffer): void;

	isCompatible(shape: EShape): boolean {
		return true;
	}

	abstract update(buffer: BuilderBuffer, shape: EShape): void;

	protected updateColorFill(buffer: BuilderBuffer, shape: EShape): void {
		const fill = shape.fill;
		const color = fill.color;
		const alpha = shape.visible && fill.enable ? fill.alpha : 0;
		const isNotInited = !(this.inited & BuilderFlag.COLOR_FILL);
		if (isNotInited || color !== this.colorFill || alpha !== this.alphaFill) {
			this.inited |= BuilderFlag.COLOR_FILL;
			this.colorFill = color;
			this.alphaFill = alpha;
			buffer.updateColorFills();

			buildColor(color, alpha, this.vertexOffset, this.vertexCount, buffer.colorFills);
		}
	}

	protected updateColorStroke(buffer: BuilderBuffer, shape: EShape): void {
		const stroke = shape.stroke;
		const color = stroke.color;
		const alpha = shape.visible && stroke.enable && 0 < stroke.width ? stroke.alpha : 0;
		const isNotInited = !(this.inited & BuilderFlag.COLOR_STROKE);
		if (isNotInited || color !== this.colorStroke || alpha !== this.alphaStroke) {
			this.inited |= BuilderFlag.COLOR_STROKE;
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

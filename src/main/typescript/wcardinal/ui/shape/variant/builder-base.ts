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
	buffer: BuilderBuffer;
	vertexOffset: number;
	vertexCount: number;
	indexOffset: number;
	indexCount: number;

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

	abstract init(): void;

	reinit(
		buffer: BuilderBuffer,
		shape: EShape,
		vertexOffset: number,
		indexOffset: number
	): boolean {
		if (
			this.buffer !== buffer ||
			this.vertexOffset !== vertexOffset ||
			this.indexOffset !== indexOffset
		) {
			if (buffer.check(vertexOffset, indexOffset, this.vertexCount, this.indexCount)) {
				this.inited = BuilderFlag.NONE;
				this.buffer = buffer;
				this.vertexOffset = vertexOffset;
				this.indexOffset = indexOffset;
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
		return true;
	}

	abstract update(shape: EShape): void;

	protected updateColor(buffer: BuilderBuffer, shape: EShape): void {
		const fill = shape.fill;
		const colorFill = fill.color;
		const alphaFill = shape.visible && fill.enable ? fill.alpha : 0;

		const stroke = shape.stroke;
		const colorStroke = stroke.color;
		const alphaStroke = shape.visible && stroke.enable && 0 < stroke.width ? stroke.alpha : 0;

		const isNotInited = !(this.inited & BuilderFlag.COLOR);

		if (
			isNotInited ||
			colorFill !== this.colorFill ||
			alphaFill !== this.alphaFill ||
			colorStroke !== this.colorStroke ||
			alphaStroke !== this.alphaStroke
		) {
			this.inited |= BuilderFlag.COLOR;
			this.colorFill = colorFill;
			this.alphaFill = alphaFill;
			this.colorStroke = colorStroke;
			this.alphaStroke = alphaStroke;
			buffer.updateColors();

			buildColor(
				colorFill,
				alphaFill,
				colorStroke,
				alphaStroke,
				this.vertexOffset,
				this.vertexCount,
				buffer.colors
			);
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

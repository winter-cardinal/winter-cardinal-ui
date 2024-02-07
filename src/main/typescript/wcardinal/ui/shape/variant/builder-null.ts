/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Texture } from "pixi.js";
import { EShape } from "../e-shape";
import { EShapeBufferUnitBuilder } from "../e-shape-buffer-unit-builder";
import { Builder, BuilderBuffer } from "./builder";
import { toTexture } from "./builders";

export class BuilderNull implements Builder {
	buffer: BuilderBuffer;
	vertexOffset: number;
	vertexCount: number;
	indexOffset: number;
	indexCount: number;

	protected texture: Texture | null;

	constructor(buffer: BuilderBuffer, vertexOffset: number, indexOffset: number) {
		this.buffer = buffer;
		this.vertexOffset = vertexOffset;
		this.indexOffset = indexOffset;
		this.vertexCount = 0;
		this.indexCount = 0;

		this.texture = null;
	}

	init(): this {
		return this;
	}

	reinit(
		buffer: BuilderBuffer,
		shape: EShape,
		vertexOffset: number,
		indexOffset: number
	): boolean {
		this.buffer = buffer;
		this.vertexOffset = vertexOffset;
		this.indexOffset = indexOffset;
		return true;
	}

	isCompatible(shape: EShape): boolean {
		return true;
	}

	update(shape: EShape): void {
		this.texture = toTexture(shape);
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

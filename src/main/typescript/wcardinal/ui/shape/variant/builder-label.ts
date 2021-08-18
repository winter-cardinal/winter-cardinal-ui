/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Texture } from "pixi.js";
import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeBufferUnitBuilder } from "../e-shape-buffer-unit-builder";
import { Builder } from "./builder";
import { toTexture } from "./builders";

export class BuilderLabel implements Builder {
	readonly vertexOffset: number;
	readonly vertexCount: number;
	readonly indexOffset: number;
	readonly indexCount: number;

	protected texture: Texture | null;

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

		this.texture = null;
	}

	init(buffer: EShapeBuffer): void {
		// DO NOTHING
	}

	isCompatible(shape: EShape): boolean {
		return true;
	}

	update(buffer: EShapeBuffer, shape: EShape): void {
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

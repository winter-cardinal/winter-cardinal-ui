/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import {
	buildCircleIndex,
	buildCircleStep,
	buildCircleUv,
	buildCircleVertex,
	CIRCLE_INDEX_COUNT,
	CIRCLE_VERTEX_COUNT,
	CIRCLE_WORLD_SIZE
} from "./build-circle";
import { BuilderBuffer, BuilderFlag } from "./builder";
import { BuilderBase } from "./builder-base";
import { toTexture, toTextureTransformId, toTextureUvs, toTransformLocalId } from "./builders";

export class BuilderCircle extends BuilderBase {
	constructor(buffer: BuilderBuffer, vertexOffset: number, indexOffset: number) {
		super(buffer, vertexOffset, indexOffset, CIRCLE_VERTEX_COUNT, CIRCLE_INDEX_COUNT);
	}

	override init(): void {
		const buffer = this.buffer;
		buffer.updateIndices();
		const voffset = this.vertexOffset;
		buildCircleIndex(buffer.indices, voffset, this.indexOffset);
		this.inited |= BuilderFlag.INDEX;
	}

	override update(shape: EShape): void {
		const buffer = this.buffer;
		this.updateVertexAndStep(buffer, shape);
		this.updateColorFill(buffer, shape);
		this.updateColorStroke(buffer, shape);
		this.updateUv(buffer, shape);
	}

	protected updateVertexAndStep(buffer: BuilderBuffer, shape: EShape): void {
		const size = shape.size;
		const sizeX = size.x;
		const sizeY = size.y;
		const isSizeChanged = sizeX !== this.sizeX || sizeY !== this.sizeY;

		const transformLocalId = toTransformLocalId(shape);
		const isTransformChanged = this.transformLocalId !== transformLocalId;

		const stroke = shape.stroke;
		const strokeAlign = stroke.align;
		const strokeWidth = stroke.enable ? stroke.width : 0;
		const strokeStyle = stroke.style;
		const isStrokeChanged =
			this.strokeAlign !== strokeAlign ||
			this.strokeWidth !== strokeWidth ||
			this.strokeStyle !== strokeStyle;

		const isNotInited = !(this.inited & BuilderFlag.VERTEX_AND_STEP);

		if (isNotInited || isSizeChanged || isTransformChanged || isStrokeChanged) {
			this.inited |= BuilderFlag.VERTEX_AND_STEP;
			this.sizeX = sizeX;
			this.sizeY = sizeY;
			this.transformLocalId = transformLocalId;
			this.strokeAlign = strokeAlign;
			this.strokeWidth = strokeWidth;
			this.strokeStyle = strokeStyle;

			// Buffer
			buffer.updateVertices();
			buffer.updateSteps();
			buildCircleVertex(
				buffer.vertices,
				this.vertexOffset,
				0,
				0,
				sizeX,
				sizeY,
				strokeAlign,
				strokeWidth,
				shape.transform.internalTransform,
				CIRCLE_WORLD_SIZE
			);
			buildCircleStep(
				buffer.steps,
				this.vertexOffset,
				strokeWidth,
				strokeStyle,
				CIRCLE_WORLD_SIZE
			);
		}
	}

	protected updateUv(buffer: BuilderBuffer, shape: EShape): void {
		const texture = toTexture(shape);
		const textureTransformId = toTextureTransformId(texture);
		const isNotInited = !(this.inited & BuilderFlag.UV);
		if (
			isNotInited ||
			texture !== this.texture ||
			textureTransformId !== this.textureTransformId
		) {
			this.inited |= BuilderFlag.UV;
			this.texture = texture;
			this.textureTransformId = textureTransformId;

			buffer.updateUvs();
			const textureUvs = toTextureUvs(texture);
			buildCircleUv(buffer.uvs, this.vertexOffset, textureUvs);
		}
	}
}

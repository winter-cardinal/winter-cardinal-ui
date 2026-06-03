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
	CIRCLE_VERTEX_COUNT
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
		this.updateVertexStepAndUv(buffer, shape);
		this.updateColor(buffer, shape);
	}

	protected updateVertexStepAndUv(buffer: BuilderBuffer, shape: EShape): void {
		const size = shape.size;
		const sizeX = size.x;
		const sizeY = size.y;
		const isSizeChanged = sizeX !== this.sizeX || sizeY !== this.sizeY;

		const transformLocalId = toTransformLocalId(shape);
		const isTransformChanged = this.transformLocalId !== transformLocalId;

		const fill = shape.fill;
		const fillDirection = fill.direction;
		const fillPercent = fill.percent;
		const isFillChanged =
			this.fillDirection !== fillDirection || this.fillPercent !== fillPercent;

		const stroke = shape.stroke;
		const strokeAlign = stroke.align;
		const strokeWidth = stroke.enable ? stroke.width : 0;
		const strokeStyle = stroke.style;
		const isStrokeChanged =
			this.strokeAlign !== strokeAlign ||
			this.strokeWidth !== strokeWidth ||
			this.strokeStyle !== strokeStyle;

		const texture = toTexture(shape);
		const textureTransformId = toTextureTransformId(texture);
		const isTextureChanged =
			texture !== this.texture || textureTransformId !== this.textureTransformId;

		const isNotInited = !(this.inited & BuilderFlag.VERTEX_STEP_AND_UV);

		if (
			isNotInited ||
			isSizeChanged ||
			isTransformChanged ||
			isFillChanged ||
			isStrokeChanged ||
			isTextureChanged
		) {
			this.inited |= BuilderFlag.VERTEX_STEP_AND_UV;
			this.sizeX = sizeX;
			this.sizeY = sizeY;
			this.transformLocalId = transformLocalId;
			this.fillDirection = fillDirection;
			this.fillPercent = fillPercent;
			this.strokeAlign = strokeAlign;
			this.strokeWidth = strokeWidth;
			this.strokeStyle = strokeStyle;
			this.texture = texture;
			this.textureTransformId = textureTransformId;

			// Buffer
			buffer.updateVertices();
			buffer.updateSteps();
			buffer.updateUvs();
			buildCircleVertex(
				buffer.vertices,
				this.vertexOffset,
				0,
				0,
				sizeX,
				sizeY,
				strokeAlign,
				strokeWidth,
				shape.transform.internalTransform
			);
			buildCircleStep(
				buffer.steps,
				this.vertexOffset,
				fillDirection,
				fillPercent,
				strokeWidth,
				strokeStyle
			);
			buildCircleUv(buffer.uvs, this.vertexOffset, toTextureUvs(texture));
		}
	}
}

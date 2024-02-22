/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import {
	buildRectangleClipping,
	buildRectangleIndex,
	buildRectangleStep,
	buildRectangleUv,
	buildRectangleVertex,
	RECTANGLE_INDEX_COUNT,
	RECTANGLE_VERTEX_COUNT,
	RECTANGLE_WORLD_SIZE
} from "./build-rectangle";
import { BuilderBuffer, BuilderFlag } from "./builder";
import { BuilderBase } from "./builder-base";
import { toTexture, toTextureTransformId, toTextureUvs, toTransformLocalId } from "./builders";

export class BuilderRectanglePivoted extends BuilderBase {
	constructor(buffer: BuilderBuffer, vertexOffset: number, indexOffset: number) {
		super(buffer, vertexOffset, indexOffset, RECTANGLE_VERTEX_COUNT, RECTANGLE_INDEX_COUNT);
	}

	override init(): void {
		const buffer = this.buffer;
		buffer.updateIndices();
		buildRectangleIndex(buffer.indices, this.vertexOffset, this.indexOffset);
		this.inited |= BuilderFlag.INDEX;
	}

	override update(shape: EShape): void {
		const buffer = this.buffer;
		this.updateVertexClippingStepAndUv(buffer, shape);
		this.updateColorFill(buffer, shape);
		this.updateColorStroke(buffer, shape);
	}

	protected updateVertexClippingStepAndUv(buffer: BuilderBuffer, shape: EShape): void {
		const size = shape.size;
		const sizeX = size.x;
		const sizeY = size.y;
		const isSizeChanged = sizeX !== this.sizeX || sizeY !== this.sizeY;

		const transformLocalId = toTransformLocalId(shape);
		const isTransformChanged = this.transformLocalId !== transformLocalId;

		const stroke = shape.stroke;
		const strokeAlign = stroke.align;
		const strokeWidth = stroke.enable ? stroke.width : 0;
		const strokeSide = stroke.side;
		const strokeStyle = stroke.style;
		const isStrokeChanged =
			this.strokeAlign !== strokeAlign ||
			this.strokeWidth !== strokeWidth ||
			this.strokeSide !== strokeSide ||
			this.strokeStyle !== strokeStyle;

		const texture = toTexture(shape);
		const textureTransformId = toTextureTransformId(texture);
		const isTextureChanged =
			texture !== this.texture || textureTransformId !== this.textureTransformId;

		const isVertexChanged = isSizeChanged || isStrokeChanged;

		const isNotInited = !(this.inited & BuilderFlag.VERTEX_CLIPPING_STEP_AND_UV);

		if (isNotInited || isVertexChanged || isTransformChanged || isTextureChanged) {
			this.inited |= BuilderFlag.VERTEX_CLIPPING_STEP_AND_UV;
			this.sizeX = sizeX;
			this.sizeY = sizeY;
			this.transformLocalId = transformLocalId;
			this.strokeAlign = strokeAlign;
			this.strokeWidth = strokeWidth;
			this.strokeSide = strokeSide;
			this.strokeStyle = strokeStyle;
			this.texture = texture;
			this.textureTransformId = textureTransformId;

			// Vertices
			const voffset = this.vertexOffset;
			buffer.updateVertices();
			buildRectangleVertex(
				buffer.vertices,
				voffset,
				0.5 * sizeX,
				0.5 * sizeY,
				sizeX,
				sizeY,
				strokeAlign,
				strokeWidth,
				shape.transform.internalTransform,
				RECTANGLE_WORLD_SIZE
			);

			// Steps
			if (isNotInited || isVertexChanged || isTransformChanged) {
				buffer.updateSteps();
				buildRectangleStep(
					voffset,
					buffer.steps,
					strokeWidth,
					strokeSide,
					strokeStyle,
					RECTANGLE_WORLD_SIZE
				);
			}

			// Clippings
			if (isNotInited || isVertexChanged) {
				buffer.updateClippings();
				buildRectangleClipping(buffer.clippings, voffset);
			}

			// UVs
			if (isNotInited || isVertexChanged || isTextureChanged) {
				buffer.updateUvs();
				buildRectangleUv(buffer.uvs, voffset, toTextureUvs(texture));
			}
		}
	}
}

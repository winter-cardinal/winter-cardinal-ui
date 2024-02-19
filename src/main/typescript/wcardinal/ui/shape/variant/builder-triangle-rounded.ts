/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeCorner } from "../e-shape-corner";
import {
	buildTriangleRoundedClipping,
	buildTriangleRoundedIndex,
	buildTriangleRoundedStep,
	buildTriangleRoundedUv,
	buildTriangleRoundedVertex,
	TRIANGLE_ROUNDED_INDEX_COUNT,
	TRIANGLE_ROUNDED_VERTEX_COUNT,
	TRIANGLE_ROUNDED_WORLD_SIZE
} from "./build-triangle-rounded";
import { BuilderBuffer, BuilderFlag } from "./builder";
import { BuilderBase } from "./builder-base";
import { toTexture, toTextureTransformId, toTextureUvs, toTransformLocalId } from "./builders";

export class BuilderTriangleRounded extends BuilderBase {
	protected radius: number;
	protected corner: EShapeCorner;

	constructor(buffer: BuilderBuffer, vertexOffset: number, indexOffset: number) {
		super(
			buffer,
			vertexOffset,
			indexOffset,
			TRIANGLE_ROUNDED_VERTEX_COUNT,
			TRIANGLE_ROUNDED_INDEX_COUNT
		);
		this.radius = 0;
		this.corner = 0;
	}

	override init(): void {
		const buffer = this.buffer;
		buffer.updateIndices();
		buildTriangleRoundedIndex(buffer.indices, this.vertexOffset, this.indexOffset);
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

		const radius = shape.radius;
		const isRadiusChanged = radius !== this.radius;

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

		const corner = shape.corner;
		const isCornerChanged = corner !== this.corner;

		const texture = toTexture(shape);
		const textureTransformId = toTextureTransformId(texture);
		const isTextureChanged =
			texture !== this.texture || textureTransformId !== this.textureTransformId;

		const isVertexChanged = isSizeChanged || isRadiusChanged || isStrokeChanged;

		const isNotInited = !(this.inited & BuilderFlag.VERTEX_CLIPPING_STEP_AND_UV);

		if (
			isNotInited ||
			isVertexChanged ||
			isTransformChanged ||
			isCornerChanged ||
			isTextureChanged
		) {
			this.inited |= BuilderFlag.VERTEX_CLIPPING_STEP_AND_UV;
			this.sizeX = sizeX;
			this.sizeY = sizeY;
			this.radius = radius;
			this.transformLocalId = transformLocalId;
			this.strokeAlign = strokeAlign;
			this.strokeWidth = strokeWidth;
			this.strokeStyle = strokeStyle;
			this.corner = corner;
			this.texture = texture;
			this.textureTransformId = textureTransformId;

			const voffset = this.vertexOffset;

			buffer.updateVertices();
			buildTriangleRoundedVertex(
				buffer.vertices,
				voffset,
				0,
				0,
				sizeX,
				sizeY,
				strokeAlign,
				strokeWidth,
				radius,
				shape.transform.internalTransform,
				TRIANGLE_ROUNDED_WORLD_SIZE
			);

			if (isNotInited || isRadiusChanged || isCornerChanged) {
				buffer.updateClippings();
				buildTriangleRoundedClipping(buffer.clippings, voffset, corner, radius);
			}

			if (isNotInited || isVertexChanged || isTransformChanged || isCornerChanged) {
				buffer.updateSteps();
				buildTriangleRoundedStep(
					buffer.steps,
					voffset,
					strokeWidth,
					strokeStyle,
					corner,
					radius,
					TRIANGLE_ROUNDED_WORLD_SIZE
				);
			}

			if (isNotInited || isVertexChanged || isTextureChanged) {
				buffer.updateUvs();
				buildTriangleRoundedUv(
					buffer.uvs,
					voffset,
					toTextureUvs(texture),
					radius,
					TRIANGLE_ROUNDED_WORLD_SIZE
				);
			}
		}
	}
}

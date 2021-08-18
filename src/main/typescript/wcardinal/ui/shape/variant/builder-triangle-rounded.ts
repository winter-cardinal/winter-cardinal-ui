/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeCorner } from "../e-shape-corner";
import {
	buildTriangleRoundedClipping,
	buildTriangleRoundedIndex,
	buildTriangleRoundedStep,
	buildTriangleRoundedUv,
	buildTriangleRoundedVertex,
	TRIANGLE_ROUNDED_WORLD_SIZE
} from "./build-triangle-rounded";
import { BuilderBase } from "./builder-base";
import { toTexture, toTextureTransformId, toTextureUvs, toTransformLocalId } from "./builders";

export class BuilderTriangleRounded extends BuilderBase {
	protected radius: number;
	protected corner: EShapeCorner;

	constructor(
		vertexOffset: number,
		indexOffset: number,
		vertexCount: number,
		indexCount: number
	) {
		super(vertexOffset, indexOffset, vertexCount, indexCount);
		this.radius = NaN;
		this.corner = NaN;
	}

	init(buffer: EShapeBuffer): void {
		buffer.updateIndices();
		buildTriangleRoundedIndex(buffer.indices, this.vertexOffset, this.indexOffset);
	}

	update(buffer: EShapeBuffer, shape: EShape): void {
		this.updateVertexClippingStepAndUv(buffer, shape);
		this.updateColorFill(buffer, shape);
		this.updateColorStroke(buffer, shape);
	}

	protected updateVertexClippingStepAndUv(buffer: EShapeBuffer, shape: EShape): void {
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

		if (isVertexChanged || isTransformChanged || isCornerChanged || isTextureChanged) {
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

			if (isRadiusChanged || isCornerChanged) {
				buffer.updateClippings();
				buildTriangleRoundedClipping(buffer.clippings, voffset, corner, radius);
			}

			if (isVertexChanged || isTransformChanged || isCornerChanged) {
				buffer.updateSteps();
				buildTriangleRoundedStep(
					buffer.steps,
					buffer.clippings,
					voffset,
					strokeWidth,
					strokeStyle,
					shape.radius,
					TRIANGLE_ROUNDED_WORLD_SIZE
				);
			}

			if (isVertexChanged || isTextureChanged) {
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

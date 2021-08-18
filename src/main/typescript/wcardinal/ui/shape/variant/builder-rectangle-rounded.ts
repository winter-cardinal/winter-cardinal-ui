/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeCorner } from "../e-shape-corner";
import {
	buildRectangleRoundedClipping,
	buildRectangleRoundedIndex,
	buildRectangleRoundedStep,
	buildRectangleRoundedUv,
	buildRectangleRoundedVertex,
	RECTANGLE_ROUNDED_WORLD_SIZE
} from "./build-rectangle-rounded";
import { BuilderBase } from "./builder-base";
import { toTexture, toTextureTransformId, toTextureUvs, toTransformLocalId } from "./builders";

export class BuilderRectangleRounded extends BuilderBase {
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
		buildRectangleRoundedIndex(buffer.indices, this.vertexOffset, this.indexOffset);
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
		const radius = shape.radius;
		const isSizeChanged =
			sizeX !== this.sizeX || sizeY !== this.sizeY || radius !== this.radius;

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

		const corner = shape.corner;
		const isCornerChanged = corner !== this.corner;

		const texture = toTexture(shape);
		const textureTransformId = toTextureTransformId(texture);
		const isTextureChanged =
			texture !== this.texture || textureTransformId !== this.textureTransformId;

		const isVertexChanged = isSizeChanged || isStrokeChanged;

		if (isVertexChanged || isTransformChanged || isCornerChanged || isTextureChanged) {
			this.sizeX = sizeX;
			this.sizeY = sizeY;
			this.radius = radius;
			this.transformLocalId = transformLocalId;
			this.strokeAlign = strokeAlign;
			this.strokeWidth = strokeWidth;
			this.strokeSide = strokeSide;
			this.strokeStyle = strokeStyle;
			this.corner = corner;
			this.texture = texture;
			this.textureTransformId = textureTransformId;

			// Vertices
			const voffset = this.vertexOffset;
			buffer.updateVertices();
			buildRectangleRoundedVertex(
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
				RECTANGLE_ROUNDED_WORLD_SIZE
			);

			// Steps
			if (isVertexChanged || isCornerChanged || isTransformChanged) {
				buffer.updateSteps();
				buildRectangleRoundedStep(
					buffer.steps,
					voffset,
					strokeWidth,
					strokeSide,
					strokeStyle,
					corner,
					RECTANGLE_ROUNDED_WORLD_SIZE
				);
			}

			// Clippings
			if (isVertexChanged || isCornerChanged) {
				buffer.updateClippings();
				buildRectangleRoundedClipping(
					buffer.clippings,
					voffset,
					corner,
					RECTANGLE_ROUNDED_WORLD_SIZE
				);
			}

			// UVs
			if (isVertexChanged || isTextureChanged) {
				buffer.updateUvs();
				buildRectangleRoundedUv(
					buffer.uvs,
					voffset,
					toTextureUvs(texture),
					RECTANGLE_ROUNDED_WORLD_SIZE
				);
			}
		}
	}
}

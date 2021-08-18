/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import {
	buildRectangleClipping,
	buildRectangleIndex,
	buildRectangleStep,
	buildRectangleUv,
	buildRectangleVertex,
	RECTANGLE_WORLD_SIZE
} from "./build-rectangle";
import { BuilderBase } from "./builder-base";
import { toTexture, toTextureTransformId, toTextureUvs, toTransformLocalId } from "./builders";

export class BuilderRectangle extends BuilderBase {
	init(buffer: EShapeBuffer): void {
		buffer.updateIndices();
		buildRectangleIndex(buffer.indices, this.vertexOffset, this.indexOffset);
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

		if (isVertexChanged || isTransformChanged || isTextureChanged) {
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
				0,
				0,
				sizeX,
				sizeY,
				strokeAlign,
				strokeWidth,
				shape.transform.internalTransform,
				RECTANGLE_WORLD_SIZE
			);

			// Steps
			if (isVertexChanged || isTransformChanged) {
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
			if (isVertexChanged) {
				buffer.updateClippings();
				buildRectangleClipping(buffer.clippings, voffset, RECTANGLE_WORLD_SIZE);
			}

			// UVs
			if (isVertexChanged || isTextureChanged) {
				buffer.updateUvs();
				buildRectangleUv(buffer.uvs, voffset, toTextureUvs(texture), RECTANGLE_WORLD_SIZE);
			}
		}
	}
}

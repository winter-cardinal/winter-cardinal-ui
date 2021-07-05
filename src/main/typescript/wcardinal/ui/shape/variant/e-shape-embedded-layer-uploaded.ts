/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapeUploadedBase } from "../e-shape-uploaded";
import {
	buildRectangleClipping,
	buildRectangleIndex,
	buildRectangleStep,
	buildRectangleUv,
	buildRectangleVertex,
	RECTANGLE_WORLD_SIZE
} from "./build-rectangle";

export class EShapeEmbeddedLayerUploaded extends EShapeUploadedBase {
	init(shape: EShape): this {
		super.init(shape);

		// Indices
		const buffer = this.buffer;
		buffer.updateIndices();
		buildRectangleIndex(buffer.indices, this.vertexOffset, this.indexOffset);

		this.update(shape);
		return this;
	}

	update(shape: EShape): void {
		const buffer = this.buffer;
		this.updateVertexClippingStepAndUv(buffer, shape);
		this.updateColor(buffer, shape);
	}

	protected updateVertexClippingStepAndUv(buffer: EShapeBuffer, shape: EShape): void {
		const size = shape.size;
		const sizeX = size.x;
		const sizeY = size.y;
		const isSizeChanged = sizeX !== this.sizeX || sizeY !== this.sizeY;

		const transformLocalId = this.toTransformLocalId(shape);
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

		const texture = this.toTexture(shape);
		const textureTransformId = this.toTextureTransformId(texture);
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
				buildRectangleUv(
					buffer.uvs,
					voffset,
					this.toTextureUvs(texture),
					RECTANGLE_WORLD_SIZE
				);
			}
		}
	}

	protected updateColor(buffer: EShapeBuffer, shape: EShape): void {
		this.updateColorFillAndStroke(buffer, shape, this.vertexCount);
	}
}

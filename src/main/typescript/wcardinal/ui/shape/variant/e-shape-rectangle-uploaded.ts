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
import { EShapeTextUploaded } from "./e-shape-text-uploaded";

export class EShapeRectangleUploaded extends EShapeTextUploaded {
	init(shape: EShape): this {
		super.init(shape);

		// Indices
		const buffer = this.buffer;
		buffer.updateIndices();
		buildRectangleIndex(buffer.indices, this.vertexOffset, this.indexOffset);

		// Text
		this.initText();

		this.update(shape);
		return this;
	}

	update(shape: EShape): void {
		const buffer = this.buffer;
		this.updateVertexClippingStepAndUv(buffer, shape);
		this.updateColor(buffer, shape);
		this.updateText(buffer, shape);
	}

	protected updateVertexClippingStepAndUv(buffer: EShapeBuffer, shape: EShape): void {
		const size = shape.size;
		const sizeX = size.x;
		const sizeY = size.y;
		const isSizeChanged = sizeX !== this.sizeX || sizeY !== this.sizeY;

		const transformLocalId = this.toTransformLocalId(shape);
		const isTransformChanged = this.transformLocalId !== transformLocalId;

		const stroke = shape.stroke;
		const strokeWidth = stroke.enable ? stroke.width : 0;
		const strokeAlign = stroke.align;
		const strokeSide = stroke.side;
		const isStrokeChanged =
			this.strokeAlign !== strokeAlign ||
			this.strokeWidth !== strokeWidth ||
			this.strokeSide !== strokeSide;

		const texture = this.toTexture(shape);
		const textureTransformId = this.toTextureTransformId(texture);
		const isTextureChanged =
			texture !== this.texture || textureTransformId !== this.textureTransformId;

		const isVertexChanged = isSizeChanged || isStrokeChanged;

		if (isVertexChanged || isTransformChanged || isTextureChanged) {
			this.sizeX = sizeX;
			this.sizeY = sizeY;
			this.transformLocalId = transformLocalId;
			this.strokeWidth = strokeWidth;
			this.strokeAlign = strokeAlign;
			this.strokeSide = strokeSide;
			this.texture = texture;
			this.textureTransformId = textureTransformId;

			if (isVertexChanged || isTransformChanged) {
				// Invalidate the text layout to update the text layout.
				this.textSpacingHorizontal = NaN;
			}

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
					this.antialiasWeight,
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
}

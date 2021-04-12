/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import {
	buildCircleClipping,
	buildCircleIndex,
	buildCircleStep,
	buildCircleUv,
	buildCircleVertex,
	CIRCLE_WORLD_SIZE
} from "./build-circle";
import { EShapeTextUploaded } from "./e-shape-text-uploaded";

export class EShapeCircleUploaded extends EShapeTextUploaded {
	init(shape: EShape): this {
		super.init(shape);

		// Clippings & indices
		const buffer = this.buffer;
		buffer.updateClippings();
		buffer.updateIndices();
		const voffset = this.vertexOffset;
		buildCircleClipping(buffer.clippings, voffset);
		buildCircleIndex(buffer.indices, voffset, this.indexOffset);

		// Text
		this.initText();

		this.update(shape);
		return this;
	}

	update(shape: EShape): void {
		const buffer = this.buffer;
		this.updateCircleVertexAndStep(buffer, shape);
		this.updateColor(buffer, shape);
		this.updateCircleUv(buffer, shape);
		this.updateText(buffer, shape);
	}

	protected updateCircleVertexAndStep(buffer: EShapeBuffer, shape: EShape): void {
		const size = shape.size;
		const sizeX = size.x;
		const sizeY = size.y;
		const isSizeChanged = sizeX !== this.sizeX || sizeY !== this.sizeY;

		const transformLocalId = this.toTransformLocalId(shape);
		const isTransformChanged = this.transformLocalId !== transformLocalId;

		const stroke = shape.stroke;
		const strokeWidth = stroke.enable ? stroke.width : 0;
		const strokeAlign = stroke.align;
		const isStrokeChanged =
			this.strokeAlign !== strokeAlign || this.strokeWidth !== strokeWidth;

		if (isSizeChanged || isTransformChanged || isStrokeChanged) {
			this.sizeX = sizeX;
			this.sizeY = sizeY;
			this.transformLocalId = transformLocalId;
			this.strokeWidth = strokeWidth;
			this.strokeAlign = strokeAlign;

			// Invalidate the text layout to update the text layout.
			this.textSpacingHorizontal = NaN;

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
				buffer.clippings,
				this.vertexOffset,
				strokeWidth,
				this.antialiasWeight,
				CIRCLE_WORLD_SIZE
			);
		}
	}

	protected updateCircleUv(buffer: EShapeBuffer, shape: EShape): void {
		const texture = this.toTexture(shape);
		const textureTransformId = this.toTextureTransformId(texture);
		if (texture !== this.texture || textureTransformId !== this.textureTransformId) {
			this.texture = texture;
			this.textureTransformId = textureTransformId;

			buffer.updateUvs();
			const textureUvs = this.toTextureUvs(texture);
			buildCircleUv(buffer.uvs, this.vertexOffset, textureUvs);
		}
	}
}

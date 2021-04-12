/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import {
	buildImageSdfClipping,
	buildImageSdfIndex,
	buildImageSdfStep,
	buildImageSdfUv,
	buildImageSdfVertex,
	IMAGE_SDF_WORLD_SIZE
} from "./build-image-sdf";
import { EShapeTextUploaded } from "./e-shape-text-uploaded";

export class EShapeImageSdfUploaded extends EShapeTextUploaded {
	protected textureWidth: number;
	protected textureHeight: number;

	constructor(
		buffer: EShapeBuffer,
		voffset: number,
		ioffset: number,
		tvcount: number,
		ticount: number,
		vcount: number,
		icount: number,
		antialiasWeight: number
	) {
		super(buffer, voffset, ioffset, tvcount, ticount, vcount, icount, antialiasWeight);

		this.textureWidth = -1;
		this.textureHeight = -1;
	}

	init(shape: EShape): this {
		super.init(shape);

		// Clippings & indices
		const buffer = this.buffer;
		const voffset = this.vertexOffset;
		buffer.updateClippings();
		buffer.updateIndices();
		buildImageSdfClipping(buffer.clippings, voffset);
		buildImageSdfIndex(buffer.indices, voffset, this.indexOffset);

		// Text
		this.initText();

		this.update(shape);
		return this;
	}

	update(shape: EShape): void {
		const buffer = this.buffer;
		this.updateVertexAndStep(buffer, shape);
		this.updateColor(buffer, shape);
		this.updateUv(buffer, shape);
		this.updateText(buffer, shape);
	}

	protected updateVertexAndStep(buffer: EShapeBuffer, shape: EShape): void {
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

		const texture = this.toTexture(shape);
		const textureWidth = texture.width * texture.resolution;
		const textureHeight = texture.height * texture.resolution;
		const isTextureSizeChanged =
			this.textureWidth !== textureWidth || this.textureHeight !== textureHeight;

		if (isSizeChanged || isTransformChanged || isStrokeChanged || isTextureSizeChanged) {
			this.sizeX = sizeX;
			this.sizeY = sizeY;
			this.transformLocalId = transformLocalId;
			this.strokeWidth = strokeWidth;
			this.strokeAlign = strokeAlign;
			this.textureWidth = textureWidth;
			this.textureHeight = textureHeight;

			// Invalidate the text layout to update the text layout.
			this.textSpacingHorizontal = NaN;

			// Vertices
			buffer.updateVertices();
			buildImageSdfVertex(
				buffer.vertices,
				this.vertexOffset,
				0,
				0,
				sizeX,
				sizeY,
				shape.transform.internalTransform,
				IMAGE_SDF_WORLD_SIZE
			);

			// Steps
			buffer.updateSteps();
			buildImageSdfStep(
				buffer.steps,
				this.vertexOffset,
				strokeAlign,
				strokeWidth,
				textureWidth,
				textureHeight,
				this.antialiasWeight,
				IMAGE_SDF_WORLD_SIZE
			);
		}
	}

	protected updateUv(buffer: EShapeBuffer, shape: EShape): void {
		const texture = this.toTexture(shape);
		const textureTransformId = this.toTextureTransformId(texture);
		if (texture !== this.texture || textureTransformId !== this.textureTransformId) {
			this.texture = texture;
			this.textureTransformId = textureTransformId;

			buffer.updateUvs();
			buildImageSdfUv(buffer.uvs, this.vertexOffset, this.toTextureUvs(texture));
		}
	}
}

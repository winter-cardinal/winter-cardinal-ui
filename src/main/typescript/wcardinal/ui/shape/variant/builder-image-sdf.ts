/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import {
	buildImageSdfIndex,
	buildImageSdfStep,
	buildImageSdfUv,
	buildImageSdfVertex,
	IMAGE_SDF_INDEX_COUNT,
	IMAGE_SDF_VERTEX_COUNT,
	IMAGE_SDF_WORLD_SIZE
} from "./build-image-sdf";
import { BuilderBuffer, BuilderFlag } from "./builder";
import { BuilderBase } from "./builder-base";
import { toTexture, toTextureTransformId, toTextureUvs, toTransformLocalId } from "./builders";

export class BuilderImageSdf extends BuilderBase {
	protected textureWidth: number;
	protected textureHeight: number;

	constructor(buffer: BuilderBuffer, vertexOffset: number, indexOffset: number) {
		super(buffer, vertexOffset, indexOffset, IMAGE_SDF_VERTEX_COUNT, IMAGE_SDF_INDEX_COUNT);
		this.textureWidth = -1;
		this.textureHeight = -1;
	}

	override init(): void {
		const voffset = this.vertexOffset;
		const buffer = this.buffer;
		buffer.updateIndices();
		buildImageSdfIndex(buffer.indices, voffset, this.indexOffset);
		this.inited |= BuilderFlag.INDEX;
	}

	override update(shape: EShape): void {
		const buffer = this.buffer;
		this.updateVertexAndStep(buffer, shape);
		this.updateColorFill(buffer, shape);
		this.updateColorStroke(buffer, shape);
		this.updateUv(buffer, shape);
	}

	protected updateVertexAndStep(buffer: BuilderBuffer, shape: EShape): void {
		const size = shape.size;
		const sizeX = size.x;
		const sizeY = size.y;
		const isSizeChanged = sizeX !== this.sizeX || sizeY !== this.sizeY;

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

		const texture = toTexture(shape);
		const textureWidth = texture.width * texture.resolution;
		const textureHeight = texture.height * texture.resolution;
		const isTextureSizeChanged =
			this.textureWidth !== textureWidth || this.textureHeight !== textureHeight;

		const isNotInited = !(this.inited & BuilderFlag.VERTEX_AND_STEP);

		if (
			isNotInited ||
			isSizeChanged ||
			isTransformChanged ||
			isStrokeChanged ||
			isTextureSizeChanged
		) {
			this.inited |= BuilderFlag.VERTEX_AND_STEP;
			this.sizeX = sizeX;
			this.sizeY = sizeY;
			this.transformLocalId = transformLocalId;
			this.strokeAlign = strokeAlign;
			this.strokeWidth = strokeWidth;
			this.strokeStyle = strokeStyle;
			this.textureWidth = textureWidth;
			this.textureHeight = textureHeight;

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
				strokeStyle,
				textureWidth,
				textureHeight,
				IMAGE_SDF_WORLD_SIZE
			);
		}
	}

	protected updateUv(buffer: BuilderBuffer, shape: EShape): void {
		const texture = toTexture(shape);
		const textureTransformId = toTextureTransformId(texture);
		const isNotInited = !(this.inited & BuilderFlag.UV);
		if (
			isNotInited ||
			texture !== this.texture ||
			textureTransformId !== this.textureTransformId
		) {
			this.inited |= BuilderFlag.UV;
			this.texture = texture;
			this.textureTransformId = textureTransformId;

			buffer.updateUvs();
			buildImageSdfUv(buffer.uvs, this.vertexOffset, toTextureUvs(texture));
		}
	}
}

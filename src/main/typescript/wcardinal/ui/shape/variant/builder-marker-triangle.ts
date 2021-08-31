/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Matrix } from "pixi.js";
import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import {
	buildTriangleClipping,
	buildTriangleIndex,
	buildTriangleStep,
	buildTriangleUv,
	buildTriangleVertex,
	TRIANGLE_INDEX_COUNT,
	TRIANGLE_VERTEX_COUNT,
	TRIANGLE_WORLD_SIZE
} from "./build-triangle";
import { BuilderMarkerBase } from "./builder-marker-base";
import { toTexture, toTextureTransformId, toTextureUvs, toTransformLocalId } from "./builders";

export abstract class BuilderMarkerTriangle extends BuilderMarkerBase {
	protected static WORK?: Matrix;
	protected pointId: number;

	constructor(vertexOffset: number, indexOffset: number) {
		super(vertexOffset, indexOffset, TRIANGLE_VERTEX_COUNT, TRIANGLE_INDEX_COUNT);
		this.pointId = -1;
	}

	init(buffer: EShapeBuffer): void {
		buffer.updateClippings();
		buffer.updateIndices();
		buildTriangleClipping(buffer.clippings, this.vertexOffset);
		buildTriangleIndex(buffer.indices, this.vertexOffset, this.indexOffset);
	}

	update(buffer: EShapeBuffer, shape: EShape): void {
		this.updateVertexStepAndUv(buffer, shape);
		this.updateColorFill(buffer, shape);
		this.updateColorStroke(buffer, shape);
	}

	protected updateVertexStepAndUv(buffer: EShapeBuffer, shape: EShape): void {
		const points = shape.points;
		if (points == null) {
			return;
		}
		const container = points.getMarker();
		if (container == null) {
			return;
		}
		const marker = this.toMarker(container);
		const size = marker.size;
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
		const textureTransformId = toTextureTransformId(texture);
		const isTextureChanged =
			texture !== this.texture || textureTransformId !== this.textureTransformId;

		const isVertexChanged = isSizeChanged || isStrokeChanged;

		const pointId = points.id;
		const isPointChanged = pointId !== this.pointId;

		if (isVertexChanged || isTransformChanged || isTextureChanged || isPointChanged) {
			this.sizeX = sizeX;
			this.sizeY = sizeY;
			this.transformLocalId = transformLocalId;
			this.strokeAlign = strokeAlign;
			this.strokeWidth = strokeWidth;
			this.strokeStyle = strokeStyle;
			this.texture = texture;
			this.textureTransformId = textureTransformId;
			this.pointId = pointId;

			const voffset = this.vertexOffset;
			const internalTransform = (BuilderMarkerTriangle.WORK ??= new Matrix());
			internalTransform.copyFrom(marker.transform).prepend(shape.transform.internalTransform);
			buffer.updateVertices();
			buildTriangleVertex(
				buffer.vertices,
				voffset,
				0,
				0,
				sizeX,
				sizeY,
				strokeAlign,
				strokeWidth,
				internalTransform,
				TRIANGLE_WORLD_SIZE
			);

			if (isVertexChanged || isTransformChanged) {
				buffer.updateSteps();
				buildTriangleStep(
					buffer.steps,
					buffer.clippings,
					voffset,
					TRIANGLE_VERTEX_COUNT,
					strokeWidth,
					strokeStyle,
					TRIANGLE_WORLD_SIZE
				);
			}

			if (isVertexChanged || isTextureChanged) {
				buffer.updateUvs();
				buildTriangleUv(buffer.uvs, toTextureUvs(texture), voffset, TRIANGLE_WORLD_SIZE);
			}
		}
	}
}

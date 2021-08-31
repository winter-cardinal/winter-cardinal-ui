/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Matrix } from "pixi.js";
import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import {
	buildCircleClipping,
	buildCircleIndex,
	buildCircleStep,
	buildCircleUv,
	buildCircleVertex,
	CIRCLE_INDEX_COUNT,
	CIRCLE_VERTEX_COUNT,
	CIRCLE_WORLD_SIZE
} from "./build-circle";
import { BuilderMarkerBase } from "./builder-marker-base";
import { toTexture, toTextureTransformId, toTextureUvs, toTransformLocalId } from "./builders";

export abstract class BuilderMarkerCircle extends BuilderMarkerBase {
	protected static WORK?: Matrix;
	protected pointId: number;

	constructor(vertexOffset: number, indexOffset: number) {
		super(vertexOffset, indexOffset, CIRCLE_VERTEX_COUNT, CIRCLE_INDEX_COUNT);
		this.pointId = -1;
	}

	init(buffer: EShapeBuffer): void {
		buffer.updateClippings();
		buffer.updateIndices();
		const vertexOffset = this.vertexOffset;
		buildCircleClipping(buffer.clippings, vertexOffset);
		buildCircleIndex(buffer.indices, vertexOffset, this.indexOffset);
	}

	update(buffer: EShapeBuffer, shape: EShape): void {
		this.updateVertexAndStep(buffer, shape);
		this.updateColorFill(buffer, shape);
		this.updateColorStroke(buffer, shape);
		this.updateUv(buffer, shape);
	}

	protected updateVertexAndStep(buffer: EShapeBuffer, shape: EShape): void {
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

		const pointId = points.id;
		const isPointChanged = pointId !== this.pointId;

		if (isSizeChanged || isTransformChanged || isStrokeChanged || isPointChanged) {
			this.sizeX = sizeX;
			this.sizeY = sizeY;
			this.transformLocalId = transformLocalId;
			this.strokeAlign = strokeAlign;
			this.strokeWidth = strokeWidth;
			this.strokeStyle = strokeStyle;
			this.pointId = pointId;

			// Buffer
			const internalTransform = (BuilderMarkerCircle.WORK ??= new Matrix());
			internalTransform.copyFrom(marker.transform).prepend(shape.transform.internalTransform);
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
				internalTransform,
				CIRCLE_WORLD_SIZE
			);
			buildCircleStep(
				buffer.steps,
				buffer.clippings,
				this.vertexOffset,
				strokeWidth,
				strokeStyle,
				CIRCLE_WORLD_SIZE
			);
		}
	}

	protected updateUv(buffer: EShapeBuffer, shape: EShape): void {
		const texture = toTexture(shape);
		const textureTransformId = toTextureTransformId(texture);
		if (texture !== this.texture || textureTransformId !== this.textureTransformId) {
			this.texture = texture;
			this.textureTransformId = textureTransformId;

			buffer.updateUvs();
			const textureUvs = toTextureUvs(texture);
			buildCircleUv(buffer.uvs, this.vertexOffset, textureUvs);
		}
	}
}

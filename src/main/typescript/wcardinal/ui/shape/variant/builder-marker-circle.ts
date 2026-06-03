/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Matrix } from "pixi.js";
import { EShape } from "../e-shape";
import {
	buildCircleIndex,
	buildCircleStep,
	buildCircleUv,
	buildCircleVertex,
	CIRCLE_INDEX_COUNT,
	CIRCLE_VERTEX_COUNT
} from "./build-circle";
import { BuilderMarkerBase } from "./builder-marker-base";
import { toTexture, toTextureTransformId, toTextureUvs, toTransformLocalId } from "./builders";
import { BuilderBuffer, BuilderFlag } from "./builder";

export abstract class BuilderMarkerCircle extends BuilderMarkerBase {
	protected static WORK?: Matrix;
	protected pointId: number;

	constructor(buffer: BuilderBuffer, vertexOffset: number, indexOffset: number) {
		super(buffer, vertexOffset, indexOffset, CIRCLE_VERTEX_COUNT, CIRCLE_INDEX_COUNT);
		this.pointId = -1;
	}

	override init(): void {
		const buffer = this.buffer;
		buffer.updateIndices();
		const vertexOffset = this.vertexOffset;
		buildCircleIndex(buffer.indices, vertexOffset, this.indexOffset);
		this.inited |= BuilderFlag.INDEX;
	}

	override update(shape: EShape): void {
		const buffer = this.buffer;
		this.updateVertexStepAndUv(buffer, shape);
		this.updateColor(buffer, shape);
	}

	protected updateVertexStepAndUv(buffer: BuilderBuffer, shape: EShape): void {
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

		const fill = shape.fill;
		const fillDirection = fill.direction;
		const fillPercent = fill.percent;
		const isFillChanged =
			this.fillDirection !== fillDirection || this.fillPercent !== fillPercent;

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

		const pointId = points.id;
		const isPointChanged = pointId !== this.pointId;

		const isNotInited = !(this.inited & BuilderFlag.VERTEX_AND_STEP);

		if (
			isNotInited ||
			isSizeChanged ||
			isTransformChanged ||
			isFillChanged ||
			isStrokeChanged ||
			isTextureChanged ||
			isPointChanged
		) {
			this.inited |= BuilderFlag.VERTEX_AND_STEP;
			this.sizeX = sizeX;
			this.sizeY = sizeY;
			this.transformLocalId = transformLocalId;
			this.fillDirection = fillDirection;
			this.fillPercent = fillPercent;
			this.strokeAlign = strokeAlign;
			this.strokeWidth = strokeWidth;
			this.strokeStyle = strokeStyle;
			this.texture = texture;
			this.textureTransformId = textureTransformId;
			this.pointId = pointId;

			// Buffer
			const internalTransform = (BuilderMarkerCircle.WORK ??= new Matrix());
			internalTransform.copyFrom(marker.transform).prepend(shape.transform.internalTransform);
			buffer.updateVertices();
			buffer.updateSteps();
			buffer.updateUvs();
			buildCircleVertex(
				buffer.vertices,
				this.vertexOffset,
				0,
				0,
				sizeX,
				sizeY,
				strokeAlign,
				strokeWidth,
				internalTransform
			);
			buildCircleStep(
				buffer.steps,
				this.vertexOffset,
				fillDirection,
				fillPercent,
				strokeWidth,
				strokeStyle
			);
			buildCircleUv(buffer.uvs, this.vertexOffset, toTextureUvs(texture));
		}
	}
}

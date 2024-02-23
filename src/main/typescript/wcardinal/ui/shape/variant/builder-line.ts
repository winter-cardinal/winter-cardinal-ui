/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapePointsStyle } from "../e-shape-points-style";
import {
	buildLineIndex,
	buildLineUv,
	buildLineVertexStep,
	toLineIndexCount,
	toLinePointCount,
	toLineVertexCount
} from "./build-line";
import { BuilderBuffer, BuilderFlag } from "./builder";
import { BuilderBase } from "./builder-base";
import { toTexture, toTextureTransformId, toTextureUvs, toTransformLocalId } from "./builders";

export class BuilderLine extends BuilderBase {
	protected pointCount: number;
	protected pointId: number;
	protected pointsClosed: boolean;
	protected length: number;

	constructor(
		buffer: BuilderBuffer,
		vertexOffset: number,
		indexOffset: number,
		vertexCount: number,
		indexCount: number
	) {
		super(buffer, vertexOffset, indexOffset, vertexCount, indexCount);
		this.pointId = -1;
		this.pointCount = 0;
		this.pointsClosed = false;
		this.length = 1;
	}

	override init(): void {
		const buffer = this.buffer;
		buffer.updateIndices();
		buildLineIndex(buffer.indices, this.vertexOffset, this.indexOffset, this.indexCount);
		this.inited |= BuilderFlag.INDEX;
	}

	override reinit(
		buffer: BuilderBuffer,
		shape: EShape,
		vertexOffset: number,
		indexOffset: number
	): boolean {
		const pointCount = toLinePointCount(shape.points);
		const vertexCount = toLineVertexCount(pointCount, true);
		const indexCount = toLineIndexCount(pointCount, true);
		if (
			this.buffer !== buffer ||
			this.vertexOffset !== vertexOffset ||
			this.indexOffset !== indexOffset ||
			this.vertexCount !== vertexCount ||
			this.indexCount !== indexCount
		) {
			if (buffer.check(vertexOffset, indexOffset, vertexCount, indexCount)) {
				this.inited = BuilderFlag.NONE;
				this.buffer = buffer;
				this.vertexOffset = vertexOffset;
				this.indexOffset = indexOffset;
				this.vertexCount = vertexCount;
				this.indexCount = indexCount;
				this.init();
				return true;
			} else {
				return false;
			}
		} else {
			return true;
		}
	}

	override isCompatible(shape: EShape): boolean {
		const vcount = toLineVertexCount(toLinePointCount(shape.points), true);
		return vcount === this.vertexCount;
	}

	override update(shape: EShape): void {
		const buffer = this.buffer;
		this.updateLineVertexStep(buffer, shape);
		this.updateColorFill(buffer, shape);
		this.updateColorStroke(buffer, shape);
		this.updateLineUv(buffer, shape);
	}

	protected updateLineVertexStep(buffer: BuilderBuffer, shape: EShape): void {
		const points = shape.points;
		if (points) {
			const pointId = points.id;
			const formatted = points.formatted;
			const pointCount = formatted.length;
			const pointsClosed = !!(formatted.style & EShapePointsStyle.CLOSED);
			const isPointChanged =
				pointId !== this.pointId ||
				pointCount !== this.pointCount ||
				pointsClosed !== this.pointsClosed;

			const stroke = shape.stroke;
			const strokeWidth = stroke.enable ? stroke.width : 0;
			const strokeStyle = stroke.style;
			const isStrokeWidthChanged =
				this.strokeWidth !== strokeWidth || this.strokeStyle !== strokeStyle;

			const transformLocalId = toTransformLocalId(shape);
			const isTransformChanged = this.transformLocalId !== transformLocalId;

			const isNotInited = !(this.inited & BuilderFlag.VERTEX_AND_STEP);

			if (isNotInited || isPointChanged || isTransformChanged || isStrokeWidthChanged) {
				this.inited |= BuilderFlag.VERTEX_AND_STEP;
				this.pointId = pointId;
				this.pointCount = pointCount;
				this.pointsClosed = pointsClosed;
				this.strokeWidth = strokeWidth;
				this.strokeStyle = strokeStyle;
				this.transformLocalId = transformLocalId;

				if (isPointChanged) {
					// Invalidate the UV buffer
					this.inited &= ~BuilderFlag.UV;
				}

				buffer.updateVertices();
				buffer.updateSteps();
				this.length = buildLineVertexStep(
					buffer.vertices,
					buffer.steps,
					this.vertexOffset,
					this.vertexCount,
					this.pointCount,
					this.pointsClosed,
					formatted.values,
					formatted.segments,
					strokeWidth,
					strokeStyle,
					shape.transform.internalTransform
				);
			}
		}
	}

	protected updateLineUv(buffer: BuilderBuffer, shape: EShape): void {
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
			buildLineUv(
				buffer.uvs,
				buffer.steps,
				this.vertexOffset,
				this.vertexCount,
				toTextureUvs(texture),
				this.length
			);
		}
	}
}

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import {
	buildPolygonIndex,
	buildPolygonStep,
	buildPolygonUv,
	buildPolygonVertex
} from "./build-polygon";
import { BuilderBuffer, BuilderFlag } from "./builder";
import { BuilderBase } from "./builder-base";
import { EShapePolygon } from "./e-shape-polygon";
import { toTexture, toTextureTransformId, toTextureUvs, toTransformLocalId } from "./builders";

export class BuilderPolygon extends BuilderBase {
	protected vertexId: number;
	protected distanceId: number;
	protected clippingId: number;
	protected indexId: number;

	constructor(
		buffer: BuilderBuffer,
		vertexOffset: number,
		indexOffset: number,
		vertexCount: number,
		indexCount: number
	) {
		super(buffer, vertexOffset, indexOffset, vertexCount, indexCount);
		this.vertexId = -1;
		this.distanceId = -1;
		this.clippingId = -1;
		this.indexId = -1;
	}

	override init(): void {
		// DO NOTHING
	}

	override reinit(
		buffer: BuilderBuffer,
		shape: EShape,
		vertexOffset: number,
		indexOffset: number
	): boolean {
		if (!(shape instanceof EShapePolygon)) {
			return false;
		}

		const vertexCount = shape.nvertices;
		const indexCount = shape.nindices;
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
				this.vertexId = -1;
				this.distanceId = -1;
				this.clippingId = -1;
				this.indexId = -1;
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
		if (!(shape instanceof EShapePolygon)) {
			return false;
		}
		const vertexCount = shape.nvertices;
		const indexCount = shape.nindices;
		return vertexCount === this.vertexCount && indexCount === this.indexCount;
	}

	override update(shape: EShape): void {
		if (!(shape instanceof EShapePolygon)) {
			return;
		}

		const buffer = this.buffer;
		this.updateVertexStepUvAndIndex(buffer, shape);
		this.updateColor(buffer, shape);
	}

	protected updateVertexStepUvAndIndex(buffer: BuilderBuffer, shape: EShapePolygon): void {
		const size = shape.size;
		const sizeX = size.x;
		const sizeY = size.y;
		const isSizeChanged = sizeX !== this.sizeX || sizeY !== this.sizeY;

		const transformLocalId = toTransformLocalId(shape);
		const isTransformChanged = this.transformLocalId !== transformLocalId;

		// Check if vertices/distances/clippings/indices changed
		const isVertexIdChanged = this.vertexId !== shape.vertexId;
		const isDistanceIdChanged = this.distanceId !== shape.distanceId;
		const isClippingIdChanged = this.clippingId !== shape.clippingId;
		const isIndexIdChanged = this.indexId !== shape.indexId;

		const stroke = shape.stroke;
		const strokeWidth = stroke.enable ? stroke.width : 0;
		const strokeSide = stroke.side;
		const strokeStyle = stroke.style;
		const isStrokeChanged =
			this.strokeWidth !== strokeWidth ||
			this.strokeSide !== strokeSide ||
			this.strokeStyle !== strokeStyle;

		const texture = toTexture(shape);
		const textureTransformId = toTextureTransformId(texture);
		const isTextureChanged =
			texture !== this.texture || textureTransformId !== this.textureTransformId;

		const isVertexChanged =
			isSizeChanged ||
			isVertexIdChanged ||
			isDistanceIdChanged ||
			isClippingIdChanged ||
			isIndexIdChanged;

		const isNotInited = !(this.inited & BuilderFlag.VERTEX_STEP_UV_AND_INDEX);

		if (
			isNotInited ||
			isVertexChanged ||
			isTransformChanged ||
			isStrokeChanged ||
			isTextureChanged
		) {
			this.inited |= BuilderFlag.VERTEX_STEP_UV_AND_INDEX;
			this.sizeX = sizeX;
			this.sizeY = sizeY;
			this.transformLocalId = transformLocalId;
			this.strokeWidth = strokeWidth;
			this.strokeSide = strokeSide;
			this.strokeStyle = strokeStyle;
			this.texture = texture;
			this.textureTransformId = textureTransformId;
			this.vertexId = shape.vertexId;
			this.distanceId = shape.distanceId;
			this.clippingId = shape.clippingId;
			this.indexId = shape.indexId;

			// Update indices if data changed
			if (isNotInited || isIndexIdChanged) {
				buffer.updateIndices();
				buildPolygonIndex(
					buffer.indices,
					shape.indices,
					this.vertexOffset,
					this.indexOffset
				);
			}

			// Vertices
			const voffset = this.vertexOffset;
			buffer.updateVertices();
			const vertices = shape.vertices;
			buildPolygonVertex(
				buffer.vertices,
				vertices,
				voffset,
				sizeX,
				sizeY,
				shape.transform.internalTransform
			);

			// Steps
			if (
				isNotInited ||
				isSizeChanged ||
				isVertexChanged ||
				isTransformChanged ||
				isStrokeChanged
			) {
				buffer.updateSteps();
				buildPolygonStep(
					buffer.steps,
					shape.distances,
					shape.clippings,
					voffset,
					this.vertexCount,
					sizeX,
					sizeY,
					strokeWidth,
					strokeSide,
					strokeStyle
				);
			}

			// UVs
			if (isNotInited || isVertexChanged || isTextureChanged) {
				buffer.updateUvs();
				buildPolygonUv(buffer.uvs, vertices, voffset, toTextureUvs(texture));
			}
		}
	}
}

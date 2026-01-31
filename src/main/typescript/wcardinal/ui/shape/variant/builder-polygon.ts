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
	protected triangulatedId: number;

	constructor(
		buffer: BuilderBuffer,
		vertexOffset: number,
		indexOffset: number,
		vertexCount: number,
		indexCount: number
	) {
		super(buffer, vertexOffset, indexOffset, vertexCount, indexCount);
		this.triangulatedId = -1;
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

		const triangulated = shape.triangulated;
		const vertexCount = triangulated.nvertices;
		const indexCount = triangulated.nindices;
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
				this.triangulatedId = -1;
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
		const triangulated = shape.triangulated;
		const vertexCount = triangulated.nvertices;
		const indexCount = triangulated.nindices;
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
		const triangulated = shape.triangulated;
		const triangulatedId = triangulated.id;
		const isTriangulatedIdChanged = this.triangulatedId !== triangulatedId;

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

		const isVertexChanged = isSizeChanged || isTriangulatedIdChanged;

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
			this.triangulatedId = triangulatedId;

			// Indices
			if (isNotInited || isVertexChanged) {
				buffer.updateIndices();
				buildPolygonIndex(
					buffer.indices,
					triangulated.indices,
					this.vertexOffset,
					this.indexOffset
				);
			}

			// Vertices
			const voffset = this.vertexOffset;
			if (isNotInited || isVertexChanged || isTransformChanged) {
				buffer.updateVertices();
				buildPolygonVertex(
					buffer.vertices,
					triangulated.vertices,
					voffset,
					sizeX,
					sizeY,
					shape.transform.internalTransform
				);
			}

			// Steps
			if (isNotInited || isVertexChanged || isStrokeChanged) {
				buffer.updateSteps();
				buildPolygonStep(
					buffer.steps,
					triangulated.distances,
					triangulated.clippings,
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
				buildPolygonUv(buffer.uvs, triangulated.vertices, voffset, toTextureUvs(texture));
			}
		}
	}
}

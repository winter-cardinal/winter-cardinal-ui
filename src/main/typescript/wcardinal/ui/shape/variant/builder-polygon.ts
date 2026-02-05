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
		const transformLocalId = toTransformLocalId(shape);
		const isTransformChanged = this.transformLocalId !== transformLocalId;

		// Check if vertices/distances/clippings/indices changed
		const triangulated = shape.triangulated;
		const triangulatedId = triangulated.id;
		const isTriangulatedIdChanged = this.triangulatedId !== triangulatedId;

		const fill = shape.fill;
		const fillDirection = fill.direction;
		const fillPercent = fill.percent;
		const isFillChanged =
			this.fillDirection !== fillDirection || this.fillPercent !== fillPercent;

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

		const isNotInited = !(this.inited & BuilderFlag.VERTEX_STEP_UV_AND_INDEX);

		if (
			isNotInited ||
			isTriangulatedIdChanged ||
			isTransformChanged ||
			isFillChanged ||
			isStrokeChanged ||
			isTextureChanged
		) {
			this.inited |= BuilderFlag.VERTEX_STEP_UV_AND_INDEX;
			this.transformLocalId = transformLocalId;
			this.fillDirection = fillDirection;
			this.fillPercent = fillPercent;
			this.strokeWidth = strokeWidth;
			this.strokeSide = strokeSide;
			this.strokeStyle = strokeStyle;
			this.texture = texture;
			this.textureTransformId = textureTransformId;
			this.triangulatedId = triangulatedId;

			// Indices
			if (isNotInited || isTriangulatedIdChanged) {
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
			if (isNotInited || isTriangulatedIdChanged || isTransformChanged) {
				buffer.updateVertices();
				buildPolygonVertex(
					buffer.vertices,
					triangulated.vertices,
					voffset,
					shape.transform.internalTransform
				);
			}

			// Steps
			if (isNotInited || isTriangulatedIdChanged || isStrokeChanged) {
				buffer.updateSteps();
				const size = shape.size;
				buildPolygonStep(
					buffer.steps,
					triangulated.distances,
					triangulated.lengths,
					triangulated.clippings,
					triangulated.uvs,
					voffset,
					this.vertexCount,
					size.x,
					size.y,
					fillDirection,
					fillPercent,
					strokeWidth,
					strokeSide,
					strokeStyle
				);
			}

			// UVs
			if (isNotInited || isTriangulatedIdChanged || isTextureChanged) {
				buffer.updateUvs();
				buildPolygonUv(buffer.uvs, triangulated.uvs, voffset, toTextureUvs(texture));
			}
		}
	}
}

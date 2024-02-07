/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { buildNullStep, buildNullUv, buildNullVertex } from "./build-null";
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
import { BuilderBuffer, BuilderFlag } from "./builder";
import { BuilderLineOfAny } from "./builder-line-of-any";
import { toTexture, toTextureTransformId, toTextureUvs, toTransformLocalId } from "./builders";
import { copyClipping } from "./copy-clipping";
import { copyIndex } from "./copy-index";
import { copyStep } from "./copy-step";
import { copyUvs } from "./copy-uv";
import { copyVertex } from "./copy-vertex";
import { EShapeLineOfAnyPoints } from "./e-shape-line-of-any-points";
import { EShapeLineOfAnyPointsImpl } from "./e-shape-line-of-any-points-impl";

export class BuilderLineOfTriangles extends BuilderLineOfAny {
	override init(): void {
		const buffer = this.buffer;
		buffer.updateClippings();
		buffer.updateIndices();
		const clippings = buffer.clippings;
		const indices = buffer.indices;
		const voffset = this.vertexOffset;
		const ioffset = this.indexOffset;
		const pointCountReserved = this.pointCountReserved;
		if (0 < pointCountReserved) {
			buildTriangleClipping(clippings, voffset);
			copyClipping(clippings, voffset, TRIANGLE_VERTEX_COUNT, pointCountReserved);
			buildTriangleIndex(indices, voffset, ioffset);
			copyIndex(
				indices,
				TRIANGLE_VERTEX_COUNT,
				ioffset,
				TRIANGLE_INDEX_COUNT,
				pointCountReserved
			);
		}
		this.inited |= BuilderFlag.CLIPPING_AND_INDEX;
	}

	override update(shape: EShape): void {
		const points = shape.points;
		if (points instanceof EShapeLineOfAnyPointsImpl) {
			const buffer = this.buffer;
			this.updateVertexStepAndUvs(buffer, shape, points);
			this.updateLineOfAnyColorFill(buffer, shape, points, TRIANGLE_VERTEX_COUNT);
			this.updateLineOfAnyColorStroke(buffer, shape, points, TRIANGLE_VERTEX_COUNT);
		}
	}

	protected updateVertexStepAndUvs(
		buffer: BuilderBuffer,
		shape: EShape,
		points: EShapeLineOfAnyPoints
	): void {
		const pointId = points.id;
		const pointOffset = points.offset;
		const pointOffsetId = pointOffset.id;
		const isPointChanged = pointId !== this.pointId || pointOffsetId !== this.pointOffsetId;

		const pointSize = points.size;
		const pointSizeId = pointSize.id;
		const isPointSizeChanged = pointSizeId !== this.pointSizeId;

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
		const textureTransformId = toTextureTransformId(texture);
		const isTextureChanged =
			texture !== this.texture || textureTransformId !== this.textureTransformId;

		const isVertexChanged =
			isPointChanged || isPointSizeChanged || isSizeChanged || isStrokeChanged;

		const isNotInited = !(this.inited & BuilderFlag.VERTEX_STEP_AND_UV);

		if (isNotInited || isVertexChanged || isTransformChanged || isTextureChanged) {
			this.inited |= BuilderFlag.VERTEX_STEP_AND_UV;
			this.pointId = pointId;
			const formatted = points.formatted;
			this.pointCount = formatted.length;
			this.pointOffsetId = pointOffsetId;
			this.pointSizeId = pointSizeId;
			this.sizeX = sizeX;
			this.sizeY = sizeY;
			this.transformLocalId = transformLocalId;
			this.strokeAlign = strokeAlign;
			this.strokeWidth = strokeWidth;
			this.strokeStyle = strokeStyle;
			this.texture = texture;
			this.textureTransformId = textureTransformId;

			// Buffer
			buffer.updateVertices();
			if (isNotInited || isVertexChanged || isTransformChanged) {
				buffer.updateSteps();
			}
			if (isNotInited || isVertexChanged || isTextureChanged) {
				buffer.updateUvs();
			}

			const pointCount = this.pointCount;
			const pointsValues = formatted.values;
			const voffset = this.vertexOffset;
			const vertices = buffer.vertices;
			const steps = buffer.steps;
			const clippings = buffer.clippings;
			const uvs = buffer.uvs;
			const textureUvs = toTextureUvs(texture);
			const internalTransform = shape.transform.internalTransform;
			if (0 < pointCount && pointSize.isStaticX() && pointSize.isStaticY()) {
				const pointSizeX = pointSize.getX(0);
				const pointSizeY = pointSize.getY(0);

				buildTriangleVertex(
					vertices,
					voffset,
					0,
					0,
					pointSizeX,
					pointSizeY,
					strokeAlign,
					strokeWidth,
					internalTransform,
					TRIANGLE_WORLD_SIZE
				);
				copyVertex(
					vertices,
					internalTransform,
					voffset,
					TRIANGLE_VERTEX_COUNT,
					pointCount,
					pointsValues,
					pointOffset
				);
				if (isNotInited || isVertexChanged || isTransformChanged) {
					buildTriangleStep(
						steps,
						clippings,
						voffset,
						TRIANGLE_VERTEX_COUNT,
						strokeWidth,
						strokeStyle,
						TRIANGLE_WORLD_SIZE
					);
					copyStep(steps, voffset, TRIANGLE_VERTEX_COUNT, pointCount);
				}
				if (isNotInited || isVertexChanged || isTextureChanged) {
					buildTriangleUv(uvs, textureUvs, voffset, TRIANGLE_WORLD_SIZE);
					copyUvs(uvs, voffset, TRIANGLE_VERTEX_COUNT, pointCount);
				}
			} else {
				for (let i = 0; i < pointCount; ++i) {
					const ip = i << 1;
					const px = pointsValues[ip] + pointOffset.getX(i);
					const py = pointsValues[ip + 1] + pointOffset.getY(i);
					const pointSizeX = pointSize.getX(i);
					const pointSizeY = pointSize.getY(i);
					const iv = voffset + i * TRIANGLE_VERTEX_COUNT;

					buildTriangleVertex(
						vertices,
						iv,
						px,
						py,
						pointSizeX,
						pointSizeY,
						strokeAlign,
						strokeWidth,
						internalTransform,
						TRIANGLE_WORLD_SIZE
					);
					if (isNotInited || isVertexChanged || isTransformChanged) {
						buildTriangleStep(
							steps,
							clippings,
							iv,
							TRIANGLE_VERTEX_COUNT,
							strokeWidth,
							strokeStyle,
							TRIANGLE_WORLD_SIZE
						);
					}
					if (isNotInited || isVertexChanged || isTextureChanged) {
						buildTriangleUv(uvs, textureUvs, iv, TRIANGLE_WORLD_SIZE);
					}
				}
			}

			// Fill the rest
			const pointCountReserved = this.pointCountReserved;
			const voffsetReserved = voffset + pointCount * TRIANGLE_VERTEX_COUNT;
			const vcountReserved = TRIANGLE_VERTEX_COUNT * (pointCountReserved - pointCount);
			buildNullVertex(vertices, voffsetReserved, vcountReserved);
			buildNullStep(steps, voffsetReserved, vcountReserved);
			buildNullUv(uvs, voffsetReserved, vcountReserved);
		}
	}
}

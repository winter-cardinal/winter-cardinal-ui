/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
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
import { copyClipping } from "./copy-clipping";
import { copyIndex } from "./copy-index";
import { copyStep } from "./copy-step";
import { copyUvs } from "./copy-uv";
import { copyVertex } from "./copy-vertex";
import { EShapeLineOfAnyPoints } from "./e-shape-line-of-any-points";
import { EShapeLineOfAnyPointsImpl } from "./e-shape-line-of-any-points-impl";
import { EShapeLineOfAnyUploaded } from "./e-shape-line-of-any-uploaded";

export class EShapeLineOfTrianglesUploaded extends EShapeLineOfAnyUploaded {
	init(shape: EShape): this {
		super.init(shape);

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

		// Text
		this.initText();

		this.update(shape);
		return this;
	}

	update(shape: EShape): void {
		const buffer = this.buffer;
		const points = shape.points;
		if (points instanceof EShapeLineOfAnyPointsImpl) {
			this.updateVertexStepAndUvs(buffer, shape, points);
			this.updateLineOfAnyColorFill(buffer, shape, points, TRIANGLE_VERTEX_COUNT);
			this.updateLineOfAnyColorStroke(buffer, shape, points, TRIANGLE_VERTEX_COUNT);
			this.updateText(buffer, shape);
		}
	}

	protected updateVertexStepAndUvs(
		buffer: EShapeBuffer,
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

		const transformLocalId = this.toTransformLocalId(shape);
		const isTransformChanged = this.transformLocalId !== transformLocalId;

		const stroke = shape.stroke;
		const strokeWidth = stroke.enable ? stroke.width : 0;
		const strokeAlign = stroke.align;
		const isStrokeChanged =
			this.strokeAlign !== strokeAlign || this.strokeWidth !== strokeWidth;

		const texture = this.toTexture(shape);
		const textureTransformId = this.toTextureTransformId(texture);
		const isTextureChanged =
			texture !== this.texture || textureTransformId !== this.textureTransformId;

		const isVertexChanged =
			isPointChanged || isPointSizeChanged || isSizeChanged || isStrokeChanged;

		if (isVertexChanged || isTransformChanged || isTextureChanged) {
			this.pointId = pointId;
			const formatted = points.formatted;
			this.pointCount = formatted.length;
			this.pointOffsetId = pointOffsetId;
			this.pointSizeId = pointSizeId;
			this.sizeX = sizeX;
			this.sizeY = sizeY;
			this.transformLocalId = transformLocalId;
			this.strokeWidth = strokeWidth;
			this.strokeAlign = strokeAlign;

			if (isSizeChanged || isTransformChanged || isStrokeChanged) {
				// Invalidate the text layout to update the text layout.
				this.textSpacingHorizontal = NaN;
			}

			// Buffer
			buffer.updateVertices();
			if (isVertexChanged || isTransformChanged) {
				buffer.updateSteps();
			}
			if (isVertexChanged || isTextureChanged) {
				buffer.updateUvs();
			}

			const pointCount = this.pointCount;
			const pointsValues = formatted.values;
			const voffset = this.vertexOffset;
			const vertices = buffer.vertices;
			const steps = buffer.steps;
			const clippings = buffer.clippings;
			const uvs = buffer.uvs;
			const textureUvs = this.toTextureUvs(texture);
			const internalTransform = shape.transform.internalTransform;
			const antialiasWeight = this.antialiasWeight;
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
				if (isVertexChanged || isTransformChanged) {
					buildTriangleStep(
						steps,
						clippings,
						voffset,
						TRIANGLE_VERTEX_COUNT,
						strokeWidth,
						antialiasWeight,
						TRIANGLE_WORLD_SIZE
					);
					copyStep(steps, voffset, TRIANGLE_VERTEX_COUNT, pointCount);
				}
				if (isVertexChanged || isTextureChanged) {
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
					if (isVertexChanged || isTransformChanged) {
						buildTriangleStep(
							steps,
							clippings,
							iv,
							TRIANGLE_VERTEX_COUNT,
							strokeWidth,
							antialiasWeight,
							TRIANGLE_WORLD_SIZE
						);
					}
					if (isVertexChanged || isTextureChanged) {
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

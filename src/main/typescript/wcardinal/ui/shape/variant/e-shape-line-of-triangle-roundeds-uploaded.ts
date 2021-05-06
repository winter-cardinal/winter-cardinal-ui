/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { buildNullClipping, buildNullStep, buildNullUv, buildNullVertex } from "./build-null";
import {
	buildTriangleRoundedClipping,
	buildTriangleRoundedIndex,
	buildTriangleRoundedStep,
	buildTriangleRoundedUv,
	buildTriangleRoundedVertex,
	TRIANGLE_ROUNDED_INDEX_COUNT,
	TRIANGLE_ROUNDED_VERTEX_COUNT,
	TRIANGLE_ROUNDED_WORLD_SIZE
} from "./build-triangle-rounded";
import { copyClipping } from "./copy-clipping";
import { copyIndex } from "./copy-index";
import { copyStep } from "./copy-step";
import { copyUvs } from "./copy-uv";
import { copyVertex } from "./copy-vertex";
import { EShapeLineOfAnyPoints } from "./e-shape-line-of-any-points";
import { EShapeLineOfAnyPointsImpl } from "./e-shape-line-of-any-points-impl";
import { EShapeLineOfAnyUploaded } from "./e-shape-line-of-any-uploaded";

export class EShapeLineOfTriangleRoundedsUploaded extends EShapeLineOfAnyUploaded {
	init(shape: EShape): this {
		super.init(shape);

		// Indices
		const buffer = this.buffer;
		buffer.updateIndices();
		const voffset = this.vertexOffset;
		const ioffset = this.indexOffset;
		const pointCountReserved = this.pointCountReserved;
		if (0 < pointCountReserved) {
			buildTriangleRoundedIndex(buffer.indices, voffset, ioffset);
			copyIndex(
				buffer.indices,
				TRIANGLE_ROUNDED_VERTEX_COUNT,
				ioffset,
				TRIANGLE_ROUNDED_INDEX_COUNT,
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
			this.updateVertexClippingStepAndUv(buffer, shape, points);
			this.updateLineOfAnyColorFill(buffer, shape, points, TRIANGLE_ROUNDED_VERTEX_COUNT);
			this.updateLineOfAnyColorStroke(buffer, shape, points, TRIANGLE_ROUNDED_VERTEX_COUNT);
			this.updateText(buffer, shape);
		}
	}

	protected updateVertexClippingStepAndUv(
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

		const radius = shape.radius;
		const isRadiusChanged = radius !== this.radius;

		const transformLocalId = this.toTransformLocalId(shape);
		const isTransformChanged = this.transformLocalId !== transformLocalId;

		const stroke = shape.stroke;
		const strokeAlign = stroke.align;
		const strokeWidth = stroke.enable ? stroke.width : 0;
		const strokeStyle = stroke.style;
		const isStrokeChanged =
			this.strokeAlign !== strokeAlign ||
			this.strokeWidth !== strokeWidth ||
			this.strokeStyle !== strokeStyle;

		const corner = shape.corner;
		const isCornerChanged = this.corner !== corner;

		const texture = this.toTexture(shape);
		const textureTransformId = this.toTextureTransformId(texture);
		const isTextureChanged =
			texture !== this.texture || textureTransformId !== this.textureTransformId;

		const isVertexChanged =
			isPointChanged ||
			isPointSizeChanged ||
			isSizeChanged ||
			isRadiusChanged ||
			isStrokeChanged;

		if (isVertexChanged || isTransformChanged || isCornerChanged || isTextureChanged) {
			this.pointId = pointId;
			const formatted = points.formatted;
			this.pointCount = formatted.length;
			this.pointOffsetId = pointOffsetId;
			this.pointSizeId = pointSizeId;
			this.sizeX = sizeX;
			this.sizeY = sizeY;
			this.radius = radius;
			this.transformLocalId = transformLocalId;
			this.strokeAlign = strokeAlign;
			this.strokeWidth = strokeWidth;
			this.strokeStyle = strokeStyle;
			this.corner = corner;
			this.texture = texture;
			this.textureTransformId = textureTransformId;

			if (isSizeChanged || isTransformChanged || isStrokeChanged) {
				// Invalidate the text layout to update the text layout.
				this.textSpacingHorizontal = NaN;
			}

			// Buffer
			buffer.updateVertices();
			if (isVertexChanged || isCornerChanged) {
				buffer.updateClippings();
			}
			if (isVertexChanged || isTransformChanged || isCornerChanged) {
				buffer.updateSteps();
			}
			if (isVertexChanged || isTextureChanged) {
				buffer.updateUvs();
			}
			const pointCount = this.pointCount;
			const pointsValues = formatted.values;
			const voffset = this.vertexOffset;
			const vertices = buffer.vertices;
			const clippings = buffer.clippings;
			const steps = buffer.steps;
			const uvs = buffer.uvs;
			const internalTransform = shape.transform.internalTransform;
			const textureUvs = this.toTextureUvs(texture);
			if (0 < pointCount && pointSize.isStaticX() && pointSize.isStaticY()) {
				const pointSizeX = pointSize.getX(0);
				const pointSizeY = pointSize.getY(0);

				// Vertices
				buildTriangleRoundedVertex(
					vertices,
					voffset,
					0,
					0,
					pointSizeX,
					pointSizeY,
					strokeAlign,
					strokeWidth,
					radius,
					internalTransform,
					TRIANGLE_ROUNDED_WORLD_SIZE
				);
				copyVertex(
					vertices,
					internalTransform,
					voffset,
					TRIANGLE_ROUNDED_VERTEX_COUNT,
					pointCount,
					pointsValues,
					pointOffset
				);

				// Clippings
				if (isVertexChanged || isCornerChanged) {
					buildTriangleRoundedClipping(clippings, voffset, corner, radius);
					copyClipping(clippings, voffset, TRIANGLE_ROUNDED_VERTEX_COUNT, pointCount);
				}

				// Steps
				if (isVertexChanged || isTransformChanged || isCornerChanged) {
					buildTriangleRoundedStep(
						steps,
						clippings,
						voffset,
						strokeWidth,
						strokeStyle,
						radius,
						TRIANGLE_ROUNDED_WORLD_SIZE
					);
					copyStep(steps, voffset, TRIANGLE_ROUNDED_VERTEX_COUNT, pointCount);
				}

				// UVs
				if (isVertexChanged || isTextureChanged) {
					buildTriangleRoundedUv(
						uvs,
						voffset,
						textureUvs,
						radius,
						TRIANGLE_ROUNDED_WORLD_SIZE
					);
					copyUvs(uvs, voffset, TRIANGLE_ROUNDED_VERTEX_COUNT, pointCount);
				}
			} else {
				for (let i = 0; i < pointCount; ++i) {
					const ip = i << 1;
					const px = pointsValues[ip] + pointOffset.getX(i);
					const py = pointsValues[ip + 1] + pointOffset.getY(i);
					const pointSizeX = pointSize.getX(i);
					const pointSizeY = pointSize.getY(i);

					const iv = voffset + i * TRIANGLE_ROUNDED_VERTEX_COUNT;

					// Vertices
					buildTriangleRoundedVertex(
						vertices,
						iv,
						px,
						py,
						pointSizeX,
						pointSizeY,
						strokeAlign,
						strokeWidth,
						radius,
						internalTransform,
						TRIANGLE_ROUNDED_WORLD_SIZE
					);

					// Clippings
					if (isVertexChanged || isCornerChanged) {
						buildTriangleRoundedClipping(clippings, iv, corner, radius);
					}

					// Steps
					if (isVertexChanged || isTransformChanged || isCornerChanged) {
						buildTriangleRoundedStep(
							steps,
							clippings,
							iv,
							strokeWidth,
							strokeStyle,
							radius,
							TRIANGLE_ROUNDED_WORLD_SIZE
						);
					}

					// UVs
					if (isVertexChanged || isTextureChanged) {
						buildTriangleRoundedUv(
							uvs,
							iv,
							textureUvs,
							radius,
							TRIANGLE_ROUNDED_WORLD_SIZE
						);
					}
				}
			}

			// Fill the rest
			const pointCountReserved = this.pointCountReserved;
			const voffsetReserved = voffset + pointCount * TRIANGLE_ROUNDED_VERTEX_COUNT;
			const vcountReserved =
				TRIANGLE_ROUNDED_VERTEX_COUNT * (pointCountReserved - pointCount);
			buildNullVertex(vertices, voffsetReserved, vcountReserved);
			buildNullStep(steps, voffsetReserved, vcountReserved);
			buildNullClipping(clippings, voffsetReserved, vcountReserved);
			buildNullUv(uvs, voffsetReserved, vcountReserved);
		}
	}
}

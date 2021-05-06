/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { buildNullClipping, buildNullStep, buildNullUv, buildNullVertex } from "./build-null";
import {
	buildRectangleClipping,
	buildRectangleIndex,
	buildRectangleStep,
	buildRectangleUv,
	buildRectangleVertex,
	RECTANGLE_INDEX_COUNT,
	RECTANGLE_VERTEX_COUNT,
	RECTANGLE_WORLD_SIZE
} from "./build-rectangle";
import { copyClipping } from "./copy-clipping";
import { copyIndex } from "./copy-index";
import { copyStep } from "./copy-step";
import { copyUvs } from "./copy-uv";
import { copyVertex } from "./copy-vertex";
import { EShapeLineOfAnyPoints } from "./e-shape-line-of-any-points";
import { EShapeLineOfAnyPointsImpl } from "./e-shape-line-of-any-points-impl";
import { EShapeLineOfAnyUploaded } from "./e-shape-line-of-any-uploaded";

export class EShapeLineOfRectanglesUploaded extends EShapeLineOfAnyUploaded {
	init(shape: EShape): this {
		super.init(shape);

		// Indices
		const buffer = this.buffer;
		buffer.updateIndices();
		const indices = buffer.indices;
		const voffset = this.vertexOffset;
		const ioffset = this.indexOffset;
		const pointCountReserved = this.pointCountReserved;
		if (0 < pointCountReserved) {
			buildRectangleIndex(indices, voffset, ioffset);
			copyIndex(
				indices,
				RECTANGLE_VERTEX_COUNT,
				ioffset,
				RECTANGLE_INDEX_COUNT,
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
			this.updateLineOfAnyColorFill(buffer, shape, points, RECTANGLE_VERTEX_COUNT);
			this.updateLineOfAnyColorStroke(buffer, shape, points, RECTANGLE_VERTEX_COUNT);
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

		const transformLocalId = this.toTransformLocalId(shape);
		const isTransformChanged = this.transformLocalId !== transformLocalId;

		const stroke = shape.stroke;
		const strokeAlign = stroke.align;
		const strokeWidth = stroke.enable ? stroke.width : 0;
		const strokeSide = stroke.side;
		const strokeStyle = stroke.style;
		const isStrokeChanged =
			this.strokeAlign !== strokeAlign ||
			this.strokeWidth !== strokeWidth ||
			this.strokeSide !== strokeSide ||
			this.strokeStyle !== strokeStyle;

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
			this.transformLocalId = transformLocalId;
			this.strokeWidth = strokeWidth;
			this.strokeAlign = strokeAlign;
			this.strokeSide = strokeSide;
			this.strokeStyle = strokeStyle;
			this.texture = texture;
			this.textureTransformId = textureTransformId;

			if (isSizeChanged || isTransformChanged || isStrokeChanged) {
				// Invalidate the text layout to update the text layout.
				this.textSpacingHorizontal = NaN;
			}

			// Buffer
			buffer.updateVertices();
			if (isVertexChanged || isTransformChanged) {
				buffer.updateSteps();
			}
			if (isVertexChanged) {
				buffer.updateClippings();
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
				buildRectangleVertex(
					vertices,
					voffset,
					0,
					0,
					pointSizeX,
					pointSizeY,
					strokeAlign,
					strokeWidth,
					internalTransform,
					RECTANGLE_WORLD_SIZE
				);
				copyVertex(
					vertices,
					internalTransform,
					voffset,
					RECTANGLE_VERTEX_COUNT,
					pointCount,
					pointsValues,
					pointOffset
				);

				// Steps
				if (isVertexChanged || isTransformChanged) {
					buildRectangleStep(
						voffset,
						steps,
						strokeWidth,
						strokeSide,
						strokeStyle,
						RECTANGLE_WORLD_SIZE
					);
					copyStep(steps, voffset, RECTANGLE_VERTEX_COUNT, pointCount);
				}

				// Clippings
				if (isVertexChanged) {
					buildRectangleClipping(clippings, voffset, RECTANGLE_WORLD_SIZE);
					copyClipping(clippings, voffset, RECTANGLE_VERTEX_COUNT, pointCount);
				}

				// UVs
				if (isVertexChanged || isTextureChanged) {
					buildRectangleUv(uvs, voffset, textureUvs, RECTANGLE_WORLD_SIZE);
					copyUvs(uvs, voffset, RECTANGLE_VERTEX_COUNT, pointCount);
				}
			} else {
				for (let i = 0; i < pointCount; ++i) {
					const ip = i << 1;
					const px = pointsValues[ip] + pointOffset.getX(i);
					const py = pointsValues[ip + 1] + pointOffset.getY(i);
					const pointSizeX = pointSize.getX(i);
					const pointSizeY = pointSize.getY(i);
					const iv = voffset + i * RECTANGLE_VERTEX_COUNT;

					// Vertices
					buildRectangleVertex(
						vertices,
						iv,
						px,
						py,
						pointSizeX,
						pointSizeY,
						strokeAlign,
						strokeWidth,
						internalTransform,
						RECTANGLE_WORLD_SIZE
					);

					// Steps
					if (isVertexChanged || isTransformChanged) {
						buildRectangleStep(
							iv,
							steps,
							strokeWidth,
							strokeSide,
							strokeStyle,
							RECTANGLE_WORLD_SIZE
						);
					}

					// Clippings
					if (isVertexChanged) {
						buildRectangleClipping(clippings, iv, RECTANGLE_WORLD_SIZE);
					}

					// UVs
					if (isVertexChanged || isTextureChanged) {
						buildRectangleUv(uvs, iv, textureUvs, RECTANGLE_WORLD_SIZE);
					}
				}
			}

			// Fill the rest
			const pointCountReserved = this.pointCountReserved;
			const voffsetReserved = voffset + pointCount * RECTANGLE_VERTEX_COUNT;
			const vcountReserved = RECTANGLE_VERTEX_COUNT * (pointCountReserved - pointCount);
			buildNullVertex(vertices, voffsetReserved, vcountReserved);
			buildNullStep(steps, voffsetReserved, vcountReserved);
			buildNullClipping(clippings, voffsetReserved, vcountReserved);
			buildNullUv(uvs, voffsetReserved, vcountReserved);
		}
	}
}

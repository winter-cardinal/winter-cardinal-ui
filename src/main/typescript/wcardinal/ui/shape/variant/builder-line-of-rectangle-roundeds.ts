/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeCorner } from "../e-shape-corner";
import { buildNullClipping, buildNullStep, buildNullUv, buildNullVertex } from "./build-null";
import {
	buildRectangleRoundedClipping,
	buildRectangleRoundedIndex,
	buildRectangleRoundedStep,
	buildRectangleRoundedUv,
	buildRectangleRoundedVertex,
	RECTANGLE_ROUNDED_INDEX_COUNT,
	RECTANGLE_ROUNDED_VERTEX_COUNT,
	RECTANGLE_ROUNDED_WORLD_SIZE
} from "./build-rectangle-rounded";
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

export class BuilderLineOfRectangleRoundeds extends BuilderLineOfAny {
	protected radius: number;
	protected corner: EShapeCorner;

	constructor(
		buffer: BuilderBuffer,
		vertexOffset: number,
		indexOffset: number,
		vertexCount: number,
		indexCount: number,
		pointCountReserved: number,
		vcountPerPoint: number,
		icountPerPoint: number
	) {
		super(
			buffer,
			vertexOffset,
			indexOffset,
			vertexCount,
			indexCount,
			pointCountReserved,
			vcountPerPoint,
			icountPerPoint
		);
		this.radius = 0;
		this.corner = 0;
	}

	override init(): void {
		const buffer = this.buffer;
		buffer.updateIndices();
		const indices = buffer.indices;
		const voffset = this.vertexOffset;
		const ioffset = this.indexOffset;
		const pointCountReserved = this.pointCountReserved;
		if (0 < pointCountReserved) {
			buildRectangleRoundedIndex(indices, voffset, ioffset);
			copyIndex(
				indices,
				RECTANGLE_ROUNDED_VERTEX_COUNT,
				ioffset,
				RECTANGLE_ROUNDED_INDEX_COUNT,
				pointCountReserved
			);
		}
		this.inited |= BuilderFlag.INDEX;
	}

	override update(shape: EShape): void {
		const points = shape.points;
		if (points instanceof EShapeLineOfAnyPointsImpl) {
			const buffer = this.buffer;
			this.updateVertexClippingStepAndUv(buffer, shape, points);
			this.updateLineOfAnyColorFill(buffer, shape, points, RECTANGLE_ROUNDED_VERTEX_COUNT);
			this.updateLineOfAnyColorStroke(buffer, shape, points, RECTANGLE_ROUNDED_VERTEX_COUNT);
		}
	}

	protected updateVertexClippingStepAndUv(
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
		const radius = shape.radius;
		const isSizeChanged =
			sizeX !== this.sizeX || sizeY !== this.sizeY || radius !== this.radius;

		const transformLocalId = toTransformLocalId(shape);
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

		const corner = shape.corner;
		const isCornerChanged = corner !== this.corner;

		const texture = toTexture(shape);
		const textureTransformId = toTextureTransformId(texture);
		const isTextureChanged =
			texture !== this.texture || textureTransformId !== this.textureTransformId;

		const isVertexChanged =
			isPointChanged || isPointSizeChanged || isSizeChanged || isStrokeChanged;

		const isNotInited = !(this.inited & BuilderFlag.VERTEX_CLIPPING_STEP_AND_UV);

		if (
			isNotInited ||
			isVertexChanged ||
			isTransformChanged ||
			isCornerChanged ||
			isTextureChanged
		) {
			this.inited |= BuilderFlag.VERTEX_CLIPPING_STEP_AND_UV;
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
			this.strokeSide = strokeSide;
			this.strokeStyle = strokeStyle;
			this.corner = corner;
			this.texture = texture;
			this.textureTransformId = textureTransformId;

			// Buffer
			buffer.updateVertices();
			if (isNotInited || isVertexChanged || isTransformChanged) {
				buffer.updateSteps();
			}
			if (isNotInited || isVertexChanged || isCornerChanged) {
				buffer.updateClippings();
			}
			if (isNotInited || isVertexChanged || isTextureChanged) {
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
			const textureUvs = toTextureUvs(texture);
			if (0 < pointCount && pointSize.isStaticX() && pointSize.isStaticY()) {
				const pointSizeX = pointSize.getX(0);
				const pointSizeY = pointSize.getY(0);

				// Vertices
				buildRectangleRoundedVertex(
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
					RECTANGLE_ROUNDED_WORLD_SIZE
				);
				copyVertex(
					vertices,
					internalTransform,
					voffset,
					RECTANGLE_ROUNDED_VERTEX_COUNT,
					pointCount,
					pointsValues,
					pointOffset
				);

				// Steps
				if (isNotInited || isVertexChanged || isTransformChanged) {
					buildRectangleRoundedStep(
						steps,
						voffset,
						strokeWidth,
						strokeSide,
						strokeStyle,
						corner,
						RECTANGLE_ROUNDED_WORLD_SIZE
					);
					copyStep(steps, voffset, RECTANGLE_ROUNDED_VERTEX_COUNT, pointCount);
				}

				// Clippings
				if (isNotInited || isVertexChanged || isCornerChanged) {
					buildRectangleRoundedClipping(
						clippings,
						voffset,
						corner,
						RECTANGLE_ROUNDED_WORLD_SIZE
					);
					copyClipping(clippings, voffset, RECTANGLE_ROUNDED_VERTEX_COUNT, pointCount);
				}

				// UVs
				if (isNotInited || isVertexChanged || isTextureChanged) {
					buildRectangleRoundedUv(uvs, voffset, textureUvs, RECTANGLE_ROUNDED_WORLD_SIZE);
					copyUvs(uvs, voffset, RECTANGLE_ROUNDED_VERTEX_COUNT, pointCount);
				}
			} else {
				for (let i = 0; i < pointCount; ++i) {
					const ip = i << 1;
					const px = pointsValues[ip] + pointOffset.getX(i);
					const py = pointsValues[ip + 1] + pointOffset.getY(i);
					const pointSizeX = pointSize.getX(i);
					const pointSizeY = pointSize.getY(i);

					const iv = voffset + i * RECTANGLE_ROUNDED_VERTEX_COUNT;

					// Vertices
					buildRectangleRoundedVertex(
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
						RECTANGLE_ROUNDED_WORLD_SIZE
					);

					// Steps
					if (isNotInited || isVertexChanged || isTransformChanged) {
						buildRectangleRoundedStep(
							steps,
							iv,
							strokeWidth,
							strokeSide,
							strokeStyle,
							corner,
							RECTANGLE_ROUNDED_WORLD_SIZE
						);
					}

					// Clippings
					if (isNotInited || isVertexChanged || isCornerChanged) {
						buildRectangleRoundedClipping(
							clippings,
							iv,
							corner,
							RECTANGLE_ROUNDED_WORLD_SIZE
						);
					}

					// UVs
					if (isNotInited || isVertexChanged || isTextureChanged) {
						buildRectangleRoundedUv(uvs, iv, textureUvs, RECTANGLE_ROUNDED_WORLD_SIZE);
					}
				}
			}

			// Fill the rest
			const pointCountReserved = this.pointCountReserved;
			const voffsetReserved = voffset + pointCount * RECTANGLE_ROUNDED_VERTEX_COUNT;
			const vcountReserved =
				RECTANGLE_ROUNDED_VERTEX_COUNT * (pointCountReserved - pointCount);
			buildNullVertex(vertices, voffsetReserved, vcountReserved);
			buildNullStep(steps, voffsetReserved, vcountReserved);
			buildNullClipping(clippings, voffsetReserved, vcountReserved);
			buildNullUv(uvs, voffsetReserved, vcountReserved);
		}
	}
}

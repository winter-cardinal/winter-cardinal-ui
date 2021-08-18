/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import {
	buildCircleClipping,
	buildCircleIndex,
	buildCircleStep,
	buildCircleUv,
	buildCircleVertex,
	CIRCLE_INDEX_COUNT,
	CIRCLE_VERTEX_COUNT,
	CIRCLE_WORLD_SIZE
} from "./build-circle";
import { buildNullStep, buildNullVertex } from "./build-null";
import { BuilderLineOfAny } from "./builder-line-of-any";
import { toTexture, toTextureTransformId, toTextureUvs, toTransformLocalId } from "./builders";
import { copyClipping } from "./copy-clipping";
import { copyIndex } from "./copy-index";
import { copyStep } from "./copy-step";
import { copyUvs } from "./copy-uv";
import { copyVertex } from "./copy-vertex";
import { EShapeLineOfAnyPoints } from "./e-shape-line-of-any-points";
import { EShapeLineOfAnyPointsImpl } from "./e-shape-line-of-any-points-impl";

export class BuilderLineOfCircles extends BuilderLineOfAny {
	init(buffer: EShapeBuffer): void {
		buffer.updateClippings();
		buffer.updateIndices();
		const clippings = buffer.clippings;
		const indices = buffer.indices;
		const voffset = this.vertexOffset;
		const ioffset = this.indexOffset;
		const pointCountReserved = this.pointCountReserved;
		if (0 < pointCountReserved) {
			buildCircleClipping(clippings, voffset);
			copyClipping(clippings, voffset, CIRCLE_VERTEX_COUNT, pointCountReserved);
			buildCircleIndex(indices, voffset, ioffset);
			copyIndex(
				indices,
				CIRCLE_VERTEX_COUNT,
				ioffset,
				CIRCLE_INDEX_COUNT,
				pointCountReserved
			);
		}
	}

	update(buffer: EShapeBuffer, shape: EShape): void {
		const points = shape.points;
		if (points instanceof EShapeLineOfAnyPointsImpl) {
			this.updateVertexAndStep(buffer, shape, points);
			this.updateLineOfAnyColorFill(buffer, shape, points, CIRCLE_VERTEX_COUNT);
			this.updateLineOfAnyColorStroke(buffer, shape, points, CIRCLE_VERTEX_COUNT);
			this.updateUv(buffer, shape);
		}
	}

	protected updateVertexAndStep(
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

		if (
			isPointChanged ||
			isPointSizeChanged ||
			isSizeChanged ||
			isTransformChanged ||
			isStrokeChanged
		) {
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
			this.strokeStyle = strokeStyle;

			// Buffer
			buffer.updateVertices();
			buffer.updateSteps();
			const pointCount = this.pointCount;
			const pointsValues = formatted.values;
			const voffset = this.vertexOffset;
			const vertices = buffer.vertices;
			const steps = buffer.steps;
			const clippings = buffer.clippings;
			const internalTransform = shape.transform.internalTransform;
			if (0 < pointCount && pointSize.isStaticX() && pointSize.isStaticY()) {
				const pointSizeX = pointSize.getX(0);
				const pointSizeY = pointSize.getY(0);

				buildCircleVertex(
					vertices,
					voffset,
					0,
					0,
					pointSizeX,
					pointSizeY,
					strokeAlign,
					strokeWidth,
					internalTransform,
					CIRCLE_WORLD_SIZE
				);
				copyVertex(
					vertices,
					internalTransform,
					voffset,
					CIRCLE_VERTEX_COUNT,
					pointCount,
					pointsValues,
					pointOffset
				);
				buildCircleStep(
					steps,
					clippings,
					voffset,
					strokeWidth,
					strokeStyle,
					CIRCLE_WORLD_SIZE
				);
				copyStep(steps, voffset, CIRCLE_VERTEX_COUNT, pointCount);
			} else {
				for (let i = 0; i < pointCount; ++i) {
					const ip = i << 1;
					const px = pointsValues[ip] + pointOffset.getX(i);
					const py = pointsValues[ip + 1] + pointOffset.getY(i);
					const pointSizeX = pointSize.getX(i);
					const pointSizeY = pointSize.getY(i);
					const iv = voffset + i * CIRCLE_VERTEX_COUNT;
					buildCircleVertex(
						vertices,
						iv,
						px,
						py,
						pointSizeX,
						pointSizeY,
						strokeAlign,
						strokeWidth,
						internalTransform,
						CIRCLE_WORLD_SIZE
					);
					buildCircleStep(
						steps,
						clippings,
						iv,
						strokeWidth,
						strokeStyle,
						CIRCLE_WORLD_SIZE
					);
				}
			}

			// Fill the rest
			const pointCountReserved = this.pointCountReserved;
			const voffsetReserved = voffset + pointCount * CIRCLE_VERTEX_COUNT;
			const vcountReserved = CIRCLE_VERTEX_COUNT * (pointCountReserved - pointCount);
			buildNullVertex(vertices, voffsetReserved, vcountReserved);
			buildNullStep(steps, voffsetReserved, vcountReserved);
		}
	}

	protected updateUv(buffer: EShapeBuffer, shape: EShape): void {
		const texture = toTexture(shape);
		const textureTransformId = toTextureTransformId(texture);
		if (texture !== this.texture || textureTransformId !== this.textureTransformId) {
			this.texture = texture;
			this.textureTransformId = textureTransformId;

			buffer.updateUvs();
			const uvs = buffer.uvs;
			const voffset = this.vertexOffset;
			const textureUvs = toTextureUvs(texture);
			const pointCountReserved = this.pointCountReserved;
			if (0 < pointCountReserved) {
				buildCircleUv(uvs, voffset, textureUvs);
				copyUvs(uvs, voffset, CIRCLE_VERTEX_COUNT, pointCountReserved);
			}
		}
	}
}

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { toPointsCount } from "./build-line";
import { toLineOfAnyPointCount } from "./build-line-of-any";
import { buildNull } from "./build-null";
import {
	buildPolygonClipping,
	buildPolygonFillColorStroke,
	buildPolygonIndex,
	buildPolygonStrokeColorStroke,
	buildPolygonUv,
	buildPolygonVertexAndStep
} from "./build-polygon";
import { copyClipping } from "./copy-clipping";
import { copyIndex } from "./copy-index";
import { EShapeLineOfAnyPoints } from "./e-shape-line-of-any-points";
import { EShapeLineOfAnyPointsImpl } from "./e-shape-line-of-any-points-impl";
import { EShapeTextUploaded } from "./e-shape-text-uploaded";
import { Polygon } from "./polygon";

export class EShapeLineOfAnyUploaded extends EShapeTextUploaded {
	protected pointId: number;
	protected pointCount: number;
	protected pointCountReserved: number;
	protected pointSizeId: number;
	protected pointOffsetId: number;
	protected pointFillId: number;
	protected pointStrokeId: number;

	protected polygon: Polygon;

	constructor(
		buffer: EShapeBuffer,
		voffset: number,
		ioffset: number,
		tvcount: number,
		ticount: number,
		vcount: number,
		icount: number,
		antialiasWeight: number,
		pointCountReserved: number,
		polygon: Polygon
	) {
		super(buffer, voffset, ioffset, tvcount, ticount, vcount, icount, antialiasWeight);
		this.pointId = -1;
		this.pointCount = 0;
		this.pointCountReserved = pointCountReserved;
		this.pointSizeId = -1;
		this.pointOffsetId = -1;
		this.pointFillId = -1;
		this.pointStrokeId = -1;
		this.polygon = polygon;
	}

	init(shape: EShape): this {
		super.init(shape);

		const polygon = this.polygon;

		const buffer = this.buffer;
		const voffset = this.vertexOffset;
		const ioffset = this.indexOffset;
		const pointCountReserved = this.pointCountReserved;

		// Indices
		if (0 < pointCountReserved) {
			const indices = buffer.indices;
			buffer.updateIndices();
			buildPolygonIndex(indices, voffset, ioffset, polygon);
			copyIndex(
				indices,
				polygon.vertexCount,
				ioffset,
				polygon.indexCount,
				pointCountReserved
			);
		}

		// Clipping
		if (0 < pointCountReserved) {
			const clippings = buffer.clippings;
			buffer.updateClippings();
			buildPolygonClipping(clippings, voffset, polygon);
			copyClipping(clippings, voffset, polygon.vertexCount, pointCountReserved);
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
			this.updateLineOfAnyVertexStepAndUv(buffer, shape, points);
			this.updateLineOfAnyColor(buffer, shape, points);
			this.updateText(buffer, shape);
		}
	}

	protected updateLineOfAnyVertexStepAndUv(
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
		const strokeWidth = stroke.enable ? stroke.width : 0;
		const strokeAlign = stroke.align;
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
			isPointChanged ||
			isPointSizeChanged ||
			isSizeChanged ||
			isRadiusChanged ||
			isStrokeChanged;

		if (isVertexChanged || isTransformChanged || isTextureChanged) {
			this.pointId = pointId;
			const formatted = points.formatted;
			this.pointCount = formatted.length;
			this.pointOffsetId = pointOffsetId;
			this.pointSizeId = pointSizeId;
			this.sizeX = sizeX;
			this.sizeY = sizeY;
			this.radius = radius;
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
			buffer.updateSteps();
			buffer.updateColorFills();
			if (isVertexChanged || isTextureChanged) {
				buffer.updateUvs();
			}
			const polygon = this.polygon;
			const pointCount = this.pointCount;
			const pointsValues = formatted.values;
			const voffset = this.vertexOffset;
			const vcountPerPoint = polygon.vertexCount;
			const vertices = buffer.vertices;
			const steps = buffer.steps;
			const colorFills = buffer.colorFills;
			const uvs = buffer.uvs;
			const internalTransform = shape.transform.internalTransform;
			const textureUvs = this.toTextureUvs(texture);
			for (let i = 0; i < pointCount; ++i) {
				// Vertices
				const ip = i << 1;
				const transformed = polygon.getTransformed(
					pointsValues[ip + 0] + pointOffset.getX(i),
					pointsValues[ip + 1] + pointOffset.getY(i),
					pointSize.getX(i),
					pointSize.getY(i),
					radius,
					internalTransform
				);
				const length = buildPolygonVertexAndStep(
					vertices,
					steps,
					colorFills,
					voffset + i * vcountPerPoint,
					transformed,
					strokeWidth,
					strokeAlign,
					strokeStyle
				);

				// UVs
				if (isVertexChanged || isTextureChanged) {
					buildPolygonUv(uvs, colorFills, voffset, transformed, textureUvs, length);
				}
			}

			// Fill the rest
			const pointCountReserved = this.pointCountReserved;
			const voffsetReserved = voffset + pointCount * vcountPerPoint;
			const vcountReserved = vcountPerPoint * (pointCountReserved - pointCount);
			buildNull(vertices, voffsetReserved, vcountReserved, 2, 0);
			buildNull(steps, voffsetReserved, vcountReserved, 6, 0);
			buildNull(colorFills, voffsetReserved, vcountReserved, 4, 0);
			if (isVertexChanged || isTextureChanged) {
				buildNull(uvs, voffsetReserved, vcountReserved, 2, 0);
			}
		}
	}

	isCompatible(shape: EShape): boolean {
		if (super.isCompatible(shape)) {
			const pointCount = toLineOfAnyPointCount(toPointsCount(shape.points));
			return pointCount === this.pointCountReserved;
		}
		return false;
	}

	protected updateLineOfAnyColor(
		buffer: EShapeBuffer,
		shape: EShape,
		points: EShapeLineOfAnyPoints
	): void {
		const pointFill = points.fill;
		const pointFillId = pointFill.id;
		const isPointFillChanged = pointFillId !== this.pointFillId;

		const fill = shape.fill;
		const isFillEnabled = shape.visible && fill.enable;
		const colorFill = fill.color;
		const alphaFill = isFillEnabled ? fill.alpha : 0;
		const isFillChanged = colorFill !== this.colorFill || alphaFill !== this.alphaFill;

		const pointStroke = points.stroke;
		const pointStrokeId = pointStroke.id;
		const isPointStrokeChanged = pointStrokeId !== this.pointStrokeId;

		const stroke = shape.stroke;
		const isStrokeEnabled = shape.visible && stroke.enable;
		const colorStroke = stroke.color;
		const alphaStroke = isStrokeEnabled ? stroke.alpha : 0;
		const isStrokeChanged =
			colorStroke !== this.colorStroke || alphaStroke !== this.alphaStroke;

		if (isPointFillChanged || isFillChanged || isPointStrokeChanged || isStrokeChanged) {
			this.colorFill = colorFill;
			this.alphaFill = alphaFill;
			this.pointFillId = pointFillId;

			this.colorStroke = colorStroke;
			this.alphaStroke = alphaStroke;
			this.pointStrokeId = pointStrokeId;

			const pointCountReserved = this.pointCountReserved;
			if (0 < pointCountReserved) {
				buffer.updateColorStrokes();

				const polygon = this.polygon;
				const voffset = this.vertexOffset;
				const vcountPerPoint = polygon.vertexCount;
				const colorStrokes = buffer.colorStrokes;
				let iv = voffset;
				for (let i = 0; i < pointCountReserved; ++i) {
					buildPolygonFillColorStroke(
						pointFill.getColor(i, colorFill),
						pointFill.getAlpha(i, alphaFill),
						iv,
						colorStrokes,
						polygon
					);
					buildPolygonStrokeColorStroke(
						pointStroke.getColor(i, colorStroke),
						pointStroke.getAlpha(i, alphaStroke),
						iv,
						colorStrokes,
						polygon
					);
					iv += vcountPerPoint;
				}
			}
		}
	}
}

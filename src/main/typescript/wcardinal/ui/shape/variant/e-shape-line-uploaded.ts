/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapePointsStyle } from "../e-shape-points-style";
import { toLineVertexCount, toPointsCount } from "./build-line";
import {
	buildPolylineClipping,
	buildPolylineColorStroke,
	buildPolylineIndex,
	buildPolylineUv,
	buildPolylineVertexStepAndColorFill
} from "./build-polyline";
import { EShapeTextUploaded } from "./e-shape-text-uploaded";
import { toPolylineNormal, toPolylineTransformed } from "./to-polyline-transformed";

export class EShapeLineUploaded extends EShapeTextUploaded {
	protected pointCount: number;
	protected pointId: number;
	protected pointsClosed: boolean;
	protected length: number;

	constructor(
		buffer: EShapeBuffer,
		voffset: number,
		ioffset: number,
		tvcount: number,
		ticount: number,
		vcount: number,
		icount: number,
		antialiasWeight: number
	) {
		super(buffer, voffset, ioffset, tvcount, ticount, vcount, icount, antialiasWeight);
		this.pointId = -1;
		this.pointCount = 0;
		this.pointsClosed = false;
		this.length = 1;
	}

	init(shape: EShape): this {
		super.init(shape);

		// Clipping & indices
		const buffer = this.buffer;
		buffer.updateIndices();
		buildPolylineIndex(
			buffer.indices,
			this.vertexOffset,
			this.indexOffset,
			this.indexCount - this.textIndexCount
		);

		// Text
		this.initText();

		//
		this.update(shape);

		return this;
	}

	isCompatible(shape: EShape): boolean {
		if (super.isCompatible(shape)) {
			const vcount = toLineVertexCount(toPointsCount(shape.points));
			return vcount === this.vertexCount - this.textVertexCount;
		}
		return false;
	}

	update(shape: EShape): void {
		const buffer = this.buffer;
		this.updateLineClipping(buffer, shape);
		this.updateLineVertexStepAndColorFill(buffer, shape);
		this.updateColor(buffer, shape);
		this.updateLineUv(buffer, shape);
		this.updateText(buffer, shape);
	}

	protected updateLineClipping(buffer: EShapeBuffer, shape: EShape): void {
		const points = shape.points;
		if (points) {
			const formatted = points.formatted;
			const pointCount = formatted.length;
			const pointsClosed = !!(points.style & EShapePointsStyle.CLOSED);
			if (this.pointCount !== pointCount || this.pointsClosed !== pointsClosed) {
				this.pointCount = pointCount;
				this.pointsClosed = pointsClosed;

				// Invalidate the pointId to update the vertices
				this.pointId = -1;

				buffer.updateClippings();
				buildPolylineClipping(
					buffer.clippings,
					this.vertexOffset,
					this.vertexCount - this.textVertexCount,
					pointCount,
					pointsClosed
				);
			}
		}
	}

	protected updateLineVertexStepAndColorFill(buffer: EShapeBuffer, shape: EShape): void {
		const points = shape.points;
		if (points) {
			const pointId = points.id;
			const isPointChanged = pointId !== this.pointId;

			const stroke = shape.stroke;
			const strokeWidth = stroke.enable ? stroke.width : 0;
			const strokeStyle = stroke.style;
			const isStrokeWidthChanged =
				strokeWidth !== this.strokeWidth || strokeStyle !== this.strokeStyle;

			const transformLocalId = this.toTransformLocalId(shape);
			const isTransformChanged = this.transformLocalId !== transformLocalId;

			if (isPointChanged || isTransformChanged || isStrokeWidthChanged) {
				this.pointId = pointId;
				this.strokeWidth = strokeWidth;
				this.strokeStyle = strokeStyle;
				this.transformLocalId = transformLocalId;

				if (isPointChanged || isTransformChanged) {
					// Invalidate the text layout to update the text layout.
					this.textSpacingHorizontal = NaN;
				}
				if (isPointChanged) {
					// Invalidate the texture transform ID to update the UVs
					this.textureTransformId = NaN;
				}

				buffer.updateVertices();
				buffer.updateSteps();
				buffer.updateColorFills();
				const formatted = points.formatted;
				const pointCount = this.pointCount;
				const vertices = toPolylineTransformed(
					formatted.values,
					pointCount,
					shape.transform.internalTransform
				);
				const normals = toPolylineNormal(vertices, pointCount);
				this.length = buildPolylineVertexStepAndColorFill(
					buffer.vertices,
					buffer.steps,
					buffer.colorFills,
					this.vertexOffset,
					this.vertexCount - this.textVertexCount,
					vertices,
					normals,
					formatted.segments,
					this.pointsClosed,
					pointCount,
					strokeWidth,
					0.5,
					strokeStyle
				);
			}
		}
	}

	protected updateColorFillAndStroke(
		buffer: EShapeBuffer,
		shape: EShape,
		vertexCount: number
	): void {
		const stroke = shape.stroke;
		const isEnabled = shape.visible && stroke.enable && 0 < stroke.width;
		const color = stroke.color;
		const alpha = isEnabled ? stroke.alpha : 0;
		if (color !== this.colorStroke || alpha !== this.alphaStroke) {
			this.colorStroke = color;
			this.alphaStroke = alpha;
			buffer.updateColorStrokes();

			buildPolylineColorStroke(
				color,
				alpha,
				this.vertexOffset,
				vertexCount,
				buffer.colorStrokes
			);
		}
	}

	updateLineUv(buffer: EShapeBuffer, shape: EShape): void {
		const texture = this.toTexture(shape);
		const textureTransformId = this.toTextureTransformId(texture);
		if (texture !== this.texture || textureTransformId !== this.textureTransformId) {
			this.texture = texture;
			this.textureTransformId = textureTransformId;

			const pointCount = this.pointCount;
			buffer.updateUvs();
			buildPolylineUv(
				buffer.uvs,
				buffer.colorFills,
				this.vertexOffset,
				this.vertexCount - this.textVertexCount,
				pointCount,
				this.pointsClosed,
				this.toTextureUvs(texture),
				this.length
			);
		}
	}
}

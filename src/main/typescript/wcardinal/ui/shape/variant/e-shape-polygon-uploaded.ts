/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import {
	buildPolygonClipping,
	buildPolygonFillColorStroke,
	buildPolygonIndex,
	buildPolygonStrokeColorStroke,
	buildPolygonUv,
	buildPolygonVertexAndStep
} from "./build-polygon";
import { EShapeTextUploaded } from "./e-shape-text-uploaded";
import { Polygon } from "./polygon";

export class EShapePolygonUploaded extends EShapeTextUploaded {
	protected _polygon: Polygon;

	constructor(
		buffer: EShapeBuffer,
		voffset: number,
		ioffset: number,
		tvcount: number,
		ticount: number,
		vcount: number,
		icount: number,
		antialiasWeight: number,
		polygon: Polygon
	) {
		super(buffer, voffset, ioffset, tvcount, ticount, vcount, icount, antialiasWeight);
		this._polygon = polygon;
	}

	init(shape: EShape): this {
		super.init(shape);

		const polygon = this._polygon;

		// Indices
		const buffer = this.buffer;
		buffer.updateIndices();
		buildPolygonIndex(buffer.indices, this.vertexOffset, this.indexOffset, polygon);

		// Clipping
		buffer.updateClippings();
		buildPolygonClipping(buffer.clippings, this.vertexOffset, polygon);

		// Text
		this.initText();

		this.update(shape);
		return this;
	}

	update(shape: EShape): void {
		const buffer = this.buffer;
		this.updateVertexStepAndUv(buffer, shape);
		this.updateColor(buffer, shape);
		this.updateText(buffer, shape);
	}

	protected updateVertexStepAndUv(buffer: EShapeBuffer, shape: EShape): void {
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

		const isVertexChanged = isSizeChanged || isRadiusChanged || isStrokeChanged;

		if (isVertexChanged || isTransformChanged || isTextureChanged) {
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

			// Vertices
			const voffset = this.vertexOffset;
			const polygon = this._polygon;
			const transformed = polygon.getTransformed(
				0,
				0,
				sizeX,
				sizeY,
				radius,
				shape.transform.internalTransform
			);
			buffer.updateVertices();
			buffer.updateSteps();
			buffer.updateColorFills();
			const length = buildPolygonVertexAndStep(
				buffer.vertices,
				buffer.steps,
				buffer.colorFills,
				voffset,
				transformed,
				strokeWidth,
				strokeAlign,
				strokeStyle
			);

			// UVs
			if (isVertexChanged || isTextureChanged) {
				buffer.updateUvs();
				buildPolygonUv(
					buffer.uvs,
					buffer.colorFills,
					voffset,
					transformed,
					this.toTextureUvs(texture),
					length
				);
			}
		}
	}

	protected updateColorFill(buffer: EShapeBuffer, shape: EShape, vertexCount: number): void {
		const fill = shape.fill;
		const isEnabled = shape.visible && fill.enable;
		const color = fill.color;
		const alpha = isEnabled ? fill.alpha : 0;
		if (color !== this.colorFill || alpha !== this.alphaFill) {
			this.colorFill = color;
			this.alphaFill = alpha;
			buffer.updateColorStrokes();

			buildPolygonFillColorStroke(
				color,
				alpha,
				this.vertexOffset,
				buffer.colorStrokes,
				this._polygon
			);
		}
	}

	protected updateColorStroke(buffer: EShapeBuffer, shape: EShape, vertexCount: number): void {
		const stroke = shape.stroke;
		const isEnabled = shape.visible && stroke.enable && 0 < stroke.width;
		const color = stroke.color;
		const alpha = isEnabled ? stroke.alpha : 0;
		if (color !== this.colorStroke || alpha !== this.alphaStroke) {
			this.colorStroke = color;
			this.alphaStroke = alpha;
			buffer.updateColorStrokes();

			buildPolygonStrokeColorStroke(
				color,
				alpha,
				this.vertexOffset,
				buffer.colorStrokes,
				this._polygon
			);
		}
	}
}

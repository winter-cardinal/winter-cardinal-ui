/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapePointsStyle } from "../e-shape-points-style";
import {
	buildPolygonClipping,
	buildPolygonFillColorStroke,
	buildPolygonIndex,
	buildPolygonStrokeColorStroke,
	buildPolygonUv,
	buildPolygonVertexAndStep,
	PolygonDefinition
} from "./build-polygon";
import { getRectangleDefinition } from "./build-rectangle";
import { EShapeTextUploaded } from "./e-shape-text-uploaded";
import { toPolygonTransformed } from "./to-polygon-transformed";

export class EShapeRectangleUploaded extends EShapeTextUploaded {
	protected _polygon!: PolygonDefinition;

	init(shape: EShape): this {
		super.init(shape);

		const polygon = getRectangleDefinition();
		this._polygon = polygon;

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

		const transformLocalId = this.toTransformLocalId(shape);
		const isTransformChanged = this.transformLocalId !== transformLocalId;

		const stroke = shape.stroke;
		const strokeWidth = stroke.enable ? stroke.width : 0;
		const strokeAlign = stroke.align;
		const strokeSide = stroke.side;
		const isStrokeChanged =
			this.strokeAlign !== strokeAlign ||
			this.strokeWidth !== strokeWidth ||
			this.strokeSide !== strokeSide;

		const texture = this.toTexture(shape);
		const textureTransformId = this.toTextureTransformId(texture);
		const isTextureChanged =
			texture !== this.texture || textureTransformId !== this.textureTransformId;

		const isVertexChanged = isSizeChanged || isStrokeChanged;

		if (isVertexChanged || isTransformChanged || isTextureChanged) {
			this.sizeX = sizeX;
			this.sizeY = sizeY;
			this.transformLocalId = transformLocalId;
			this.strokeWidth = strokeWidth;
			this.strokeAlign = strokeAlign;
			this.strokeSide = strokeSide;
			this.texture = texture;
			this.textureTransformId = textureTransformId;

			if (isVertexChanged || isTransformChanged) {
				// Invalidate the text layout to update the text layout.
				this.textSpacingHorizontal = NaN;
			}

			// Vertices
			const voffset = this.vertexOffset;
			const definition = this._polygon;
			const transformed = toPolygonTransformed(
				definition,
				0,
				0,
				sizeX,
				sizeY,
				shape.transform.internalTransform
			);
			buffer.updateVertices();
			buffer.updateSteps();
			const length = buildPolygonVertexAndStep(
				buffer.vertices,
				buffer.steps,
				buffer.colorFills,
				voffset,
				transformed,
				EShapePointsStyle.NONE,
				strokeWidth
			);

			// UVs
			if (isVertexChanged || isTextureChanged) {
				buffer.updateUvs();
				buffer.updateColorFills();
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

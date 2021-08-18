/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { EShapePointsStyle } from "../e-shape-points-style";
import {
	BAR_INDEX_COUNT,
	BAR_VERTEX_COUNT,
	buildBarClipping,
	buildBarIndex,
	buildBarUv,
	buildBarVertexStepAndColorFill
} from "./build-bar";
import { BuilderBase } from "./builder-base";
import { toTexture, toTextureTransformId, toTextureUvs, toTransformLocalId } from "./builders";
import { EShapeBar } from "./e-shape-bar";

export class BuilderBar extends BuilderBase {
	protected pointsId: number;
	protected pointsStyle: EShapePointsStyle;

	constructor(vertexOffset: number, indexOffset: number) {
		super(vertexOffset, indexOffset, BAR_VERTEX_COUNT, BAR_INDEX_COUNT);
		this.pointsId = NaN;
		this.pointsStyle = EShapePointsStyle.NONE;
	}

	init(buffer: EShapeBuffer): void {
		const voffset = this.vertexOffset;
		const ioffset = this.indexOffset;
		buffer.updateClippings();
		buffer.updateIndices();
		buildBarClipping(buffer.clippings, voffset);
		buildBarIndex(buffer.indices, voffset, ioffset);
	}

	update(buffer: EShapeBuffer, shape: EShape): void {
		this.updateVertexStepAndColorFill(buffer, shape);
		this.updateColorStroke(buffer, shape);
		this.updateUv(buffer, shape);
	}

	protected updateVertexStepAndColorFill(buffer: EShapeBuffer, shape: EShape): void {
		if (shape instanceof EShapeBar) {
			const size = shape.size;
			const sizeX = size.x;
			const sizeY = size.y;
			const isSizeChanged = sizeX !== this.sizeX || sizeY !== this.sizeY;

			const stroke = shape.stroke;
			const strokeWidth = stroke.enable ? stroke.width : 0;
			const strokeStyle = stroke.style;
			const isStrokeWidthChanged =
				strokeWidth !== this.strokeWidth || strokeStyle !== this.strokeStyle;

			const transformLocalId = toTransformLocalId(shape);
			const isTransformChanged = this.transformLocalId !== transformLocalId;

			const points = shape.points;
			const pointsId = points.id;
			const isPointsIdChanged = pointsId !== this.pointsId;

			const pointsStyle = points.style;
			const isPointsStyleChanged = pointsStyle !== this.pointsStyle;

			if (
				isSizeChanged ||
				isTransformChanged ||
				isStrokeWidthChanged ||
				isPointsIdChanged ||
				isPointsStyleChanged
			) {
				this.sizeX = sizeX;
				this.sizeY = sizeY;
				this.strokeWidth = strokeWidth;
				this.strokeStyle = strokeStyle;
				this.transformLocalId = transformLocalId;
				this.pointsId = pointsId;
				this.pointsStyle = pointsStyle;

				if (isPointsIdChanged) {
					// Invalidate the texture transform ID to update the UVs
					this.textureTransformId = NaN;
				}

				buffer.updateVertices();
				buffer.updateSteps();
				buffer.updateColorFills();
				buildBarVertexStepAndColorFill(
					buffer.vertices,
					buffer.steps,
					buffer.colorFills,
					this.vertexOffset,
					points.values,
					points.size,
					strokeWidth,
					strokeStyle,
					shape.transform.internalTransform
				);
			}
		}
	}

	protected updateUv(buffer: EShapeBuffer, shape: EShape): void {
		const texture = toTexture(shape);
		const textureTransformId = toTextureTransformId(texture);
		if (texture !== this.texture || textureTransformId !== this.textureTransformId) {
			this.texture = texture;
			this.textureTransformId = textureTransformId;

			buffer.updateUvs();
			buildBarUv(buffer.uvs, this.vertexOffset, toTextureUvs(texture));
		}
	}
}

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapePointsStyle } from "../e-shape-points-style";
import {
	BAR_INDEX_COUNT,
	BAR_VERTEX_COUNT,
	buildBarClipping,
	buildBarIndex,
	buildBarUv,
	buildBarVertexStep
} from "./build-bar";
import { BuilderBuffer, BuilderFlag } from "./builder";
import { BuilderBase } from "./builder-base";
import { toTexture, toTextureTransformId, toTextureUvs, toTransformLocalId } from "./builders";
import { EShapeBar } from "./e-shape-bar";

export class BuilderBar extends BuilderBase {
	protected pointsId: number;
	protected pointsStyle: EShapePointsStyle;

	constructor(buffer: BuilderBuffer, vertexOffset: number, indexOffset: number) {
		super(buffer, vertexOffset, indexOffset, BAR_VERTEX_COUNT, BAR_INDEX_COUNT);
		this.pointsId = -1;
		this.pointsStyle = EShapePointsStyle.NONE;
	}

	override init(): void {
		const voffset = this.vertexOffset;
		const ioffset = this.indexOffset;
		const buffer = this.buffer;
		buffer.updateClippings();
		buffer.updateIndices();
		buildBarClipping(buffer.clippings, voffset);
		buildBarIndex(buffer.indices, voffset, ioffset);
		this.inited |= BuilderFlag.CLIPPING_AND_INDEX;
	}

	override update(shape: EShape): void {
		const buffer = this.buffer;
		this.updateVertexStep(buffer, shape);
		this.updateColorFill(buffer, shape);
		this.updateColorStroke(buffer, shape);
		this.updateUv(buffer, shape);
	}

	protected updateVertexStep(buffer: BuilderBuffer, shape: EShape): void {
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

			const isNotInited = !(this.inited & BuilderFlag.VERTEX_STEP_AND_COLOR_FILL);

			if (
				isNotInited ||
				isSizeChanged ||
				isTransformChanged ||
				isStrokeWidthChanged ||
				isPointsIdChanged ||
				isPointsStyleChanged
			) {
				this.inited |= BuilderFlag.VERTEX_STEP_AND_COLOR_FILL;
				this.sizeX = sizeX;
				this.sizeY = sizeY;
				this.strokeWidth = strokeWidth;
				this.strokeStyle = strokeStyle;
				this.transformLocalId = transformLocalId;
				this.pointsId = pointsId;
				this.pointsStyle = pointsStyle;

				if (isPointsIdChanged) {
					// Invalidate the UV buffer
					this.inited &= ~BuilderFlag.UV;
				}

				buffer.updateVertices();
				buffer.updateSteps();
				buildBarVertexStep(
					buffer.vertices,
					buffer.steps,
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

	protected updateUv(buffer: BuilderBuffer, shape: EShape): void {
		const texture = toTexture(shape);
		const textureTransformId = toTextureTransformId(texture);
		const isNotInited = !(this.inited & BuilderFlag.UV);
		if (
			isNotInited ||
			texture !== this.texture ||
			textureTransformId !== this.textureTransformId
		) {
			this.inited |= BuilderFlag.UV;
			this.texture = texture;
			this.textureTransformId = textureTransformId;

			buffer.updateUvs();
			buildBarUv(buffer.uvs, this.vertexOffset, toTextureUvs(texture));
		}
	}
}

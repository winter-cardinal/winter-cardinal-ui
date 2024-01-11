/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { toPointsCount } from "./build-line";
import { buildLineOfAnyColor, toLineOfAnyPointCount } from "./build-line-of-any";
import { BuilderBuffer, BuilderFlag } from "./builder";
import { BuilderBase } from "./builder-base";
import { EShapeLineOfAnyPoints } from "./e-shape-line-of-any-points";

export abstract class BuilderLineOfAny extends BuilderBase {
	protected pointId: number;
	protected pointCount: number;
	protected pointCountReserved: number;
	protected pointSizeId: number;
	protected pointOffsetId: number;
	protected pointFillId: number;
	protected pointStrokeId: number;

	constructor(
		vertexOffset: number,
		indexOffset: number,
		vertexCount: number,
		indexCount: number,
		pointCountReserved: number
	) {
		super(vertexOffset, indexOffset, vertexCount, indexCount);
		this.pointId = -1;
		this.pointCount = 0;
		this.pointCountReserved = pointCountReserved;
		this.pointSizeId = -1;
		this.pointOffsetId = -1;
		this.pointFillId = -1;
		this.pointStrokeId = -1;
	}

	isCompatible(shape: EShape): boolean {
		const pointCount = toLineOfAnyPointCount(toPointsCount(shape.points));
		return pointCount === this.pointCountReserved;
	}

	protected updateLineOfAnyColorFill(
		buffer: BuilderBuffer,
		shape: EShape,
		points: EShapeLineOfAnyPoints,
		vcountPerPoint: number
	): void {
		const pointFill = points.fill;
		const pointFillId = pointFill.id;
		const isPointFillChanged = pointFillId !== this.pointFillId;

		const fill = shape.fill;
		const isFillEnabled = shape.visible && fill.enable;
		const colorFill = fill.color;
		const alphaFill = isFillEnabled ? fill.alpha : 0;
		const isFillChanged = colorFill !== this.colorFill || alphaFill !== this.alphaFill;

		if (isPointFillChanged || isFillChanged) {
			this.colorFill = colorFill;
			this.alphaFill = alphaFill;
			this.pointFillId = pointFillId;
			buffer.updateColorFills();
			buildLineOfAnyColor(
				this.vertexOffset,
				vcountPerPoint,
				pointFill,
				this.pointCountReserved,
				buffer.colorFills,
				isFillEnabled,
				colorFill,
				alphaFill
			);
		}
	}

	protected updateLineOfAnyColorStroke(
		buffer: BuilderBuffer,
		shape: EShape,
		points: EShapeLineOfAnyPoints,
		vcountPerPoint: number
	): void {
		const pointStroke = points.stroke;
		const pointStrokeId = pointStroke.id;
		const isPointStrokeChanged = pointStrokeId !== this.pointStrokeId;

		const stroke = shape.stroke;
		const isStrokeEnabled = shape.visible && stroke.enable;
		const colorStroke = stroke.color;
		const alphaStroke = isStrokeEnabled ? stroke.alpha : 0;
		const isStrokeChanged =
			colorStroke !== this.colorStroke || alphaStroke !== this.alphaStroke;

		const isNotInited = !(this.inited & BuilderFlag.COLOR_STROKE);

		if (isNotInited || isPointStrokeChanged || isStrokeChanged) {
			this.inited |= BuilderFlag.COLOR_STROKE;
			this.colorStroke = colorStroke;
			this.alphaStroke = alphaStroke;
			this.pointStrokeId = pointStrokeId;
			buffer.updateColorStrokes();
			buildLineOfAnyColor(
				this.vertexOffset,
				vcountPerPoint,
				pointStroke,
				this.pointCountReserved,
				buffer.colorStrokes,
				isStrokeEnabled,
				colorStroke,
				alphaStroke
			);
		}
	}
}

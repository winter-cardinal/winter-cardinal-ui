/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { buildLineOfAnyColor, toLineOfAnyPointCount } from "./build-line-of-any";
import { EShapeLineOfAnyPoints } from "./e-shape-line-of-any-points";
import { EShapeTextUploaded } from "./e-shape-text-uploaded";

export abstract class EShapeLineOfAnyUploaded extends EShapeTextUploaded {
	protected pointId: number;
	protected pointCount: number;
	protected pointCountReserved: number;
	protected pointSizeId: number;
	protected pointOffsetId: number;
	protected pointFillId: number;
	protected pointStrokeId: number;

	constructor(
		buffer: EShapeBuffer,
		voffset: number, ioffset: number,
		tvcount: number, ticount: number,
		vcount: number, icount: number,
		antialiasWeight: number,
		pointCountReserved: number
	) {
		super( buffer, voffset, ioffset, tvcount, ticount, vcount, icount, antialiasWeight );
		this.pointId = -1;
		this.pointCount = 0;
		this.pointCountReserved = pointCountReserved;
		this.pointSizeId = -1;
		this.pointOffsetId = -1;
		this.pointFillId = -1;
		this.pointStrokeId = -1;
	}

	isCompatible( shape: EShape ): boolean {
		if( super.isCompatible( shape ) ) {
			const points = shape.points;
			const pointCount = toLineOfAnyPointCount( points ? points.length : 0 );
			return pointCount === this.pointCountReserved;
		}
		return false;
	}

	protected updateLineOfAnyColorFill(
		buffer: EShapeBuffer, shape: EShape,
		points: EShapeLineOfAnyPoints, vcountPerPoint: number
	): void {
		const pointFill = points.fill;
		const pointFillId = pointFill.id;
		const isPointFillChanged = ( pointFillId !== this.pointFillId );

		const fill = shape.fill;
		const isFillEnabled = shape.visible && fill.enable;
		const colorFill = fill.color;
		const alphaFill = (isFillEnabled ? fill.alpha : 0);
		const isFillChanged = ( colorFill !== this.colorFill || alphaFill !== this.alphaFill );

		if( isPointFillChanged || isFillChanged ) {
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
		buffer: EShapeBuffer, shape: EShape,
		points: EShapeLineOfAnyPoints, vcountPerPoint: number
	): void {
		const pointStroke = points.stroke;
		const pointStrokeId = pointStroke.id;
		const isPointStrokeChanged = ( pointStrokeId !== this.pointStrokeId );

		const stroke = shape.stroke;
		const isStrokeEnabled = shape.visible && stroke.enable;
		const colorStroke = stroke.color;
		const alphaStroke = (isStrokeEnabled ? stroke.alpha : 0);
		const isStrokeChanged = ( colorStroke !== this.colorStroke || alphaStroke !== this.alphaStroke );

		if( isPointStrokeChanged || isStrokeChanged ) {
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

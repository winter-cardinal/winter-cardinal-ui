/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeCopyPart } from "../e-shape-copy-part";
import { EShapePointsStyle } from "../e-shape-points-style";
import { EShapeType } from "../e-shape-type";
import { EShapeLineBase } from "./e-shape-line-base";
import { EShapeLinePoints } from "./e-shape-line-points";

export class EShapeLine extends EShapeLineBase {
	protected declare _points: EShapeLinePoints;

	constructor(points: number[], segments: number[], width: number, style: EShapePointsStyle) {
		super(EShapeType.LINE);
		this.fill.enable = false;
		this.stroke.set(true, undefined, undefined, width);
		this._points = new EShapeLinePoints(this, points, segments, style);
		this.transform.position.copyFrom(this._points.position);
		this.size.copyFrom(this._points.size);
	}

	get points(): EShapeLinePoints {
		return this._points;
	}

	clone(): EShapeLine {
		const points = this.points;
		const result = new EShapeLine(
			points.values,
			points.segments,
			this.stroke.width,
			points.style
		);
		result.copy(this, EShapeCopyPart.ALL & ~EShapeCopyPart.POINTS);
		return result;
	}
}

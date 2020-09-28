/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapePointsStyle } from "../e-shape-points-style";
import { EShapeType } from "../e-shape-type";
import { EShapeLineBase } from "./e-shape-line-base";
import { EShapeLinePoints } from "./e-shape-line-points";

export class EShapeLine extends EShapeLineBase {
	protected declare _points: EShapeLinePoints;

	constructor( line: EShapeLine );
	constructor( points: number[], segments: number[], width: number, style: EShapePointsStyle );
	constructor(
		lineOrPoints: EShapeLine | number[],
		segments?: number[],
		width?: number,
		style?: EShapePointsStyle
	) {
		super( EShapeType.LINE );
		if( lineOrPoints instanceof EShapeLine ) {
			this.copy( lineOrPoints );
		} else {
			this.fill.enable = false;
			this.stroke.set( true, undefined, undefined, width! );
			this._points = new EShapeLinePoints( this, lineOrPoints, segments!, style! );
			this.transform.position.copyFrom( this._points.position );
			this.size.copyFrom( this._points.size );
		}
	}

	get points(): EShapeLinePoints {
		return this._points;
	}

	clone(): EShapeLine {
		return new EShapeLine( this );
	}
}

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
import {
	EShapePointsHitTester, EShapePointsHitThreshold,
	EShapePointsStyle, EShapePointsTestRange
} from "../e-shape-points";
import { EShapeType } from "../e-shape-type";
import { EShapeBase } from "./e-shape-base";
import { EShapeCircle } from "./e-shape-circle";
import { EShapeLinePoints } from "./e-shape-line-points";

type ContainsAbsBound = ( shape: unknown, x: number, y: number, p0x: number, p0y: number ) => boolean;

export class EShapeLineOfCircles extends EShapeCircle {
	points!: EShapeLinePoints;
	protected _containsAbsBound: ContainsAbsBound;

	constructor( other: EShapeLineOfCircles );
	constructor( points: number[] );
	constructor( otherOrPoints: EShapeLineOfCircles | number[] ) {
		super( EShapeType.LINE_OF_CIRCLES );
		if( otherOrPoints instanceof EShapeLineOfCircles ) {
			this.copy( otherOrPoints );
		} else {
			this.points = new EShapeLinePoints( this, otherOrPoints, [], EShapePointsStyle.NONE );
		}

		this._containsAbsBound = ( shape: unknown, x: number, y: number, p0x: number, p0y: number ): boolean => {
			return super.containsAbs( x, y, p0x, p0y );
		};
	}

	clone(): EShapeLineOfCircles {
		return new EShapeLineOfCircles( this );
	}

	containsAbs( x: number, y: number, ax: number, ay: number ): boolean {
		return this.points.calcHitPointAbs(
			this,
			x, y,
			ax, ay,
			1,
			null,
			null,
			this._containsAbsBound,
			null
		);
	}

	calcHitPoint<RESULT>(
		point: IPoint,
		threshold: EShapePointsHitThreshold | null,
		range: EShapePointsTestRange | null,
		tester: EShapePointsHitTester<RESULT>,
		testerResult: RESULT
	): boolean {
		const rect = this.toLocalRect( point, EShapeBase.WORK_RECT );
		return this.points.calcHitPointAbs(
			this,
			rect.x, rect.y,
			rect.width, rect.height,
			1,
			threshold,
			range,
			tester,
			testerResult
		);
	}
}

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
import { EShapePointsHitTester, EShapePointsTestRange, EShapePointsToHitThreshold } from "../e-shape-points";
import { EShapeType } from "../e-shape-type";
import { EShapeBase } from "./e-shape-base";
import { EShapeCircle } from "./e-shape-circle";
import { EShapeLineOfCirclesPoints } from "./e-shape-line-of-circles-points";

export class EShapeLineOfCircles extends EShapeCircle {
	points!: EShapeLineOfCirclesPoints;
	protected _tester: EShapePointsHitTester<unknown>;
	protected _testerBBox: EShapePointsHitTester<unknown>;

	constructor( other: EShapeLineOfCircles );
	constructor( points: number[] );
	constructor( otherOrPoints: EShapeLineOfCircles | number[] ) {
		super( EShapeType.LINE_OF_CIRCLES );
		if( otherOrPoints instanceof EShapeLineOfCircles ) {
			this.copy( otherOrPoints );
		} else {
			this.points = new EShapeLineOfCirclesPoints( this, otherOrPoints );
		}

		this._tester = ( x: number, y: number, ax: number, ay: number, px: number, py: number ): boolean => {
			return this.containsPointAbs( x, y, ax, ay, px, py );
		};

		this._testerBBox = ( x: number, y: number, ax: number, ay: number, px: number, py: number ): boolean => {
			return this.containsPointAbsBBox( x, y, ax, ay, px, py );
		};
	}

	clone(): EShapeLineOfCircles {
		return new EShapeLineOfCircles( this );
	}

	protected toHitThreshold(
		toThreshold: EShapePointsToHitThreshold | null
	): number {
		const stroke = this.stroke;
		const strokeWidth = ( stroke.enable ? stroke.width : 0 );
		return ( toThreshold ?
			toThreshold( strokeWidth, 1 ) :
			strokeWidth * 0.5
		);
	}

	containsAbs( x: number, y: number, ax: number, ay: number ): boolean {
		return this.points.calcHitPointAbs(
			x, y,
			ax, ay,
			this.toHitThreshold( null ),
			null,
			this._tester,
			null
		);
	}

	containsAbsBBox( x: number, y: number, ax: number, ay: number ): boolean {
		return this.points.calcHitPointAbs(
			x, y,
			ax, ay,
			this.toHitThreshold( null ),
			null,
			this._testerBBox,
			null
		);
	}

	containsPointAbs( x: number, y: number, ax: number, ay: number, px: number, py: number ): boolean {
		return super.containsAbs( x - px, y - py, ax, ay );
	}

	containsPointAbsBBox( x: number, y: number, ax: number, ay: number, px: number, py: number ): boolean {
		return super.containsAbsBBox( x - px, y - py, ax, ay );
	}

	calcHitPoint<RESULT>(
		point: IPoint,
		toThreshold: EShapePointsToHitThreshold | null,
		range: EShapePointsTestRange | null,
		tester: EShapePointsHitTester<RESULT> | null,
		result: RESULT
	): boolean {
		const rect = this.toLocalRect( point, EShapeBase.WORK_RECT );
		return this.points.calcHitPointAbs(
			rect.x, rect.y,
			rect.width, rect.height,
			this.toHitThreshold( toThreshold ),
			range,
			tester || this._tester,
			result
		);
	}
}

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
import { EShapeType } from "../e-shape-type";
import { EShapeBase } from "./e-shape-base";
import { EShapeCircle } from "./e-shape-circle";
import {
	EShapeLineOfAnyPoints, EShapeLineOfAnyPointsHitTester,
	EShapeLineOfAnyPointsTestRange, EShapeLineOfAnyPointsToHitThreshold
} from "./e-shape-line-of-any-points";

export class EShapeLineOfCircles extends EShapeCircle {
	points!: EShapeLineOfAnyPoints;
	protected _tester: EShapeLineOfAnyPointsHitTester<unknown>;
	protected _testerBBox: EShapeLineOfAnyPointsHitTester<unknown>;

	constructor( other: EShapeLineOfCircles );
	constructor( points: number[] );
	constructor( otherOrPoints: EShapeLineOfCircles | number[] ) {
		super( EShapeType.LINE_OF_CIRCLES );
		if( otherOrPoints instanceof EShapeLineOfCircles ) {
			this.copy( otherOrPoints );
		} else {
			this.points = new EShapeLineOfAnyPoints( this );
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
		toThreshold: EShapeLineOfAnyPointsToHitThreshold | null
	): number {
		const stroke = this.stroke;
		const size = this.points.size.getLimit() + ( stroke.enable ? stroke.width * stroke.align : 0 );
		return ( toThreshold ?
			toThreshold( size, 1 ) :
			size * 0.5
		);
	}

	containsAbs( x: number, y: number, ax: number, ay: number ): boolean {
		const threshold = this.toHitThreshold( null );
		if( super.containsAbsBBox( x, y, ax + threshold, ay + threshold ) ) {
			return this.points.calcHitPointAbs(
				x, y,
				threshold,
				null,
				this._tester,
				null
			);
		}
		return false;
	}

	containsPointAbs( x: number, y: number, ax: number, ay: number, px: number, py: number ): boolean {
		return super.containsAbs( x - px, y - py, ax, ay );
	}

	containsPointAbsBBox( x: number, y: number, ax: number, ay: number, px: number, py: number ): boolean {
		return super.containsAbsBBox( x - px, y - py, ax, ay );
	}

	calcHitPoint<RESULT>(
		point: IPoint,
		toThreshold: EShapeLineOfAnyPointsToHitThreshold | null,
		range: EShapeLineOfAnyPointsTestRange | null,
		tester: EShapeLineOfAnyPointsHitTester<RESULT> | null,
		result: RESULT
	): boolean {
		const rect = this.toLocalRect( point, EShapeBase.WORK_RECT );
		const threshold = this.toHitThreshold( toThreshold );
		if( super.containsAbsBBox( rect.x, rect.y, rect.width + threshold, rect.height + threshold ) ) {
			return this.points.calcHitPointAbs(
				rect.x, rect.y,
				threshold,
				range,
				tester || this._tester,
				result
			);
		}
		return false;
	}
}

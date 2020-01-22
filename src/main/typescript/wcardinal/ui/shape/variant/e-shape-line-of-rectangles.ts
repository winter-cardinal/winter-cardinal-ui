/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
import { EShapeType } from "../e-shape-type";
import { EShapeBase } from "./e-shape-base";
import { EShapeLineOfAny } from "./e-shape-line-of-any";
import {
	EShapeLineOfAnyPoints, EShapeLineOfAnyPointsHitTester,
	EShapeLineOfAnyPointsTestRange, EShapeLineOfAnyPointsToHitThreshold
} from "./e-shape-line-of-any-points";
import { EShapeRectangle } from "./e-shape-rectangle";
import { toHitThreshold } from "./to-hit-threshold";

export class EShapeLineOfRectangles extends EShapeRectangle implements EShapeLineOfAny {
	points!: EShapeLineOfAnyPoints;
	protected _tester: EShapeLineOfAnyPointsHitTester<unknown>;
	protected _testerBBox: EShapeLineOfAnyPointsHitTester<unknown>;

	constructor( other?: EShapeLineOfRectangles ) {
		super( EShapeType.LINE_OF_RECTANGLES );
		if( other ) {
			this.copy( other );
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

	clone(): EShapeLineOfRectangles {
		return new EShapeLineOfRectangles( this );
	}

	containsAbs( x: number, y: number, ax: number, ay: number ): boolean {
		const threshold = toHitThreshold( this, null );
		if( this.containsAbsBBox( x, y, ax + threshold, ay + threshold ) ) {
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
		const threshold = toHitThreshold( this, toThreshold );
		if( this.containsAbsBBox( rect.x, rect.y, rect.width + threshold, rect.height + threshold ) ) {
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

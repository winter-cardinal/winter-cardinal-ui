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
import { EShapeLineOfAnyPointsImpl } from "./e-shape-line-of-any-points-impl";
import { EShapeRectangle } from "./e-shape-rectangle";
import { toHitThreshold } from "./to-hit-threshold";

export class EShapeLineOfRectangles extends EShapeRectangle implements EShapeLineOfAny {
	protected declare _points: EShapeLineOfAnyPoints;
	protected _tester: EShapeLineOfAnyPointsHitTester<unknown>;
	protected _testerBBox: EShapeLineOfAnyPointsHitTester<unknown>;

	constructor() {
		super( EShapeType.LINE_OF_RECTANGLES );
		this._points = new EShapeLineOfAnyPointsImpl( this );

		this._tester = ( x, y, ax, ay, ox, oy, px, py ): boolean => {
			return this.containsPointAbs( x, y, ax, ay, ox, oy, px, py );
		};

		this._testerBBox = ( x, y, ax, ay, ox, oy, px, py ): boolean => {
			return this.containsPointAbsBBox( x, y, ax, ay, ox, oy, px, py );
		};
	}

	get points(): EShapeLineOfAnyPoints {
		return this._points;
	}

	clone(): EShapeLineOfRectangles {
		return new EShapeLineOfRectangles().copy( this );
	}

	containsAbs( x: number, y: number, ax: number, ay: number ): boolean {
		const threshold = toHitThreshold( this, null );
		if( this.containsAbsBBox( x, y, ax + threshold, ay + threshold ) ) {
			return this._points.calcHitPointAbs(
				x, y,
				threshold,
				null,
				this._tester,
				null
			);
		}
		return false;
	}

	containsPointAbs(
		x: number, y: number,
		ax: number, ay: number,
		ox: number, oy: number,
		px: number, py: number
	): boolean {
		return super.containsAbs( x - px - ox, y - py - oy, ax, ay );
	}

	containsPointAbsBBox(
		x: number, y: number,
		ax: number, ay: number,
		ox: number, oy: number,
		px: number, py: number
	): boolean {
		return super.containsAbsBBox( x - px - ox, y - py - oy, ax, ay );
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
			return this._points.calcHitPointAbs(
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

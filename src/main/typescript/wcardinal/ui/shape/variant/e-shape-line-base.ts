/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapePoints, EShapePointsStyle } from "../e-shape-points";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeBase } from "./e-shape-base";
import {
	EShapeLineBasePoints, EShapeLineBasePointsHitTester, EShapeLineBasePointsTestRange,
	EShapeLineBasePointsToHitThreshold
} from "./e-shape-line-base-points";
import { EShapePrimitive } from "./e-shape-primitive";
import { utilToHitThreshold } from "./util-to-hit-threshold";

export abstract class EShapeLineBase extends EShapePrimitive {
	protected static WORK_RANGE: [ number, number ] = [ 0, 0 ];
	abstract points: EShapeLineBasePoints;
	abstract clone(): EShapeLineBase;

	serialize( manager: EShapeResourceManagerSerialization ): DDiagramSerializedItem {
		const result = super.serialize( manager );
		result[ 15 ] = this.points.serialize( manager );
		return result;
	}

	protected getPixelScale(): number {
		const container = this.root.parent as any;
		if( container != null && container.getPixelScale != null ) {
			return container.getPixelScale();
		}
		return 1.0;
	}

	protected getStrokeWidthScale( points: EShapePoints ): number {
		const style = points.style;
		if( style & EShapePointsStyle.NON_EXPANDING_WIDTH ) {
			if( style & EShapePointsStyle.NON_SHRINKING_WIDTH ) {
				return this.getPixelScale();
			} else {
				return Math.min( 1.0, this.getPixelScale() );
			}
		} else {
			if( style & EShapePointsStyle.NON_SHRINKING_WIDTH ) {
				return Math.max( 1.0, this.getPixelScale() );
			} else {
				return 1.0;
			}
		}
	}

	protected toHitThreshold(
		toThreshold: EShapeLineBasePointsToHitThreshold | null
	): number {
		const stroke = this.stroke;
		const strokeWidth = ( stroke.enable ? stroke.width : 0 );
		const strokeScale = this.getStrokeWidthScale( this.points );
		return ( toThreshold ?
			toThreshold( strokeWidth, strokeScale ) :
			strokeWidth * strokeScale * 0.5
		);
	}

	containsAbs( x: number, y: number, ax: number, ay: number ): boolean {
		const points = this.points;
		const threshold = this.toHitThreshold( null );
		if( this.containsAbsBBox( x, y, ax + threshold, ay + threshold ) ) {
			return points.calcHitPointAbs(
				x, y,
				ax, ay,
				threshold,
				null,
				this.calcHitPointAbsHitTester,
				null
			);
		}
		return false;
	}

	calcHitPoint<RESULT>(
		point: IPoint,
		toHitThreshold: EShapeLineBasePointsToHitThreshold | null,
		range: EShapeLineBasePointsTestRange | null,
		tester: EShapeLineBasePointsHitTester<RESULT>,
		result: RESULT
	): boolean {
		const points = this.points;
		const threshold = this.toHitThreshold( toHitThreshold );
		const rect = this.toLocalRect( point, EShapeBase.WORK_RECT );
		if( this.containsAbsBBox( rect.x, rect.y, rect.width + threshold, rect.height + threshold ) ) {
			return points.calcHitPointAbs(
				rect.x, rect.y,
				rect.width, rect.height,
				threshold,
				range,
				tester,
				result
			);
		}
		return false;
	}

	protected calcHitPointAbsHitTester(
		this: unknown,
		x: number, y: number,
		p0x: number, p0y: number,
		p1x: number, p1y: number,
		index: number,
		threshold: number,
		result: unknown
	): boolean {
		// (x, y) = p0 + (p1 - p0) * t where 0 <= t <= 1
		// d0 := p1 - p0
		// d1 := v - p0
		// (p0.x + d0.x * t - x)^2 + (p0.y + d0.y * t - y)^2
		// (d0.x t - d1.x)^2 + (d0.y t - d1.y)^2
		// (d0.x^2 + d0.y^2) t^2 - 2 (d0.x * d1.x + d0.y * d1.y) t + (d1.x^2 + d1.y^2)
		// a := dot( d0, d0 )
		// b := dot( d0, d1 )
		// c := dot( d1, d1 )
		// a t^2 - 2 b t + c = a (t - b / a)^2 + c - b * b / a
		// t0 = b / a  min = c - b * b / a
		const d0x = p1x - p0x;
		const d0y = p1y - p0y;
		const d1x = x - p0x;
		const d1y = y - p0y;
		const a = d0x * d0x + d0y * d0y;
		const b = d0x * d1x + d0y * d1y;
		const c = d1x * d1x + d1y * d1y;
		if( 0.0001 < a ) {
			const t = Math.max( 0, Math.min( 1, b / a ) );
			const d = a * t * t - 2 * b * t + c;
			if( d < threshold * threshold ) {
				return true;
			}
		}
		return false;
	}
}

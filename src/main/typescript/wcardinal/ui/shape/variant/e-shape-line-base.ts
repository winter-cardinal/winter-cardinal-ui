/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { utilIndexOf } from "../../util/util-index-of";
import { EShapePoints, EShapePointsStyle } from "../e-shape-points";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeBase } from "./e-shape-base";
import { EShapePrimitive } from "./e-shape-primitive";

export type EShapeLinePointHitTester<RESULT> = (
	shape: EShapeLineBase,
	x: number, y: number,
	p0x: number, p0y: number,
	p1x: number, p1y: number,
	index: number,
	threshold: number,
	result: RESULT
) => boolean;

export abstract class EShapeLineBase extends EShapePrimitive {
	abstract points: EShapePoints;
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

	protected getStrokeWidthScaled( points: EShapePoints ): number {
		const stroke = this.stroke;
		return ( stroke.enable ? stroke.width * this.getStrokeWidthScale( points ) : 0 );
	}

	containsAbs( x: number, y: number, ax: number, ay: number ): boolean {
		return this.calcHitPointAbs( x, y, ax, ay, 1, 0, this.calcHitPointT, null );
	}

	calcHitPoint<RESULT>(
		point: IPoint,
		thresholdScale: number, thresholdMinimum: number,
		tester: EShapeLinePointHitTester<RESULT>,
		result: RESULT
	): boolean {
		const rect = this.toLocalRect( point, EShapeBase.WORK_RECT );
		return this.calcHitPointAbs(
			rect.x, rect.y,
			rect.width, rect.height,
			thresholdScale, thresholdMinimum,
			tester, result
		);
	}

	calcHitPointAbs<RESULT>(
		x: number, y: number,
		ax: number, ay: number,
		thresholdScale: number, thresholdMinimum: number,
		tester: EShapeLinePointHitTester<RESULT>,
		result: RESULT
	): boolean {
		const points = this.points;
		const threshold = Math.max( thresholdMinimum, this.getStrokeWidthScaled( points ) * 0.5 * thresholdScale );
		if( this.containsAbsBBox( x, y, ax + threshold, ay + threshold ) ) {
			const pointCount = points.length;
			if( 2 <= pointCount ) {
				const pointValues = points.values;
				const pointSegments = points.segments;
				for( let i = 0, imax = pointCount - 1, iv = 0; i < imax; i += 1, iv += 2 ) {
					if( utilIndexOf( pointSegments, i + 1 ) < 0 ) {
						const p0x = pointValues[ iv + 0 ];
						const p0y = pointValues[ iv + 1 ];
						const p1x = pointValues[ iv + 2 ];
						const p1y = pointValues[ iv + 3 ];
						if( tester( this, x, y, p0x, p0y, p1x, p1y, i, threshold, result ) ) {
							return true;
						}
					}
				}
				if( 2 < pointCount && (points.style & EShapePointsStyle.CLOSED) ) {
					if( utilIndexOf( pointSegments, 0 ) < 0 ) {
						const iv = (pointCount - 1) << 1;
						const p0x = pointValues[ iv + 0 ];
						const p0y = pointValues[ iv + 1 ];
						const p1x = pointValues[ 0 ];
						const p1y = pointValues[ 1 ];
						if( tester( this, x, y, p0x, p0y, p1x, p1y, pointCount - 1, threshold, result ) ) {
							return true;
						}
					}
				}
			}
		}
		return false;
	}

	protected calcHitPointT(
		this: unknown,
		shape: EShapeLineBase,
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

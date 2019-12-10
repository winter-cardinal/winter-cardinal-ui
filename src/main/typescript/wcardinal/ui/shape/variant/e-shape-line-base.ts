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
import { EShapeLineHitResult } from "./e-shape-line-hit-result";
import { EShapePrimitive } from "./e-shape-primitive";

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
		return ( 0 <= this.calcHitPointAbs( x, y, ax, ay, 1, 0 ) );
	}

	/**
	 * Returns a hit position or -1.
	 *
	 * @param point
	 */
	calcHitPoint( point: IPoint, thresholdScale: number, thresholdMinimum: number ): number {
		const rect = this.toLocalRect( point, EShapeBase.WORK_RECT );
		return this.calcHitPointAbs( rect.x, rect.y, rect.width, rect.height, thresholdScale, thresholdMinimum );
	}

	calcHitPointAbs(
		x: number, y: number,
		ax: number, ay: number,
		thresholdScale: number, thresholdMinimum: number
	): number {
		const points = this.points;
		const swh = Math.max( thresholdMinimum, this.getStrokeWidthScaled( points ) * 0.5 * thresholdScale );
		if( this.containsAbsBBox( x, y, ax + swh, ay + swh ) ) {
			const threshold = swh * swh;
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
						const t = this.calcHitPointT( x, y, p0x, p0y, p1x, p1y, threshold );
						if( 0 <= t ) {
							return i + t;
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
						const t = this.calcHitPointT( x, y, p0x, p0y, p1x, p1y, threshold );
						if( 0 <= t ) {
							const p = pointCount - 1 + t;
							if( pointCount <= p ) {
								return 0;
							}
							return p;
						}
					}
				}
			}
		}
		return -1;
	}

	calcHitX( point: IPoint, thresholdScale: number, thresholdMinimum: number, result: EShapeLineHitResult ): boolean {
		const rect = this.toLocalRect( point, EShapeBase.WORK_RECT );
		return this.calcHitXAbs( rect.x, rect.y, rect.width, rect.height, thresholdScale, thresholdMinimum, result );
	}

	calcHitXAbs(
		x: number, y: number,
		ax: number, ay: number,
		thresholdScale: number, thresholdMinimum: number,
		result: EShapeLineHitResult
	): boolean {
		const points = this.points;
		const swh = Math.max( thresholdMinimum, this.getStrokeWidthScaled( points ) * 0.5 * thresholdScale );
		if( this.containsAbsBBox( x, y, ax + swh, ay + swh ) ) {
			const threshold = swh;
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
						if( this.calcHitXAbsT( x, y, p0x, p0y, p1x, p1y, threshold, result ) ) {
							const position = this.transform.position;
							const px = position.x;
							const py = position.y;
							result.x += px;
							result.y += py;
							result.p0x = p0x + px;
							result.p0y = p0y + py;
							result.p1x = p1x + px;
							result.p1y = p1y + py;
							result.index = i;
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
						if( this.calcHitXAbsT( x, y, p0x, p0y, p1x, p1y, threshold, result ) ) {
							const position = this.transform.position;
							const px = position.x;
							const py = position.y;
							result.x += px;
							result.y += py;
							result.p0x = p0x + px;
							result.p0y = p0y + py;
							result.p1x = p1x + px;
							result.p1y = p1y + py;
							result.index = pointCount - 1;
							return true;
						}
					}
				}
			}
		}
		return false;
	}

	protected calcHitXAbsT(
		x: number, y: number,
		p0x: number, p0y: number,
		p1x: number, p1y: number,
		distance: number,
		result: EShapeLineHitResult
	): boolean {
		if( p0x <= x && x < p1x ) {
			const l = p1x - p0x;
			if( 0.0001 < Math.abs( l ) ) {
				const t = (x - p0x) / l;
				const py = p0y + t * (p1y - p0y);
				if( Math.abs(py - y) < distance ) {
					result.x = x;
					result.y = py;
					result.t = t;
					return true;
				}
			}
		}
		return false;
	}

	protected calcHitPointT(
		x: number, y: number,
		p0x: number, p0y: number,
		p1x: number, p1y: number,
		squaredDistance: number
	): number {
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
			const t0 = Math.max( 0, Math.min( 1, b / a ) );
			const d = a * t0 * t0 - 2 * b * t0 + c;
			if( d < squaredDistance ) {
				return t0;
			}
		}
		return -1;
	}
}

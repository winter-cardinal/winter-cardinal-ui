/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeCorner } from "../e-shape-corner";
import { EShapeType } from "../e-shape-type";
import { EShapeTriangle } from "./e-shape-triangle";

const FMIN = 0.00001;

export class EShapeTriangleRounded extends EShapeTriangle {
	constructor( type = EShapeType.TRIANGLE_ROUNDED ) {
		super( type );
	}

	clone(): EShapeTriangleRounded {
		return new EShapeTriangleRounded().copy( this );
	}

	protected containsCorner_( x: number, y: number, r: number, aw: number ) {
		const fill = this.fill;
		if( fill.enable ) {
			if( x * x + y * y <= r * r ) {
				return true;
			}
		} else {
			const stroke = this.stroke;
			const strokeWidth = stroke.width;
			if( stroke.enable && 0 < strokeWidth ) {
				const d = x * x + y * y;
				if( d <= r * r ) {
					const w = Math.max( 0.0, r * ( 1 - strokeWidth / aw ) );
					if( w * w <= d ) {
						return true;
					}
				}
			}
		}
	}

	protected containsCorner(
		x: number, y: number,
		x0: number, y0: number,
		x1: number, y1: number,
		x2: number, y2: number,
		x3: number, y3: number,
		r12: number, r13: number,
		aw: number,
		radius: number
	) {
		const xl = x1 + r12 * ( x2 - x1 ) - x0;
		const yl = y1 + r12 * ( y2 - y1 ) - y0;
		const n = Math.sqrt( xl * xl + yl * yl );
		if( FMIN < n ) {
			const ni = 1 / n;
			const nlx = xl * ni;
			const nly = yl * ni;

			const xr = x1 + r13 * ( x3 - x1 ) - x0;
			const yr = y1 + r13 * ( y3 - y1 ) - y0;
			const nrx = xr * ni;
			const nry = yr * ni;

			const det = nlx * nry - nrx * nly;
			if( FMIN < Math.abs( det ) ) {
				const deti = 1 / det;
				const xc = x - x0;
				const yc = y - y0;
				const dx = ( +nry * xc - nrx * yc ) * deti;
				const dy = ( -nly * xc + nlx * yc ) * deti;
				if( this.containsCorner_( dx, dy, n, aw * radius ) ) {
					return true;
				}
			}
		}
	}

	containsAbs( x: number, y: number, ax: number, ay: number ) {
		if( super.containsAbsBBox( x, y, ax, ay ) ) {
			const a = 2 * ay / ax;
			if( this.containsAbs_( x, y, a, -ay, +ay ) ) {
				const az = Math.sqrt( ax * ax + 4 * ay * ay );
				const aw = 2 * ax * ay / (ax + az);
				const radius = this.radius;

				const x0 = 0;
				const y0 = ay - aw;
				const x1 = 0;
				const y1 = -ay;
				const x4 = +ax;
				const y4 = +ay;
				const x7 = -x4;
				const y7 = +y4;
				const x10 = x1 + radius * ( x0 - x1 );
				const y10 = y1 + radius * ( y0 - y1 );
				const x11 = x4 + radius * ( x0 - x4 );
				const y11 = y4 + radius * ( y0 - y4 );
				const y12 = +y11;
				const x12 = -x11;

				const c0 = -a * x + y10 - y <= 0;
				const c1 = +a * x + y10 - y <= 0;
				const c2 = y <= y11;
				const corner = this.corner;
				if( ! c0 && ! c1 && (corner & EShapeCorner.TOP) ) {
					// Top corner
					const rz = ( 0.5 * ( az - aw ) * radius ) / ( az );
					if( this.containsCorner( x, y, x10, y10, x1, y1, x7, y7, x4, y4, rz, rz, aw, radius ) ) {
						return true;
					}
				} else if( ! c0 && ! c2 && (corner & EShapeCorner.BOTTOM_LEFT) ) {
					// Bottom-left corner
					const ry = ( aw * radius ) / ( 2 * ay );
					const rx = ( ry * az ) / ( 2 * ax );
					if( this.containsCorner( x, y, x12, y12, x7, y7, x4, y4, x1, y1, rx, ry, aw, radius ) ) {
						return true;
					}
				} else if( ! c1 && ! c2 && (corner & EShapeCorner.BOTTOM_RIGHT) ) {
					// Bottom-right corner
					const ry = ( aw * radius ) / ( 2 * ay );
					const rx = ( ry * az ) / ( 2 * ax );
					if( this.containsCorner( x, y, x11, y11, x4, y4, x1, y1, x7, y7, ry, rx, aw, radius ) ) {
						return true;
					}
				} else {
					// Others
					const fill = this.fill;
					if( fill.enable ) {
						return true;
					} else {
						const stroke = this.stroke;
						const strokeWidth = stroke.width;
						if( stroke.enable && 0 < strokeWidth ) {
							const cy = ay - aw;
							const ay1 = cy + (-ay - cy) * Math.max( 0.0, aw - strokeWidth ) / aw;
							const ay2 = ay - strokeWidth;
							if( ! this.containsAbs_( x, y, a, ay1, ay2 ) ) {
								return true;
							}
						}
					}
				}
			}
		}
		return false;
	}
}

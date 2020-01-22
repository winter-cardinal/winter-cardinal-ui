/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeCorner } from "../e-shape-corner";
import { EShapeStrokeSide } from "../e-shape-stroke-side";
import { EShapeType } from "../e-shape-type";
import { EShapePrimitive } from "./e-shape-primitive";

export class EShapeRectangleRounded extends EShapePrimitive {
	constructor( type = EShapeType.RECTANGLE_ROUNDED ) {
		super( type );
	}

	clone(): EShapeRectangleRounded {
		return new EShapeRectangleRounded().copy( this );
	}

	private containsAbs_( x: number, y: number, ax: number, ay: number, r: number, corner: EShapeCorner ): boolean {
		const bx0 = -ax + r;
		if( x <= bx0 ) {
			const by0 = -ay + r;
			if( y <= by0 && (corner & EShapeCorner.TOP_LEFT) ) {
				// Top-left corner
				const dx = x - bx0;
				const dy = y - by0;
				return dx * dx + dy * dy <= r * r;
			} else {
				const by1 = +ay - r;
				if( by1 <= y && (corner & EShapeCorner.BOTTOM_LEFT) ) {
					// Bottom-left corner
					const dx = x - bx0;
					const dy = y - by1;
					return dx * dx + dy * dy <= r * r;
				} else {
					// Middle-left box
					return -ax <= x;
				}
			}
		} else {
			const bx1 = +ax - r;
			if( bx1 <= x ) {
				const by0 = -ay + r;
				if( y <= by0 && (corner & EShapeCorner.TOP_RIGHT) ) {
					// Top-right corner
					const dx = x - bx1;
					const dy = y - by0;
					return dx * dx + dy * dy <= r * r;
				} else {
					const by1 = +ay - r;
					if( by1 <= y && (corner & EShapeCorner.BOTTOM_RIGHT) ) {
						// Bottom-right corner
						const dx = x - bx1;
						const dy = y - by1;
						return dx * dx + dy * dy <= r * r;
					} else {
						// Middle-right box
						return x <= +ax;
					}
				}
			} else {
				return -ay <= y && y <= +ay;
			}
		}
	}

	containsAbs( x: number, y: number, ax: number, ay: number ): boolean {
		if( super.containsAbsBBox( x, y, ax, ay ) ) {
			const fill = this.fill;
			const stroke = this.stroke;
			const strokeWidth = ( stroke.enable ? stroke.width : 0 );
			if( fill.enable || 0 < strokeWidth ) {
				const r = this.radius * Math.min( ax, ay );
				const corner = this.corner;
				const strokeSide = stroke.side;
				if( this.containsAbs_( x, y, ax, ay, r, corner ) ) {
					if( fill.enable ) {
						return true;
					} else {
						const wx = Math.max( 0.0, ax - strokeWidth );
						const wy = Math.max( 0.0, ay - strokeWidth );
						const wr = Math.max( 0.0, r - strokeWidth );
						if( ! this.containsAbs_( x, y, wx, wy, wr, corner ) ) {
							if( strokeSide === EShapeStrokeSide.ALL ) {
								return true;
							} else {
								if( x <= -wx + wr ) {
									const hasLeftSide = ( strokeSide & EShapeStrokeSide.LEFT ) !== 0;
									if( y <= -wy + wr ) {
										const hasTopSide = ( strokeSide & EShapeStrokeSide.TOP );
										if( hasTopSide && hasLeftSide ) {
											return true;
										} else if( hasTopSide ) {
											return -wx <= y;
										} else if( hasLeftSide ) {
											return x <= -wx;
										} else {
											return false;
										}
									} else if( +wy - wr <= y ) {
										const hasBottomSide = ( strokeSide & EShapeStrokeSide.BOTTOM );
										if( hasBottomSide && hasLeftSide ) {
											return true;
										} else if( hasBottomSide ) {
											return +wx <= y;
										} else if( hasLeftSide ) {
											return x <= -wx;
										} else {
											return false;
										}
									} else {
										return hasLeftSide;
									}
								} else if( +wx - wr <= x ) {
									const hasRightSide = ( strokeSide & EShapeStrokeSide.RIGHT ) !== 0;
									if( y <= -wy + wr ) {
										const hasTopSide = ( strokeSide & EShapeStrokeSide.TOP );
										if( hasTopSide && hasRightSide ) {
											return true;
										} else if( hasTopSide ) {
											return -wx <= y;
										} else if( hasRightSide ) {
											return +wx <= x;
										} else {
											return false;
										}
									} else if( +wy - wr <= y ) {
										const hasBottomSide = ( strokeSide & EShapeStrokeSide.BOTTOM );
										if( hasBottomSide && hasRightSide ) {
											return true;
										} else if( hasBottomSide ) {
											return +wx <= y;
										} else if( hasRightSide ) {
											return +wx <= x;
										} else {
											return false;
										}
									} else {
										return hasRightSide;
									}
								} else {
									if( y <= -wy + wr ) {
										return ( strokeSide & EShapeStrokeSide.TOP ) !== 0;
									} else if( +wy - wr <= y ) {
										return ( strokeSide & EShapeStrokeSide.BOTTOM ) !== 0;
									} else {
										return false;
									}
								}
							}
						}
					}
				}
			}
		}
		return false;
	}
}

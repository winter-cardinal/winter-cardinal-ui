/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export class UtilHsv {
	static fromRgb( color: number ): [ number, number, number ] {
		const r = (color & 0xff0000) >> 16;
		const g = (color & 0x00ff00) >> 8;
		const b = (color & 0x0000ff) | 0;

		const max = Math.max( r, g, b );
		const min = Math.min( r, g, b );
		const length = max - min;
		let h = 0;
		if( 0 < length ) {
			if( r === max ) {
				h = 60 * ( g - b ) / length;
			} else if( g === max ) {
				h = 60 * ( b - r ) / length + 120;
			} else if( b === max ) {
				h = 60 * ( r - g ) / length + 240;
			}
			if( h < 0 ) {
				h += 360;
			}
		}

		const s = ( length / max ) * 255;
		const v = max;
		return [ h, s, v ];
	}

	static toRgb( h: number, s: number, v: number ): number {
		const max = v;
		const min = v - (s / 255) * v;
		const length = max - min;

		let r = 0;
		let g = 0;
		let b = 0;
		if( h <= 60 ) {
			r = max;
			g = (h / 60) * length + min;
			b = min;
		} else if( h <= 120 ) {
			r = ((120 - h) / 60) * length + min;
			g = max;
			b = min;
		} else if( h <= 180 ) {
			r = min;
			g = max;
			b = ((h - 120) / 60) * length + min;
		} else if( h <= 240 ) {
			r = min;
			g = ((240 - h) / 60) * length + min;
			b = max;
		} else if( h <= 300 ) {
			r = ((h - 240) / 60) * length + min;
			g = min;
			b = max;
		} else {
			r = max;
			g = min;
			b = ((360 - h) / 60) * length + min;
		}

		r = Math.max( 0, Math.min( 255, r ) );
		g = Math.max( 0, Math.min( 255, g ) );
		b = Math.max( 0, Math.min( 255, b ) );

		return (r << 16) | (g << 8) | b;
	}
}

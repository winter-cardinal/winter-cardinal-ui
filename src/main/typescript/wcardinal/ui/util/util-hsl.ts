/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export class UtilHsl {
	/**
	 * Returns HSL colors.
	 * Ranges of components are:
	 *
	 * * H: [0, 360)
	 * * S: [0, 255]
	 * * L: [0, 255]
	 *
	 * @param color a rgb color
	 * @return an array of hsl components
	 */
	static fromRgb(color: number): [number, number, number] {
		const r = (color & 0xff0000) >> 16;
		const g = (color & 0x00ff00) >> 8;
		const b = (color & 0x0000ff) | 0;

		const max = Math.max(r, g, b);
		const min = Math.min(r, g, b);
		const length = max - min;
		let h = 0;
		if (0 < length) {
			if (r === max) {
				h = (60 * (g - b)) / length;
			} else if (g === max) {
				h = (60 * (b - r)) / length + 120;
			} else if (b === max) {
				h = (60 * (r - g)) / length + 240;
			}
			if (h < 0) {
				h += 360;
			}
		}

		const l = 0.5 * (max + min);
		const lp = l <= 128 ? l : 255 - l;
		const sp = 0 < lp ? (0.5 * length) / lp : 0;
		const s = 255 * sp;

		return [h, s, l];
	}

	static toRgb(h: number, s: number, l: number): number {
		const lp = l < 128 ? l : 255 - l;
		const sp = s / 255;
		const max = l + lp * sp;
		const min = l - lp * sp;
		const length = max - min;

		let r = 0;
		let g = 0;
		let b = 0;
		if (h <= 60) {
			r = max;
			g = (h / 60) * length + min;
			b = min;
		} else if (h <= 120) {
			r = ((120 - h) / 60) * length + min;
			g = max;
			b = min;
		} else if (h <= 180) {
			r = min;
			g = max;
			b = ((h - 120) / 60) * length + min;
		} else if (h <= 240) {
			r = min;
			g = ((240 - h) / 60) * length + min;
			b = max;
		} else if (h <= 300) {
			r = ((h - 240) / 60) * length + min;
			g = min;
			b = max;
		} else {
			r = max;
			g = min;
			b = ((360 - h) / 60) * length + min;
		}

		r = Math.max(0, Math.min(255, r));
		g = Math.max(0, Math.min(255, g));
		b = Math.max(0, Math.min(255, b));

		return (r << 16) | (g << 8) | b;
	}
}

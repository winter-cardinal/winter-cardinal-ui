/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { toPadded } from "./to-padded";

export class UtilRgb {
	static toCode(color: number): string {
		return toPadded(color.toString(16).toUpperCase(), 6, "0");
	}

	static fromCode(code: string): number | null {
		const trimmed = code.trim().toLowerCase();
		if (trimmed.length === 6) {
			const color = Number(`0x${trimmed}`);
			if (color === color) {
				return color;
			}
		}
		return null;
	}

	static fromRgb(r: number, g: number, b: number): number {
		return ((r * 0xff) << 16) | ((g * 0xff) << 8) | ((b * 0xff) | 0);
	}

	static blend(colorA: number, colorB: number, t: number): number {
		const ar = (colorA >> 16) & 0xff;
		const ag = (colorA >> 8) & 0xff;
		const ab = (colorA | 0) & 0xff;

		const br = (colorB >> 16) & 0xff;
		const bg = (colorB >> 8) & 0xff;
		const bb = (colorB | 0) & 0xff;

		const w1 = Math.max(0, Math.min(1, t));
		const w0 = 1 - w1;
		const cr = Math.max(0, Math.min(0xff, ar * w0 + br * w1));
		const cg = Math.max(0, Math.min(0xff, ag * w0 + bg * w1));
		const cb = Math.max(0, Math.min(0xff, ab * w0 + bb * w1));

		return (cr << 16) | (cg << 8) | (cb | 0);
	}

	static brighten(color: number, amount: number): number {
		if (0 <= amount) {
			return this.blend(color, 0xffffff, amount);
		} else {
			return this.blend(color, 0x000000, -amount);
		}
	}

	static darken(color: number, amount: number): number {
		if (0 <= amount) {
			return this.blend(color, 0x000000, amount);
		} else {
			return this.blend(color, 0xffffff, -amount);
		}
	}

	/**
	 * Convertes the given color to a grayscale color.
	 *
	 * @param color a color to be converted
	 * @returns a grayscale color
	 * @see https://en.wikipedia.org/wiki/Grayscale
	 */
	static toGrayscale(color: number): number {
		const l = this.toLuma(color);
		return (l << 16) | (l << 8) | l;
	}

	/**
	 * Convertes the given color to a luma in the range [0, 255].
	 *
	 * @param color a color to be converted
	 * @returns a luma in the range [0, 255]
	 * @see https://en.wikipedia.org/wiki/Grayscale
	 */
	static toLuma(color: number): number {
		const r = (color >> 16) & 0xff;
		const g = (color >> 8) & 0xff;
		const b = (color | 0) & 0xff;
		return (0.2126 * r + 0.7152 * g + 0.0722 * b) & 0xff;
	}
}

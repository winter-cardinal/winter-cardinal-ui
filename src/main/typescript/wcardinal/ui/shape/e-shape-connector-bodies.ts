/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export class EShapeConnectorBodies {
	static from(values: number[], tailMargin: number, headMargin: number): number[] {
		const result: number[] = [];
		const length = values.length;
		if (4 < length) {
			const threshold = 0.000001;

			let x0 = values[0];
			let y0 = values[1];
			if (tailMargin !== 0) {
				const ex = x0 - values[2];
				const ey = y0 - values[3];
				const n = ex * ex + ey * ey;
				if (threshold < n) {
					const f = tailMargin / Math.sqrt(n);
					x0 += ex * f;
					y0 += ey * f;
				}
			}

			let x1 = values[length - 2];
			let y1 = values[length - 1];
			if (headMargin !== 0) {
				const ex = x1 - values[length - 4];
				const ey = y1 - values[length - 3];
				const n = ex * ex + ey * ey;
				if (threshold < n) {
					const f = headMargin / Math.sqrt(n);
					x1 += ex * f;
					y1 += ey * f;
				}
			}

			const cx = (x1 + x0) * 0.5;
			const cy = (y1 + y0) * 0.5;
			const dx = x1 - x0;
			const dy = y1 - y0;
			const a = Math.atan2(dy, dx);
			const c = Math.cos(a);
			const s = Math.sin(a);
			const l = dx * dx + dy * dy;
			const m = threshold < l ? 1 / Math.sqrt(l) : 1;
			for (let i = 2, imax = length - 2; i < imax; i += 2) {
				const x = values[i + 0] - cx;
				const y = values[i + 1] - cy;
				result.push((c * x + s * y) * m, (c * y - s * x) * m);
			}
		}
		return result;
	}
}

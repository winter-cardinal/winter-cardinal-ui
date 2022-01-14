/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export class EShapeConnectorBodies {
	static from(values: number[]): number[] {
		const result: number[] = [];
		const length = values.length;
		if (4 < length) {
			const x0 = values[0];
			const y0 = values[1];
			const x1 = values[length - 2];
			const y1 = values[length - 1];
			const cx = (x1 + x0) * 0.5;
			const cy = (y1 + y0) * 0.5;
			const dx = x1 - x0;
			const dy = y1 - y0;
			const a = Math.atan2(dy, dx);
			const c = Math.cos(a);
			const s = Math.sin(a);
			const l = dx * dx + dy * dy;
			const m = 0.000001 < l ? 1 / Math.sqrt(l) : 1;
			for (let i = 2, imax = length - 2; i < imax; i += 2) {
				const x = values[i + 0] - cx;
				const y = values[i + 1] - cy;
				result.push((c * x - s * y) * m, (c * y + s * x) * m);
			}
		}
		return result;
	}
}

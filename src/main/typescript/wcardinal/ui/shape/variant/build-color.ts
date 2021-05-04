/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const buildColor = (
	color: number,
	alpha: number,
	voffset: number,
	vcount: number,
	colors: Float32Array
): void => {
	const r = (((color >> 16) & 0xff) / 255.0) * alpha;
	const g = (((color >> 8) & 0xff) / 255.0) * alpha;
	const b = (((color >> 0) & 0xff) / 255.0) * alpha;
	const a = alpha;

	let ic = (voffset << 2) - 1;
	for (let i = 0; i < vcount; ++i) {
		colors[++ic] = r;
		colors[++ic] = g;
		colors[++ic] = b;
		colors[++ic] = a;
	}
};

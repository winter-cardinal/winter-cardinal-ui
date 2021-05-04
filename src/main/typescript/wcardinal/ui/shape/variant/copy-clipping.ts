/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const copyClipping = (
	clippings: Float32Array,
	voffset: number,
	vcountPerPoint: number,
	pointCount: number
): void => {
	let iv = voffset + vcountPerPoint;
	for (let i = 1; i < pointCount; ++i) {
		let icd = iv * 3 - 1;
		let ics = voffset * 3 - 1;
		for (let j = 0; j < vcountPerPoint; ++j) {
			clippings[++icd] = clippings[++ics];
			clippings[++icd] = clippings[++ics];
			clippings[++icd] = clippings[++ics];
		}
		iv += vcountPerPoint;
	}
};

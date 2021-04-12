/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const copyUvs = (
	uvs: Float32Array,
	voffset: number,
	vcountPerPoint: number,
	pointCount: number
): void => {
	let iv = voffset + vcountPerPoint;
	for (let i = 1; i < pointCount; ++i) {
		let iuvd = iv << 1;
		let iuvs = voffset << 1;
		for (let j = 0; j < vcountPerPoint; ++j) {
			uvs[iuvd] = uvs[iuvs];
			uvs[iuvd + 1] = uvs[iuvs + 1];
			iuvd += 2;
			iuvs += 2;
		}
		iv += vcountPerPoint;
	}
};

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const copyIndex = (
	indices: Uint16Array | Uint32Array | number[],
	vcountPerPoint: number,
	ioffset: number,
	icountPerPoint: number,
	pointCount: number
): void => {
	let idiv = vcountPerPoint;
	let ii = ioffset + icountPerPoint;
	for (let i = 1; i < pointCount; ++i) {
		let iid = ii * 3 - 1;
		let iis = ioffset * 3 - 1;
		for (let j = 0; j < icountPerPoint; ++j) {
			indices[++iid] = indices[++iis] + idiv;
			indices[++iid] = indices[++iis] + idiv;
			indices[++iid] = indices[++iis] + idiv;
		}
		idiv += vcountPerPoint;
		ii += icountPerPoint;
	}
};

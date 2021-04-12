/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const copyStep = (
	steps: Float32Array,
	voffset: number,
	vcountPerPoint: number,
	pointCount: number
): void => {
	const iss0 = voffset * 6;
	let isd = (voffset + vcountPerPoint) * 6;
	for (let i = 1; i < pointCount; ++i) {
		let iss = iss0;
		for (let j = 0; j < vcountPerPoint; ++j) {
			steps[isd + 0] = steps[iss + 0];
			steps[isd + 1] = steps[iss + 1];
			steps[isd + 2] = steps[iss + 2];
			steps[isd + 3] = steps[iss + 3];
			steps[isd + 4] = steps[iss + 4];
			steps[isd + 5] = steps[iss + 5];
			isd += 6;
			iss += 6;
		}
	}
};

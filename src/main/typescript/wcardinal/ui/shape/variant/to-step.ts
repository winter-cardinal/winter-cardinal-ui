/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const STEP_VALUES: [number, number, number] = [0, 0, 0];

export const toStep = (
	size: number,
	strokeWidth: number,
	antialiasWeight: number,
	result: [number, number, number]
): [number, number, number] => {
	const FMIN: number = 0.00001;
	if (FMIN < strokeWidth) {
		const dpc0 = size - strokeWidth;
		if (FMIN < dpc0) {
			const pc0 = antialiasWeight / dpc0;
			const pc1 = antialiasWeight / Math.max(FMIN, size);
			const swc = 1 / Math.max(FMIN, 1 - strokeWidth / size);
			result[0] = swc;
			result[1] = pc0;
			result[2] = pc1;
		} else {
			const pc0 = antialiasWeight / FMIN;
			const pc1 = antialiasWeight / Math.max(FMIN, size);
			const swc = 1 / FMIN;
			result[0] = swc;
			result[1] = pc0;
			result[2] = pc1;
		}
	} else {
		// Assumes strokeWidth === 0
		const pc = antialiasWeight / Math.max(FMIN, size);
		result[0] = 1;
		result[1] = pc;
		result[2] = pc;
	}
	return result;
};

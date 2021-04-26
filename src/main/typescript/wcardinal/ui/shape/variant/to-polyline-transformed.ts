/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Matrix } from "pixi.js";

let WORK_TRANSFORMED: number[] | undefined;

export const toPolylineTransformed = (
	pointValues: number[],
	pointCount: number,
	matrix: Matrix
): number[] => {
	let result = WORK_TRANSFORMED;
	if (result == null) {
		result = [];
		WORK_TRANSFORMED = result;
	}
	const a = matrix.a;
	const b = matrix.b;
	const c = matrix.c;
	const d = matrix.d;
	const tx = matrix.tx;
	const ty = matrix.ty;

	for (let i = 0; i < pointCount; ++i) {
		const index = i << 1;
		const x = pointValues[index];
		const y = pointValues[index + 1];
		result[index] = a * x + c * y + tx;
		result[index + 1] = b * x + d * y + ty;
	}
	return result;
};

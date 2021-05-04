/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Matrix } from "pixi.js";

let WORK_TRANSFORMED: number[] | undefined;

export const toPolylineTransformed = (
	vertices: number[],
	vertexCount: number,
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

	for (let i = 0; i < vertexCount; ++i) {
		const index = i << 1;
		const x = vertices[index];
		const y = vertices[index + 1];
		result[index] = a * x + c * y + tx;
		result[index + 1] = b * x + d * y + ty;
	}
	return result;
};

let WORK_NORMALS: number[] | undefined;

export const toPolylineNormal = (vertices: number[], vertexCount: number): number[] => {
	let result = WORK_NORMALS;
	if (result == null) {
		result = [];
		WORK_NORMALS = result;
	}
	let x1 = vertices[0];
	let y1 = vertices[1];
	for (let i = 0, imax = vertexCount; i < imax; ++i) {
		const index0 = (i + 1) % vertexCount << 1;
		const x2 = vertices[index0];
		const y2 = vertices[index0 + 1];
		const dx = x2 - x1;
		const dy = y2 - y1;
		const index1 = i << 1;
		result[index1] = dy;
		result[index1 + 1] = -dx;
		x1 = x2;
		y1 = y2;
	}
	return result;
};

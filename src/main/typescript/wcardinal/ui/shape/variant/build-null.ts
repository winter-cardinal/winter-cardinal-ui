/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const buildNull = (
	buffer: Float32Array | Uint16Array | Uint32Array | number[],
	voffset: number,
	vcount: number,
	stride: number,
	value: number
): void => {
	let i = voffset * stride - 1;
	const imax = (voffset + vcount) * stride - 1;
	for (; i < imax; ) {
		buffer[++i] = value;
	}
};

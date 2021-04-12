/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const toIndexOf = <V>(array: V[], value: V): number => {
	let i0 = 0;
	let i1 = array.length - 1;

	while (i0 <= i1) {
		const i2 = i0 + ((i1 - i0) >> 1);
		const v2 = array[i2];
		if (value < v2) {
			i1 = i2 - 1;
		} else if (v2 < value) {
			i0 = i2 + 1;
		} else {
			return i2;
		}
	}

	return -1;
};

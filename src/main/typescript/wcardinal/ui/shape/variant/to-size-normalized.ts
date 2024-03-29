/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const toSizeNormalized = (size: number): number => {
	const THRESHOLD = 0.001;
	if (Math.abs(size) < THRESHOLD) {
		return size < 0 ? -THRESHOLD : +THRESHOLD;
	}
	return size;
};

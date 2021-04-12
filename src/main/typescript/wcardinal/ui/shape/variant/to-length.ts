/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const toLength = (p0x: number, p0y: number, p1x: number, p1y: number): number => {
	const dx01 = p1x - p0x;
	const dy01 = p1y - p0y;
	return Math.sqrt(dx01 * dx01 + dy01 * dy01);
};

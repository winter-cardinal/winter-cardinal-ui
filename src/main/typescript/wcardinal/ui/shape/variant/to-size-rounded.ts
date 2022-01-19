/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const toSizeRounded = (value: number): number => {
	return Math.round(value * 100) / 100;
};

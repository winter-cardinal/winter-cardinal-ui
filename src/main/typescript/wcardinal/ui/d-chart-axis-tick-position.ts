/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const DChartAxisTickPosition = {
	INSIDE: 0,
	OUTSIDE: 1
} as const;

export type DChartAxisTickPosition =
	(typeof DChartAxisTickPosition)[keyof typeof DChartAxisTickPosition];

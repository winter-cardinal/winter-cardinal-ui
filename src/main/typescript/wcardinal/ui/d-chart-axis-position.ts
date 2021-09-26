/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const DChartAxisPosition = {
	TOP: 0,
	BOTTOM: 1,
	LEFT: 2,
	RIGHT: 3
} as const;

export type DChartAxisPosition = typeof DChartAxisPosition[keyof typeof DChartAxisPosition];

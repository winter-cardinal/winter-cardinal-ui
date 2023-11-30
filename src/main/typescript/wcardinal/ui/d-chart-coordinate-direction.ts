/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const DChartCoordinateDirection = {
	X: 0,
	Y: 1
} as const;

export type DChartCoordinateDirection =
	(typeof DChartCoordinateDirection)[keyof typeof DChartCoordinateDirection];

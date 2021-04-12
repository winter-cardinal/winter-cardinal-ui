/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { UtilRgb } from "./util/util-rgb";

const DCHART_COLOR_SET_1 = [0x10b7e3, 0xfe5420, 0xf0c312, 0x1c5d71];

const DCHART_COLOR_SET_2 = [
	DCHART_COLOR_SET_1[0],
	UtilRgb.brighten(DCHART_COLOR_SET_1[0], 0.4),

	DCHART_COLOR_SET_1[1],
	UtilRgb.brighten(DCHART_COLOR_SET_1[1], 0.4),

	DCHART_COLOR_SET_1[2],
	UtilRgb.brighten(DCHART_COLOR_SET_1[2], 0.4),

	DCHART_COLOR_SET_1[3],
	UtilRgb.brighten(DCHART_COLOR_SET_1[3], 0.4)
];

export const DChartColorSet1 = (index: number): number => {
	return DCHART_COLOR_SET_1[index % DCHART_COLOR_SET_1.length];
};

export const DChartColorSet2 = (index: number): number => {
	return DCHART_COLOR_SET_2[index % DCHART_COLOR_SET_2.length];
};

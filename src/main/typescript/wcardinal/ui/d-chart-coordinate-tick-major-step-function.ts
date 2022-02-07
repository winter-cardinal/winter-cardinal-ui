/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export type DChartCoordinateTickMajorStepFunction = (
	domainMin: number,
	domainMax: number,
	majorCount: number
) => number;

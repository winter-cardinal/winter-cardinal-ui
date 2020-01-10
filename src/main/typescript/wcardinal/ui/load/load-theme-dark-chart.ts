/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkChartAxisX } from "../theme/dark/d-theme-dark-chart-axis-x";
import { DThemeDarkChartAxisXDatetime } from "../theme/dark/d-theme-dark-chart-axis-x-datetime";
import { DThemeDarkChartAxisY } from "../theme/dark/d-theme-dark-chart-axis-y";

export const loadThemeDarkChart = () => {
	DThemeDark.set( "DChartAxisX", DThemeDarkChartAxisX );
	DThemeDark.set( "DChartAxisXDatetime", DThemeDarkChartAxisXDatetime );
	DThemeDark.set( "DChartAxisY", DThemeDarkChartAxisY );
};

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapePointsStyle } from "./shape/e-shape-points";
import { EShapePointsStyleOption } from "./shape/e-shape-points-styles";
import { EShapeStrokeSide } from "./shape/e-shape-stroke";

export interface DChartSeriesStrokeComputedOptions {
	enable?: boolean;
	color?: number;
	alpha?: number;
	width?: number;
	align?: number;
	side?: EShapeStrokeSide;
	style?: EShapePointsStyleOption;
}

export interface DChartSeriesStrokeComputed {
	enable: boolean;
	color: number;
	alpha: number;
	width: number;
	align: number;
	side: EShapeStrokeSide;
	style: EShapePointsStyle;
}

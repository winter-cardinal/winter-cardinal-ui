/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeStrokeSide } from "./shape/e-shape-stroke-side";
import { EShapeStrokeStyle } from "./shape/e-shape-stroke-style";

export interface DChartSeriesStrokeComputedOptions {
	enable?: boolean;
	color?: number;
	alpha?: number;
	width?: number;
	align?: number;
	side?: EShapeStrokeSide;
	style?: EShapeStrokeStyle;
}

export interface DChartSeriesStrokeComputed {
	enable: boolean;
	color: number;
	alpha: number;
	width: number;
	align: number;
	side: EShapeStrokeSide;
	style: EShapeStrokeStyle;
}

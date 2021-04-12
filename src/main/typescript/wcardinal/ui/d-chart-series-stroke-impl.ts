/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartColorSet2 } from "./d-chart-color-set";
import { DChartSeriesScalar, DChartSeriesScalars } from "./d-chart-series-scalar";
import { DChartSeriesStroke, DChartSeriesStrokeOptions } from "./d-chart-series-stroke";
import { EShapeDefaults } from "./shape/e-shape-defaults";
import { EShapePointsStyle } from "./shape/e-shape-points-style";
import { EShapePointsStyleOption } from "./shape/e-shape-points-styles";
import { EShapeStrokeSide } from "./shape/e-shape-stroke-side";

export class DChartSeriesStrokeImpl implements DChartSeriesStroke {
	enable: DChartSeriesScalar<boolean>;
	color: DChartSeriesScalar<number>;
	alpha: DChartSeriesScalar<number>;
	width: DChartSeriesScalar<number>;
	align: DChartSeriesScalar<number>;
	side: DChartSeriesScalar<EShapeStrokeSide>;
	style: DChartSeriesScalar<EShapePointsStyleOption>;

	constructor(options?: DChartSeriesStrokeOptions) {
		this.enable = DChartSeriesScalars.from(options?.enable, true);
		this.color = DChartSeriesScalars.from(options?.color, DChartColorSet2);
		this.alpha = DChartSeriesScalars.from(options?.alpha, EShapeDefaults.STROKE_ALPHA);
		this.width = DChartSeriesScalars.from(options?.width, EShapeDefaults.STROKE_WIDTH);
		this.align = DChartSeriesScalars.from(options?.width, EShapeDefaults.STROKE_ALIGN);
		this.side = DChartSeriesScalars.from(options?.side, EShapeStrokeSide.ALL);
		this.style = DChartSeriesScalars.from(
			options?.style,
			EShapePointsStyle.NON_EXPANDING_WIDTH |
				EShapePointsStyle.NON_SHRINKING_WIDTH |
				EShapePointsStyle.NON_SCALING_DOT_AND_DASH
		);
	}
}

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartSeriesStroke } from "./d-chart-series-stroke";
import {
	DChartSeriesStrokeComputed,
	DChartSeriesStrokeComputedOptions
} from "./d-chart-series-stroke-computed";
import { EShapeStrokeSide } from "./shape/e-shape-stroke-side";
import { EShapeStrokeStyle } from "./shape/e-shape-stroke-style";

export class DChartSeriesStrokeComputedImpl implements DChartSeriesStrokeComputed {
	enable: boolean;
	color: number;
	alpha: number;
	width: number;
	align: number;
	side: EShapeStrokeSide;
	style: EShapeStrokeStyle;

	constructor(
		enable: boolean,
		color: number,
		alpha: number,
		width: number,
		align: number,
		side: EShapeStrokeSide,
		style: EShapeStrokeStyle
	) {
		this.enable = enable;
		this.color = color;
		this.alpha = alpha;
		this.width = width;
		this.align = align;
		this.side = side;
		this.style = style;
	}

	static from(
		base: DChartSeriesStroke,
		index: number,
		stroke?: DChartSeriesStrokeComputedOptions
	): DChartSeriesStrokeComputed {
		return new DChartSeriesStrokeComputedImpl(
			stroke?.enable ?? base.enable(index),
			stroke?.color ?? base.color(index),
			stroke?.alpha ?? base.alpha(index),
			stroke?.width ?? base.width(index),
			stroke?.align ?? base.align(index),
			stroke?.side ?? base.side(index),
			stroke?.style ?? base.style(index)
		);
	}
}

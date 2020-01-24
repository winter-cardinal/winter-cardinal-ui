/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartSeriesStroke } from "./d-chart-series-stroke";
import { DChartSeriesStrokeComputed, DChartSeriesStrokeComputedOptions } from "./d-chart-series-stroke-computed";
import { EShapePointsStyle } from "./shape/e-shape-points-style";
import { EShapePointsStyles } from "./shape/e-shape-points-styles";
import { EShapeStrokeSide } from "./shape/e-shape-stroke-side";

export class DChartSeriesStrokeComputedImpl implements DChartSeriesStrokeComputed {
	enable: boolean;
	color: number;
	alpha: number;
	width: number;
	align: number;
	side: EShapeStrokeSide;
	style: EShapePointsStyle;

	constructor(
		enable: boolean, color: number, alpha: number, width: number,
		align: number, side: EShapeStrokeSide, style: EShapePointsStyle
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
		base: DChartSeriesStroke, index: number,
		stroke?: DChartSeriesStrokeComputedOptions
	): DChartSeriesStrokeComputed {
		if( stroke ) {
			return new DChartSeriesStrokeComputedImpl(
				( stroke.enable != null ? stroke.enable : base.enable( index ) ),
				( stroke.color != null ? stroke.color : base.color( index ) ),
				( stroke.alpha != null ? stroke.alpha : base.alpha( index ) ),
				( stroke.width != null ? stroke.width : base.width( index ) ),
				( stroke.align != null ? stroke.align : base.align( index ) ),
				( stroke.side != null ? stroke.side : base.side( index ) ),
				EShapePointsStyles.from( stroke.style != null ? stroke.style : base.style( index ) )
			);
		} else {
			return new DChartSeriesStrokeComputedImpl(
				base.enable( index ),
				base.color( index ),
				base.alpha( index ),
				base.width( index ),
				base.align( index ),
				base.side( index ),
				EShapePointsStyles.from( base.style( index ) )
			);
		}
	}
}

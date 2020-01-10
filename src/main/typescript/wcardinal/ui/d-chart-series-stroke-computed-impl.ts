/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartSeriesContainer } from "./d-chart-series-container";
import { DChartSeriesStrokeComputed, DChartSeriesStrokeComputedOptions } from "./d-chart-series-stroke-computed";
import { EShapePointsStyle } from "./shape/e-shape-points";
import { EShapePointsStyles } from "./shape/e-shape-points-styles";
import { EShapeStrokeSide } from "./shape/e-shape-stroke";

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
		container: DChartSeriesContainer, index: number,
		stroke?: DChartSeriesStrokeComputedOptions
	): DChartSeriesStrokeComputed {
		const containerStroke = container.stroke;
		if( stroke ) {
			return new DChartSeriesStrokeComputedImpl(
				( stroke.enable != null ? stroke.enable : containerStroke.enable( index ) ),
				( stroke.color != null ? stroke.color : containerStroke.color( index ) ),
				( stroke.alpha != null ? stroke.alpha : containerStroke.alpha( index ) ),
				( stroke.width != null ? stroke.width : containerStroke.width( index ) ),
				( stroke.align != null ? stroke.align : containerStroke.align( index ) ),
				( stroke.side != null ? stroke.side : containerStroke.side( index ) ),
				EShapePointsStyles.from( stroke.style != null ? stroke.style : containerStroke.style( index ) )
			);
		} else {
			return new DChartSeriesStrokeComputedImpl(
				containerStroke.enable( index ),
				containerStroke.color( index ),
				containerStroke.alpha( index ),
				containerStroke.width( index ),
				containerStroke.align( index ),
				containerStroke.side( index ),
				EShapePointsStyles.from( containerStroke.style( index ) )
			);
		}
	}
}

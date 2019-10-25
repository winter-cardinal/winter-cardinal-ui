/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartColorSet2 } from "./d-chart-color-set";
import { DChartSeriesScalar } from "./d-chart-series-scalar";
import { DChartSeriesStroke, DChartSeriesStrokeOptions, DChartSeriesStrokeStyleOption } from "./d-chart-series-stroke";
import { EShapeDefaults } from "./shape/e-shape-defaults";
import { EShapePointsStyle } from "./shape/e-shape-points";
import { utilIsArray } from "./util/util-is-array";
import { utilIsFunction } from "./util/util-is-function";

export class DChartSeriesStrokeImpl implements DChartSeriesStroke {
	width: DChartSeriesScalar<number>;
	color: DChartSeriesScalar<number>;
	alpha: DChartSeriesScalar<number>;
	style: DChartSeriesScalar<DChartSeriesStrokeStyleOption>;

	constructor( options?: DChartSeriesStrokeOptions ) {
		this.width = this.toScalar( options && options.width, EShapeDefaults.STROKE_WIDTH );
		this.color = this.toScalar( options && options.color, DChartColorSet2 );
		this.alpha = this.toScalar( options && options.alpha, EShapeDefaults.STROKE_ALPHA );
		this.style = this.toScalar( options && options.style, EShapePointsStyle.NONE );
	}

	protected toScalar<T>(
		value: T | T[] | DChartSeriesScalar<T> | undefined,
		def: T | T[] | DChartSeriesScalar<T>
	): DChartSeriesScalar<T> {
		if( utilIsArray( value ) ) {
			return ( index: number ) => value[ index % value.length ];
		} else if( utilIsFunction( value ) ) {
			return value;
		} else if( value != null ) {
			return () => value;
		} else if( utilIsArray( def ) ) {
			return ( index: number ) => def[ index % def.length ];
		} else if( utilIsFunction( def ) ) {
			return def;
		} else {
			return () => def;
		}
	}
}

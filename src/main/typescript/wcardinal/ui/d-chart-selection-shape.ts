/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
import { DBaseState } from "./d-base-state";
import { DBaseStateSet } from "./d-base-state-set";
import { DChartSelectionStyle } from "./d-chart-selection";
import { DChartSeries } from "./d-chart-series";
import { DChartSeriesContainer } from "./d-chart-series-container";
import { EShape } from "./shape/e-shape";

export interface DChartSelectionShapeOptions {
	enable?: boolean;
	shape?: EShape;
	style?: DChartSelectionStyle;
	state?: DBaseState;
	theme?: string | DThemeChartSelectionShape;
}

export interface DThemeChartSelectionShape {
	isEnabled( state: DBaseStateSet ): boolean;
	newShape( state: DBaseStateSet ): EShape;
}

export interface DChartSelectionShape {
	bind( container: DChartSeriesContainer ): void;
	unbind(): void;
	set( container: DChartSeriesContainer, mappedPosition: IPoint, series: DChartSeries ): void;
	unset(): void;
	update( container: DChartSeriesContainer, mappedPosition: IPoint ): void;
}

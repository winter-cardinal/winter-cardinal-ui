/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
import { DBase } from "./d-base";
import { DBaseStateSet } from "./d-base-state-set";
import { DChartSelectionStyle } from "./d-chart-selection";
import { DChartSeries } from "./d-chart-series";
import { DChartSeriesContainer } from "./d-chart-series-container";
import { EShape } from "./shape/e-shape";

export interface DChartSelectionShapeOptions<CHART extends DBase = DBase> {
	enable?: boolean;
	shape?: EShape;
	style?: DChartSelectionStyle<CHART>;
	state?: string;
	theme?: string | DThemeChartSelectionShape;
}

export interface DThemeChartSelectionShape {
	isEnabled(state: DBaseStateSet): boolean;
	newShape(state: DBaseStateSet): EShape;
}

export interface DChartSelectionShape<CHART extends DBase = DBase> {
	bind(container: DChartSeriesContainer<CHART>): void;
	unbind(): void;
	set(
		container: DChartSeriesContainer<CHART>,
		mappedPosition: IPoint,
		series: DChartSeries<CHART>
	): void;
	unset(): void;
	update(container: DChartSeriesContainer<CHART>, mappedPosition: IPoint): void;
}

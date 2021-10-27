/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
import { DBase } from "./d-base";
import {
	DChartSelectionGridlineContainer,
	DChartSelectionGridlineContainerOptions
} from "./d-chart-selection-gridline-container";
import { DChartSelectionGridlineX } from "./d-chart-selection-gridline-x";
import { DChartSelectionGridlineY } from "./d-chart-selection-gridline-y";
import { DChartSelectionShape } from "./d-chart-selection-shape";
import { DChartSeries } from "./d-chart-series";
import { DChartSeriesContainer } from "./d-chart-series-container";

export class DChartSelectionGridlineContainerImpl<CHART extends DBase = DBase>
	implements DChartSelectionGridlineContainer<CHART>
{
	protected _x: DChartSelectionShape<CHART>;
	protected _y: DChartSelectionShape<CHART>;

	constructor(options?: DChartSelectionGridlineContainerOptions<CHART>) {
		this._x = new DChartSelectionGridlineX<CHART>(options?.x);
		this._y = new DChartSelectionGridlineY<CHART>(options?.y);
	}

	get x(): DChartSelectionShape<CHART> {
		return this._x;
	}

	get y(): DChartSelectionShape<CHART> {
		return this._y;
	}

	bind(container: DChartSeriesContainer<CHART>): void {
		this._x.bind(container);
		this._y.bind(container);
	}

	unbind(): void {
		this._x.unbind();
		this._y.unbind();
	}

	set(
		container: DChartSeriesContainer<CHART>,
		mappedPosition: IPoint,
		series: DChartSeries<CHART>
	): void {
		this._x.set(container, mappedPosition, series);
		this._y.set(container, mappedPosition, series);
	}

	unset(): void {
		this._x.unset();
		this._y.unset();
	}

	update(container: DChartSeriesContainer<CHART>, mappedPosition: IPoint): void {
		this._x.update(container, mappedPosition);
		this._y.update(container, mappedPosition);
	}
}

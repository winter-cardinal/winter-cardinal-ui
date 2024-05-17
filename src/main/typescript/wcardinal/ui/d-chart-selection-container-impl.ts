/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
import { DBase } from "./d-base";
import { DChartSelectionContainer } from "./d-chart-selection-container";
import { DChartSelectionShape } from "./d-chart-selection-shape";
import { DChartSeries } from "./d-chart-series";
import { DChartSeriesContainer } from "./d-chart-series-container";

export class DChartSelectionContainerImpl<CHART extends DBase = DBase>
	implements DChartSelectionContainer<CHART>
{
	protected _x: DChartSelectionShape<CHART>;
	protected _y: DChartSelectionShape<CHART>;

	constructor(x: DChartSelectionShape<CHART>, y: DChartSelectionShape<CHART>) {
		this._x = x;
		this._y = y;
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
		position: IPoint,
		mappedPosition: IPoint,
		series: DChartSeries<CHART> | null
	): void {
		this._x.set(container, position, mappedPosition, series);
		this._y.set(container, position, mappedPosition, series);
	}

	unset(): void {
		this._x.unset();
		this._y.unset();
	}

	update(
		container: DChartSeriesContainer<CHART>,
		position: IPoint,
		mappedPosition: IPoint,
		series: DChartSeries<CHART> | null
	): boolean {
		const isXUpdated = this._x.update(container, position, mappedPosition, series);
		const isYUpdated = this._y.update(container, position, mappedPosition, series);
		return isXUpdated || isYUpdated;
	}
}

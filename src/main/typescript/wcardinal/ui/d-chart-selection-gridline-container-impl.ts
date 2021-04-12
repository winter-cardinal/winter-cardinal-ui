/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
import {
	DChartSelectionGridlineContainer,
	DChartSelectionGridlineContainerOptions
} from "./d-chart-selection-gridline-container";
import { DChartSelectionGridlineX } from "./d-chart-selection-gridline-x";
import { DChartSelectionGridlineY } from "./d-chart-selection-gridline-y";
import { DChartSelectionShape } from "./d-chart-selection-shape";
import { DChartSeries } from "./d-chart-series";
import { DChartSeriesContainer } from "./d-chart-series-container";

export class DChartSelectionGridlineContainerImpl implements DChartSelectionGridlineContainer {
	protected _x: DChartSelectionShape;
	protected _y: DChartSelectionShape;

	constructor(options?: DChartSelectionGridlineContainerOptions) {
		this._x = new DChartSelectionGridlineX(options?.x);
		this._y = new DChartSelectionGridlineY(options?.y);
	}

	get x(): DChartSelectionShape {
		return this._x;
	}

	get y(): DChartSelectionShape {
		return this._y;
	}

	bind(container: DChartSeriesContainer): void {
		this._x.bind(container);
		this._y.bind(container);
	}

	unbind(): void {
		this._x.unbind();
		this._y.unbind();
	}

	set(container: DChartSeriesContainer, mappedPosition: IPoint, series: DChartSeries): void {
		this._x.set(container, mappedPosition, series);
		this._y.set(container, mappedPosition, series);
	}

	unset(): void {
		this._x.unset();
		this._y.unset();
	}

	update(container: DChartSeriesContainer, mappedPosition: IPoint): void {
		this._x.update(container, mappedPosition);
		this._y.update(container, mappedPosition);
	}
}

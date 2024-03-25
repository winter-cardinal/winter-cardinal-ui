/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DChartCoordinateContainer } from "./d-chart-coordinate-container";
import { DChartCoordinateContainerSub } from "./d-chart-coordinate-container-sub";
import { DChartPlotArea } from "./d-chart-plot-area";
import { DChartPlotAreaTwofoldCoorinateContainerSub } from "./d-chart-plot-area-twofold-coordinate-container-sub";

export class DChartPlotAreaTwofoldCoorinateContainer<CHART extends DBase = DBase>
	implements DChartCoordinateContainer<CHART>
{
	protected _x: DChartCoordinateContainerSub<CHART>;
	protected _y: DChartCoordinateContainerSub<CHART>;
	protected _plotArea: DChartPlotArea<CHART>;
	protected _primary: DChartCoordinateContainer<CHART>;
	protected _secondary: DChartCoordinateContainer<CHART>;

	constructor(
		plotArea: DChartPlotArea<CHART>,
		primary: DChartCoordinateContainer<CHART>,
		secondary: DChartCoordinateContainer<CHART>
	) {
		this._plotArea = plotArea;
		this._primary = primary;
		this._secondary = secondary;
		this._x = new DChartPlotAreaTwofoldCoorinateContainerSub(this, primary.x, secondary.x);
		this._y = new DChartPlotAreaTwofoldCoorinateContainerSub(this, primary.y, secondary.y);
	}

	get x(): DChartCoordinateContainerSub<CHART> {
		return this._x;
	}

	get y(): DChartCoordinateContainerSub<CHART> {
		return this._y;
	}

	get plotArea(): DChartPlotArea<CHART> {
		return this._plotArea;
	}

	fit(domainFrom?: number, domainTo?: number, rangeFrom?: number, rangeTo?: number): this {
		this._x.fit(domainFrom, domainTo);
		this._y.fit(rangeFrom, rangeTo);
		return this;
	}

	mark(domainFrom?: number, domainTo?: number, rangeFrom?: number, rangeTo?: number): this {
		this._x.mark(domainFrom, domainTo);
		this._y.mark(rangeFrom, rangeTo);
		return this;
	}

	blend(ratio: number): this {
		this._x.blend(ratio);
		this._y.blend(ratio);
		return this;
	}
}

import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DChartSeriesContainer, DChartSeriesContainerOptions } from "./d-chart-series-container";
import {
	DChartCoordinateContainer,
	DChartCoordinateContainerOptions
} from "./d-chart-coordinate-container";

import { DChartPlotAreaContainer } from "./d-chart-plot-area-container";
import { DChartAxisContainer, DChartAxisContainerOptions } from "./d-chart-axis-container";
import { Rectangle } from "pixi.js";
import { DViewOptions } from "./d-view";

export interface DChartPlotAreaOptions<
	CHART extends DBase = DBase,
	THEME extends DThemeChartPlotArea = DThemeChartPlotArea
> extends DBaseOptions<THEME> {
	mask?: boolean;
	coordinate?: DChartCoordinateContainerOptions<CHART>;
	series?: DChartSeriesContainerOptions<CHART>;
	axis?: DChartAxisContainerOptions<CHART>;
	view?: DViewOptions;
}

export interface DThemeChartPlotArea extends DThemeBase {
	isOverflowMaskEnabled(): boolean;
}

export interface DChartPlotArea<CHART extends DBase = DBase> extends DBase {
	readonly series: DChartSeriesContainer<CHART>;
	readonly container: DChartPlotAreaContainer;
	readonly axis: DChartAxisContainer<CHART>;

	readonly chart: CHART;
	readonly coordinate: DChartCoordinateContainer<CHART>;

	fit(
		duration?: number,
		domainFrom?: number,
		domainTo?: number,
		rangeFrom?: number,
		rangeTo?: number
	): this;
	getBoundsInContainer(): Rectangle;
}

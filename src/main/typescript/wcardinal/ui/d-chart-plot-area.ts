import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DChartSeriesContainer, DChartSeriesContainerOptions } from "./d-chart-series-container";
import { DPadding } from "./d-padding";
import {
	DChartCoordinateContainer,
	DChartCoordinateContainerOptions
} from "./d-chart-coordinate-container";

import { DChartPlotAreaContainer } from "./d-chart-plot-area-container";
import { DChartAxisContainer, DChartAxisContainerOptions } from "./d-chart-axis-container";
import { Rectangle } from "pixi.js";
import { DViewOptions } from "./d-view";

export interface DChartPlotAreaOptions<THEME extends DThemeChartPlotArea = DThemeChartPlotArea>
	extends DBaseOptions<THEME> {
	mask?: boolean;
	coordinate?: DChartCoordinateContainerOptions;
	series?: DChartSeriesContainerOptions;
	axis?: DChartAxisContainerOptions;
	view?: DViewOptions;
}

export interface DThemeChartPlotArea extends DThemeBase {
	isOverflowMaskEnabled(): boolean;
}

export interface DChartPlotArea extends DBase {
	series: DChartSeriesContainer;
	padding: DPadding;
	width: number;
	height: number;

	container: DChartPlotAreaContainer;
	chart: DBase;
	coordinate: DChartCoordinateContainer;
	axis: DChartAxisContainer;

	getBoundsInContainer(): Rectangle;
}

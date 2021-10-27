import { DBase } from "./d-base";
import { DChartSeriesContainer } from "./d-chart-series-container";
import { DPadding } from "./d-padding";
import { DChartCoordinateContainer } from "./d-chart-coordinate-container";

import { DChartPlotAreaContainer } from "./d-chart-plot-area-container";
import { DChartAxisContainer } from "./d-chart-axis-container";
import { Rectangle } from "pixi.js";

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

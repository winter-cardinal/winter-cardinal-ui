import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DChartSeriesContainer } from "./d-chart-series-container";
import { DChartCoordinateContainer } from "./d-chart-coordinate-container";
import { DChartPlotAreaContainer } from "./d-chart-plot-area-container";
import { DChartAxisContainer } from "./d-chart-axis-container";
import { Rectangle } from "pixi.js";
import { DView, DViewOptions } from "./d-view";
import { DApplicationTarget } from "./d-application-like";
import { DChartRegion } from "./d-chart-region";
import { DChartAxisPosition } from "./d-chart-axis-position";

export interface DChartPlotAreaOptions<
	CHART extends DBase = DBase,
	THEME extends DThemeChartPlotArea = DThemeChartPlotArea
> extends DBaseOptions<THEME> {
	mask?: boolean;
	view?: DViewOptions;
}

export interface DThemeChartPlotArea extends DThemeBase {
	isOverflowMaskEnabled(): boolean;
}

export interface DChartPlotAreaLike<CHART extends DBase = DBase> extends DApplicationTarget {
	readonly chart: CHART;
	readonly plotArea: DChartPlotArea<CHART>;
	readonly coordinate: DChartCoordinateContainer<CHART>;
	readonly series: DChartSeriesContainer<CHART>;
	readonly container: DChartPlotAreaContainer;
	readonly axis: DChartAxisContainer<CHART>;

	// eslint-disable-next-line @typescript-eslint/ban-types
	on(name: string, callback: Function, context?: any): this;

	// eslint-disable-next-line @typescript-eslint/ban-types
	off(name: string, callback?: Function, context?: any): this;

	getPixelDomain(result: DChartRegion): DChartRegion;
	getPixelRange(result: DChartRegion): DChartRegion;
	getPixelBounds(): Rectangle;
	getAxisBounds(position: DChartAxisPosition): Rectangle;
	getSelectionBoundsX(): Rectangle;
	getSelectionBoundsY(): Rectangle;
	getContainerBounds(): Rectangle;
}

export interface DChartPlotArea<CHART extends DBase = DBase> extends DBase {
	readonly chart: CHART;
	readonly coordinate: DChartCoordinateContainer<CHART>;
	readonly series: DChartSeriesContainer<CHART>;
	readonly container: DChartPlotAreaContainer;
	readonly axis: DChartAxisContainer<CHART>;
	readonly view: DView;

	fit(
		duration?: number,
		domainFrom?: number,
		domainTo?: number,
		rangeFrom?: number,
		rangeTo?: number
	): this;
	getPixelDomain(result: DChartRegion): DChartRegion;
	getPixelRange(result: DChartRegion): DChartRegion;
	getPixelBounds(): Rectangle;
	getAxisBounds(position: DChartAxisPosition): Rectangle;
	getSelectionBoundsX(): Rectangle;
	getSelectionBoundsY(): Rectangle;
	getContainerBounds(): Rectangle;
}

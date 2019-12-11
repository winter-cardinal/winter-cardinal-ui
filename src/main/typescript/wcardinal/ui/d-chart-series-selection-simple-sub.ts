import { Point, utils } from "pixi.js";
import { DBaseOnOptions } from "./d-base";
import { DChartSeries, DChartSeriesHitResult } from "./d-chart-series";
import { DChartSeriesContainer } from "./d-chart-series-container";
import { DChartSeriesSelectionStyle } from "./d-chart-series-selection";
import { EShape } from "./shape/e-shape";

export interface DChartSeriesSelectionSimpleSubOptions {
	shape?: EShape;
	style?: DChartSeriesSelectionStyle;
	on?: DBaseOnOptions;
}

export interface DChartSeriesSelectionSimpleSub extends utils.EventEmitter {
	readonly series: DChartSeries | null;
	readonly position: Point;

	bind( container: DChartSeriesContainer ): void;
	unbind(): void;
	set( series: DChartSeries, result: DChartSeriesHitResult | Point ): void;
	unset(): void;
	update(): void;
}

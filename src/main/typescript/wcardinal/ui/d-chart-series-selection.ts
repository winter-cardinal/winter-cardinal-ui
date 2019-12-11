import { utils } from "pixi.js";
import { DChartSeries, DChartSeriesHitResult } from "./d-chart-series";
import { DChartSeriesContainer } from "./d-chart-series-container";

export enum DChartSeriesSelectionPoint {
	PREVIOUS,
	NEXT,
	CLOSER,
	INTERSECTION
}

export interface DChartSeriesSelection extends utils.EventEmitter {
	bind( container: DChartSeriesContainer ): void;
	unbind(): void;
	set( series: DChartSeries, result: DChartSeriesHitResult ): void;
	unset(): void;
	update(): void;
}

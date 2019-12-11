import { utils } from "pixi.js";
import { DChartSeries } from "./d-chart-series";
import { DChartSeriesContainer } from "./d-chart-series-container";
import { EShape } from "./shape/e-shape";

export enum DChartSeriesSelectionPoint {
	PREVIOUS,
	NEXT,
	CLOSER,
	INTERSECTION
}

export type DChartSeriesSelectionStyle = ( shape: EShape, series: DChartSeries ) => void;

export interface DChartSeriesSelection extends utils.EventEmitter {
	bind( container: DChartSeriesContainer ): void;
	unbind(): void;
	update(): void;
}

import { utils } from "pixi.js";
import { DChartSeries } from "./d-chart-series";
import { DChartSeriesContainer } from "./d-chart-series-container";
import { EShapeLineHitResult } from "./shape/variant/e-shape-line-hit-result";

export enum DChartSeriesSelectionPoint {
	PREVIOUS,
	NEXT,
	CLOSER,
	INTERSECTION
}

export interface DChartSeriesSelection extends utils.EventEmitter {
	bind( container: DChartSeriesContainer ): void;
	unbind(): void;
	set( series: DChartSeries, result: EShapeLineHitResult ): void;
	unset(): void;
	update(): void;
}

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
import { DBaseState } from "./d-base-state";
import { DChartRegionImmutable } from "./d-chart-region";
import { DChartSeriesContainer } from "./d-chart-series-container";
import { DChartSeriesCoordinateContainer } from "./d-chart-series-coordinate";
import { EShape } from "./shape";
import { EShapeLineHitResult } from "./shape/variant/e-shape-line-hit-result";

export interface DChartSeries {
	readonly domain: DChartRegionImmutable;
	readonly range: DChartRegionImmutable;
	readonly shape: EShape | null;
	readonly container: DChartSeriesContainer | null;
	readonly coordinate: DChartSeriesCoordinateContainer;
	readonly index: number;

	bind( container: DChartSeriesContainer, index: number ): void;
	unbind(): void;

	toDirty(): void;

	update(): void;
	destroy(): void;

	hitTest( global: IPoint ): boolean;
	calcHitX( global: IPoint, thresholdScale: number, thresholdMinimum: number, result: EShapeLineHitResult ): boolean;

	setState( state: DBaseState, isOn: boolean ): void;
}

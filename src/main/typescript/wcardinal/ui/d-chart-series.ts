/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartRegionImmutable } from "./d-chart-region";
import { DChartSeriesContainer } from "./d-chart-series-container";

export interface DChartSeries {
	readonly domain: DChartRegionImmutable;
	readonly range: DChartRegionImmutable;

	bind( container: DChartSeriesContainer, index: number ): void;
	unbind(): void;

	toDirty(): void;

	update(): void;
	destroy(): void;
}

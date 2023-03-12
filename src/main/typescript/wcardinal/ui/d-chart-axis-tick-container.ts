/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DChartAxisContainer } from "./d-chart-axis-container";
import { DChartAxisTickMajor } from "./d-chart-axis-tick-major";
import { DChartAxisTickMinor } from "./d-chart-axis-tick-minor";

export interface DChartAxisTickContainer<CHART extends DBase> {
	readonly major: DChartAxisTickMajor<CHART>;
	readonly minor: DChartAxisTickMinor<CHART>;

	bind(container: DChartAxisContainer<CHART>, index: number): void;
	unbind(): void;
	update(): boolean;
	destroy(): void;
}

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DChartAxisContainer } from "./d-chart-axis-container";
import { DChartAxisTickMajorGridline } from "./d-chart-axis-tick-major-gridline";
import { EShape } from "./shape/e-shape";

export interface DChartAxisTickMajor<CHART extends DBase = DBase> {
	readonly shapes: EShape[];
	readonly gridline: DChartAxisTickMajorGridline<CHART>;

	bind(container: DChartAxisContainer<CHART>, index: number): void;
	unbind(): void;
	destroy(): void;
}

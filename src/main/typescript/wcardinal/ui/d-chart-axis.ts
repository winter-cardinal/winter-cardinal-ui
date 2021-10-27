/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DChartAxisContainer } from "./d-chart-axis-container";
import { DChartAxisPosition } from "./d-chart-axis-position";

export interface DChartAxisOptions {
	position?: DChartAxisPosition | keyof typeof DChartAxisPosition;
}

export interface DChartAxis<CHART extends DBase = DBase> {
	readonly position: DChartAxisPosition;
	bind(container: DChartAxisContainer<CHART>, index: number): void;
	unbind(): void;
	update(): void;
	destroy(): void;
}

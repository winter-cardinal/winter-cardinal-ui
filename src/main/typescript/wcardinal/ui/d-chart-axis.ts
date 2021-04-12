/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartAxisContainer } from "./d-chart-axis-container";
import { DChartAxisPosition } from "./d-chart-axis-position";

export interface DChartAxisOptions {
	position?: DChartAxisPosition | keyof typeof DChartAxisPosition;
}

export interface DChartAxis {
	readonly position: DChartAxisPosition;
	bind(container: DChartAxisContainer, index: number): void;
	unbind(): void;
	update(): void;
	destroy(): void;
}

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DChartAxisContainer } from "./d-chart-axis-container";
import { EShape } from "./shape/e-shape";

export interface DChartAxisTickMinor<CHART extends DBase = DBase> {
	readonly shapes: EShape[];

	bind(container: DChartAxisContainer<CHART>, index: number): void;
	unbind(): void;
	destroy(): void;
}

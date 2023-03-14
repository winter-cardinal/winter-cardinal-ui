/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DChartAxisContainer } from "./d-chart-axis-container";
import { EShape } from "./shape/e-shape";

export interface DChartAxisBar<CHART extends DBase = DBase> {
	readonly shape: EShape;

	bind(container: DChartAxisContainer<CHART>, index: number): void;
	unbind(): void;
	update(): boolean;
	destroy(): void;
}

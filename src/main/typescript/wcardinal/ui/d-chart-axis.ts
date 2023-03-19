/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DChartAxisBar } from "./d-chart-axis-bar";
import { DChartAxisContainer } from "./d-chart-axis-container";
import { DChartAxisPosition } from "./d-chart-axis-position";
import { DChartAxisTickContainer } from "./d-chart-axis-tick-container";

export interface DChartAxisOptions {
	position?: DChartAxisPosition | keyof typeof DChartAxisPosition;
}

export interface DChartAxis<CHART extends DBase = DBase> {
	position: DChartAxisPosition;
	coordinate: number;
	padding: number;
	readonly bar: DChartAxisBar<CHART>;
	readonly tick: DChartAxisTickContainer<CHART>;

	bind(container: DChartAxisContainer<CHART>, index: number): void;
	unbind(): void;
	update(): void;
	onRender(): void;
	destroy(): void;
}

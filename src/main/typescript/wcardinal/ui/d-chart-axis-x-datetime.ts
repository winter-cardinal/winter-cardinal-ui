/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DChartAxisX, DChartAxisXOptions } from "./d-chart-axis-x";

export interface DChartAxisXDatetimeOptions extends DChartAxisXOptions {}

/**
 * An X axis for datetimes.
 */
export class DChartAxisXDatetime<
	CHART extends DBase = DBase,
	OPTIONS extends DChartAxisXDatetimeOptions = DChartAxisXDatetimeOptions
> extends DChartAxisX<CHART, OPTIONS> {
	protected getType(): string {
		return "DChartAxisXDatetime";
	}
}

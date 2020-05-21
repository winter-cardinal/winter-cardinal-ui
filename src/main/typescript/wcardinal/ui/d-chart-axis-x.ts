/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartAxisBase } from "./d-chart-axis-base";
import { DChartAxisBaseOptions } from "./d-chart-axis-base-options";

export interface DChartAxisXOptions extends DChartAxisBaseOptions {

}

/**
 * An X axis.
 */
export class DChartAxisX<
	OPTIONS extends DChartAxisXOptions = DChartAxisXOptions
> extends DChartAxisBase<OPTIONS> {
	protected getType(): string {
		return "DChartAxisX";
	}
}

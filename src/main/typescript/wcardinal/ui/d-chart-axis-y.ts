/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DChartAxisBase } from "./d-chart-axis-base";
import { DChartAxisBaseOptions } from "./d-chart-axis-base-options";

export interface DChartAxisYOptions extends DChartAxisBaseOptions {}

/**
 * An Y axis.
 */
export class DChartAxisY<
	CHART extends DBase = DBase,
	OPTIONS extends DChartAxisYOptions = DChartAxisYOptions
> extends DChartAxisBase<CHART, OPTIONS> {
	protected getType(): string {
		return "DChartAxisY";
	}
}

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartAxisBase } from "./d-chart-axis-base";

/**
 * An Y axis.
 */
export class DChartAxisY extends DChartAxisBase {
	protected getType(): string {
		return "DChartAxisY";
	}
}

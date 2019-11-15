/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartAxisBase } from "./d-chart-axis-base";

/**
 * An X axis.
 */
export class DChartAxisX extends DChartAxisBase {
	protected getType(): string {
		return "DChartAxisX";
	}
}

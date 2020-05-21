/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartAxisX, DChartAxisXOptions } from "./d-chart-axis-x";

export interface DChartAxisXDatetimeOptions extends DChartAxisXOptions {

}

/**
 * An X axis for datetimes.
 */
export class DChartAxisXDatetime<
	OPTIONS extends DChartAxisXDatetimeOptions = DChartAxisXDatetimeOptions
> extends DChartAxisX<OPTIONS> {
	protected getType(): string {
		return "DChartAxisXDatetime";
	}
}

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartAxisX } from "./d-chart-axis-x";

/**
 * An X axis for datetimes.
 */
export class DChartAxisXDatetime extends DChartAxisX {
	protected getType(): string {
		return "DChartAxisXDatetime";
	}
}

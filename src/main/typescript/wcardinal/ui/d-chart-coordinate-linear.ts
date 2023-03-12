/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DChartCoordinateBase } from "./d-chart-coordinate-base";
import { DChartCoordinateLinearTick } from "./d-chart-coordinate-linear-tick";
import { DChartCoordinateTick, DChartCoordinateTickOptions } from "./d-chart-coordinate-tick";

export class DChartCoordinateLinear<
	CHART extends DBase = DBase
> extends DChartCoordinateBase<CHART> {
	protected override newTick(options?: DChartCoordinateTickOptions): DChartCoordinateTick<CHART> {
		return new DChartCoordinateLinearTick<CHART>(options);
	}
}

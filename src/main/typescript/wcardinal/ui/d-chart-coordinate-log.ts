/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DChartCoordinateBase } from "./d-chart-coordinate-base";
import { DChartCoordinateLogTick } from "./d-chart-coordinate-log-tick";
import { DChartCoordinateTick, DChartCoordinateTickOptions } from "./d-chart-coordinate-tick";

export class DChartCoordinateLog<CHART extends DBase = DBase> extends DChartCoordinateBase<CHART> {
	protected override newTick(options?: DChartCoordinateTickOptions): DChartCoordinateTick<CHART> {
		return new DChartCoordinateLogTick<CHART>(options);
	}

	override map(value: number): number {
		return Math.log(Math.max(0, value)) / Math.LN10;
	}

	override mapAll(
		values: number[],
		ifrom: number,
		iend: number,
		stride: number,
		offset: number
	): void {
		const factor = 1 / Math.LN10;
		for (let i = ifrom + offset; i < iend; i += stride) {
			const value = values[i];
			values[i] = Math.log(Math.max(0, value)) * factor;
		}
	}

	override unmap(value: number): number {
		return Math.pow(10, value);
	}

	override unmapAll(
		values: number[],
		ifrom: number,
		iend: number,
		stride: number,
		offset: number
	): void {
		for (let i = ifrom + offset; i < iend; i += stride) {
			values[i] = Math.pow(10, values[i]);
		}
	}
}

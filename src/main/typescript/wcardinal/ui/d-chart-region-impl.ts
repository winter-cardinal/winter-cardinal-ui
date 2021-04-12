/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartRegion } from "./d-chart-region";
import { isNaN } from "./util/is-nan";

export class DChartRegionImpl implements DChartRegion {
	from: number;
	to: number;

	constructor(from: number, to: number) {
		this.from = from;
		this.to = to;
	}

	set(from?: number, to?: number): this {
		if (from != null) {
			this.from = from;
		}
		if (to != null) {
			this.to = to;
		}
		return this;
	}

	add(from: number, to: number): this {
		if (!isNaN(from)) {
			this.from = isNaN(this.from) ? from : Math.min(this.from, from);
		}

		if (!isNaN(to)) {
			this.to = isNaN(this.to) ? to : Math.max(this.to, to);
		}

		return this;
	}

	clear(): this {
		this.from = NaN;
		this.to = NaN;
		return this;
	}
}

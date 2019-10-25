/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { FormatNodePrecision } from "./format-node-precision";

export class FormatNodef extends FormatNodePrecision {
	format( target: number, step: number, date: Date ): string {
		return target.toFixed(this.precision);
	}
}

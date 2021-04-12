/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { FormatNodefsi } from "./format-node-fsi";

export class FormatNodessi extends FormatNodefsi {
	protected toAbs(target: number, step: number, date: Date): number {
		return Math.abs(step);
	}
}

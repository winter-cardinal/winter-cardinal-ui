/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { FormatNode } from "./format-node";

export class FormatNodea implements FormatNode {
	format(target: number, step: number, date: Date): string {
		return date.getHours() < 12 ? "am" : "pm";
	}
}

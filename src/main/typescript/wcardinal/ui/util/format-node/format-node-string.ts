/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { FormatNode } from "./format-node";

export class FormatNodeString implements FormatNode {
	protected str: string;

	constructor(str: string) {
		this.str = str;
	}

	format(target: number, step: number, date: Date): string {
		return this.str;
	}
}

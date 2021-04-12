/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { FormatNode } from "./format-node";

export class FormatNoded implements FormatNode {
	format(target: number, step: number, date: Date): string {
		return `${target | 0}`;
	}
}

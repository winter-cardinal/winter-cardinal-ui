/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { toPadded } from "../to-padded";
import { FormatNode } from "./format-node";

export class FormatNodez implements FormatNode {
	format( target: number, step: number, date: Date ): string {
		const z = date.getTimezoneOffset();
		const tzs = (z <= 0 ? "+" : "-");
		const tzh = toPadded(String(Math.floor(Math.abs(z) / 60)), 2, "0");
		const tzm = toPadded(String(Math.floor(Math.abs(z) % 60)), 2, "0");
		return `${tzs}${tzh}:${tzm}`;
	}
}

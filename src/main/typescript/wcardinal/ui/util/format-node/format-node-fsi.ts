/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { FormatNodePrecision } from "./format-node-precision";

export class FormatNodefsi extends FormatNodePrecision {
	format(target: number, step: number, date: Date): string {
		const abs = this.toAbs(target, step, date);
		if (abs < 1e-24) {
			return this.format_(target, 1, "");
		} else if (abs < 1e-21) {
			return this.format_(target, 1e24, "y");
		} else if (abs < 1e-18) {
			return this.format_(target, 1e21, "z");
		} else if (abs < 1e-15) {
			return this.format_(target, 1e18, "a");
		} else if (abs < 1e-12) {
			return this.format_(target, 1e15, "f");
		} else if (abs < 1e-9) {
			return this.format_(target, 1e12, "p");
		} else if (abs < 1e-6) {
			return this.format_(target, 1e9, "n");
		} else if (abs < 1e-3) {
			return this.format_(target, 1e6, "μ");
		} else if (abs < 1) {
			return this.format_(target, 1e3, "m");
		} else if (abs < 1e3) {
			return this.format_(target, 1, "");
		} else if (abs < 1e6) {
			return this.format_(target, 1e-3, "k");
		} else if (abs < 1e9) {
			return this.format_(target, 1e-6, "M");
		} else if (abs < 1e12) {
			return this.format_(target, 1e-9, "G");
		} else if (abs < 1e15) {
			return this.format_(target, 1e-12, "T");
		} else if (abs < 1e18) {
			return this.format_(target, 1e-15, "P");
		} else if (abs < 1e21) {
			return this.format_(target, 1e-18, "E");
		} else if (abs < 1e24) {
			return this.format_(target, 1e-21, "Z");
		} else {
			return this.format_(target, 1e-24, "Y");
		}
	}

	protected toAbs(target: number, step: number, date: Date): number {
		return Math.abs(target);
	}

	protected format_(target: number, unitInverse: number, postfix: string): string {
		const value = target * unitInverse;
		return `${value.toFixed(this.precision)}${postfix}`;
	}
}

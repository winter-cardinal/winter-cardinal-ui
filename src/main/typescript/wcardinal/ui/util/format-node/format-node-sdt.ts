/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { FormatNode } from "./format-node";

export class FormatNodesdt implements FormatNode {
	protected Y: FormatNode;
	protected M: FormatNode;
	protected D: FormatNode;
	protected H: FormatNode;
	protected m: FormatNode;
	protected s: FormatNode;
	protected mi: FormatNode;

	constructor(
		Y: FormatNode,
		M: FormatNode,
		D: FormatNode,
		H: FormatNode,
		m: FormatNode,
		s: FormatNode,
		mi: FormatNode
	) {
		this.Y = Y;
		this.M = M;
		this.D = D;
		this.H = H;
		this.m = m;
		this.s = s;
		this.mi = mi;
	}

	format(target: number, step: number, date: Date): string {
		if (step < 1000) {
			return `${this.s.format(target, step, date)}.${this.mi.format(target, step, date)}`;
		} else if (step < 60000) {
			return `${this.m.format(target, step, date)}:${this.s.format(target, step, date)}`;
		} else if (step < 3600000) {
			return `${this.H.format(target, step, date)}:${this.m.format(target, step, date)}`;
		} else if (step < 86400000) {
			const M = this.M.format(target, step, date);
			const D = this.D.format(target, step, date);
			return `${M}/${D} ${this.H.format(target, step, date)}`;
		} else if (step < 2592000000) {
			return `${this.M.format(target, step, date)}/${this.D.format(target, step, date)}`;
		} else {
			return `${this.Y.format(target, step, date)}/${this.M.format(target, step, date)}`;
		}
	}
}

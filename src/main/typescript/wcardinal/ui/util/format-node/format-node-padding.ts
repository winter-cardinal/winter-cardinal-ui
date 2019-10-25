/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utilPad } from "../util-pad";
import { FormatNode } from "./format-node";

export class FormatNodePadding implements FormatNode {
	protected length: number;
	protected character: string;
	protected node: FormatNode;

	constructor( length: number, character: string, node: FormatNode ) {
		this.length = length;
		this.character = character;
		this.node = node;
	}

	format( target: number, step: number, date: Date ): string {
		return utilPad(this.node.format(target, step, date), this.length, this.character);
	}
}

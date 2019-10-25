/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { FormatNode } from "./format-node";

export class FormatNodeSpace {
	protected node: FormatNode;
	constructor(node: FormatNode) {
		this.node = node;
	}
	format( target: number, step: number, date: Date ): string {
		const result = this.node.format(target, step, date);
		if( 0 < result.length && result[0] !== "-" ) {
			return ` ${result}`;
		}
		return result;
	}
}

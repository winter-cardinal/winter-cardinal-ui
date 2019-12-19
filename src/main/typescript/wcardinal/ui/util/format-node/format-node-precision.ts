/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { FormatNode } from "./format-node";

export abstract class FormatNodePrecision implements FormatNode {
	protected precision: number | undefined;

	constructor( precision?: string ) {
		if( precision != null ) {
			this.precision = +precision.substring( 1, precision.length );
		} else {
			this.precision = undefined;
		}
	}

	abstract format( target: number, step: number, date: Date ): string;
}

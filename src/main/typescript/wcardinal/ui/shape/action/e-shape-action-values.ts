/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { isNumber } from "../../util/is-number";

export class EShapeActionValues {
	static toResource( index: number, parsed: number[], resources: string[] ): string {
		if( 0 <= index && index < parsed.length ) {
			const id = parsed[ index ];
			if( isNumber( id ) && 0 <= id && id < resources.length ) {
				return resources[ id ];
			}
		}
		return "";
	}
}

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utilIsNumber } from "../../util/util-is-number";

export class EShapeActionValues {
	static toResource( index: number, parsed: number[], resources: string[] ): string {
		if( 0 <= index && index < parsed.length ) {
			const id = parsed[ index ];
			if( utilIsNumber( id ) && 0 <= id && id < resources.length ) {
				return resources[ id ];
			}
		}
		return "";
	}

	static toConditionLabel( condition: string ): string {
		const l = 20;
		if( l < condition.length ) {
			return condition.substring( 0, l ) + "...";
		} else {
			return condition;
		}
	}
}

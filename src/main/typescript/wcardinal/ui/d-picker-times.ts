/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DPickerDatetimeMask } from "./d-picker-datetime-mask";
import { DPickerDatetimeMaskOptions, DPickerDatetimeMasks } from "./d-picker-datetime-masks";
import { toPadded } from "./util/to-padded";

export class DPickerTimes {
	static format( date: Date, mask: DPickerDatetimeMask ): string {
		let result = "";
		if( mask & DPickerDatetimeMask.HOURS ) {
			result += toPadded( String( date.getHours() ), 2, "0" );
		}
		if( mask & DPickerDatetimeMask.MINUTES ) {
			if( 0 < result.length ) {
				result += ":";
			}
			result += toPadded( String( date.getMinutes() ), 2, "0" );
		}
		if( mask & DPickerDatetimeMask.SECONDS ) {
			if( 0 < result.length ) {
				result += ":";
			}
			result += toPadded( String( date.getSeconds() ), 2, "0" );
		}
		return result;
	}

	static toMask( options?: DPickerDatetimeMaskOptions ) {
		return DPickerDatetimeMasks.from( "DPickerTime", options );
	}
}

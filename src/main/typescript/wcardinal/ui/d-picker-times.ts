/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DPickerDatetimeMask } from "./d-picker-datetime-mask";
import { DThemePickerTime } from "./d-picker-time";
import { DThemes } from "./theme/d-themes";
import { utilPad } from "./util/util-pad";

export class DPickerTimes {
	static format( date: Date, mask: DPickerDatetimeMask ): string {
		let result = "";
		if( mask & DPickerDatetimeMask.HOURS ) {
			result += utilPad( String( date.getHours() ), 2, "0" );
		}
		if( mask & DPickerDatetimeMask.MINUTES ) {
			if( 0 < result.length ) {
				result += ":";
			}
			result += utilPad( String( date.getMinutes() ), 2, "0" );
		}
		if( mask & DPickerDatetimeMask.SECONDS ) {
			if( 0 < result.length ) {
				result += ":";
			}
			result += utilPad( String( date.getSeconds() ), 2, "0" );
		}
		return result;
	}

	static toMask( options?: { mask?: DPickerDatetimeMask } ): DPickerDatetimeMask {
		return ( options && options.mask != null ? options.mask :
			(DThemes.getInstance().get( "DPickerTime" ) as DThemePickerTime).getMask() );
	}
}

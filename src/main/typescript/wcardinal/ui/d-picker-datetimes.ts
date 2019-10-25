/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DPickerDates } from "./d-picker-dates";
import { DThemePickerDatetime } from "./d-picker-datetime";
import { DPickerDatetimeMask } from "./d-picker-datetime-mask";
import { DPickerTimes } from "./d-picker-times";
import { DThemes } from "./theme/d-themes";

export class DPickerDatetimes {
	static format( date: Date, mask: DPickerDatetimeMask ): string {
		const hms = DPickerTimes.format( date, mask );
		if( 0 < hms.length ) {
			return `${DPickerDates.format( date )} ${hms}`;
		} else {
			return `${DPickerDates.format( date )}`;
		}
	}

	static toMask( options?: { mask?: DPickerDatetimeMask } ): DPickerDatetimeMask {
		return ( options && options.mask != null ? options.mask :
			(DThemes.getInstance().get( "DPickerDatetime" ) as DThemePickerDatetime).getMask() );
	}
}

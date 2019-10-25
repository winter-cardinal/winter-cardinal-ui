/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButtonDatetime, DThemeButtonDatetime } from "../../d-button-datetime";
import { DPickerDatetimes } from "../../d-picker-datetimes";
import { DThemeWhiteButton } from "./d-theme-white-button";

const formatter = ( value: Date, caller: DButtonDatetime ): string => {
	return DPickerDatetimes.format( value, caller.getDatetimeMask() );
};

export class DThemeWhiteButtonDatetime extends DThemeWhiteButton implements DThemeButtonDatetime {
	getTextFormatter(): ( value: Date, caller: DButtonDatetime ) => string {
		return formatter;
	}

	newTextValue(): Date {
		return new Date();
	}
}

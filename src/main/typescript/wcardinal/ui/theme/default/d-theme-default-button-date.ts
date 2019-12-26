/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButtonDate, DThemeButtonDate } from "../../d-button-date";
import { DPickerDates } from "../../d-picker-dates";
import { DThemeWhiteButton } from "./d-theme-default-button";

const formatter = ( value: Date ): string => {
	return DPickerDates.format( value );
};

export class DThemeWhiteButtonDate extends DThemeWhiteButton implements DThemeButtonDate {
	getTextFormatter(): ( value: Date, caller: DButtonDate ) => string {
		return formatter;
	}

	newTextValue(): Date {
		return new Date();
	}
}

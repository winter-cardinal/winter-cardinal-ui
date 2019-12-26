/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButtonDate, DThemeButtonDate } from "../../d-button-date";
import { DPickerDates } from "../../d-picker-dates";
import { DThemeDefaultButton } from "./d-theme-default-button";

const formatter = ( value: Date ): string => {
	return DPickerDates.format( value );
};

export class DThemeDefaultButtonDate extends DThemeDefaultButton implements DThemeButtonDate {
	getTextFormatter(): ( value: Date, caller: DButtonDate ) => string {
		return formatter;
	}

	newTextValue(): Date {
		return new Date();
	}
}

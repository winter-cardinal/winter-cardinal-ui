/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButtonDate, DThemeButtonDate } from "../../d-button-date";
import { DPickerDates } from "../../d-picker-dates";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeWhiteButton } from "./d-theme-white-button";

const formatter = ( value: Date ): string => {
	return DPickerDates.format( value );
};

export class DThemeWhiteButtonDate extends DThemeWhiteButton<Date> implements DThemeButtonDate {
	getTextFormatter(): ( value: Date, caller: DButtonDate ) => string {
		return formatter;
	}

	newTextValue(): DStateAwareOrValueMightBe<Date> {
		return new Date();
	}
}

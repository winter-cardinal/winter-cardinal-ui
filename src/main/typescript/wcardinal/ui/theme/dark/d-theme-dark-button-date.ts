/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButtonDate, DThemeButtonDate } from "../../d-button-date";
import { DPickerDates } from "../../d-picker-dates";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeDarkButton } from "./d-theme-dark-button";

const formatter = ( value: Date ): string => {
	return DPickerDates.format( value );
};

export class DThemeDarkButtonDate extends DThemeDarkButton<Date> implements DThemeButtonDate {
	getTextFormatter(): ( value: Date, caller: DButtonDate ) => string {
		return formatter;
	}

	newTextValue(): DStateAwareOrValueMightBe<Date> {
		return new Date();
	}
}

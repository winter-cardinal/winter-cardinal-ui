/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButtonDatetime, DThemeButtonDatetime } from "../../d-button-datetime";
import { DPickerDatetimes } from "../../d-picker-datetimes";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeDarkButton } from "./d-theme-dark-button";

const formatter = ( value: Date, caller: DButtonDatetime ): string => {
	return DPickerDatetimes.format( value, caller.getDatetimeMask() );
};

export class DThemeDarkButtonDatetime extends DThemeDarkButton<Date> implements DThemeButtonDatetime {
	getTextFormatter(): ( value: Date, caller: DButtonDatetime ) => string {
		return formatter;
	}

	newTextValue(): DStateAwareOrValueMightBe<Date> {
		return new Date();
	}
}

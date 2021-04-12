/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButtonTime, DThemeButtonTime } from "../../d-button-time";
import { DPickerTimes } from "../../d-picker-times";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeDarkButton } from "./d-theme-dark-button";

const formatter = (value: Date, caller: DButtonTime): string => {
	return DPickerTimes.format(value, caller.getDatetimeMask());
};

export class DThemeDarkButtonTime extends DThemeDarkButton<Date> implements DThemeButtonTime {
	getTextFormatter(): (value: Date, caller: DButtonTime) => string {
		return formatter;
	}

	newTextValue(): DStateAwareOrValueMightBe<Date> {
		return new Date();
	}
}

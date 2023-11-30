/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import {
	DPickerDatetimeDateDecorator,
	DPickerDatetimeDayLabels,
	DPickerDatetimeLabelFormatter,
	DThemePickerDatetime
} from "../../d-picker-datetime";
import { DPickerDatetimeButtonBackOptions } from "../../d-picker-datetime-button-back";
import { DPickerDatetimeButtonNextOptions } from "../../d-picker-datetime-button-next";
import { DPickerDatetimeMask } from "../../d-picker-datetime-mask";
import { DThemeWhiteEnUsPickerTime } from "./d-theme-white-en-us-picker-time";

const MONTH_LABELS = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

const DAY_LABELS: DPickerDatetimeDayLabels = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const defaultLabelFormatter = (date: Date): string => {
	return `${MONTH_LABELS[date.getMonth()]} ${date.getFullYear()}`;
};

const defaultDateDecorator = (): void => {
	/* DO NOTHING*/
};

export class DThemeWhiteEnUsPickerDatetime
	extends DThemeWhiteEnUsPickerTime
	implements DThemePickerDatetime
{
	getDayLabels(): DPickerDatetimeDayLabels {
		return DAY_LABELS;
	}

	getLabelFormatter(): DPickerDatetimeLabelFormatter {
		return defaultLabelFormatter;
	}

	getDateDecorator(): DPickerDatetimeDateDecorator {
		return defaultDateDecorator;
	}

	getBackButtonOptions(): DPickerDatetimeButtonBackOptions | null {
		return {
			title: "Previous"
		};
	}

	getNextButtonOptions(): DPickerDatetimeButtonNextOptions | null {
		return {
			title: "Next"
		};
	}

	getDayStart(): number {
		return 0;
	}

	getMask(): DPickerDatetimeMask {
		return DPickerDatetimeMask.DATE | super.getMask();
	}
}

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
import { DThemeWhiteJaJpPickerTime } from "./d-theme-white-ja-jp-picker-time";

const MONTH_LABELS = [
	"1月",
	"2月",
	"3月",
	"4月",
	"5月",
	"6月",
	"7月",
	"8月",
	"9月",
	"10月",
	"11月",
	"12月"
];

const DAY_LABELS: DPickerDatetimeDayLabels = ["日", "月", "火", "水", "木", "金", "土"];

const defaultLabelFormatter = (date: Date): string => {
	return `${date.getFullYear()}年${MONTH_LABELS[date.getMonth()]}`;
};

const defaultDateDecorator = (): void => {
	/* DO NOTHING*/
};

export class DThemeWhiteJaJpPickerDatetime
	extends DThemeWhiteJaJpPickerTime
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
			title: "前月"
		};
	}

	getNextButtonOptions(): DPickerDatetimeButtonNextOptions | null {
		return {
			title: "翌月"
		};
	}

	getDayStart(): number {
		return 0;
	}

	getMask(): DPickerDatetimeMask {
		return DPickerDatetimeMask.DATE | super.getMask();
	}
}

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DInputIntegerOptions } from "../../d-input-integer";
import { DThemeWhitePickerTime } from "./d-theme-white-picker-time";

export class DThemeWhiteJaJpPickerTime extends DThemeWhitePickerTime {
	override getHoursOptions(): DInputIntegerOptions {
		return {
			width: 100,
			title: "時"
		};
	}

	override getMinutesOptions(): DInputIntegerOptions {
		return {
			width: 100,
			title: "分"
		};
	}

	override getSecondsOptions(): DInputIntegerOptions {
		return {
			width: 100,
			title: "秒"
		};
	}
}

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DInputIntegerOptions } from "../../d-input-integer";
import { DThemeDarkPickerTime } from "./d-theme-dark-picker-time";

export class DThemeDarkJaJpPickerTime extends DThemeDarkPickerTime {
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

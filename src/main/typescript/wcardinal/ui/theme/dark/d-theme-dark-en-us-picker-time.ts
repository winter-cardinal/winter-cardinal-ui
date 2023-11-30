/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DInputIntegerOptions } from "../../d-input-integer";
import { DThemeDarkPickerTime } from "./d-theme-dark-picker-time";

export class DThemeDarkEnUsPickerTime extends DThemeDarkPickerTime {
	override getHoursOptions(): DInputIntegerOptions {
		return {
			width: 100,
			title: "Hours"
		};
	}

	override getMinutesOptions(): DInputIntegerOptions {
		return {
			width: 100,
			title: "Minutes"
		};
	}

	override getSecondsOptions(): DInputIntegerOptions {
		return {
			width: 100,
			title: "Seconds"
		};
	}
}

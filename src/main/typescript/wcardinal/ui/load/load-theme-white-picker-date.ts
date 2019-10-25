/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhitePickerDate } from "../theme/white/d-theme-white-picker-date";
import { loadThemeWhitePickerDatetime } from "./load-theme-white-picker-datetime";

export const loadThemeWhitePickerDate = () => {
	DThemeWhite.set( "DPickerDate", DThemeWhitePickerDate );
	loadThemeWhitePickerDatetime();
};

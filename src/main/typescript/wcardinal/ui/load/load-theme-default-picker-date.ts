/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhitePickerDate } from "../theme/default/d-theme-default-picker-date";
import { loadThemeWhitePickerDatetime } from "./load-theme-default-picker-datetime";

export const loadThemeWhitePickerDate = () => {
	DThemeWhite.set( "DPickerDate", DThemeWhitePickerDate );
	loadThemeWhitePickerDatetime();
};

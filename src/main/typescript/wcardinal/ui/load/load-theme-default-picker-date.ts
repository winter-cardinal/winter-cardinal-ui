/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultPickerDate } from "../theme/default/d-theme-default-picker-date";
import { loadThemeDefaultPickerDatetime } from "./load-theme-default-picker-datetime";

export const loadThemeDefaultPickerDate = () => {
	DThemeDefault.set( "DPickerDate", DThemeDefaultPickerDate );
	loadThemeDefaultPickerDatetime();
};

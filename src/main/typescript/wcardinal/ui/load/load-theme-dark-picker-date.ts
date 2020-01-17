/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkPickerDate } from "../theme/dark/d-theme-dark-picker-date";
import { loadThemeDarkPickerDatetime } from "./load-theme-dark-picker-datetime";

export const loadThemeDarkPickerDate = () => {
	DThemeDark.set( "DPickerDate", DThemeDarkPickerDate );
	loadThemeDarkPickerDatetime();
};

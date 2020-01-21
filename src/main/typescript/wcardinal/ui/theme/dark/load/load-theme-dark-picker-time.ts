/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkPickerTime } from "../d-theme-dark-picker-time";

export const loadThemeDarkPickerTime = () => {
	DThemeDark.set( "DPickerTime", DThemeDarkPickerTime );
};

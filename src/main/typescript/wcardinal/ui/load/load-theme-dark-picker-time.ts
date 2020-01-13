/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkPickerTime } from "../theme/dark/d-theme-dark-picker-time";

export const loadThemeDarkPickerTime = () => {
	DThemeDark.set( "DPickerTime", DThemeDarkPickerTime );
};

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhitePickerTime } from "../theme/white/d-theme-white-picker-time";

export const loadThemeWhitePickerTime = () => {
	DThemeWhite.set( "DPickerTime", DThemeWhitePickerTime );
};

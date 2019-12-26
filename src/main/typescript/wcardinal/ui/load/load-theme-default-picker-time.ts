/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhitePickerTime } from "../theme/default/d-theme-default-picker-time";

export const loadThemeWhitePickerTime = () => {
	DThemeWhite.set( "DPickerTime", DThemeWhitePickerTime );
};

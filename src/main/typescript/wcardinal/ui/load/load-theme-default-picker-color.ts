/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhitePickerColor } from "../theme/white/d-theme-white-picker-color";

export const loadThemeWhitePickerColor = () => {
	DThemeWhite.set( "DPickerColor", DThemeWhitePickerColor );
};

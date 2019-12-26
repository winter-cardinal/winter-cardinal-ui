/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhitePickerColor } from "../theme/default/d-theme-default-picker-color";

export const loadThemeWhitePickerColor = () => {
	DThemeWhite.set( "DPickerColor", DThemeWhitePickerColor );
};

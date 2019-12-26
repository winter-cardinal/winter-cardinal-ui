/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultPickerColor } from "../theme/default/d-theme-default-picker-color";

export const loadThemeDefaultPickerColor = () => {
	DThemeDefault.set( "DPickerColor", DThemeDefaultPickerColor );
};

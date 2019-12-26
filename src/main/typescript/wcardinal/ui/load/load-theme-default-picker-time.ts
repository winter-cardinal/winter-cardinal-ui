/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultPickerTime } from "../theme/default/d-theme-default-picker-time";

export const loadThemeDefaultPickerTime = () => {
	DThemeDefault.set( "DPickerTime", DThemeDefaultPickerTime );
};

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkPickerColor } from "../theme/dark/d-theme-dark-picker-color";

export const loadThemeDarkPickerColor = () => {
	DThemeDark.set( "DPickerColor", DThemeDarkPickerColor );
};

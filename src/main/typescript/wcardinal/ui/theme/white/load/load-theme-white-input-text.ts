/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteInputText } from "../d-theme-white-input-text";

export const loadThemeWhiteInputText = () => {
	DThemeWhite.set( "DInputText", DThemeWhiteInputText );
};

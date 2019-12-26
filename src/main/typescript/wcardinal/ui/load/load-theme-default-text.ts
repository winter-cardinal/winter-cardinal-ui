/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteText } from "../theme/white/d-theme-white-text";

export const loadThemeWhiteText = () => {
	DThemeWhite.set( "DText", DThemeWhiteText );
};

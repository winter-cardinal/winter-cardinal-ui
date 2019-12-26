/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteButton } from "../theme/white/d-theme-white-button";

export const loadThemeWhiteButton = () => {
	DThemeWhite.set( "DButton", DThemeWhiteButton );
};

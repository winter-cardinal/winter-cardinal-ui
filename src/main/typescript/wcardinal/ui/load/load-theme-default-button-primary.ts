/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteButtonPrimary } from "../theme/white/d-theme-white-button-primary";

export const loadThemeWhiteButtonPrimary = () => {
	DThemeWhite.set( "DButtonPrimary", DThemeWhiteButtonPrimary );
};

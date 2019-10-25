/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteButtonSecondary } from "../theme/white/d-theme-white-button-secondary";

export const loadThemeWhiteButtonSecondary = () => {
	DThemeWhite.set( "DButtonSecondary", DThemeWhiteButtonSecondary );
};

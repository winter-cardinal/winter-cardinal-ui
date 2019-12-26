/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteButtonCheck } from "../theme/white/d-theme-white-button-check";

export const loadThemeWhiteButtonCheck = () => {
	DThemeWhite.set( "DButtonCheck", DThemeWhiteButtonCheck );
};

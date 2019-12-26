/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteBase } from "../theme/white/d-theme-white-base";

export const loadThemeWhiteBase = () => {
	DThemeWhite.set( "DBase", DThemeWhiteBase );
};

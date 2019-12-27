/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteView } from "../theme/white/d-theme-white-view";

export const loadThemeWhiteView = () => {
	DThemeWhite.set( "DView", DThemeWhiteView );
};

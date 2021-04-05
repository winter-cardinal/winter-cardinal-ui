/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteView } from "../d-theme-white-view";

export const loadThemeWhiteView = (): void => {
	DThemeWhite.set( "DView", DThemeWhiteView );
};

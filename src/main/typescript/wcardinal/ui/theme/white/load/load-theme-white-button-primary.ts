/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteButtonPrimary } from "../d-theme-white-button-primary";

export const loadThemeWhiteButtonPrimary = (): void => {
	DThemeWhite.set( "DButtonPrimary", DThemeWhiteButtonPrimary );
};

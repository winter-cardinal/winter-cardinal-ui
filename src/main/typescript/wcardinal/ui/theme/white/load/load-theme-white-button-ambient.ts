/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteButtonAmbient } from "../d-theme-white-button-ambient";

export const loadThemeWhiteButtonAmbient = () => {
	DThemeWhite.set( "DButtonAmbient", DThemeWhiteButtonAmbient );
};

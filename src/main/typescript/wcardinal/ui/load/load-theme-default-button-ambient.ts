/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteButtonAmbient } from "../theme/default/d-theme-default-button-ambient";

export const loadThemeWhiteButtonAmbient = () => {
	DThemeWhite.set( "DButtonAmbient", DThemeWhiteButtonAmbient );
};

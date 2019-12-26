/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteButtonCheckRight } from "../theme/white/d-theme-white-button-check-right";

export const loadThemeWhiteButtonCheckRight = () => {
	DThemeWhite.set( "DButtonCheckRight", DThemeWhiteButtonCheckRight );
};

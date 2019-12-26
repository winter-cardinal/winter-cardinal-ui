/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteButtonRadioRight } from "../theme/white/d-theme-white-button-radio-right";

export const loadThemeWhiteButtonRadioRight = () => {
	DThemeWhite.set( "DButtonRadioRight", DThemeWhiteButtonRadioRight );
};

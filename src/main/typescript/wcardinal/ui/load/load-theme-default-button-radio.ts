/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteButtonRadio } from "../theme/white/d-theme-white-button-radio";

export const loadThemeWhiteButtonRadio = () => {
	DThemeWhite.set( "DButtonRadio", DThemeWhiteButtonRadio );
};

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteButtonRadio } from "../theme/default/d-theme-default-button-radio";

export const loadThemeWhiteButtonRadio = () => {
	DThemeWhite.set( "DButtonRadio", DThemeWhiteButtonRadio );
};

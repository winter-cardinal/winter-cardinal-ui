/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteButtonRadioRight } from "../theme/default/d-theme-default-button-radio-right";

export const loadThemeWhiteButtonRadioRight = () => {
	DThemeWhite.set( "DButtonRadioRight", DThemeWhiteButtonRadioRight );
};

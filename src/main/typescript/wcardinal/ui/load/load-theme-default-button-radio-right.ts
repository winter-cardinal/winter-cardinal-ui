/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultButtonRadioRight } from "../theme/default/d-theme-default-button-radio-right";

export const loadThemeDefaultButtonRadioRight = () => {
	DThemeDefault.set( "DButtonRadioRight", DThemeDefaultButtonRadioRight );
};

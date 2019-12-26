/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultButtonRadio } from "../theme/default/d-theme-default-button-radio";

export const loadThemeDefaultButtonRadio = () => {
	DThemeDefault.set( "DButtonRadio", DThemeDefaultButtonRadio );
};

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultButtonCheck } from "../theme/default/d-theme-default-button-check";

export const loadThemeDefaultButtonCheck = () => {
	DThemeDefault.set( "DButtonCheck", DThemeDefaultButtonCheck );
};

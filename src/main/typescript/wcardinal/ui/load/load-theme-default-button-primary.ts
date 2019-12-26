/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultButtonPrimary } from "../theme/default/d-theme-default-button-primary";

export const loadThemeDefaultButtonPrimary = () => {
	DThemeDefault.set( "DButtonPrimary", DThemeDefaultButtonPrimary );
};

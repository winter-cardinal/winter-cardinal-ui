/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultButton } from "../theme/default/d-theme-default-button";

export const loadThemeDefaultButton = () => {
	DThemeDefault.set( "DButton", DThemeDefaultButton );
};

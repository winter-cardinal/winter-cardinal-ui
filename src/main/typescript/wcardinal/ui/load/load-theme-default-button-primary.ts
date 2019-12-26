/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteButtonPrimary } from "../theme/default/d-theme-default-button-primary";

export const loadThemeWhiteButtonPrimary = () => {
	DThemeWhite.set( "DButtonPrimary", DThemeWhiteButtonPrimary );
};

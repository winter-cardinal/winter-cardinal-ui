/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteButton } from "../theme/default/d-theme-default-button";

export const loadThemeWhiteButton = () => {
	DThemeWhite.set( "DButton", DThemeWhiteButton );
};

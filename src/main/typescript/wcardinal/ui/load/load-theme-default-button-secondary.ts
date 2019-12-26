/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteButtonSecondary } from "../theme/default/d-theme-default-button-secondary";

export const loadThemeWhiteButtonSecondary = () => {
	DThemeWhite.set( "DButtonSecondary", DThemeWhiteButtonSecondary );
};

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteButtonCheck } from "../theme/default/d-theme-default-button-check";

export const loadThemeWhiteButtonCheck = () => {
	DThemeWhite.set( "DButtonCheck", DThemeWhiteButtonCheck );
};

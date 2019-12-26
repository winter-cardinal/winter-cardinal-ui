/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteBase } from "../theme/default/d-theme-default-base";

export const loadThemeWhiteBase = () => {
	DThemeWhite.set( "DBase", DThemeWhiteBase );
};

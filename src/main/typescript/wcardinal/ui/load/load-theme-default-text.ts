/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteText } from "../theme/default/d-theme-default-text";

export const loadThemeWhiteText = () => {
	DThemeWhite.set( "DText", DThemeWhiteText );
};

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultText } from "../theme/default/d-theme-default-text";

export const loadThemeDefaultText = () => {
	DThemeDefault.set( "DText", DThemeDefaultText );
};

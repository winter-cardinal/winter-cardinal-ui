/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteInputText } from "../theme/default/d-theme-default-input-text";

export const loadThemeWhiteInputText = () => {
	DThemeWhite.set( "DInputText", DThemeWhiteInputText );
};

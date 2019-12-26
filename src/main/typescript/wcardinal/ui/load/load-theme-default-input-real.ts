/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteInputReal } from "../theme/default/d-theme-default-input-real";

export const loadThemeWhiteInputReal = () => {
	DThemeWhite.set( "DInputReal", DThemeWhiteInputReal );
};

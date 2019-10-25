/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteInputReal } from "../theme/white/d-theme-white-input-real";

export const loadThemeWhiteInputReal = () => {
	DThemeWhite.set( "DInputReal", DThemeWhiteInputReal );
};

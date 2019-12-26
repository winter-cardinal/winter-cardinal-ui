/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteInputInteger } from "../theme/white/d-theme-white-input-integer";

export const loadThemeWhiteInputInteger = () => {
	DThemeWhite.set( "DInputInteger", DThemeWhiteInputInteger );
};

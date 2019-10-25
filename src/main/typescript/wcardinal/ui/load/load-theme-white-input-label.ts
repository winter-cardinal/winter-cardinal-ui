/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteInputLabel } from "../theme/white/d-theme-white-input-label";

export const loadThemeWhiteInputLabel = () => {
	DThemeWhite.set( "DInputLabel", DThemeWhiteInputLabel );
};

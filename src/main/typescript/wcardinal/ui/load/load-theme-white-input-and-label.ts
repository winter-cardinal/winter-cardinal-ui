/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteInputAndLabel } from "../theme/white/d-theme-white-input-and-label";

export const loadThemeWhiteInputAndLabel = () => {
	DThemeWhite.set( "DInputAndLabel", DThemeWhiteInputAndLabel );
};

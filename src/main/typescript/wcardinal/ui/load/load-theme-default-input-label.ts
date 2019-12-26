/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteInputLabel } from "../theme/default/d-theme-default-input-label";

export const loadThemeWhiteInputLabel = () => {
	DThemeWhite.set( "DInputLabel", DThemeWhiteInputLabel );
};

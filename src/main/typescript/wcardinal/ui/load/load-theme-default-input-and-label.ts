/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteInputAndLabel } from "../theme/default/d-theme-default-input-and-label";

export const loadThemeWhiteInputAndLabel = () => {
	DThemeWhite.set( "DInputAndLabel", DThemeWhiteInputAndLabel );
};

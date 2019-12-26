/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteInputInteger } from "../theme/default/d-theme-default-input-integer";

export const loadThemeWhiteInputInteger = () => {
	DThemeWhite.set( "DInputInteger", DThemeWhiteInputInteger );
};

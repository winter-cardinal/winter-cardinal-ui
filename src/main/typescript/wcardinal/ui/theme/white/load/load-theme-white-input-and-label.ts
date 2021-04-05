/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteInputAndLabel } from "../d-theme-white-input-and-label";

export const loadThemeWhiteInputAndLabel = (): void => {
	DThemeWhite.set( "DInputAndLabel", DThemeWhiteInputAndLabel );
};

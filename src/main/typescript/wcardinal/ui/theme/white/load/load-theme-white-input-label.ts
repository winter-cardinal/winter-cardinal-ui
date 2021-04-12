/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteInputLabel } from "../d-theme-white-input-label";

export const loadThemeWhiteInputLabel = (): void => {
	DThemeWhite.set("DInputLabel", DThemeWhiteInputLabel);
};

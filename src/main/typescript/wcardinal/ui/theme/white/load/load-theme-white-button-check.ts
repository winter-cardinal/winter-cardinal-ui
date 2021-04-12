/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteButtonCheck } from "../d-theme-white-button-check";

export const loadThemeWhiteButtonCheck = (): void => {
	DThemeWhite.set("DButtonCheck", DThemeWhiteButtonCheck);
};

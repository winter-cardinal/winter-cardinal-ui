/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteButton } from "../d-theme-white-button";

export const loadThemeWhiteButton = (): void => {
	DThemeWhite.set("DButton", DThemeWhiteButton);
};

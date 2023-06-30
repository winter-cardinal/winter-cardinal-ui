/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteColorRecent } from "../d-theme-white-color-recent";
import { DThemeWhiteColorStandard } from "../d-theme-white-color-standard";

export const loadThemeWhiteColor = (): void => {
	DThemeWhite.set("DColorRecent", DThemeWhiteColorRecent);
	DThemeWhite.set("DColorStandard", DThemeWhiteColorStandard);
};

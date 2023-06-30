/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkColorRecent } from "../d-theme-dark-color-recent";
import { DThemeDarkColorStandard } from "../d-theme-dark-color-standard";

export const loadThemeDarkColor = (): void => {
	DThemeDark.set("DColorRecent", DThemeDarkColorRecent);
	DThemeDark.set("DColorStandard", DThemeDarkColorStandard);
};

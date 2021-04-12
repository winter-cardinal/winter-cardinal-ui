/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteButtonLink } from "../d-theme-white-button-link";

export const loadThemeWhiteButtonLink = (): void => {
	DThemeWhite.set("DButtonLink", DThemeWhiteButtonLink);
};

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteEnUsLink } from "../d-theme-white-en-us-link";

export const loadThemeWhiteEnUsLink = (): void => {
	DThemeWhite.set("DLink", DThemeWhiteEnUsLink);
};

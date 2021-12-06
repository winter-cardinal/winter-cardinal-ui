/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteLink } from "../d-theme-white-link";

export const loadThemeWhiteLink = (): void => {
	DThemeWhite.set("DLink", DThemeWhiteLink);
};

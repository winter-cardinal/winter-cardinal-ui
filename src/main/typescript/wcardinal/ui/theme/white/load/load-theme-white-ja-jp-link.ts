/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteJaJpLink } from "../d-theme-white-ja-jp-link";

export const loadThemeWhiteJaJpLink = (): void => {
	DThemeWhite.set("DLink", DThemeWhiteJaJpLink);
};

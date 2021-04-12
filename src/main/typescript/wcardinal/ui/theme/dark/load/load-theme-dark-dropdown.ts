/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkDropdown } from "../d-theme-dark-dropdown";

export const loadThemeDarkDropdown = (): void => {
	DThemeDark.set("DDropdown", DThemeDarkDropdown);
};

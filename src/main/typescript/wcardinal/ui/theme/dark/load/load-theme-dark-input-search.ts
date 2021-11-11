/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkInputSearch } from "../d-theme-dark-input-search";

export const loadThemeDarkInputSearch = (): void => {
	DThemeDark.set("DInputSearch", DThemeDarkInputSearch);
};

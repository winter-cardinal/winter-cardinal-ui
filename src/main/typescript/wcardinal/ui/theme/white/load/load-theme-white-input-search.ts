/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteInputSearch } from "../d-theme-white-input-search";

export const loadThemeWhiteInputSearch = (): void => {
	DThemeWhite.set("DInputSearch", DThemeWhiteInputSearch);
};

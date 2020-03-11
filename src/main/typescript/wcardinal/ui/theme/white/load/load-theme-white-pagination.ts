/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhitePagination } from "../d-theme-white-pagination";

export const loadThemeWhitePagination = () => {
	DThemeWhite.set( "DPagination", DThemeWhitePagination );
};

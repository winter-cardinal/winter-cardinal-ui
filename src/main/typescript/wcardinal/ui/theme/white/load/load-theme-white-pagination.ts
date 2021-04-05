/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhitePagination } from "../d-theme-white-pagination";
import { DThemeWhitePaginationDotsButton } from "../d-theme-white-pagination-dots-button";
import { DThemeWhitePaginationDynamicButtons } from "../d-theme-white-pagination-dynamic-buttons";
import { DThemeWhitePaginationNavigationButton } from "../d-theme-white-pagination-navigation-button";

export const loadThemeWhitePagination = (): void => {
	DThemeWhite.set( "DPagination", DThemeWhitePagination );
	DThemeWhite.set( "DPaginationNavigationButton", DThemeWhitePaginationNavigationButton );
	DThemeWhite.set( "DPaginationDynamicButtons", DThemeWhitePaginationDynamicButtons );
	DThemeWhite.set( "DPaginationDotsButton", DThemeWhitePaginationDotsButton );
};

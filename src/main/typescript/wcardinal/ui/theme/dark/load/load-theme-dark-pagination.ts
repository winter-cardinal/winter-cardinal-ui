/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkPagination } from "../d-theme-dark-pagination";
import { DThemeDarkPaginationDotsButton } from "../d-theme-dark-pagination-dots-button";
import { DThemeDarkPaginationDynamicButtons } from "../d-theme-dark-pagination-dynamic-buttons";
import { DThemeDarkPaginationNavigationButton } from "../d-theme-dark-pagination-navigation-button";

export const loadThemeDarkPagination = (): void => {
	DThemeDark.set( "DPagination", DThemeDarkPagination );
	DThemeDark.set( "DPaginationNavigationButton", DThemeDarkPaginationNavigationButton );
	DThemeDark.set( "DPaginationDynamicButtons", DThemeDarkPaginationDynamicButtons );
	DThemeDark.set( "DPaginationDotsButton", DThemeDarkPaginationDotsButton );
};

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhitePagination } from "../d-theme-white-pagination";
import { DThemeWhitePaginationDots } from "../d-theme-white-pagination-dots";
import { DThemeWhitePaginationButtonLast } from "../d-theme-white-pagination-button-last";
import { DThemeWhitePaginationButtonNext } from "../d-theme-white-pagination-button-next";
import { DThemeWhitePaginationButtonPage } from "../d-theme-white-pagination-button-page";
import { DThemeWhitePaginationButtonPrevious } from "../d-theme-white-pagination-button-previous";
import { DThemeWhitePaginationButtonTop } from "../d-theme-white-pagination-button-top";
import { DThemeWhitePaginationPage } from "../d-theme-white-pagination-page";

export const loadThemeWhitePagination = (): void => {
	DThemeWhite.set("DPagination", DThemeWhitePagination);
	DThemeWhite.set("DPaginationPage", DThemeWhitePaginationPage);
	DThemeWhite.set("DPaginationDots", DThemeWhitePaginationDots);
	DThemeWhite.set("DPaginationButtonLast", DThemeWhitePaginationButtonLast);
	DThemeWhite.set("DPaginationButtonNext", DThemeWhitePaginationButtonNext);
	DThemeWhite.set("DPaginationButtonPage", DThemeWhitePaginationButtonPage);
	DThemeWhite.set("DPaginationButtonPrevious", DThemeWhitePaginationButtonPrevious);
	DThemeWhite.set("DPaginationButtonTop", DThemeWhitePaginationButtonTop);
};

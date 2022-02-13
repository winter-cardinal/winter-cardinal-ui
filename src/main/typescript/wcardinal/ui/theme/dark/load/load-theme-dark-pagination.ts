/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkPagination } from "../d-theme-dark-pagination";
import { DThemeDarkPaginationDots } from "../d-theme-dark-pagination-dots";
import { DThemeDarkPaginationButtonLast } from "../d-theme-dark-pagination-button-last";
import { DThemeDarkPaginationButtonNext } from "../d-theme-dark-pagination-button-next";
import { DThemeDarkPaginationButtonPage } from "../d-theme-dark-pagination-button-page";
import { DThemeDarkPaginationButtonPrevious } from "../d-theme-dark-pagination-button-previous";
import { DThemeDarkPaginationButtonTop } from "../d-theme-dark-pagination-button-top";
import { DThemeDarkPaginationPage } from "../d-theme-dark-pagination-page";

export const loadThemeDarkPagination = (): void => {
	DThemeDark.set("DPagination", DThemeDarkPagination);
	DThemeDark.set("DPaginationPage", DThemeDarkPaginationPage);
	DThemeDark.set("DPaginationDots", DThemeDarkPaginationDots);
	DThemeDark.set("DPaginationButtonLast", DThemeDarkPaginationButtonLast);
	DThemeDark.set("DPaginationButtonNext", DThemeDarkPaginationButtonNext);
	DThemeDark.set("DPaginationButtonPage", DThemeDarkPaginationButtonPage);
	DThemeDark.set("DPaginationButtonPrevious", DThemeDarkPaginationButtonPrevious);
	DThemeDark.set("DPaginationButtonTop", DThemeDarkPaginationButtonTop);
};

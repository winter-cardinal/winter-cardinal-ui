/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase, DBaseOptions, DThemeBase } from "./d-base";

export interface DPaginationOptions<THEME extends DThemePagination> extends DBaseOptions<THEME> {

}

export interface DThemePagination extends DThemeBase {

}

export class DPagination<
	THEME extends DThemePagination = DThemePagination,
	OPTIONS extends DPaginationOptions<THEME> = DPaginationOptions<THEME>
> extends DBase<THEME, OPTIONS> {

}

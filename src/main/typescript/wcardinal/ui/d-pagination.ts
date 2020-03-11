/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DLayoutHorizontal, DLayoutHorizontalOptions, DThemeLayoutHorizontal } from "./d-layout-horizontal";

export interface DPaginationOptions<THEME extends DThemePagination> extends DLayoutHorizontalOptions<THEME> {

}

export interface DThemePagination extends DThemeLayoutHorizontal {

}

export class DPagination<
	THEME extends DThemePagination = DThemePagination,
	OPTIONS extends DPaginationOptions<THEME> = DPaginationOptions<THEME>
> extends DLayoutHorizontal<THEME, OPTIONS> {
	protected init( options ?: OPTIONS ) {
		super.init( options );
	}
}

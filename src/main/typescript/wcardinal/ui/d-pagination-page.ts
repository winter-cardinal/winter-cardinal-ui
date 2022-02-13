/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DImageBase, DImageBaseOptions, DThemeImageBase } from "./d-image-base";

export interface DPaginationPageOptions<THEME extends DThemePaginationPage = DThemePaginationPage>
	extends DImageBaseOptions<number, THEME> {}

export interface DThemePaginationPage extends DThemeImageBase<number> {}

export class DPaginationPage<
	THEME extends DThemePaginationPage = DThemePaginationPage,
	OPTIONS extends DPaginationPageOptions<THEME> = DPaginationPageOptions<THEME>
> extends DImageBase<number, THEME, OPTIONS> {
	protected getType(): string {
		return "DPaginationPage";
	}
}

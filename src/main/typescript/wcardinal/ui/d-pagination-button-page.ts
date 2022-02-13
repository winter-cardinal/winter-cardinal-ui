/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButtonAmbient, DButtonAmbientOptions, DThemeButtonAmbient } from "./d-button-ambient";

export interface DPaginationButtonPageOptions<
	THEME extends DThemePaginationButtonPage = DThemePaginationButtonPage
> extends DButtonAmbientOptions<number, THEME> {}

export interface DThemePaginationButtonPage extends DThemeButtonAmbient<number> {}

export class DPaginationButtonPage<
	THEME extends DThemePaginationButtonPage = DThemePaginationButtonPage,
	OPTIONS extends DPaginationButtonPageOptions<THEME> = DPaginationButtonPageOptions<THEME>
> extends DButtonAmbient<number, THEME, OPTIONS> {
	protected getType(): string {
		return "DPaginationButtonPage";
	}
}

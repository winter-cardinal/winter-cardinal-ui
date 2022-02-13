/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButtonAmbient, DButtonAmbientOptions, DThemeButtonAmbient } from "./d-button-ambient";

export interface DPaginationButtonNextOptions<
	THEME extends DThemePaginationButtonNext = DThemePaginationButtonNext
> extends DButtonAmbientOptions<string, THEME> {}

export interface DThemePaginationButtonNext extends DThemeButtonAmbient<string> {}

export class DPaginationButtonNext<
	THEME extends DThemePaginationButtonNext = DThemePaginationButtonNext,
	OPTIONS extends DPaginationButtonNextOptions<THEME> = DPaginationButtonNextOptions<THEME>
> extends DButtonAmbient<string, THEME, OPTIONS> {
	protected getType(): string {
		return "DPaginationButtonNext";
	}
}

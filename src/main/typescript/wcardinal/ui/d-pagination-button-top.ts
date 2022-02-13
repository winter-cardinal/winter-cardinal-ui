/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButtonAmbient, DButtonAmbientOptions, DThemeButtonAmbient } from "./d-button-ambient";

export interface DPaginationButtonTopOptions<
	THEME extends DThemePaginationButtonTop = DThemePaginationButtonTop
> extends DButtonAmbientOptions<string, THEME> {}

export interface DThemePaginationButtonTop extends DThemeButtonAmbient<string> {}

export class DPaginationButtonTop<
	THEME extends DThemePaginationButtonTop = DThemePaginationButtonTop,
	OPTIONS extends DPaginationButtonTopOptions<THEME> = DPaginationButtonTopOptions<THEME>
> extends DButtonAmbient<string, THEME, OPTIONS> {
	protected getType(): string {
		return "DPaginationButtonTop";
	}
}

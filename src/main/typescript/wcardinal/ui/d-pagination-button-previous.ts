/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButtonAmbient, DButtonAmbientOptions, DThemeButtonAmbient } from "./d-button-ambient";

export interface DPaginationButtonPreviousOptions<
	THEME extends DThemePaginationButtonPrevious = DThemePaginationButtonPrevious
> extends DButtonAmbientOptions<string, THEME> {}

export interface DThemePaginationButtonPrevious extends DThemeButtonAmbient<string> {}

export class DPaginationButtonPrevious<
	THEME extends DThemePaginationButtonPrevious = DThemePaginationButtonPrevious,
	OPTIONS extends DPaginationButtonPreviousOptions<THEME> = DPaginationButtonPreviousOptions<THEME>
> extends DButtonAmbient<string, THEME, OPTIONS> {
	protected getType(): string {
		return "DPaginationButtonPrevious";
	}
}

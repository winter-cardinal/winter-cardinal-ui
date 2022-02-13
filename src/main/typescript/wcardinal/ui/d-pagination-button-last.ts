/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButtonAmbient, DButtonAmbientOptions, DThemeButtonAmbient } from "./d-button-ambient";

export interface DPaginationButtonLastOptions<
	THEME extends DThemePaginationButtonLast = DThemePaginationButtonLast
> extends DButtonAmbientOptions<string, THEME> {}

export interface DThemePaginationButtonLast extends DThemeButtonAmbient<string> {}

export class DPaginationButtonLast<
	THEME extends DThemePaginationButtonLast = DThemePaginationButtonLast,
	OPTIONS extends DPaginationButtonLastOptions<THEME> = DPaginationButtonLastOptions<THEME>
> extends DButtonAmbient<string, THEME, OPTIONS> {
	protected getType(): string {
		return "DPaginationButtonLast";
	}
}

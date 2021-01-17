/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButtonAmbient, DButtonAmbientOptions, DThemeButtonAmbient } from "./d-button-ambient";

export interface DPaginationDotsButtonOptions<
	THEME extends DThemePaginationDotsButton = DThemePaginationDotsButton
> extends DButtonAmbientOptions<string, THEME> {
}

export interface DThemePaginationDotsButton extends DThemeButtonAmbient<string> {

}

export class DPaginationDotsButton<
	THEME extends DThemePaginationDotsButton = DThemePaginationDotsButton,
	OPTIONS extends DPaginationDotsButtonOptions<THEME> = DPaginationDotsButtonOptions<THEME>
> extends DButtonAmbient<string, THEME, OPTIONS> {

	protected getType(): string {
		return "DPaginationDotsButton";
	}
}

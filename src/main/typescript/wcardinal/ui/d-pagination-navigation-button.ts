/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButtonAmbient, DButtonAmbientOptions, DThemeButtonAmbient } from "./d-button-ambient";

export interface DPaginationNavigationButtonOptions<
	VALUE = unknown,
	THEME extends DThemePaginationNavigationButton = DThemePaginationNavigationButton
> extends DButtonAmbientOptions<VALUE, THEME> {
}

export interface DThemePaginationNavigationButton extends DThemeButtonAmbient {

}

export class DPaginationNavigationButton<
	VALUE = unknown,
	THEME extends DThemePaginationNavigationButton = DThemePaginationNavigationButton,
	OPTIONS extends DPaginationNavigationButtonOptions<VALUE, THEME> = DPaginationNavigationButtonOptions<VALUE, THEME>
> extends DButtonAmbient<VALUE, THEME, OPTIONS> {

	protected getType(): string {
		return "DPaginationNavigationButton";
	}
}

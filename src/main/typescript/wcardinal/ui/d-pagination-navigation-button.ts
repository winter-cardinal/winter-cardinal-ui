/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButtonBase, DButtonBaseOptions, DThemeButtonBase } from "./d-button-base";

export interface DPaginationNavigationButtonOptions<
	VALUE = unknown,
	THEME extends DThemePaginationNavigationButton = DThemePaginationNavigationButton
> extends DButtonBaseOptions<VALUE, THEME> {
}

export interface DThemePaginationNavigationButton extends DThemeButtonBase {

}

export class DPaginationNavigationButton<
	VALUE = unknown,
	THEME extends DThemePaginationNavigationButton = DThemePaginationNavigationButton,
	OPTIONS extends DPaginationNavigationButtonOptions<VALUE, THEME> = DPaginationNavigationButtonOptions<VALUE, THEME>
> extends DButtonBase<VALUE, THEME, OPTIONS> {

	protected getType(): string {
		return "DPaginationNavigationButton";
	}
}

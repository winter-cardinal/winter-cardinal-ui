/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButtonAmbient, DButtonAmbientOptions, DThemeButtonAmbient } from "./d-button-ambient";

export interface DPaginationNavigationButtonOptions<
	VALUE = unknown,
	THEME extends DThemePaginationNavigationButton<VALUE> = DThemePaginationNavigationButton<VALUE>
> extends DButtonAmbientOptions<VALUE, THEME> {
}

export interface DThemePaginationNavigationButton<VALUE = unknown> extends DThemeButtonAmbient<VALUE> {

}

export class DPaginationNavigationButton<
	VALUE = unknown,
	THEME extends DThemePaginationNavigationButton<VALUE> = DThemePaginationNavigationButton<VALUE>,
	OPTIONS extends DPaginationNavigationButtonOptions<VALUE, THEME> = DPaginationNavigationButtonOptions<VALUE, THEME>
> extends DButtonAmbient<VALUE, THEME, OPTIONS> {

	protected getType(): string {
		return "DPaginationNavigationButton";
	}
}

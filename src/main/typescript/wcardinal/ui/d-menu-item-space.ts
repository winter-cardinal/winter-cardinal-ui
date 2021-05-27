/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DLayoutSpace, DLayoutSpaceOptions, DThemeLayoutSpace } from "./d-layout-space";

export interface DMenuItemSpaceOptions<THEME extends DThemeMenuItemSpace = DThemeMenuItemSpace>
	extends DLayoutSpaceOptions<THEME> {
	space: true;
}

export interface DThemeMenuItemSpace extends DThemeLayoutSpace {}

export class DMenuItemSpace<
	THEME extends DThemeMenuItemSpace = DThemeMenuItemSpace,
	OPTIONS extends DMenuItemSpaceOptions<THEME> = DMenuItemSpaceOptions<THEME>
> extends DLayoutSpace<THEME, OPTIONS> {
	protected getType(): string {
		return "DMenuItemSpace";
	}
}

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DLayoutVertical, DLayoutVerticalOptions, DThemeLayoutVertical } from "./d-layout-vertical";

export interface DMenuItemExpandableBodyOptions<
	THEME extends DThemeMenuItemExpandableBody = DThemeMenuItemExpandableBody
> extends DLayoutVerticalOptions<THEME> {}

export interface DThemeMenuItemExpandableBody extends DThemeLayoutVertical {}

export class DMenuItemExpandableBody<
	THEME extends DThemeMenuItemExpandableBody = DThemeMenuItemExpandableBody,
	OPTIONS extends DMenuItemExpandableBodyOptions<THEME> = DMenuItemExpandableBodyOptions<THEME>
> extends DLayoutVertical<THEME, OPTIONS> {
	protected getType(): string {
		return "DMenuItemExpandableBody";
	}
}

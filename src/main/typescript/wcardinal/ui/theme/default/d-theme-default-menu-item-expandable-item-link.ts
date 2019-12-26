/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhiteMenuItemLink } from "./d-theme-default-menu-item-link";

export class DThemeWhiteMenuItemExpandableItemLink extends DThemeWhiteMenuItemLink {
	getPaddingLeft(): number {
		return super.getPaddingLeft() + 16;
	}
}

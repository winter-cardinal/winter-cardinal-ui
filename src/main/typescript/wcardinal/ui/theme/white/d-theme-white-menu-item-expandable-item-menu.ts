/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhiteMenuItemMenu } from "./d-theme-white-menu-item-menu";

export class DThemeWhiteMenuItemExpandableItemMenu extends DThemeWhiteMenuItemMenu {
	getPaddingLeft(): number {
		return super.getPaddingLeft() + 16;
	}
}

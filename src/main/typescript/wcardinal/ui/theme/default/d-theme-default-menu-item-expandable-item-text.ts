/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhiteMenuItemText } from "./d-theme-default-menu-item-text";

export class DThemeWhiteMenuItemExpandableItemText extends DThemeWhiteMenuItemText {
	getPaddingLeft(): number {
		return super.getPaddingLeft() + 16;
	}
}

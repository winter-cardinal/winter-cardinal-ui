/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhiteMenuItemCheck } from "./d-theme-default-menu-item-check";

export class DThemeWhiteMenuItemExpandableItemCheck extends DThemeWhiteMenuItemCheck {
	getPaddingLeft(): number {
		return super.getPaddingLeft() + 16;
	}

	getImageMarginHorizontal(): number {
		return super.getImageMarginHorizontal() + 16;
	}
}

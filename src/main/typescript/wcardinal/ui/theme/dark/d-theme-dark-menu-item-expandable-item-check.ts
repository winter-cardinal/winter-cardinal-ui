/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDarkMenuItemCheck } from "./d-theme-dark-menu-item-check";

export class DThemeDarkMenuItemExpandableItemCheck extends DThemeDarkMenuItemCheck {
	getPaddingLeft(): number {
		return super.getPaddingLeft() + 16;
	}

	getImageMarginHorizontal(): number {
		return super.getImageMarginHorizontal() + 16;
	}
}

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDarkMenuItemText } from "./d-theme-dark-menu-item-text";

export class DThemeDarkMenuItemExpandableItemText extends DThemeDarkMenuItemText {
	getPaddingLeft(): number {
		return super.getPaddingLeft() + 16;
	}
}

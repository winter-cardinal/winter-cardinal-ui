/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeMenuItemText } from "../../d-menu-item-text";
import { DThemeDarkMenuItem } from "./d-theme-dark-menu-item";

export class DThemeDarkMenuItemText extends DThemeDarkMenuItem implements DThemeMenuItemText {
	getShortcutTextMargin(): number {
		return this.getPaddingRight();
	}
}

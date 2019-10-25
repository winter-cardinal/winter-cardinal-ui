/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeMenuItemText } from "../../d-menu-item-text";
import { DThemeWhiteMenuItem } from "./d-theme-white-menu-item";

export class DThemeWhiteMenuItemText extends DThemeWhiteMenuItem implements DThemeMenuItemText {
	getShortcutTextMargin(): number {
		return this.getPaddingRight();
	}
}

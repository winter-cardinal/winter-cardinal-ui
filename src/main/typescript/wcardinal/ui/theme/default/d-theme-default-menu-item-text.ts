/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeMenuItemText } from "../../d-menu-item-text";
import { DThemeDefaultMenuItem } from "./d-theme-default-menu-item";

export class DThemeDefaultMenuItemText extends DThemeDefaultMenuItem implements DThemeMenuItemText {
	getShortcutTextMargin(): number {
		return this.getPaddingRight();
	}
}

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefaultMenuItemText } from "./d-theme-default-menu-item-text";

export class DThemeDefaultMenuItemExpandableItemText extends DThemeDefaultMenuItemText {
	getPaddingLeft(): number {
		return super.getPaddingLeft() + 16;
	}
}

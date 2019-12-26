/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefaultMenuItemMenu } from "./d-theme-default-menu-item-menu";

export class DThemeDefaultMenuItemExpandableItemMenu extends DThemeDefaultMenuItemMenu {
	getPaddingLeft(): number {
		return super.getPaddingLeft() + 16;
	}
}

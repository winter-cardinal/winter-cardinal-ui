/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDarkMenuItemMenu } from "./d-theme-dark-menu-item-menu";

export class DThemeDarkMenuItemExpandableItemMenu extends DThemeDarkMenuItemMenu {
	getPaddingLeft(): number {
		return super.getPaddingLeft() + 16;
	}
}

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDarkMenuItemLink } from "./d-theme-dark-menu-item-link";

export class DThemeDarkMenuItemExpandableItemLink extends DThemeDarkMenuItemLink {
	getPaddingLeft(): number {
		return super.getPaddingLeft() + 16;
	}
}

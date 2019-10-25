/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhiteMenuItemSpace } from "./d-theme-white-menu-item-space";

export class DThemeWhiteMenuItemExpandableItemSpace extends DThemeWhiteMenuItemSpace {
	getPaddingLeft(): number {
		return super.getPaddingLeft() + 16;
	}
}

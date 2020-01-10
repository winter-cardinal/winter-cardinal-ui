/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDarkMenuItemSpace } from "./d-theme-dark-menu-item-space";

export class DThemeDarkMenuItemExpandableItemSpace extends DThemeDarkMenuItemSpace {
	getPaddingLeft(): number {
		return super.getPaddingLeft() + 16;
	}
}

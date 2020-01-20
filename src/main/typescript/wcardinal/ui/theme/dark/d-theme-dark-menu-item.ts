/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeMenuItem } from "../../d-menu-item";
import { DThemeDarkListItem } from "./d-theme-dark-list-item";

export class DThemeDarkMenuItem extends DThemeDarkListItem implements DThemeMenuItem {
	getPaddingLeft(): number {
		return this.getPaddingRight();
	}

	getPaddingRight(): number {
		return 26;
	}
}

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeMenuItem } from "../../d-menu-item";
import { DThemeDefaultListItem } from "./d-theme-default-list-item";

export class DThemeDefaultMenuItem extends DThemeDefaultListItem implements DThemeMenuItem {
	getPaddingLeft(): number {
		return this.getPaddingRight();
	}

	getPaddingRight(): number {
		return 26;
	}
}

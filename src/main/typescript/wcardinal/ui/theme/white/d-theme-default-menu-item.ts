/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeMenuItem } from "../../d-menu-item";
import { DThemeWhiteListItem } from "./d-theme-default-list-item";

export class DThemeWhiteMenuItem extends DThemeWhiteListItem implements DThemeMenuItem {
	getPaddingLeft(): number {
		return this.getPaddingRight();
	}

	getPaddingRight(): number {
		return 26;
	}
}

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefaultMenuItemCheck } from "./d-theme-default-menu-item-check";

export class DThemeDefaultMenuItemExpandableItemCheck extends DThemeDefaultMenuItemCheck {
	getPaddingLeft(): number {
		return super.getPaddingLeft() + 16;
	}

	getImageMarginHorizontal(): number {
		return super.getImageMarginHorizontal() + 16;
	}
}

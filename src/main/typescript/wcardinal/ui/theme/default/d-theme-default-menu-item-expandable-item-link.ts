/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefaultMenuItemLink } from "./d-theme-default-menu-item-link";

export class DThemeDefaultMenuItemExpandableItemLink extends DThemeDefaultMenuItemLink {
	getPaddingLeft(): number {
		return super.getPaddingLeft() + 16;
	}
}

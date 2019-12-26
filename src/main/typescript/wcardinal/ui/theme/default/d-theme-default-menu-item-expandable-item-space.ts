/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefaultMenuItemSpace } from "./d-theme-default-menu-item-space";

export class DThemeDefaultMenuItemExpandableItemSpace extends DThemeDefaultMenuItemSpace {
	getPaddingLeft(): number {
		return super.getPaddingLeft() + 16;
	}
}

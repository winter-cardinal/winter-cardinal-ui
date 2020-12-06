/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeMenuItemText } from "../../d-menu-item-text";
import { DThemeWhiteMenuItem } from "./d-theme-white-menu-item";

export class DThemeWhiteMenuItemText extends DThemeWhiteMenuItem implements DThemeMenuItemText {
	getShortcutTextMargin(): number {
		return this.getPaddingRight();
	}

	getShortcutColor( state: DBaseStateSet ): number {
		return this.getColor( state );
	}

	getShortcutAlpha( state: DBaseStateSet ): number {
		return this.getAlpha( state ) * 0.5;
	}
}

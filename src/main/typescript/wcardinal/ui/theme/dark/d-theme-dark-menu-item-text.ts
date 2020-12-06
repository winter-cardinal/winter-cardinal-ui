/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeMenuItemText } from "../../d-menu-item-text";
import { DThemeDarkMenuItem } from "./d-theme-dark-menu-item";

export class DThemeDarkMenuItemText extends DThemeDarkMenuItem implements DThemeMenuItemText {
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

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeMenuItem } from "../../d-menu-item";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhiteMenuItemBase } from "./d-theme-white-menu-item-base";

export class DThemeWhiteMenuItem extends DThemeWhiteMenuItemBase implements DThemeMenuItem {
	protected getBackgroundColorActive(state: DBaseStateSet): number | null {
		return DThemeWhiteConstants.HIGHLIGHT_COLOR;
	}

	protected getBackgroundAlphaActive(state: DBaseStateSet): number {
		return 1.0;
	}

	protected getColorActive(state: DBaseStateSet): number {
		return DThemeWhiteConstants.ACTIVE_COLOR;
	}

	getPaddingLeft(): number {
		return this.getPaddingRight();
	}

	getPaddingRight(): number {
		return 26;
	}
}

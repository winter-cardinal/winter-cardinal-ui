/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeMenuItem } from "../../d-menu-item";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkListItem } from "./d-theme-dark-list-item";

export class DThemeDarkMenuItem extends DThemeDarkListItem implements DThemeMenuItem {
	protected getBackgroundColorActive(state: DBaseStateSet): number | null {
		return DThemeDarkConstants.HIGHLIGHT_COLOR;
	}

	protected getBackgroundAlphaActive(state: DBaseStateSet): number {
		return 1.0;
	}

	protected getColorActive(state: DBaseStateSet): number {
		return DThemeDarkConstants.ACTIVE_COLOR;
	}

	getPaddingLeft(): number {
		return this.getPaddingRight();
	}

	getPaddingRight(): number {
		return 26;
	}
}

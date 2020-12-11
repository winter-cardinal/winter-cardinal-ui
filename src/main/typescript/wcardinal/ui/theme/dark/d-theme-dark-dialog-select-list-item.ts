/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeDialogSelecListItem } from "../../d-dialog-select-list-item";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkListItem } from "./d-theme-dark-list-item";

export class DThemeDarkDialogSelectListItem extends DThemeDarkListItem implements DThemeDialogSelecListItem {
	protected getBackgroundColorActive( state: DBaseStateSet ): number | null {
		return DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR;
	}

	protected getBackgroundAlphaActive( state: DBaseStateSet ): number {
		return DThemeDarkConstants.WEAK_HIGHLIGHT_ALPHA;
	}

	protected getColorActive( state: DBaseStateSet ): number {
		return DThemeDarkConstants.COLOR;
	}

	getCornerMask(): number {
		return DCornerMask.NONE;
	}
}

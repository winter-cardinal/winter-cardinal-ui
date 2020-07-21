/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeDialogSelecListItem } from "../../d-dialog-select-list-item";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkFont } from "./d-theme-dark-font";
import { DThemeDarkListItem } from "./d-theme-dark-list-item";

export class DThemeDarkDialogSelectListItem extends DThemeDarkListItem implements DThemeDialogSelecListItem {
	getBackgroundColor( state: DBaseStateSet ): number | null {
		if( state.inDisabled ) {
			return null;
		} else if( state.isFocused || state.isHovered ) {
			return DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR;
		} else {
			return null;
		}
	}

	getColor( state: DBaseStateSet ): number {
		return DThemeDarkFont.getColor( state );
	}

	getCornerMask(): number {
		return DCornerMask.NONE;
	}
}

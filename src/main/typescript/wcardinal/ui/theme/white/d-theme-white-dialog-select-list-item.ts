/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeDialogSelecListItem } from "../../d-dialog-select-list-item";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhiteFont } from "./d-theme-white-font";
import { DThemeWhiteListItem } from "./d-theme-white-list-item";

export class DThemeWhiteDialogSelectListItem extends DThemeWhiteListItem implements DThemeDialogSelecListItem {
	getBackgroundColor( state: DBaseStateSet ): number | null {
		if( state.inDisabled ) {
			return null;
		} else if( state.isFocused || state.isHovered ) {
			return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
		} else {
			return null;
		}
	}

	getColor( state: DBaseStateSet ): number {
		return DThemeWhiteFont.getColor( state );
	}

	getCornerMask(): number {
		return DCornerMask.NONE;
	}
}

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeTableBodyRow } from "../../d-table-body-row";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhiteTableRow } from "./d-theme-white-table-row";

export class DThemeWhiteTableBodyRow extends DThemeWhiteTableRow implements DThemeTableBodyRow {
	protected readonly BACKGROUND_COLOR_EVEN = DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD;
	protected readonly BACKGROUND_COLOR_ODD = UtilRgb.darken( DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD, 0.01 );

	getBackgroundColor( state: DBaseStateSet ): number | null {
		if( state.inDisabled ) {
			return state.isAlternated ?
				this.BACKGROUND_COLOR_EVEN : this.BACKGROUND_COLOR_ODD;
		} else if( state.isActive ) {
			return DThemeWhiteConstants.HIGHLIGHT_BLENDED_ON_BOARD;
		} else if( state.isFocused || state.isHovered ) {
			return DThemeWhiteConstants.WEAK_HIGHLIGHT_BLENDED_ON_BOARD;
		} else {
			return state.isAlternated ?
				this.BACKGROUND_COLOR_EVEN : this.BACKGROUND_COLOR_ODD;
		}
	}

	getWidth(): DCoordinateSize {
		return "100%";
	}
}

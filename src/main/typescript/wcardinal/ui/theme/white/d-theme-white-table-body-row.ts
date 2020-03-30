/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeTableBodyRow } from "../../d-table-body-row";
import { DTableRowState } from "../../d-table-row-state";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhiteTableRow } from "./d-theme-white-table-row";

export class DThemeWhiteTableBodyRow extends DThemeWhiteTableRow implements DThemeTableBodyRow {
	protected readonly BACKGROUND_COLOR_EVEN = DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD;
	protected readonly BACKGROUND_COLOR_ODD = UtilRgb.darken( DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD, 0.01 );

	getBackgroundColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) ) {
			return ( state & DTableRowState.EVEN ) ?
				this.BACKGROUND_COLOR_EVEN : this.BACKGROUND_COLOR_ODD;
		} else if( DBaseStates.isActive( state ) ) {
			return DThemeWhiteConstants.HIGHLIGHT_BLENDED_ON_BOARD;
		} else if( DBaseStates.isFocused( state ) || DBaseStates.isHovered( state ) ) {
			return DThemeWhiteConstants.WEAK_HIGHLIGHT_BLENDED_ON_BOARD;
		} else {
			return ( state & DTableRowState.EVEN ) ?
				this.BACKGROUND_COLOR_EVEN : this.BACKGROUND_COLOR_ODD;
		}
	}

	getWidth(): DCoordinateSize {
		return "100%";
	}
}

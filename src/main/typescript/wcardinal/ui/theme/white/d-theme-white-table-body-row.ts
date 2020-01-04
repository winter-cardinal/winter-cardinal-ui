/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeTableBodyRow } from "../../d-table-body-row";
import { DTableState } from "../../d-table-state";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhiteTableRow } from "./d-theme-white-table-row";

export class DThemeWhiteTableBodyRow extends DThemeWhiteTableRow implements DThemeTableBodyRow {
	BACKGROUND_COLOR_EVEN = 0xffffff;
	BACKGROUND_COLOR_ODD = UtilRgb.darken( 0xffffff, 0.017 );

	getBackgroundColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) ) {
			return DBaseStates.is( DTableState.EVEN, state ) ?
				this.BACKGROUND_COLOR_EVEN : this.BACKGROUND_COLOR_ODD;
		} else if( DBaseStates.isActive( state ) ) {
			return DThemeWhiteConstants.HIGHLIGHT_BLENDED;
		} else if( DBaseStates.isFocused( state ) || DBaseStates.isHovered( state ) ) {
			return DThemeWhiteConstants.WEAK_HIGHLIGHT_BLENDED;
		} else {
			return DBaseStates.is( DTableState.EVEN, state ) ?
				this.BACKGROUND_COLOR_EVEN : this.BACKGROUND_COLOR_ODD;
		}
	}

	getWidth(): DCoordinateSize {
		return "100%";
	}
}

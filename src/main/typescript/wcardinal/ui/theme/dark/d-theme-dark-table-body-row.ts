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
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkTableRow } from "./d-theme-dark-table-row";

export class DThemeDarkTableBodyRow extends DThemeDarkTableRow implements DThemeTableBodyRow {
	BACKGROUND_COLOR_EVEN = 0x1f1f1f;
	BACKGROUND_COLOR_ODD = UtilRgb.brighten( 0x1f1f1f, 0.02 );

	getBackgroundColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) ) {
			return ( state & DTableRowState.EVEN ) ?
				this.BACKGROUND_COLOR_EVEN : this.BACKGROUND_COLOR_ODD;
		} else if( DBaseStates.isActive( state ) ) {
			return DThemeDarkConstants.HIGHLIGHT_COLOR;
		} else if( DBaseStates.isFocused( state ) || DBaseStates.isHovered( state ) ) {
			return DThemeDarkConstants.WEAK_HIGHLIGHT_BLENDED;
		} else {
			return ( state & DTableRowState.EVEN ) ?
				this.BACKGROUND_COLOR_EVEN : this.BACKGROUND_COLOR_ODD;
		}
	}

	getWidth(): DCoordinateSize {
		return "100%";
	}
}

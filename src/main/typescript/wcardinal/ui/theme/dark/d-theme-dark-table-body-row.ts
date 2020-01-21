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
	BACKGROUND_COLOR_EVEN = null;
	BACKGROUND_COLOR_ODD = 0x1b1b1b;
	COLOR_HOVERED = UtilRgb.brighten( this.BACKGROUND_COLOR_ODD, DThemeDarkConstants.FOCUSED_ALPHA );

	getBackgroundColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) ) {
			return ( state & DTableRowState.EVEN ) ?
				this.BACKGROUND_COLOR_EVEN : this.BACKGROUND_COLOR_ODD;
		}
		if( DBaseStates.isActive( state ) ) {
			return DThemeDarkConstants.HIGHLIGHT_COLOR;
		}
		if( DBaseStates.isFocused( state ) || DBaseStates.isHovered( state ) ) {
			return this.COLOR_HOVERED;
		}
		return ( state & DTableRowState.EVEN ) ?
				this.BACKGROUND_COLOR_EVEN : this.BACKGROUND_COLOR_ODD;
	}

	getWidth(): DCoordinateSize {
		return "100%";
	}
}

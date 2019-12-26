/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DThemeTableBodyRow } from "../../d-table-body-row";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeWhiteConstants } from "./d-theme-default-constants";
import { DThemeWhiteTableBodyRow } from "./d-theme-default-table-body-row";

export class DThemeWhiteTableBodyRowOdd extends DThemeWhiteTableBodyRow implements DThemeTableBodyRow {
	COLOR = UtilRgb.darken( 0xffffff, 0.017 );

	getBackgroundColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) ) {
			return this.COLOR;
		} else if( DBaseStates.isActive( state ) ) {
			return DThemeWhiteConstants.HIGHLIGHT_BLENDED;
		} else if( DBaseStates.isFocused( state ) || DBaseStates.isHovered( state ) ) {
			return DThemeWhiteConstants.WEAK_HIGHLIGHT_BLENDED;
		} else {
			return this.COLOR;
		}
	}
}

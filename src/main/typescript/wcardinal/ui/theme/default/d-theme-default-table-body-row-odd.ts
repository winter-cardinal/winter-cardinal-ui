/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DThemeTableBodyRow } from "../../d-table-body-row";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeDefaultConstants } from "./d-theme-default-constants";
import { DThemeDefaultTableBodyRow } from "./d-theme-default-table-body-row";

export class DThemeDefaultTableBodyRowOdd extends DThemeDefaultTableBodyRow implements DThemeTableBodyRow {
	COLOR = UtilRgb.darken( 0xffffff, 0.017 );

	getBackgroundColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) ) {
			return this.COLOR;
		} else if( DBaseStates.isActive( state ) ) {
			return DThemeDefaultConstants.HIGHLIGHT_BLENDED;
		} else if( DBaseStates.isFocused( state ) || DBaseStates.isHovered( state ) ) {
			return DThemeDefaultConstants.WEAK_HIGHLIGHT_BLENDED;
		} else {
			return this.COLOR;
		}
	}
}

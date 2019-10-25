/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DThemeTableBodyRow } from "../../d-table-body-row";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhiteTableBodyRow } from "./d-theme-white-table-body-row";

export class DThemeWhiteTableBodyRowEven extends DThemeWhiteTableBodyRow implements DThemeTableBodyRow {
	getBackgroundColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) ) {
			return 0xffffff;
		} else if( DBaseStates.isActive( state ) ) {
			return DThemeWhiteConstants.HIGHLIGHT_BLENDED;
		} else if( DBaseStates.isFocused( state ) || DBaseStates.isHovered( state ) ) {
			return DThemeWhiteConstants.WEAK_HIGHLIGHT_BLENDED;
		} else {
			return 0xffffff;
		}
	}
}

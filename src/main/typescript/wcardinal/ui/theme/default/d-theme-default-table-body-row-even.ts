/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DThemeTableBodyRow } from "../../d-table-body-row";
import { DThemeDefaultConstants } from "./d-theme-default-constants";
import { DThemeDefaultTableBodyRow } from "./d-theme-default-table-body-row";

export class DThemeDefaultTableBodyRowEven extends DThemeDefaultTableBodyRow implements DThemeTableBodyRow {
	getBackgroundColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) ) {
			return 0xffffff;
		} else if( DBaseStates.isActive( state ) ) {
			return DThemeDefaultConstants.HIGHLIGHT_BLENDED;
		} else if( DBaseStates.isFocused( state ) || DBaseStates.isHovered( state ) ) {
			return DThemeDefaultConstants.WEAK_HIGHLIGHT_BLENDED;
		} else {
			return 0xffffff;
		}
	}
}

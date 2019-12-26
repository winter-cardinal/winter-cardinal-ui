/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DThemeTableBodyRow } from "../../d-table-body-row";
import { DThemeDefaultTableBodyRow } from "./d-theme-default-table-body-row";

export class DThemeDefaultTableBodyRowEven extends DThemeDefaultTableBodyRow implements DThemeTableBodyRow {
	getBackgroundColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) ) {
			return this.dThemeConfiguration.getTableBodyRowEvenDisabledBackgroundColor();
		} else if( DBaseStates.isActive( state ) ) {
			return this.dThemeConfiguration.getTableBodyRowEvenActiveBackgroundColor();
		} else if( DBaseStates.isFocused( state ) || DBaseStates.isHovered( state ) ) {
			return this.dThemeConfiguration.getTableBodyRowEvenFocusedBackgroundColor();
		} else {
			return this.dThemeConfiguration.getTableBodyRowEvenBackgroundColor();
		}
	}
}

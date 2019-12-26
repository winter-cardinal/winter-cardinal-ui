/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DThemeTableBodyRow } from "../../d-table-body-row";
import { DThemeDefaultTableBodyRow } from "./d-theme-default-table-body-row";

export class DThemeDefaultTableBodyRowOdd extends DThemeDefaultTableBodyRow implements DThemeTableBodyRow {

	getBackgroundColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) ) {
			return this.dThemeConfiguration.getTableBodyRowOddDisabledBackgroundColor();
		} else if( DBaseStates.isActive( state ) ) {
			return this.dThemeConfiguration.getTableBodyRowOddActiveBackgroundColor();
		} else if( DBaseStates.isFocused( state ) || DBaseStates.isHovered( state ) ) {
			return this.dThemeConfiguration.getTableBodyRowOddFocusedBackgroundColor();
		} else {
			return this.dThemeConfiguration.getTableBodyRowOddBackgroundColor();
		}
	}
}

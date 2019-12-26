/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeTableHeader } from "../../d-table-header";
import { DThemeDefaultTableRow } from "./d-theme-default-table-row";

export class DThemeDefaultTableHeader extends DThemeDefaultTableRow implements DThemeTableHeader {

	getBackgroundColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) ) {
			return this.dThemeConfiguration.getTableHeaderDisableBackgroundColor();
		} else if( DBaseStates.isActive( state ) ) {
			return this.dThemeConfiguration.getTableHeaderActiveBackgroundColor();
		} else if( DBaseStates.isPressed( state ) ) {
			return this.dThemeConfiguration.getTableHeaderPressedBackgroundColor();
		} else if( DBaseStates.isFocused( state ) || DBaseStates.isHovered( state ) ) {
			return this.dThemeConfiguration.getTableHeaderFocusedBackgroundColor();
		} else {
			return this.dThemeConfiguration.getTableHeaderBackgroundColor();
		}
	}

	getWidth(): DCoordinateSize {
		return "100%";
	}

	getHeight(): DCoordinateSize {
		return 30;
	}
}

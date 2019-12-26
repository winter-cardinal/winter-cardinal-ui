/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeTableHeader } from "../../d-table-header";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeWhiteConstants } from "./d-theme-default-constants";
import { DThemeWhiteTableRow } from "./d-theme-default-table-row";

export class DThemeWhiteTableHeader extends DThemeWhiteTableRow implements DThemeTableHeader {
	COLOR = 0xf9f9f9;
	COLOR_HOVERED = UtilRgb.darken( this.COLOR, 0.017 );
	COLOR_PRESSED = UtilRgb.darken( this.COLOR, 0.034 );

	getBackgroundColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) ) {
			return null;
		} else if( DBaseStates.isActive( state ) ) {
			return DThemeWhiteConstants.HIGHLIGHT_COLOR;
		} else if( DBaseStates.isPressed( state ) ) {
			return this.COLOR_PRESSED;
		} else if( DBaseStates.isFocused( state ) || DBaseStates.isHovered( state ) ) {
			return this.COLOR_HOVERED;
		} else {
			return this.COLOR;
		}
	}

	getWidth(): DCoordinateSize {
		return "100%";
	}

	getHeight(): DCoordinateSize {
		return 30;
	}
}

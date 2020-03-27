/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeDarkButtonBase } from "./d-theme-dark-button-base";
import { DThemeDarkConstants } from "./d-theme-dark-constants";

export class DThemeDarkButtonDanger extends DThemeDarkButtonBase {
	COLOR = 0xEF9A9A;
	COLOR_HOVERED = UtilRgb.brighten( this.COLOR, 0.1 );
	COLOR_PRESSED = UtilRgb.brighten( this.COLOR, 0.2 );

	getBackgroundColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) ) {
			return null;
		} else if( DBaseStates.isPressed( state ) || DBaseStates.isActive( state ) ) {
			return this.COLOR_PRESSED;
		} else if( DBaseStates.isFocused( state ) || DBaseStates.isHovered( state ) ) {
			return this.COLOR_HOVERED;
		} else {
			return this.COLOR;
		}
	}

	getBorderColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) ) {
			return DThemeDarkConstants.BORDER_COLOR;
		} else {
			return null;
		}
	}

	getColor( state: DBaseState ): number {
		if( DBaseStates.isDisabled( state ) ) {
			return super.getColor( state );
		} else {
			return 0x000000;
		}
	}
}

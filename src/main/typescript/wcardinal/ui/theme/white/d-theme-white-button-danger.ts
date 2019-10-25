/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeWhiteButtonBase } from "./d-theme-white-button-base";

export class DThemeWhiteButtonDanger extends DThemeWhiteButtonBase {
	COLOR = 0xff5566;
	COLOR_HOVERED = UtilRgb.darken( this.COLOR, 0.1 );
	COLOR_PRESSED = UtilRgb.darken( this.COLOR, 0.2 );

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
			return 0xe5e5e5;
		} else {
			return null;
		}
	}

	getColor( state: DBaseState ): number {
		if( DBaseStates.isDisabled( state ) ) {
			return super.getColor( state );
		} else {
			return 0xffffff;
		}
	}
}

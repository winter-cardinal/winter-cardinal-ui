/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeDarkButtonBase } from "./d-theme-dark-button-base";
import { DThemeDarkConstants } from "./d-theme-dark-constants";

export class DThemeDarkButtonPrimary extends DThemeDarkButtonBase {
	COLOR = DThemeDarkConstants.HIGHLIGHT_COLOR;
	COLOR_HOVERED = UtilRgb.darken( this.COLOR, DThemeDarkConstants.FOCUSED_ALPHA );
	COLOR_PRESSED = UtilRgb.darken( this.COLOR, DThemeDarkConstants.PRESSED_ALPHA );
	COLOR_DISABLED = UtilRgb.brighten( 0x000000, DThemeDarkConstants.DISABLED_ALPHA );

	getBackgroundColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) ) {
			return this.COLOR_DISABLED;
		}
		if( DBaseStates.isPressed( state ) || DBaseStates.isActive( state ) ) {
			return this.COLOR_PRESSED;
		}
		if( DBaseStates.isFocused( state ) || DBaseStates.isHovered( state ) ) {
			return this.COLOR_HOVERED;
		}
		return this.COLOR;
	}

	getBorderColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) ) {
			return this.COLOR_DISABLED;
		}
		return null;
	}

	getColor( state: DBaseState ): number {
		if( DBaseStates.isDisabled( state ) ) {
			return super.getColor( state );
		}
		return 0x000000;
	}
}

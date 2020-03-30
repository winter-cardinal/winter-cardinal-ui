/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DThemeDarkButtonBase } from "./d-theme-dark-button-base";

export class DThemeDarkButtonDanger extends DThemeDarkButtonBase {
	constructor() {
		super( 0xef9a9a, 0.1, 0.2 );
	}

	getBackgroundColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) ) {
			return null;
		} else if( DBaseStates.isPressed( state ) || DBaseStates.isActive( state ) ) {
			return this.BACKGROUND_COLOR_PRESSED;
		} else if( DBaseStates.isFocused( state ) || DBaseStates.isHovered( state ) ) {
			return this.BACKGROUND_COLOR_HOVERED;
		} else {
			return this.BACKGROUND_COLOR;
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

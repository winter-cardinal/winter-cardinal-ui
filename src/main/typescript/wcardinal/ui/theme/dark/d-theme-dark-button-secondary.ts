/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeDarkButtonBase } from "./d-theme-dark-button-base";

export class DThemeDarkButtonSecondary<VALUE = unknown> extends DThemeDarkButtonBase<VALUE> {
	constructor() {
		super( 0xb894f6, 0.1, 0.2 );
	}

	getBackgroundColor( state: DBaseStateSet ): number | null {
		if( state.inDisabled ) {
			return null;
		} else if( state.isPressed || state.isActive ) {
			return this.BACKGROUND_COLOR_PRESSED;
		} else if( state.isFocused || state.isHovered ) {
			return this.BACKGROUND_COLOR_HOVERED;
		} else {
			return this.BACKGROUND_COLOR;
		}
	}

	getColor( state: DBaseStateSet ): number {
		if( state.inDisabled ) {
			return super.getColor( state );
		} else {
			return 0x000000;
		}
	}
}

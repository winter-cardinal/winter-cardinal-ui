/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeDarkButtonBase } from "./d-theme-dark-button-base";
import { DThemeDarkConstants } from "./d-theme-dark-constants";

export class DThemeDarkButtonPrimary<VALUE = unknown> extends DThemeDarkButtonBase<VALUE> {
	constructor() {
		super( DThemeDarkConstants.HIGHLIGHT_COLOR, 0.1, 0.2 );
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
			return DThemeDarkConstants.ACTIVE_COLOR;
		}
	}
}

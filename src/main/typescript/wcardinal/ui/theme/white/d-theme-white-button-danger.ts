/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeWhiteButtonBase } from "./d-theme-white-button-base";
import { DThemeWhiteConstants } from "./d-theme-white-constants";

export class DThemeWhiteButtonDanger<VALUE = unknown> extends DThemeWhiteButtonBase<VALUE> {
	constructor() {
		super(0xff5566, 0.1, 0.2);
	}

	getBackgroundColor(state: DBaseStateSet): number | null {
		if (state.inDisabled) {
			return null;
		} else if (state.isPressed || state.isActive) {
			return this.BACKGROUND_COLOR_PRESSED;
		} else if (state.isFocused || state.isHovered) {
			return this.BACKGROUND_COLOR_HOVERED;
		} else {
			return this.BACKGROUND_COLOR;
		}
	}

	getBorderColor(state: DBaseStateSet): number | null {
		if (state.inDisabled) {
			return DThemeWhiteConstants.BORDER_COLOR;
		} else {
			return null;
		}
	}

	getColor(state: DBaseStateSet): number {
		if (state.inDisabled) {
			return super.getColor(state);
		} else {
			return DThemeWhiteConstants.ACTIVE_COLOR;
		}
	}
}

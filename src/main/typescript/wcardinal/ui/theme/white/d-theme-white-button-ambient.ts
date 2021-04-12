/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeButtonAmbient } from "../../d-button-ambient";
import { DThemeWhiteButtonBase } from "./d-theme-white-button-base";
import { DThemeWhiteConstants } from "./d-theme-white-constants";

export class DThemeWhiteButtonAmbient<VALUE = unknown>
	extends DThemeWhiteButtonBase<VALUE>
	implements DThemeButtonAmbient<VALUE> {
	getBackgroundColor(state: DBaseStateSet): number | null {
		if (state.isActive) {
			return DThemeWhiteConstants.HIGHLIGHT_COLOR;
		} else {
			return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
		}
	}

	getBackgroundAlpha(state: DBaseStateSet): number {
		if (state.inEnabled) {
			if (state.isActive) {
				return 1.0;
			} else if (state.isPressed) {
				return DThemeWhiteConstants.WEAK_HIGHLIGHT_ALPHA * 2;
			} else if (state.isFocused || state.isHovered) {
				return DThemeWhiteConstants.WEAK_HIGHLIGHT_ALPHA;
			}
		}
		return 0;
	}

	getBorderColor(state: DBaseStateSet): number | null {
		return null;
	}
}

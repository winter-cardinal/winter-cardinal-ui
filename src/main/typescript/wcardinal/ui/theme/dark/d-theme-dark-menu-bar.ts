/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseStateSet } from "../../d-base-state-set";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeMenuBar } from "../../d-menu-bar";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkLayoutHorizontal } from "./d-theme-dark-layout-horizontal";

export class DThemeDarkMenuBar extends DThemeDarkLayoutHorizontal implements DThemeMenuBar {
	getBackgroundColor(): number | null {
		return DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD;
	}

	getBorderColor(state: DBaseStateSet): number | null {
		return null;
	}

	getHeight(): DCoordinateSize {
		return 30;
	}

	getMargin(): number {
		return 0;
	}

	getPaddingLeft(): number {
		return 5;
	}

	getPaddingRight(): number {
		return 5;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.BOTH;
	}

	newState(state: DBaseStateSet): void {
		super.newState(state);
		state.isFocusRoot = true;
	}
}

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseStateSet } from "../../d-base-state-set";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeMenu } from "../../d-menu";
import { DShadow } from "../../d-shadow";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkLayoutVertical } from "./d-theme-dark-layout-vertical";

export class DThemeDarkMenu extends DThemeDarkLayoutVertical implements DThemeMenu {
	getBackgroundColor(state: DBaseStateSet): number | null {
		return DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD;
	}

	getOffsetX(): number {
		return 5;
	}

	getOffsetY(): number {
		return 5;
	}

	getPaddingTop(): number {
		return 5;
	}

	getPaddingBottom(): number {
		return 5;
	}

	getWidth(): DCoordinateSize {
		return 200;
	}

	getHeight(): DCoordinateSize {
		return "auto";
	}

	getMargin(): number {
		return 0;
	}

	getShadow(): DShadow | null {
		return this.newShadowWeak();
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.BOTH;
	}

	newState(state: DBaseStateSet): void {
		super.newState(state);
		state.isFocusRoot = true;
	}
}

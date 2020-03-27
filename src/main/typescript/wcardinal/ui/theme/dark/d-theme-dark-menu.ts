/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeMenu } from "../../d-menu";
import { DShadow } from "../../d-shadow";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkLayoutVertical } from "./d-theme-dark-layout-vertical";

export class DThemeDarkMenu extends DThemeDarkLayoutVertical implements DThemeMenu {
	getBackgroundColor( state: DBaseState ): number | null {
		return DThemeDarkConstants.BACKGROUND_COLOR;
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

	getMargin(): number {
		return 0;
	}

	getShadow(): DShadow | null {
		return this.newShadowWeak();
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.BOTH;
	}
}

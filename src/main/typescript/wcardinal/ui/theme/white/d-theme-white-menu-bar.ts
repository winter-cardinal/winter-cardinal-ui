/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DCoordinate } from "../../d-coordinate";
import { DThemeMenuBar } from "../../d-menu-bar";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhiteLayoutHorizontal } from "./d-theme-white-layout-horizontal";

export class DThemeWhiteMenuBar extends DThemeWhiteLayoutHorizontal implements DThemeMenuBar {
	getBackgroundColor() {
		return DThemeWhiteConstants.BACKGROUND_COLOR;
	}

	getBorderColor( state: DBaseState ): number | null {
		return null;
	}

	getHeight(): DCoordinate {
		return 30;
	}

	getMargin(): number {
		return 0;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.BOTH;
	}
}

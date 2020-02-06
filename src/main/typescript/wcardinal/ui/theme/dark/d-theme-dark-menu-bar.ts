/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeMenuBar } from "../../d-menu-bar";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkLayoutHorizontal } from "./d-theme-dark-layout-horizontal";

export class DThemeDarkMenuBar extends DThemeDarkLayoutHorizontal implements DThemeMenuBar {
	getBackgroundColor(): number | null {
		return 0x2E2E2E;
	}

	getBorderColor( state: DBaseState ): number | null {
		return 0x646464;
	}

	getHeight(): DCoordinateSize {
		return 30;
	}

	getMargin(): number {
		return 0;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.BOTH;
	}
}

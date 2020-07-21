/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseStateSet } from "../../d-base-state-set";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeMenuBar } from "../../d-menu-bar";
import { DThemeWhiteLayoutHorizontal } from "./d-theme-white-layout-horizontal";

export class DThemeWhiteMenuBar extends DThemeWhiteLayoutHorizontal implements DThemeMenuBar {
	getBackgroundColor(): number | null {
		return 0xfdfdfd;
	}

	getBorderColor( state: DBaseStateSet ): number | null {
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
}

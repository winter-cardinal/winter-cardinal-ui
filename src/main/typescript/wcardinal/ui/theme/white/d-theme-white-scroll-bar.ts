/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeScrollBar } from "../../d-scroll-bar";
import { DThemeWhiteBase } from "./d-theme-white-base";

export class DThemeWhiteScrollBar extends DThemeWhiteBase implements DThemeScrollBar {
	getBackgroundColor( state: DBaseState ): number | null {
		return 0x000000;
	}

	getBackgroundAlpha( state: DBaseState ): number {
		return 0;
	}

	getWidth(): DCoordinateSize {
		return 13;
	}

	getHeight(): DCoordinateSize {
		return 13;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.BOTH;
	}
}

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeScrollBar } from "../../d-scroll-bar";
import { DThemeDarkBase } from "./d-theme-dark-base";

export class DThemeDarkScrollBar extends DThemeDarkBase implements DThemeScrollBar {
	getBackgroundColor( state: DBaseState ): number | null {
		return 0xffffff;
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

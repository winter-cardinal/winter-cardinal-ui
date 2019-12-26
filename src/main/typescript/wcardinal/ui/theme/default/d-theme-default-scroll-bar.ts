/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeScrollBar } from "../../d-scroll-bar";
import { DThemeDefaultBase } from "./d-theme-default-base";

export class DThemeDefaultScrollBar extends DThemeDefaultBase implements DThemeScrollBar {
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

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeMenuBar } from "../../d-menu-bar";
import { DThemeDefaultConstants } from "./d-theme-default-constants";
import { DThemeDefaultLayoutHorizontal } from "./d-theme-default-layout-horizontal";

export class DThemeDefaultMenuBar extends DThemeDefaultLayoutHorizontal implements DThemeMenuBar {
	getBackgroundColor() {
		return DThemeDefaultConstants.BACKGROUND_COLOR;
	}

	getBorderColor( state: DBaseState ): number | null {
		return null;
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

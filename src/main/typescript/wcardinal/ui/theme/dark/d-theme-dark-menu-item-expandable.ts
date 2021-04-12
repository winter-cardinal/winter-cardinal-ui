/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeMenuItemExpandable } from "../../d-menu-item-expandable";
import { DThemeDarkLayoutVertical } from "./d-theme-dark-layout-vertical";

export class DThemeDarkMenuItemExpandable
	extends DThemeDarkLayoutVertical
	implements DThemeMenuItemExpandable {
	getBackgroundColor(state: DBaseStateSet): number | null {
		if (state.isActive) {
			return 0x0f0700;
		}
		return null;
	}

	getBackgroundAlpha(state: DBaseStateSet): number {
		if (state.isActive) {
			return 0.1;
		}
		return 0;
	}

	getMargin(): number {
		return 0;
	}

	getWidth(): DCoordinateSize {
		return "padding";
	}

	getHeight(): DCoordinateSize {
		return "auto";
	}

	getCornerMask(): DCornerMask {
		return DCornerMask.ALL;
	}
}

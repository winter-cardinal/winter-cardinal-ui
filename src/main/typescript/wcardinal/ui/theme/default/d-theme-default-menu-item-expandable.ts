/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner";
import { DThemeMenuItemExpandable } from "../../d-menu-item-expandable";
import { DThemeWhiteLayoutVertical } from "./d-theme-default-layout-vertical";

export class DThemeWhiteMenuItemExpandable extends DThemeWhiteLayoutVertical implements DThemeMenuItemExpandable {
	getBackgroundColor( state: DBaseState ): number | null {
		if( DBaseStates.isActive( state ) ) {
			return 0xf0f8ff;
		}
		return null;
	}

	getBackgroundAlpha( state: DBaseState ): number {
		if( DBaseStates.isActive( state ) ) {
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

	getCornerMask(): DCornerMask {
		return DCornerMask.ALL;
	}
}

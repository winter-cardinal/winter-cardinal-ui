/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DCornerMask } from "../../d-corner";
import { DThemeExpandable } from "../../d-expandable";
import { DThemeWhiteLayoutVertical } from "./d-theme-white-layout-vertical";

export class DThemeWhiteExpandable extends DThemeWhiteLayoutVertical implements DThemeExpandable {
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

	getCornerMask(): DCornerMask {
		return DCornerMask.ALL;
	}
}

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeExpandable } from "../../d-expandable";
import { DThemeDarkLayoutVertical } from "./d-theme-dark-layout-vertical";

export class DThemeDarkExpandable extends DThemeDarkLayoutVertical implements DThemeExpandable {
	getBackgroundColor( state: DBaseStateSet ): number | null {
		if( state.isActive ) {
			return 0x0F0700;
		}
		return null;
	}

	getBackgroundAlpha( state: DBaseStateSet ): number {
		if( state.isActive ) {
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

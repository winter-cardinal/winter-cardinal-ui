/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeBoard } from "../../d-board";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeWhiteBase } from "./d-theme-white-base";
import { DThemeWhiteConstants } from "./d-theme-white-constants";

export class DThemeWhiteBoard extends DThemeWhiteBase implements DThemeBoard {
	getBackgroundColor(): number | null {
		return DThemeWhiteConstants.BACKGROUND_COLOR;
	}

	getBorderColor(state: DBaseStateSet): number | null {
		return null;
	}

	getCornerMask(): number {
		return DCornerMask.ALL;
	}

	getPaddingLeft(): number {
		return 16;
	}

	getPaddingTop(): number {
		return 16;
	}

	getPaddingRight(): number {
		return 16;
	}

	getPaddingBottom(): number {
		return 16;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.BOTH;
	}
}

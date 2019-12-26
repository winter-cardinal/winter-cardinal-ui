/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DThemeBoard } from "../../d-board";
import { DCornerMask } from "../../d-corner";
import { DThemeWhiteBase } from "./d-theme-default-base";
import { DThemeWhiteConstants } from "./d-theme-default-constants";

export class DThemeWhiteBoard extends DThemeWhiteBase implements DThemeBoard {
	getBackgroundColor() {
		return DThemeWhiteConstants.BACKGROUND_COLOR;
	}

	getBorderColor( state: DBaseState ): number | null {
		return null;
	}

	getCornerMask(): number {
		return DCornerMask.ALL;
	}

	getPaddingLeft() {
		return 16;
	}

	getPaddingTop() {
		return 16;
	}

	getPaddingRight() {
		return 16;
	}

	getPaddingBottom() {
		return 16;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.BOTH;
	}
}

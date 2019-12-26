/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DThemeBoard } from "../../d-board";
import { DCornerMask } from "../../d-corner";
import { DThemeDefaultBase } from "./d-theme-default-base";

export class DThemeDefaultBoard extends DThemeDefaultBase implements DThemeBoard {
	getBackgroundColor() {
		return this.dThemeConfiguration.getBoardBackgroundColor();
	}

	getBorderColor( state: DBaseState ): number | null {
		return this.dThemeConfiguration.getBoardBorderColor();
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

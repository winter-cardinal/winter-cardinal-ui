/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DThemeBoard } from "../../d-board";
import { DCornerMask } from "../../d-corner";
import { DThemeDarkBase } from "./d-theme-dark-base";

export class DThemeDarkBoard extends DThemeDarkBase implements DThemeBoard {
	COLOR = 0x2C2C2C;

	getBackgroundColor(): number | null {
		return this.COLOR;
	}

	getBorderColor( state: DBaseState ): number | null {
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

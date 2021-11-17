/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeChart } from "../../d-chart";
import { DThemeWhiteBase } from "./d-theme-white-base";

export class DThemeWhiteChart extends DThemeWhiteBase implements DThemeChart {
	getPaddingLeft(): number {
		return 70;
	}

	getPaddingRight(): number {
		return 10;
	}

	getPaddingTop(): number {
		return 10;
	}

	getPaddingBottom(): number {
		return 70;
	}

	getBorderColor(state: DBaseStateSet): number | null {
		return null;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.BOTH;
	}

	newState(state: DBaseStateSet): void {
		super.newState(state);
		state.isFocusable = false;
	}

	isOverflowMaskEnabled(): boolean {
		return true;
	}
}

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeChart } from "../../d-chart";
import { DThemeDarkBase } from "./d-theme-dark-base";

export class DThemeDarkChart extends DThemeDarkBase implements DThemeChart {
	getPaddingLeft(): number {
		return 80;
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

	isOverflowMaskEnabled(): boolean {
		return true;
	}

	newState(state: DBaseStateSet): void {
		super.newState(state);
		state.isFocusable = false;
	}
}

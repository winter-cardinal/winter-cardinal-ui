/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeLayoutBoard } from "../../d-layout-board";
import { DThemeDarkBase } from "./d-theme-dark-base";

export class DThemeDarkLayoutBoard extends DThemeDarkBase implements DThemeLayoutBoard {
	getBackgroundColor(state: DBaseStateSet): number | null {
		return null;
	}

	getBorderColor(state: DBaseStateSet): number | null {
		return null;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.CHILDREN;
	}

	newState(state: DBaseStateSet): void {
		super.newState(state);
		state.isFocusable = false;
	}
}

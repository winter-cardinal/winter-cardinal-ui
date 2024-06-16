/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeLayoutBoard } from "../../d-layout-board";
import { DThemeWhiteBase } from "./d-theme-white-base";

export class DThemeWhiteLayoutBoard extends DThemeWhiteBase implements DThemeLayoutBoard {
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

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeContent } from "../../d-content";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeDarkBase } from "./d-theme-dark-base";

export class DThemeDarkContent extends DThemeDarkBase implements DThemeContent {
	getWidth(): DCoordinateSize {
		return "100%";
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
}

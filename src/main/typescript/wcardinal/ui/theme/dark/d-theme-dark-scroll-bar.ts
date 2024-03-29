/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseStateSet } from "../../d-base-state-set";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeScrollBar } from "../../d-scroll-bar";
import { DThemeDarkBase } from "./d-theme-dark-base";

export class DThemeDarkScrollBar extends DThemeDarkBase implements DThemeScrollBar {
	getBackgroundColor(state: DBaseStateSet): number | null {
		return 0xffffff;
	}

	getBackgroundAlpha(state: DBaseStateSet): number {
		return 0;
	}

	getWidth(): DCoordinateSize {
		return 13;
	}

	getHeight(): DCoordinateSize {
		return 13;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.BOTH;
	}

	newState(state: DBaseStateSet): void {
		super.newState(state);
		state.isFocusable = false;
	}

	getFadeOutDelay(): number {
		return 1500;
	}
}

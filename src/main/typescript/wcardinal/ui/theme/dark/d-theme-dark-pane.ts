/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseStateSet } from "../../d-base-state-set";
import { UtilGestureMode } from "../../util/util-gesture-mode";
import { DThemePane } from "../../d-pane";
import { DThemeDarkBase } from "./d-theme-dark-base";
import { DThemeDarkConstants } from "./d-theme-dark-constants";

export class DThemeDarkPane extends DThemeDarkBase implements DThemePane {
	isOverflowMaskEnabled(): boolean {
		return true;
	}

	getBackgroundColor(state: DBaseStateSet): number | null {
		return DThemeDarkConstants.BACKGROUND_COLOR;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.BOTH;
	}

	getWheelSpeed(): number {
		return 2.24;
	}

	getGestureMode(): UtilGestureMode {
		return UtilGestureMode.TOUCH;
	}
}

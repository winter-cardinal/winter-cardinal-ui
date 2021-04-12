/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeLayout } from "../../d-layout";
import { DLayoutDirection } from "../../d-layout-direction";
import { DThemeDarkBase } from "./d-theme-dark-base";

export class DThemeDarkLayout extends DThemeDarkBase implements DThemeLayout {
	getBackgroundColor(state: DBaseStateSet): number | null {
		return null;
	}

	getBorderColor(state: DBaseStateSet): number | null {
		return null;
	}

	getMargin(): number {
		return 5;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.CHILDREN;
	}

	getDirection(): DLayoutDirection {
		return DLayoutDirection.VERTICAL;
	}

	getCornerAdjust(): boolean {
		return false;
	}

	getMultiplicity(): number {
		return 1;
	}

	getReverse(): boolean {
		return false;
	}
}

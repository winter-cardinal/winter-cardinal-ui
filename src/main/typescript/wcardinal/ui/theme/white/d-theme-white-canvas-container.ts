/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeCanvasContainer } from "../../d-canvas-container";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeWhiteBase } from "./d-theme-white-base";

export class DThemeWhiteCanvasContainer extends DThemeWhiteBase implements DThemeCanvasContainer {
	getBackgroundColor( state: DBaseStateSet ): number | null {
		return null;
	}

	getBorderColor( state: DBaseStateSet ): number | null {
		return null;
	}

	getPaddingLeft(): number {
		return 32;
	}

	getPaddingTop(): number {
		return 32;
	}

	getPaddingRight(): number {
		return 32;
	}

	getPaddingBottom(): number {
		return 32;
	}

	isOverflowMaskEnabled(): boolean {
		return false;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.BOTH;
	}

	getCornerMask(): DCornerMask {
		return DCornerMask.ALL;
	}
}

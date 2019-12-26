/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DThemeCanvasContainer } from "../../d-canvas-container";
import { DThemeWhiteBase } from "./d-theme-white-base";

export class DThemeWhiteCanvasContainer extends DThemeWhiteBase implements DThemeCanvasContainer {
	getBackgroundColor( state: DBaseState ): number | null {
		return null;
	}

	getBorderColor( state: DBaseState ): number | null {
		return null;
	}

	getPaddingLeft(): number {
		return 50;
	}

	getPaddingTop(): number {
		return 50;
	}

	getPaddingRight(): number {
		return 50;
	}

	getPaddingBottom(): number {
		return 50;
	}

	isOverflowMaskEnabled(): boolean {
		return false;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.BOTH;
	}
}

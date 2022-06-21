/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseStateSet } from "../../d-base-state-set";
import { DBorderMask } from "../../d-border-mask";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeDialogLayeredHeader } from "../../d-dialog-layered-header";
import { DThemeWhiteImageBase } from "./d-theme-white-image-base";

export class DThemeWhiteDialogLayeredHeader
	extends DThemeWhiteImageBase<string>
	implements DThemeDialogLayeredHeader
{
	getWidth(): DCoordinateSize {
		return "padding";
	}

	getHeight(): DCoordinateSize {
		return 38;
	}

	getPaddingLeft(): number {
		return 16;
	}

	getPaddingRight(): number {
		return 16;
	}

	getBackgroundColor(): number | null {
		return 0;
	}

	getBackgroundAlpha(): number {
		return 0.025;
	}

	getCornerMask(): DCornerMask {
		return DCornerMask.BOTTOM;
	}

	getBorderColor(state: DBaseStateSet): number | null {
		return 0;
	}

	getBorderAlpha(state: DBaseStateSet): number {
		return 0.05;
	}

	getBorderMask(state: DBaseStateSet): DBorderMask {
		return DBorderMask.NOT_BOTTOM;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.CHILDREN;
	}

	newState(state: DBaseStateSet): void {
		state.isFocusable = false;
	}
}

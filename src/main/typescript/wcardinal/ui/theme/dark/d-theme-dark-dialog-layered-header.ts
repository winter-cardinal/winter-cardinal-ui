/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseStateSet } from "../../d-base-state-set";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeDialogLayeredHeader } from "../../d-dialog-layered-header";
import { DThemeDarkImageBase } from "./d-theme-dark-image-base";

export class DThemeDarkDialogLayeredHeader
	extends DThemeDarkImageBase<string>
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
		return null;
	}

	getCornerMask(): DCornerMask {
		return DCornerMask.BOTTOM;
	}

	getBorderColor(state: DBaseStateSet): number | null {
		return null;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.CHILDREN;
	}

	newState(state: DBaseStateSet): void {
		state.isFocusable = false;
	}
}

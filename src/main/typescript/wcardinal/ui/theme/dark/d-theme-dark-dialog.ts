/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";
import { DThemeDialog } from "../../d-dialog";
import { DDialogCloseOn } from "../../d-dialog-close-on";
import { DShadow } from "../../d-shadow";
import { DThemeDarkBase } from "./d-theme-dark-base";
import { DThemeDarkConstants } from "./d-theme-dark-constants";

export class DThemeDarkDialog extends DThemeDarkBase implements DThemeDialog {
	closeOn(): DDialogCloseOn {
		return DDialogCloseOn.ESC | DDialogCloseOn.CLICK_OUTSIDE;
	}

	getBackgroundColor() {
		return DThemeDarkConstants.BACKGROUND_COLOR;
	}

	getBorderColor( state: DBaseState ): number | null {
		return 0x404040;
	}

	getPaddingLeft(): number {
		return 16;
	}

	getPaddingTop(): number {
		return 16;
	}

	getPaddingRight(): number {
		return 16;
	}

	getPaddingBottom(): number {
		return 16;
	}

	getX(): DCoordinatePosition {
		return "center";
	}

	getY(): DCoordinatePosition {
		return "center";
	}

	getWidth(): DCoordinateSize {
		return 400;
	}

	getHeight(): DCoordinateSize {
		return "auto";
	}

	getShadow(): DShadow | null {
		return this.newShadow();
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.BOTH;
	}
}

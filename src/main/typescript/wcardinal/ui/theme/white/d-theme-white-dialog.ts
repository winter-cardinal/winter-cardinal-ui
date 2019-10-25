/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DCoordinate } from "../../d-coordinate";
import { DDialogCloseOn, DThemeDialog } from "../../d-dialog";
import { DShadow } from "../../d-shadow";
import { DThemeWhiteBase } from "./d-theme-white-base";
import { DThemeWhiteConstants } from "./d-theme-white-constants";

export class DThemeWhiteDialog extends DThemeWhiteBase implements DThemeDialog {
	closeOn(): DDialogCloseOn {
		return DDialogCloseOn.ESC | DDialogCloseOn.CLICK_OUTSIDE;
	}

	getBackgroundColor() {
		return DThemeWhiteConstants.BACKGROUND_COLOR;
	}

	getBorderColor( state: DBaseState ): number | null {
		return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
	}

	getPaddingLeft() {
		return 16;
	}

	getPaddingTop() {
		return 16;
	}

	getPaddingRight() {
		return 16;
	}

	getPaddingBottom() {
		return 16;
	}

	getX(): DCoordinate {
		return "center";
	}

	getY(): DCoordinate {
		return "center";
	}

	getWidth(): DCoordinate {
		return 400;
	}

	getHeight(): DCoordinate {
		return "auto";
	}

	getShadow(): DShadow | null {
		return this.newShadow();
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.BOTH;
	}
}

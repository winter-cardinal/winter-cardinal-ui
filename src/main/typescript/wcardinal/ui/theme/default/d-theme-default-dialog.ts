/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";
import { DDialogCloseOn, DThemeDialog } from "../../d-dialog";
import { DShadow } from "../../d-shadow";
import { DThemeDefaultBase } from "./d-theme-default-base";

export class DThemeDefaultDialog extends DThemeDefaultBase implements DThemeDialog {
	closeOn(): DDialogCloseOn {
		return DDialogCloseOn.ESC | DDialogCloseOn.CLICK_OUTSIDE;
	}

	getBackgroundColor() {
		return this.dThemeConfiguration.getDialogBackgroundColor();
	}

	getBorderColor( state: DBaseState ): number | null {
		return this.dThemeConfiguration.getDialogBorderColor();
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

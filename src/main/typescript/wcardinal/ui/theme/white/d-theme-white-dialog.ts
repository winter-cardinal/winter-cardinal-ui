/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseStateSet } from "../../d-base-state-set";
import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";
import { DThemeDialog } from "../../d-dialog";
import { DDialogCloseOn } from "../../d-dialog-close-on";
import { DDialogMode } from "../../d-dialog-mode";
import { DShadow } from "../../d-shadow";
import { DThemeWhiteBase } from "./d-theme-white-base";
import { DThemeWhiteConstants } from "./d-theme-white-constants";

export class DThemeWhiteDialog extends DThemeWhiteBase implements DThemeDialog {
	getMode(): DDialogMode {
		return DDialogMode.MODAL;
	}

	closeOn(): DDialogCloseOn {
		return DDialogCloseOn.ESC | DDialogCloseOn.CLICK_OUTSIDE;
	}

	isSticky(): boolean {
		return false;
	}

	getOffsetX(): number {
		return 5;
	}

	getOffsetY(): number {
		return 5;
	}

	getBackgroundColor(): number {
		return DThemeWhiteConstants.BACKGROUND_COLOR;
	}

	getBorderColor(state: DBaseStateSet): number | null {
		return 0xfafafa;
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

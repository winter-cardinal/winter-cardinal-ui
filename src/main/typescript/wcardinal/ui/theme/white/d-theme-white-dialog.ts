/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAnimation } from "../../d-animation";
import { DAnimationFadeIn } from "../../d-animation-fade-in";
import { DBase } from "../../d-base";
import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseStateSet } from "../../d-base-state-set";
import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";
import { DThemeDialog } from "../../d-dialog";
import { DDialogAlign } from "../../d-dialog-align";
import { DDialogCloseOn } from "../../d-dialog-close-on";
import { DDialogMode } from "../../d-dialog-mode";
import { DDialogState } from "../../d-dialog-state";
import { DShadow } from "../../d-shadow";
import { DThemeWhiteBase } from "./d-theme-white-base";
import { DThemeWhiteConstants } from "./d-theme-white-constants";

export class DThemeWhiteDialog extends DThemeWhiteBase implements DThemeDialog {
	getMode(): DDialogMode {
		return DDialogMode.MODAL;
	}

	closeOn(mode: DDialogMode): DDialogCloseOn {
		switch (mode) {
			case DDialogMode.MODAL:
			case DDialogMode.MENU:
				return DDialogCloseOn.ESC | DDialogCloseOn.CLICK_OUTSIDE;
			case DDialogMode.MODELESS:
				return DDialogCloseOn.NONE;
				break;
		}
	}

	isSticky(mode: DDialogMode): boolean {
		return false;
	}

	isGestureEnabled(mode: DDialogMode): boolean {
		switch (mode) {
			case DDialogMode.MODAL:
			case DDialogMode.MODELESS:
				return true;
			case DDialogMode.MENU:
				return false;
		}
	}

	getOffsetX(mode: DDialogMode): number {
		return 5;
	}

	getOffsetY(mode: DDialogMode): number {
		return 5;
	}

	getAlign(mode: DDialogMode): DDialogAlign {
		switch (mode) {
			case DDialogMode.MODAL:
				return DDialogAlign.OVER;
			case DDialogMode.MODELESS:
			case DDialogMode.MENU:
				return DDialogAlign.BOTTOM;
		}
	}

	newAnimation(mode: DDialogMode): DAnimation<DBase> | null {
		switch (mode) {
			case DDialogMode.MODAL:
				return new DAnimationFadeIn();
			case DDialogMode.MODELESS:
				return null;
			case DDialogMode.MENU:
				return null;
		}
	}

	getBackgroundColor(state: DBaseStateSet): number {
		if (state.is(DDialogState.MENU)) {
			return DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD;
		} else {
			return DThemeWhiteConstants.BACKGROUND_COLOR;
		}
	}

	getBorderColor(state: DBaseStateSet): number | null {
		if (state.is(DDialogState.MENU)) {
			return null;
		} else {
			return 0xfafafa;
		}
	}

	getOutlineColor(state: DBaseStateSet): number | null {
		return null;
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
		return 0;
	}

	getY(): DCoordinatePosition {
		return 0;
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

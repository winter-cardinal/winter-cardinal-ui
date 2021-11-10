/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeButtonBase } from "../../d-button-base";
import { DButtonBaseWhen } from "../../d-button-base-when";
import { DCoordinateSize } from "../../d-coordinate";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkImageBase } from "./d-theme-dark-image-base";

export class DThemeDarkButtonBase<VALUE = unknown>
	extends DThemeDarkImageBase<VALUE>
	implements DThemeButtonBase<VALUE>
{
	protected readonly BACKGROUND_COLOR: number;
	protected readonly BACKGROUND_COLOR_HOVERED: number;
	protected readonly BACKGROUND_COLOR_PRESSED: number;

	protected readonly OUTLINE_COLOR: number;

	constructor(
		backgroundColor: number = 0x484848,
		hover: number = 0.017,
		pressed: number = 0.034
	) {
		super();
		this.BACKGROUND_COLOR = backgroundColor;
		this.BACKGROUND_COLOR_HOVERED = UtilRgb.brighten(backgroundColor, hover);
		this.BACKGROUND_COLOR_PRESSED = UtilRgb.brighten(backgroundColor, pressed);

		this.OUTLINE_COLOR = UtilRgb.darken(backgroundColor, 0.75);
	}

	getBackgroundColor(state: DBaseStateSet): number | null {
		if (state.inDisabled) {
			return null;
		} else if (state.isActive) {
			return DThemeDarkConstants.HIGHLIGHT_COLOR;
		} else if (state.isPressed) {
			return this.BACKGROUND_COLOR_PRESSED;
		} else if (state.isHovered) {
			return this.BACKGROUND_COLOR_HOVERED;
		} else {
			return this.BACKGROUND_COLOR;
		}
	}

	getColor(state: DBaseStateSet): number {
		if (state.inDisabled || !state.isActive) {
			return super.getColor(state);
		} else {
			return DThemeDarkConstants.ACTIVE_COLOR;
		}
	}

	getBorderColor(state: DBaseStateSet): number | null {
		if (state.inDisabled) {
			return DThemeDarkConstants.BORDER_COLOR;
		} else {
			return null;
		}
	}

	getOutlineColor(state: DBaseStateSet): number | null {
		if (state.isActive) {
			return this.getOutlineColorActive(state);
		}
		return super.getOutlineColor(state);
	}

	protected getOutlineColorActive(state: DBaseStateSet): number | null {
		return this.OUTLINE_COLOR;
	}

	getOutlineOffset(state: DBaseStateSet): number {
		if (state.isActive) {
			return this.getOutlineOffsetActive(state);
		}
		return super.getOutlineOffset(state);
	}

	protected getOutlineOffsetActive(state: DBaseStateSet): number {
		return -1.5;
	}

	getHeight(): DCoordinateSize {
		return 30;
	}

	getWidth(): DCoordinateSize {
		return 100;
	}

	getTextAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.CENTER;
	}

	getPaddingLeft(): number {
		return 10;
	}

	getPaddingRight(): number {
		return 10;
	}

	isToggle(): boolean {
		return false;
	}

	getWhen(): DButtonBaseWhen {
		return DButtonBaseWhen.CLICKED;
	}

	getCursor(state: DBaseStateSet): string {
		if (!state.isActionable) {
			return "";
		}
		return "pointer";
	}
}

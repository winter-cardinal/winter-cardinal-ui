/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeButtonBase } from "../../d-button-base";
import { DCoordinateSize } from "../../d-coordinate";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhiteImageBase } from "./d-theme-white-image-base";

export class DThemeWhiteButtonBase<VALUE = unknown> extends DThemeWhiteImageBase<VALUE>
	implements DThemeButtonBase<VALUE> {

	protected readonly BACKGROUND_COLOR: number;
	protected readonly BACKGROUND_COLOR_HOVERED: number;
	protected readonly BACKGROUND_COLOR_PRESSED: number;

	constructor( backgroundColor: number = 0xffffff, hover: number = 0.017, pressed: number = 0.034 ) {
		super();
		this.BACKGROUND_COLOR = backgroundColor;
		this.BACKGROUND_COLOR_HOVERED = UtilRgb.darken( this.BACKGROUND_COLOR, hover );
		this.BACKGROUND_COLOR_PRESSED = UtilRgb.darken( this.BACKGROUND_COLOR, pressed );
	}

	getBackgroundColor( state: DBaseStateSet ): number | null {
		if( state.inDisabled ) {
			return null;
		} else if( state.isActive ) {
			return DThemeWhiteConstants.HIGHLIGHT_COLOR;
		} else if( state.isPressed ) {
			return this.BACKGROUND_COLOR_PRESSED;
		} else if( state.isFocused || state.isHovered ) {
			return this.BACKGROUND_COLOR_HOVERED;
		} else {
			return this.BACKGROUND_COLOR;
		}
	}

	getColor( state: DBaseStateSet ): number {
		if( state.inDisabled || ! state.isActive ) {
			return super.getColor( state );
		} else {
			return DThemeWhiteConstants.ACTIVE_COLOR;
		}
	}

	getBorderColor( state: DBaseStateSet ): number | null {
		if( state.inDisabled || ! state.isActive ) {
			return DThemeWhiteConstants.BORDER_COLOR;
		} else {
			return null;
		}
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
}

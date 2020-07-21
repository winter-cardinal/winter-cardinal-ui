/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseStateSet } from "../../d-base-state-set";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemePickerDatetimeButtonDate } from "../../d-picker-datetime-button-date";
import { DThemeDarkButtonAmbient } from "./d-theme-dark-button-ambient";
import { DThemeDarkConstants } from "./d-theme-dark-constants";

export class DThemeDarkPickerDatetimeButtonDate extends DThemeDarkButtonAmbient
	implements DThemePickerDatetimeButtonDate {

	getBackgroundColor( state: DBaseStateSet ): number | null {
		if( state.isActive ) {
			return DThemeDarkConstants.HIGHLIGHT_COLOR;
		}
		return super.getBackgroundColor( state );
	}

	getColor( state: DBaseStateSet ): number {
		if( state.isActive ) {
			return 0x000000;
		}
		return super.getColor( state );
	}

	getTextAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.CENTER;
	}

	getTextStyleClipping(): boolean {
		return false;
	}

	getWidth(): DCoordinateSize {
		return 30;
	}

	getHeight(): DCoordinateSize {
		return 30;
	}

	isToggle(): boolean {
		return true;
	}
}

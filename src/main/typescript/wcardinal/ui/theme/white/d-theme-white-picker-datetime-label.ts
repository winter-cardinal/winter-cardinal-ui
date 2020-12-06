/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseStateSet } from "../../d-base-state-set";
import { DCoordinateSize } from "../../d-coordinate";
import { DFontWeight } from "../../d-font";
import { DThemePickerDatetimeLabel } from "../../d-picker-datetime-label";
import { DThemeWhiteText } from "./d-theme-white-text";

export class DThemeWhitePickerDatetimeLabel extends DThemeWhiteText implements DThemePickerDatetimeLabel {
	getWidth(): DCoordinateSize {
		return 30;
	}

	getHeight(): DCoordinateSize {
		return 30;
	}

	getTextStyleClipping(): boolean {
		return false;
	}

	getTextAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.CENTER;
	}

	getAlpha( state: DBaseStateSet ): number {
		return super.getAlpha( state ) * 0.9;
	}

	getFontWeight(): DFontWeight {
		return "bold";
	}

	getFontSize(): number {
		return Math.round( super.getFontSize() * 1.25 );
	}

	newTextValue(): any {
		return new Date();
	}

	getTextValue( state: DBaseStateSet ): any {
		return new Date();
	}
}

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseStateSet } from "../../d-base-state-set";
import { DCoordinateSize } from "../../d-coordinate";
import { DFontWeight } from "../../d-font";
import { DThemePickerDatetimeLabelDate } from "../../d-picker-datetime-label-date";
import { DThemeDarkText } from "./d-theme-dark-text";

export class DThemeDarkPickerDatetimeLabelDate<VALUE> extends DThemeDarkText<VALUE> implements DThemePickerDatetimeLabelDate<VALUE> {
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
}

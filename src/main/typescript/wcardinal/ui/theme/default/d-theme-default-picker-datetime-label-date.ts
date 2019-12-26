/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DCoordinateSize } from "../../d-coordinate";
import { DFontWeight } from "../../d-font";
import { DThemePickerDatetimeLabelDate } from "../../d-picker-datetime-label-date";
import { DThemeWhiteText } from "./d-theme-default-text";

export class DThemeWhitePickerDatetimeLabelDate extends DThemeWhiteText implements DThemePickerDatetimeLabelDate {
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

	getColor(): number {
		return 0x6f6f6f;
	}

	getFontWeight(): DFontWeight {
		return "bold";
	}
}

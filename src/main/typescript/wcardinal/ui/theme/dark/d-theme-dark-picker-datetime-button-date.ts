/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemePickerDatetimeButtonDate } from "../../d-picker-datetime-button-date";
import { DThemeDarkButtonAmbient } from "./d-theme-dark-button-ambient";

export class DThemeDarkPickerDatetimeButtonDate extends DThemeDarkButtonAmbient
	implements DThemePickerDatetimeButtonDate {

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

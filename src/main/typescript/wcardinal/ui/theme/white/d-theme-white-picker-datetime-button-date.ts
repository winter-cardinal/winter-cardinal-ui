/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DCoordinate } from "../../d-coordinate";
import { DThemePickerDatetimeButtonDate } from "../../d-picker-datetime-button-date";
import { DThemeWhiteButtonAmbient } from "./d-theme-white-button-ambient";

export class DThemeWhitePickerDatetimeButtonDate extends DThemeWhiteButtonAmbient
	implements DThemePickerDatetimeButtonDate {

	getTextAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.CENTER;
	}

	getTextStyleClipping(): boolean {
		return false;
	}

	getWidth(): DCoordinate {
		return 30;
	}

	getHeight(): DCoordinate {
		return 30;
	}

	isToggle(): boolean {
		return true;
	}
}

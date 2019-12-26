/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemePickerDatetimeButtonDate } from "../../d-picker-datetime-button-date";
import { DThemeDefaultButtonAmbient } from "./d-theme-default-button-ambient";

export class DThemeDefaultPickerDatetimeButtonDate extends DThemeDefaultButtonAmbient
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

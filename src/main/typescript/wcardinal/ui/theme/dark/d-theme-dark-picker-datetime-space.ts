/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemePickerDatetimeSpace } from "../../d-picker-datetime-space";
import { DThemeDarkBase } from "./d-theme-dark-base";

export class DThemeDarkPickerDatetimeSpace extends DThemeDarkBase implements DThemePickerDatetimeSpace {
	getBackgroundColor( state: DBaseState ): number | null {
		return null;
	}

	getBorderColor( state: DBaseState ): number | null {
		return null;
	}

	getWidth(): DCoordinateSize {
		return 30;
	}

	getHeight(): DCoordinateSize {
		return 30;
	}
}

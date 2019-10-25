/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DCoordinate } from "../../d-coordinate";
import { DThemePickerDatetimeSpace } from "../../d-picker-datetime-space";
import { DThemeWhiteBase } from "./d-theme-white-base";

export class DThemeWhitePickerDatetimeSpace extends DThemeWhiteBase implements DThemePickerDatetimeSpace {
	getBackgroundColor( state: DBaseState ): number | null {
		return null;
	}

	getBorderColor( state: DBaseState ): number | null {
		return null;
	}

	getWidth(): DCoordinate {
		return 30;
	}

	getHeight(): DCoordinate {
		return 30;
	}
}

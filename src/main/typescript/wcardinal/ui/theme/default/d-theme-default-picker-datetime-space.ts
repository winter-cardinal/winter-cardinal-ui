/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemePickerDatetimeSpace } from "../../d-picker-datetime-space";
import { DThemeDefaultBase } from "./d-theme-default-base";

export class DThemeDefaultPickerDatetimeSpace extends DThemeDefaultBase implements DThemePickerDatetimeSpace {
	getBackgroundColor( state: DBaseState ): number | null {
		return this.dThemeConfiguration.getPickerDatetimeSpaceBackgroundColor();
	}

	getBorderColor( state: DBaseState ): number | null {
		return this.dThemeConfiguration.getPickerDatetimeSpaceBorderColor();
	}

	getWidth(): DCoordinateSize {
		return 30;
	}

	getHeight(): DCoordinateSize {
		return 30;
	}
}

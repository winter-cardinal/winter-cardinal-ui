/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinateSize } from "../../d-coordinate";
import { DThemeInputBoolean } from "../../d-input-boolean";
import { DThemeWhiteLayoutHorizontal } from "./d-theme-white-layout-horizontal";

export class DThemeWhiteInputBoolean extends DThemeWhiteLayoutHorizontal implements DThemeInputBoolean {
	getWidth(): DCoordinateSize {
		return 100;
	}

	getHeight(): DCoordinateSize {
		return "auto";
	}

	getCornerAdjust(): boolean {
		return true;
	}

	getMargin(): number {
		return 0;
	}
}

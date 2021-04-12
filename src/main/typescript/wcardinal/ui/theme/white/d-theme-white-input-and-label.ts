/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinateSize } from "../../d-coordinate";
import { DThemeInputAndLabel } from "../../d-input-and-label";
import { DThemeWhiteLayoutHorizontal } from "./d-theme-white-layout-horizontal";

export class DThemeWhiteInputAndLabel
	extends DThemeWhiteLayoutHorizontal
	implements DThemeInputAndLabel {
	getHeight(): DCoordinateSize {
		return this.getLineHeight();
	}
}

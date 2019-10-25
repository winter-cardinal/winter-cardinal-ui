/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinate } from "../../d-coordinate";
import { DThemeInputAndLabel } from "../../d-input-and-label";
import { DThemeWhiteLayoutHorizontal } from "./d-theme-white-layout-horizontal";

export class DThemeWhiteInputAndLabel extends DThemeWhiteLayoutHorizontal implements DThemeInputAndLabel {
	getHeight(): DCoordinate {
		return this.getLineHeight();
	}
}

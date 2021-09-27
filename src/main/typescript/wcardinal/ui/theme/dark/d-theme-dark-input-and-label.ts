/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinateSize } from "../../d-coordinate";
import { DThemeInputAndLabel } from "../../d-input-and-label";
import { DThemeDarkLayoutHorizontal } from "./d-theme-dark-layout-horizontal";

export class DThemeDarkInputAndLabel
	extends DThemeDarkLayoutHorizontal
	implements DThemeInputAndLabel
{
	getHeight(): DCoordinateSize {
		return this.getLineHeight();
	}
}

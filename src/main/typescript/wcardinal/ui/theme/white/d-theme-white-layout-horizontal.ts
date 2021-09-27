/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinateSize } from "../../d-coordinate";
import { DLayoutDirection } from "../../d-layout-direction";
import { DThemeLayoutHorizontal } from "../../d-layout-horizontal";
import { DThemeWhiteLayout } from "./d-theme-white-layout";

export class DThemeWhiteLayoutHorizontal
	extends DThemeWhiteLayout
	implements DThemeLayoutHorizontal
{
	getDirection(): DLayoutDirection {
		return DLayoutDirection.HORIZONTAL;
	}

	getHeight(): DCoordinateSize {
		return "auto";
	}
}

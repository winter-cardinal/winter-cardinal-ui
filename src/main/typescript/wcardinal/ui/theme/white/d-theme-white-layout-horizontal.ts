/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinate } from "../../d-coordinate";
import { DLayoutDirection } from "../../d-layout";
import { DThemeLayoutHorizontal } from "../../d-layout-horizontal";
import { DThemeWhiteLayout } from "./d-theme-white-layout";

export class DThemeWhiteLayoutHorizontal extends DThemeWhiteLayout implements DThemeLayoutHorizontal {
	getDirection(): DLayoutDirection {
		return DLayoutDirection.HORIZONTAL;
	}

	getWidth(): DCoordinate {
		return "auto";
	}
}

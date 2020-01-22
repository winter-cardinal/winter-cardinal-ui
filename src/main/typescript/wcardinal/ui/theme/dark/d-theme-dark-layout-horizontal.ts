/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinateSize } from "../../d-coordinate";
import { DLayoutDirection } from "../../d-layout-direction";
import { DThemeLayoutHorizontal } from "../../d-layout-horizontal";
import { DThemeDarkLayout } from "./d-theme-dark-layout";

export class DThemeDarkLayoutHorizontal extends DThemeDarkLayout implements DThemeLayoutHorizontal {
	getDirection(): DLayoutDirection {
		return DLayoutDirection.HORIZONTAL;
	}

	getWidth(): DCoordinateSize {
		return "auto";
	}
}

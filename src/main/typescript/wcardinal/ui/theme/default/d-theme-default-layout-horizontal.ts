/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinateSize } from "../../d-coordinate";
import { DLayoutDirection } from "../../d-layout";
import { DThemeLayoutHorizontal } from "../../d-layout-horizontal";
import { DThemeDefaultLayout } from "./d-theme-default-layout";

export class DThemeDefaultLayoutHorizontal extends DThemeDefaultLayout implements DThemeLayoutHorizontal {
	getDirection(): DLayoutDirection {
		return DLayoutDirection.HORIZONTAL;
	}

	getWidth(): DCoordinateSize {
		return "auto";
	}
}

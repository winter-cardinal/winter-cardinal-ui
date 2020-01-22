/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinateSize } from "../../d-coordinate";
import { DLayoutDirection } from "../../d-layout-direction";
import { DThemeLayoutVertical } from "../../d-layout-vertical";
import { DThemeDarkLayout } from "./d-theme-dark-layout";

export class DThemeDarkLayoutVertical extends DThemeDarkLayout implements DThemeLayoutVertical {
	getDirection(): DLayoutDirection {
		return DLayoutDirection.VERTICAL;
	}

	getHeight(): DCoordinateSize {
		return "auto";
	}
}

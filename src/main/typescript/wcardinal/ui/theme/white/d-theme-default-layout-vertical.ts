/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinateSize } from "../../d-coordinate";
import { DLayoutDirection } from "../../d-layout";
import { DThemeLayoutVertical } from "../../d-layout-vertical";
import { DThemeWhiteLayout } from "./d-theme-default-layout";

export class DThemeWhiteLayoutVertical extends DThemeWhiteLayout implements DThemeLayoutVertical {
	getDirection(): DLayoutDirection {
		return DLayoutDirection.VERTICAL;
	}

	getHeight(): DCoordinateSize {
		return "auto";
	}
}

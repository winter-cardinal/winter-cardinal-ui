/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinateSize } from "../../d-coordinate";
import { DThemePaginationDynamicButtons } from "../../d-pagination-dynamic-buttons";
import { DThemeWhiteLayoutHorizontal } from "./d-theme-white-layout-horizontal";

export class DThemeWhitePaginationDynamicButtons
	extends DThemeWhiteLayoutHorizontal
	implements DThemePaginationDynamicButtons {
	getWidth(): DCoordinateSize {
		return "auto";
	}
}

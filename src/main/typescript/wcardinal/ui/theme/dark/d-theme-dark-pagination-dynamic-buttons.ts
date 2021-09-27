/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinateSize } from "../../d-coordinate";
import { DThemePaginationDynamicButtons } from "../../d-pagination-dynamic-buttons";
import { DThemeDarkLayoutHorizontal } from "./d-theme-dark-layout-horizontal";

export class DThemeDarkPaginationDynamicButtons
	extends DThemeDarkLayoutHorizontal
	implements DThemePaginationDynamicButtons
{
	getWidth(): DCoordinateSize {
		return "auto";
	}
}

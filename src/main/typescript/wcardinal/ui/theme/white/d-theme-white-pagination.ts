/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DThemePagination } from "../../d-pagination";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhiteLayoutHorizontal } from "./d-theme-white-layout-horizontal";

export class DThemeWhitePagination extends DThemeWhiteLayoutHorizontal implements DThemePagination {
	getBackgroundColor( state: DBaseState ): number | null {
		return DThemeWhiteConstants.BACKGROUND_COLOR;
	}
}

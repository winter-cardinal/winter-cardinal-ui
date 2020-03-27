/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemePagination } from "../../d-pagination";
import { DThemeWhiteLayoutHorizontal } from "./d-theme-white-layout-horizontal";

export class DThemeWhitePagination extends DThemeWhiteLayoutHorizontal implements DThemePagination {
	getButtonWidth(): number {
		return 30;
	}
}

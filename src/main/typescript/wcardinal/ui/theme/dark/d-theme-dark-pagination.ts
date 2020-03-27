/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemePagination } from "../../d-pagination";
import { DThemeDarkLayoutHorizontal } from "./d-theme-dark-layout-horizontal";

export class DThemeDarkPagination extends DThemeDarkLayoutHorizontal implements DThemePagination {
	getButtonWidth(): number {
		return 30;
	}
}

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinateSize } from "../../d-coordinate";
import { DThemePagination } from "../../d-pagination";
import { DThemeDarkLayoutHorizontal } from "./d-theme-dark-layout-horizontal";

export class DThemeDarkPagination extends DThemeDarkLayoutHorizontal implements DThemePagination {
	getWidth(): DCoordinateSize {
		return "auto";
	}

	getMargin(): number {
		return 10;
	}

	getButtonSpace(): number {
		return 10;
	}
}

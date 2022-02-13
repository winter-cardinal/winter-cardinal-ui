/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinateSize } from "../../d-coordinate";
import { DThemePagination } from "../../d-pagination";
import { DThemeWhiteLayoutHorizontal } from "./d-theme-white-layout-horizontal";

export class DThemeWhitePagination extends DThemeWhiteLayoutHorizontal implements DThemePagination {
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

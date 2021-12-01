/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeTableBodyRow } from "../../d-table-body-row";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkTableRow } from "./d-theme-dark-table-row";

export class DThemeDarkTableBodyRow extends DThemeDarkTableRow implements DThemeTableBodyRow {
	protected readonly BACKGROUND_COLOR_EVEN = DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD;
	protected readonly BACKGROUND_COLOR_ODD = UtilRgb.brighten(
		DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD,
		0.02
	);

	getBackgroundColor(state: DBaseStateSet): number | null {
		if (state.inDisabled) {
			return state.isAlternated ? this.BACKGROUND_COLOR_ODD : this.BACKGROUND_COLOR_EVEN;
		} else if (state.isActive) {
			return DThemeDarkConstants.HIGHLIGHT_BLENDED_ON_BOARD;
		} else if (state.isHovered) {
			return DThemeDarkConstants.WEAK_HIGHLIGHT_BLENDED_ON_BOARD;
		} else {
			return state.isAlternated ? this.BACKGROUND_COLOR_ODD : this.BACKGROUND_COLOR_EVEN;
		}
	}

	getWidth(): DCoordinateSize {
		return "100%";
	}
}

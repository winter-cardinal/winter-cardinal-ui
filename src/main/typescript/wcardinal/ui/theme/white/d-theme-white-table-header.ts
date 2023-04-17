/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DBorderMask } from "../../d-border-mask";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeTableHeader } from "../../d-table-header";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhiteTableRow } from "./d-theme-white-table-row";

export class DThemeWhiteTableHeader extends DThemeWhiteTableRow implements DThemeTableHeader {
	protected readonly BACKGROUND_COLOR = UtilRgb.darken(
		DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD,
		0.03
	);
	protected readonly BORDER_COLOR = UtilRgb.darken(
		DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD,
		0.055
	);

	getBackgroundColor(state: DBaseStateSet): number | null {
		if (state.inDisabled) {
			return null;
		} else {
			return this.BACKGROUND_COLOR;
		}
	}

	getBorderColor(state: DBaseStateSet): number | null {
		return this.BORDER_COLOR;
	}

	getBorderMask(state: DBaseStateSet): DBorderMask {
		return DBorderMask.NOT_BOTTOM;
	}

	getWidth(): DCoordinateSize {
		return "100%";
	}

	getHeight(): DCoordinateSize {
		return 35;
	}
}

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeTableBodyCellButton } from "../../d-table-body-cell-button";
import { DThemeWhiteTableBodyCellText } from "./d-theme-white-table-body-cell-text";

export class DThemeWhiteTableBodyCellButton
	extends DThemeWhiteTableBodyCellText
	implements DThemeTableBodyCellButton
{
	getCursor(state: DBaseStateSet): string {
		if (!state.isActionable) {
			return "";
		}
		return "pointer";
	}
}

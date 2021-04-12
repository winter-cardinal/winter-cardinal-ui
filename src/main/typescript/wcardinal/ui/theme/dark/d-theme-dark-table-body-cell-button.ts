/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeTableBodyCellButton } from "../../d-table-body-cell-button";
import { DThemeDarkTableBodyCellText } from "./d-theme-dark-table-body-cell-text";

export class DThemeDarkTableBodyCellButton
	extends DThemeDarkTableBodyCellText
	implements DThemeTableBodyCellButton {
	getCursor(state: DBaseStateSet): string {
		if (!state.isActionable) {
			return "";
		}
		return "pointer";
	}
}

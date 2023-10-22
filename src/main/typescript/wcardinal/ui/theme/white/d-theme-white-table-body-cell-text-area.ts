/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignVertical } from "../../d-align-vertical";
import { DThemeWhiteTableBodyCellText } from "./d-theme-white-table-body-cell-text";

export class DThemeWhiteTableBodyCellTextArea extends DThemeWhiteTableBodyCellText {
	getTextAlignVertical(): DAlignVertical {
		return DAlignVertical.TOP;
	}
}

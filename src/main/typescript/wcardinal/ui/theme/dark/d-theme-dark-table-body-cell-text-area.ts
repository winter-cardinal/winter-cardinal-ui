/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignVertical } from "../../d-align-vertical";
import { DThemeDarkTableBodyCellText } from "./d-theme-dark-table-body-cell-text";

export class DThemeDarkTableBodyCellTextArea extends DThemeDarkTableBodyCellText {
	getTextAlignVertical(): DAlignVertical {
		return DAlignVertical.TOP;
	}
}

/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeTableBodyCellActionPromise } from "../../d-table-body-cell-action-promise";
import { DThemeWhiteTableBodyCellSelectPromise } from "./d-theme-white-table-body-cell-select-promise";

export class DThemeWhiteTableBodyCellActionPromise extends DThemeWhiteTableBodyCellSelectPromise
	implements DThemeTableBodyCellActionPromise {

	isSyncEnabled(): boolean {
		return false;
	}
}

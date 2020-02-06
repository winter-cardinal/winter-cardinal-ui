/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeTableBodyCellActionPromise } from "../../d-table-body-cell-action-promise";
import { DThemeDarkTableBodyCellSelectPromise } from "./d-theme-dark-table-body-cell-select-promise";

export class DThemeDarkTableBodyCellActionPromise extends DThemeDarkTableBodyCellSelectPromise
	implements DThemeTableBodyCellActionPromise {

	isSyncEnabled(): boolean {
		return false;
	}
}

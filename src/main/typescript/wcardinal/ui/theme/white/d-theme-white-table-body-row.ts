/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinate } from "../../d-coordinate";
import { DThemeTableBodyRow } from "../../d-table-body-row";
import { DThemeWhiteTableRow } from "./d-theme-white-table-row";

export class DThemeWhiteTableBodyRow extends DThemeWhiteTableRow implements DThemeTableBodyRow {
	getWidth(): DCoordinate {
		return "100%";
	}
}

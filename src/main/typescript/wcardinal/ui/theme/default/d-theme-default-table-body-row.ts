/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinateSize } from "../../d-coordinate";
import { DThemeTableBodyRow } from "../../d-table-body-row";
import { DThemeDefaultTableRow } from "./d-theme-default-table-row";

export class DThemeDefaultTableBodyRow extends DThemeDefaultTableRow implements DThemeTableBodyRow {
	getWidth(): DCoordinateSize {
		return "100%";
	}
}

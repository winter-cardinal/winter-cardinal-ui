/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DTableDataComparator } from "./d-table-data-sorter";

export interface DTableColumnSortingOptions<ROW_VALUE> {
	enable?: boolean;
	comparator?: DTableDataComparator<ROW_VALUE>;
}

export interface DTableColumnSorting<ROW_VALUE> {
	enable: boolean;
	comparator?: DTableDataComparator<ROW_VALUE>;
}

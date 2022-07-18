/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export type DTableColumnGetter<ROW_VALUE, CELL_VALUE> = (
	row: ROW_VALUE,
	columnIndex: number
) => CELL_VALUE;

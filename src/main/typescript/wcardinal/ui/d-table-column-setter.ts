/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export type DTableColumnSetter<ROW_VALUE, CELL_VALUE> = (
	row: ROW_VALUE,
	columnIndex: number,
	cell: CELL_VALUE
) => void;

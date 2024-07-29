/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "./d-base-state-set";

/**
 * {@link DTable} column state modifier.
 * This function is called on every cells of a column when the cell data is changed.
 *
 * @param row a cell data
 * @param columnIndex a column index of a cell
 * @param state a cell state
 */
export type DTableColumnStateModifier<ROW_VALUE> = (
	row: ROW_VALUE,
	columnIndex: number,
	state: DBaseStateSet
) => void;

export interface DTableColumnState<ROW_VALUE> {
	initial?: string | string[];
	modifier?: DTableColumnStateModifier<ROW_VALUE>;
}

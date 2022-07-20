/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "./d-base-state-set";

/**
 * {@link DTable} column state modifier.
 * This function is called on every cells of a column when the cell data is changed.
 * The state given at the third parameter is a state of a cell.
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

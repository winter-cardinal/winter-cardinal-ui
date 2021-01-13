/*
 * Copyright (C) 2021 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DTableDataSelection, DTableDataSelectionOptions } from "./d-table-data-selection";

export interface DTableDataTreeSelectionOptions extends DTableDataSelectionOptions {

}

export interface DTableDataTreeSelection<NODE> extends DTableDataSelection<NODE> {
	onNodeChange( nodes?: NODE[] ): void;
}

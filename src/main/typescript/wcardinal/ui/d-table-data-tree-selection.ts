/*
 * Copyright (C) 2021 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import {
	DTableDataSelection,
	DTableDataSelectionOptions,
	DTableDataSelectionParent
} from "./d-table-data-selection";
import { DTableDataTreeItemAccessor } from "./d-table-data-tree-item-accessor";

export interface DTableDataTreeSelectionOptions extends DTableDataSelectionOptions {}

export interface DTableDataTreeSelection<NODE> extends DTableDataSelection<NODE> {
	onNodeChange(nodes?: NODE[]): void;
}

export interface DTableDataTreeSelectionParent<NODE> extends DTableDataSelectionParent<NODE> {
	readonly accessor: DTableDataTreeItemAccessor<NODE>;
}

export type DTableDataTreeSelectionCreator<NODE> = (
	parent: DTableDataTreeSelectionParent<NODE>
) => DTableDataTreeSelection<NODE>;

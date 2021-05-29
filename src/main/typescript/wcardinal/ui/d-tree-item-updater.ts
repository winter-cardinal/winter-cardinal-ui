/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DItemUpdater, DItemUpdaterOptions } from "./d-item-updater";
import { DTreeData } from "./d-tree-data";
import { DTreeDataMapped } from "./d-tree-data-mapped";
import { DTreeItem } from "./d-tree-item";
import { DTreeItemNonEditable } from "./d-tree-item-non-editable";
import { DTreeNode } from "./d-tree-node";

export interface DTreeItemUpdaterOptions<NODE>
	extends DItemUpdaterOptions<NODE, DTreeData<NODE>, DTreeItem<NODE>> {}

export class DTreeItemUpdater<NODE extends DTreeNode = DTreeNode> extends DItemUpdater<
	NODE,
	DTreeData<NODE>,
	DTreeDataMapped<NODE>,
	DTreeItem<NODE>,
	DTreeItemUpdaterOptions<NODE>
> {
	protected toMapped(data: DTreeData<NODE>): DTreeDataMapped<NODE> {
		return data.mapped;
	}

	protected newItem(this: undefined, data: DTreeData<NODE>): DTreeItem<NODE> {
		return new DTreeItemNonEditable<NODE>(data);
	}
}

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DListItemUpdaterBase } from "./d-list-item-updater-base";
import { DTreeData } from "./d-tree-data";
import { DTreeDataMapped } from "./d-tree-data-mapped";
import { DTreeItem } from "./d-tree-item";
import { DTreeItemNonEditable } from "./d-tree-item-non-editable";
import { DTreeItemState } from "./d-tree-item-state";
import { DTreeNode } from "./d-tree-node";

export class DTreeItemUpdater<NODE extends DTreeNode = DTreeNode> extends DListItemUpdaterBase<
	NODE,
	DTreeData<NODE>,
	DTreeDataMapped<NODE>,
	DTreeItem<NODE>
> {
	protected set(
		node: NODE,
		data: DTreeData<NODE>,
		mapped: DTreeDataMapped<NODE>,
		itemHeight: number,
		isSelected: boolean,
		item: DTreeItem<NODE>,
		index: number,
		forcibly?: boolean
	): void {
		const children = data.accessor.toChildren(node);
		const hasChildren = !!(children && 0 < children.length);
		const state = item.state;
		state.lock();
		super.set(node, data, mapped, itemHeight, isSelected, item, index, forcibly);
		state.set(DTreeItemState.HAS_CHILDREN, hasChildren);
		state.set(DTreeItemState.OPENED, data.isExpanded(node));
		state.unlock();

		item.set(node, mapped.levels[index], forcibly);
	}

	protected toMapped(data: DTreeData<NODE>): DTreeDataMapped<NODE> {
		return data.mapped;
	}

	protected unset(itemHeight: number, item: DTreeItem<NODE>, index: number): void {
		super.unset(itemHeight, item, index);
	}

	protected create(
		data: DTreeData<NODE>,
		mapped: DTreeDataMapped<NODE>,
		isEven: boolean
	): DTreeItem<NODE> {
		const result = new DTreeItemNonEditable<NODE>(data);
		result.state.isAlternated = isEven;
		return result;
	}
}

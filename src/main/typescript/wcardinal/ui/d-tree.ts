/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Point } from "pixi.js";
import { DBase, DBaseOptions } from "./d-base";
import { DContentOptions } from "./d-content";
import { DPane, DPaneOptions, DThemePane } from "./d-pane";
import { DTreeItem } from "./d-tree-item";
import { DTreeNode } from "./d-tree-node";
import { DTreeNodeIteratee } from "./d-tree-node-iteratee";
import { DTreeDataSelection } from "./d-tree-data-selection";
import { DTreeData, DTreeDataLike, DTreeDataOptions } from "./d-tree-data";
import { isArray } from "./util/is-array";
import { DTreeDataImpl } from "./d-tree-data-impl";
import { DTreeItemNonEditable } from "./d-tree-item-non-editable";

export interface DTreeOptions<
	NODE extends DTreeNode = DTreeNode,
	DATA extends DTreeData<NODE> = DTreeData<NODE>,
	THEME extends DThemeTree = DThemeTree,
	CONTENT_OPTIONS extends DBaseOptions = DContentOptions
> extends DPaneOptions<THEME, CONTENT_OPTIONS> {
	/**
	 * An alias for {@link data}.
	 */
	value?: NODE[];

	/**
	 * An alias for {@link data}.
	 */
	nodes?: NODE[];

	/**
	 * A data options.
	 */
	data?: NODE[] | DTreeDataOptions<NODE> | DATA;
}

export interface DThemeTree extends DThemePane {
	getItemHeight(): number;
}

export class DTree<
		NODE extends DTreeNode = DTreeNode,
		DATA extends DTreeData<NODE> = DTreeData<NODE>,
		THEME extends DThemeTree = DThemeTree,
		CONTENT_OPTIONS extends DBaseOptions = DContentOptions,
		OPTIONS extends DTreeOptions<NODE, DATA, THEME, CONTENT_OPTIONS> = DTreeOptions<
			NODE,
			DATA,
			THEME,
			CONTENT_OPTIONS
		>
	>
	extends DPane<THEME, CONTENT_OPTIONS, OPTIONS>
	implements DTreeDataLike<NODE> {
	protected static WORK_ON_CLICK?: Point;

	protected _rowIndexStart: number;
	protected _rowIndexEnd: number;
	protected _workItems: DTreeItem<NODE>[];

	protected _updateCount: number;
	protected _isUpdateCalled: boolean;

	protected _itemHeight: number;
	protected _data: DATA;

	constructor(options?: OPTIONS) {
		super(options);

		this._rowIndexStart = 0;
		this._rowIndexEnd = 0;
		this._workItems = [];

		this._updateCount = 0;
		this._isUpdateCalled = false;

		const content = this._content;
		content.on("move", (): void => {
			this.update();
		});
		content.on("resize", (): void => {
			this.update();
		});

		this._itemHeight = this.theme.getItemHeight();
		this._data = this.toData(options);
		this.update();
	}

	protected toData(options?: OPTIONS): DATA {
		const data = (options && (options.data || options.nodes || options.value)) || [];
		if (isArray(data)) {
			return new DTreeDataImpl<NODE>(this, {
				nodes: data
			}) as any;
		} else if ("add" in data) {
			return data;
		} else {
			return new DTreeDataImpl<NODE>(this, data) as any;
		}
	}

	update(forcibly?: boolean): void {
		if (0 < this._updateCount) {
			this._isUpdateCalled = true;
			return;
		}

		const content = this._content;
		const items = content.children as DTreeItem<NODE>[];

		const data = this._data;
		const rows = data.rows;
		const levels = data.levels;
		const rowsLength = rows.length;
		const itemHeight = this._itemHeight;
		const height = this.height;

		const newContentHeight = rowsLength * itemHeight;
		const newContentY = Math.min(0, Math.max(height - newContentHeight, content.position.y));
		const newRowIndexLowerBound = Math.floor((0 - newContentY) / itemHeight);
		const newRowIndexUpperBound = Math.ceil((height - newContentY) / itemHeight);
		const newRowIndexStart = Math.max(0, newRowIndexLowerBound - 2);
		const newRowIndexEnd = Math.min(rowsLength, newRowIndexUpperBound + 2);
		const newRowCount = newRowIndexEnd - newRowIndexStart;

		const oldRowIndexStart = this._rowIndexStart;
		const oldRowIndexEnd = this._rowIndexEnd;
		const oldRowCount = oldRowIndexEnd - oldRowIndexStart;

		if (oldRowCount < newRowCount) {
			for (let i = items.length; i < newRowCount; ++i) {
				content.addChild(this.newItem(data));
			}
		}

		this._rowIndexStart = newRowIndexStart;
		this._rowIndexEnd = newRowIndexEnd;

		const rowIndexStartDelta = newRowIndexStart - oldRowIndexStart;
		const rowIndexStartDeltaAbs = Math.abs(rowIndexStartDelta);
		const itemsLength = items.length;
		if (0 < rowIndexStartDeltaAbs && rowIndexStartDeltaAbs < itemsLength) {
			const work = this._workItems;
			if (0 < rowIndexStartDelta) {
				for (let i = 0; i < rowIndexStartDeltaAbs; ++i) {
					work.push(this.resetItem(items[i]));
				}
				for (let i = rowIndexStartDeltaAbs; i < itemsLength; ++i) {
					items[i - rowIndexStartDeltaAbs] = items[i];
				}
				for (let i = 0; i < rowIndexStartDeltaAbs; ++i) {
					items[itemsLength - rowIndexStartDeltaAbs + i] = work[i];
				}
			} else {
				for (let i = 0; i < rowIndexStartDeltaAbs; ++i) {
					work.push(this.resetItem(items[itemsLength - rowIndexStartDeltaAbs + i]));
				}
				for (let i = itemsLength - rowIndexStartDeltaAbs - 1; 0 <= i; --i) {
					items[i + rowIndexStartDeltaAbs] = items[i];
				}
				for (let i = 0; i < rowIndexStartDeltaAbs; ++i) {
					items[i] = work[i];
				}
			}
			work.length = 0;
		}

		const selection = data.selection;
		for (let i = newRowIndexStart; i < newRowIndexEnd; ++i) {
			const item = items[i - newRowIndexStart];
			const row = rows[i];
			const level = levels[i];
			const isSelected = selection.contains(row);
			const isExpanded = data.isExpanded(row);
			item.position.y = i * itemHeight;
			item.set(row, level, isSelected, isExpanded, forcibly);
		}
		for (let i = newRowCount; i < itemsLength; ++i) {
			items[i].unset();
		}

		this.lock();
		content.position.y = newContentY;
		content.height = newContentHeight;
		this.unlock(false);
	}

	lock(): void {
		this._updateCount += 1;
		if (this._updateCount === 1) {
			this._isUpdateCalled = false;
		}
	}

	unlock(callIfNeeded: boolean): void {
		this._updateCount -= 1;
		if (this._updateCount === 0) {
			if (callIfNeeded && this._isUpdateCalled) {
				this.update();
			}
			this._isUpdateCalled = false;
		}
	}

	protected newItem(data: DATA): DTreeItem<NODE> {
		return new DTreeItemNonEditable<NODE>(data);
	}

	protected resetItem(item: DTreeItem<NODE>): DTreeItem<NODE> {
		item.blur(true);
		const cells = item.children;
		for (let i = 0, imax = cells.length; i < imax; ++i) {
			const cell = cells[i];
			if (cell instanceof DBase) {
				cell.state.isPressed = false;
			}
		}
		return item;
	}

	protected deleteItem(item: DTreeItem<NODE>): DTreeItem<NODE> {
		item.off("select");
		item.off("toggle");
		return item;
	}

	get data(): DATA {
		return this._data;
	}

	get value(): NODE[] {
		return this._data.nodes;
	}

	set value(value: NODE[]) {
		this._data.nodes = value;
	}

	get nodes(): NODE[] {
		return this._data.nodes;
	}

	set nodes(nodes: NODE[]) {
		this._data.nodes = nodes;
	}

	toggle(target: NODE): boolean {
		return this._data.toggle(target);
	}

	expand(target: NODE): boolean {
		return this._data.expand(target);
	}

	collapse(target: NODE): boolean {
		return this._data.collapse(target);
	}

	expandAll(): void {
		return this._data.expandAll();
	}

	collapseAll(): void {
		return this._data.collapseAll();
	}

	isCollapsed(target: NODE): boolean {
		return this._data.isCollapsed(target);
	}

	isExpanded(target: NODE): boolean {
		return this._data.isExpanded(target);
	}

	clear(): void {
		this._data.clear();
	}

	remove(target: NODE): boolean {
		return this._data.remove(target);
	}

	add(target: NODE, parent?: NODE): boolean {
		return this._data.add(target, parent);
	}

	addBefore(target: NODE, sibling: NODE): boolean {
		return this._data.addBefore(target, sibling);
	}

	addAfter(target: NODE, sibling: NODE): boolean {
		return this._data.addAfter(target, sibling);
	}

	each(iteratee: DTreeNodeIteratee<NODE>): void {
		return this._data.each(iteratee);
	}

	get selection(): DTreeDataSelection<NODE> {
		return this._data.selection;
	}

	protected getType(): string {
		return "DTree";
	}
}

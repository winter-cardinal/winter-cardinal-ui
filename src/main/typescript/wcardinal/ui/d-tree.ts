/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Point } from "pixi.js";
import { DBase, DBaseOptions } from "./d-base";
import { DContentOptions } from "./d-content";
import { DPane, DPaneOptions, DThemePane } from "./d-pane";
import { DTreeNode } from "./d-tree-node";
import { DTreeNodeIteratee } from "./d-tree-node-iteratee";
import { DTreeDataSelection } from "./d-tree-data-selection";
import { DTreeData, DTreeDataLike, DTreeDataOptions } from "./d-tree-data";
import { isArray } from "./util/is-array";
import { DTreeDataImpl } from "./d-tree-data-impl";
import { DTreeItemUpdater, DTreeItemUpdaterOptions } from "./d-tree-item-updater";

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

	/**
	 * An updater options.
	 */
	updater?: DTreeItemUpdaterOptions<NODE>;
}

export interface DThemeTree extends DThemePane {}

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

	protected _data?: DATA;
	protected _updater?: DTreeItemUpdater<NODE>;

	constructor(options?: OPTIONS) {
		super(options);
		this.update();
	}

	protected onContentChange(): void {
		super.onContentChange();
		this.update();
	}

	onResize(newWidth: number, newHeight: number, oldWidth: number, oldHeight: number): void {
		const updater = this.updater;
		updater.lock();
		super.onResize(newWidth, newHeight, oldWidth, oldHeight);
		updater.update();
		updater.unlock(true);
	}

	get updater(): DTreeItemUpdater<NODE> {
		let result = this._updater;
		if (result == null) {
			result = this.newUpdater(this.data, this.content, this._options);
			this._updater = result;
		}
		return result;
	}

	protected newUpdater(data: DATA, content: DBase, options?: OPTIONS): DTreeItemUpdater<NODE> {
		return new DTreeItemUpdater<NODE>(data, content, content, options?.updater);
	}

	get data(): DATA {
		let result = this._data;
		if (result == null) {
			result = this.toData(this._options);
			this._data = result;
		}
		return result;
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
		this.updater.update(forcibly);
	}

	lock(): void {
		this.updater.lock();
	}

	unlock(callIfNeeded: boolean): void {
		this.updater.unlock(callIfNeeded);
	}

	get selection(): DTreeDataSelection<NODE> {
		return this.data.selection;
	}

	get value(): NODE[] {
		return this.data.nodes;
	}

	set value(value: NODE[]) {
		this.data.nodes = value;
	}

	get nodes(): NODE[] {
		return this.data.nodes;
	}

	set nodes(nodes: NODE[]) {
		this.data.nodes = nodes;
	}

	toggle(target: NODE): boolean {
		return this.data.toggle(target);
	}

	expand(target: NODE): boolean {
		return this.data.expand(target);
	}

	collapse(target: NODE): boolean {
		return this.data.collapse(target);
	}

	expandAll(): boolean {
		return this.data.expandAll();
	}

	collapseAll(): boolean {
		return this.data.collapseAll();
	}

	isCollapsed(target: NODE): boolean {
		return this.data.isCollapsed(target);
	}

	isExpanded(target: NODE): boolean {
		return this.data.isExpanded(target);
	}

	clear(): boolean {
		return this.data.clear();
	}

	remove(target: NODE): boolean {
		return this.data.remove(target);
	}

	add(target: NODE, parent?: NODE): boolean {
		return this.data.add(target, parent);
	}

	addBefore(target: NODE, sibling: NODE): boolean {
		return this.data.addBefore(target, sibling);
	}

	addAfter(target: NODE, sibling: NODE): boolean {
		return this.data.addAfter(target, sibling);
	}

	each(iteratee: DTreeNodeIteratee<NODE>): void {
		return this.data.each(iteratee);
	}

	onKeyDown(e: KeyboardEvent): boolean {
		this.updater.moveFocus(e, this, true, false);
		return super.onKeyDown(e);
	}

	protected getType(): string {
		return "DTree";
	}
}

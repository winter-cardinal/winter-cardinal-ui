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

	protected _data: DATA;
	protected _updater: DTreeItemUpdater<NODE>;

	constructor(options?: OPTIONS) {
		super(options);

		const content = this._content;
		content.on("move", (): void => {
			this.update();
		});
		content.on("resize", (): void => {
			this.update();
		});

		const data = this.toData(options);
		this._data = data;
		this._updater = this.newUpdater(data, content, options);
		this.update();
	}

	protected newUpdater(data: DATA, content: DBase, options?: OPTIONS): DTreeItemUpdater<NODE> {
		return new DTreeItemUpdater<NODE>(data, content, content, options?.updater);
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
		this._updater.update(forcibly);
	}

	lock(): void {
		this._updater.lock();
	}

	unlock(callIfNeeded: boolean): void {
		this._updater.unlock(callIfNeeded);
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

	expandAll(): boolean {
		return this._data.expandAll();
	}

	collapseAll(): boolean {
		return this._data.collapseAll();
	}

	isCollapsed(target: NODE): boolean {
		return this._data.isCollapsed(target);
	}

	isExpanded(target: NODE): boolean {
		return this._data.isExpanded(target);
	}

	clear(): boolean {
		return this._data.clear();
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

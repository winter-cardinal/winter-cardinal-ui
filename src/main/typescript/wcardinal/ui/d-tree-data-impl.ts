/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DTreeData, DTreeDataOptions } from "./d-tree-data";
import { DTreeNode } from "./d-tree-node";
import { DTreeNodeAccessor } from "./d-tree-node-accessor";
import { DTreeNodeAccessorImpl } from "./d-tree-node-accessor-impl";
import { DTreeNodeIteratee } from "./d-tree-node-iteratee";
import { DTreeDataSelection, DTreeDataSelectionType } from "./d-tree-data-selection";
import { DTreeDataMapped } from "./d-tree-data-mapped";
import { DTreeDataMappedImpl } from "./d-tree-data-mapped-impl";
import { DTreeDataSelectionMultiple } from "./d-tree-data-selection-multiple";
import { DTreeDataSelectionSingle } from "./d-tree-data-selection-single";
import { DTreeDataSelectionNone } from "./d-tree-data-selection-none";

export interface DTreeDataImplParent {
	update(): void;
}

export interface DTreeDataImplSelection<NODE extends DTreeNode> extends DTreeDataSelection<NODE> {
	onNodeChange(nodes: NODE[]): void;
}

export class DTreeDataImpl<NODE extends DTreeNode> implements DTreeData<NODE> {
	protected _parent: DTreeDataImplParent;
	protected _nodeToFlag: WeakMap<NODE, number>;
	protected _selection: DTreeDataImplSelection<NODE>;
	protected _nodes: NODE[];
	protected _accessor: DTreeNodeAccessor<NODE>;
	protected _mapped: DTreeDataMapped<NODE>;

	constructor(parent: DTreeDataImplParent, options?: DTreeDataOptions<NODE>) {
		this._parent = parent;
		this._nodeToFlag = new WeakMap<NODE, number>();
		this._selection = this.toSelection(options);
		this._accessor = new DTreeNodeAccessorImpl(options);
		const mapped = new DTreeDataMappedImpl<NODE>(this);
		this._mapped = mapped;

		const nodes = options?.nodes;
		if (nodes != null) {
			this._nodes = nodes;
			mapped.toDirty();
		} else {
			this._nodes = [];
		}
	}

	protected toSelection(options?: DTreeDataOptions<NODE>): DTreeDataImplSelection<NODE> {
		const selection = options?.selection;
		switch (selection?.type) {
			case DTreeDataSelectionType.NONE:
			case "NONE":
				return new DTreeDataSelectionNone<NODE>(this, selection);
			case DTreeDataSelectionType.MULTIPLE:
			case "MULTIPLE":
				return new DTreeDataSelectionMultiple<NODE>(this, selection);
			default:
				return new DTreeDataSelectionSingle<NODE>(this, selection);
		}
	}

	get nodes(): NODE[] {
		return this._nodes;
	}

	set nodes(nodes: NODE[]) {
		this._nodes = nodes;
		this._mapped.toDirty();
		this._selection.onNodeChange(nodes);
		this.update();
	}

	get mapped(): DTreeDataMapped<NODE> {
		return this._mapped;
	}

	get accessor(): DTreeNodeAccessor<NODE> {
		return this._accessor;
	}

	get selection(): DTreeDataSelection<NODE> {
		return this._selection;
	}

	update(): void {
		this._parent.update();
	}

	toggle(target: NODE): boolean {
		const nodeToFlag = this._nodeToFlag;
		if (nodeToFlag.has(target)) {
			nodeToFlag.delete(target);
		} else {
			nodeToFlag.set(target, 1);
		}
		this._mapped.toDirty();
		this.update();
		return true;
	}

	expand(target: NODE): boolean {
		const nodeToFlag = this._nodeToFlag;
		if (!nodeToFlag.has(target)) {
			nodeToFlag.set(target, 1);
			this._mapped.toDirty();
			this.update();
			return true;
		}
		return false;
	}

	collapse(target: NODE): boolean {
		const nodeToFlag = this._nodeToFlag;
		if (nodeToFlag.has(target)) {
			nodeToFlag.delete(target);
			this._mapped.toDirty();
			this.update();
			return true;
		}
		return false;
	}

	expandAll(): void {
		let isDirty = false;
		const nodeToFlag = this._nodeToFlag;
		this.each((node): void => {
			if (!nodeToFlag.has(node)) {
				nodeToFlag.set(node, 1);
				isDirty = true;
			}
		});
		if (isDirty) {
			this._mapped.toDirty();
			this.update();
		}
	}

	collapseAll(): void {
		let isDirty = false;
		const nodeToFlag = this._nodeToFlag;
		this.each((node): void => {
			if (nodeToFlag.has(node)) {
				nodeToFlag.delete(node);
				isDirty = true;
			}
		});
		if (isDirty) {
			this._mapped.toDirty();
			this.update();
		}
	}

	isCollapsed(target: NODE): boolean {
		return !this.isExpanded(target);
	}

	isExpanded(target: NODE): boolean {
		return this._nodeToFlag.has(target);
	}

	clear(): void {
		const nodes = this._nodes;
		if (0 < nodes.length) {
			nodes.length = 0;
			this._mapped.toDirty();
			this._selection.clear();
			this.update();
		}
	}

	remove(target: NODE): boolean {
		let isDirty = false;
		this.each((node, index, nodes): boolean => {
			if (node === target) {
				nodes.splice(index, 1);
				isDirty = true;
				return false;
			}
			return true;
		});
		if (isDirty) {
			this._mapped.toDirty();
			this._selection.remove(target);
			this.update();
		}
		return isDirty;
	}

	add(target: NODE, parent?: NODE): boolean {
		let isDirty = false;
		if (parent) {
			const accessor = this._accessor;
			const children = accessor.toChildren(parent);
			if (children) {
				children.push(target);
				isDirty = true;
			} else {
				const newChildren = accessor.newChildren(parent);
				if (newChildren) {
					newChildren.push(target);
					isDirty = true;
				}
			}
		} else {
			const nodes = this._nodes;
			if (nodes) {
				nodes.push(target);
			} else {
				this._nodes = [target];
			}
			isDirty = true;
		}
		if (isDirty) {
			this._mapped.toDirty();
			this.update();
		}
		return true;
	}

	addBefore(target: NODE, sibling: NODE): boolean {
		let isDirty = false;
		this.each((node, index, nodes): boolean => {
			if (node === sibling) {
				nodes.splice(index, 0, target);
				isDirty = true;
				return false;
			}
			return true;
		});
		if (isDirty) {
			this._mapped.toDirty();
			this.update();
		}
		return isDirty;
	}

	addAfter(target: NODE, sibling: NODE): boolean {
		let isDirty = false;
		this.each((node, index, nodes): boolean => {
			if (node === sibling) {
				nodes.splice(index + 1, 0, target);
				isDirty = true;
				return false;
			}
			return true;
		});
		if (isDirty) {
			this._mapped.toDirty();
			this.update();
		}
		return isDirty;
	}

	each(iteratee: DTreeNodeIteratee<NODE>): void {
		const value = this._nodes;
		if (value) {
			this.each_(value, null, iteratee);
		}
	}

	protected each_(nodes: NODE[], parent: NODE | null, iteratee: DTreeNodeIteratee<NODE>): void {
		const toChildren = this._accessor.toChildren;
		for (let i = 0, imax = nodes.length; i < imax; ++i) {
			const node = nodes[i];
			if (iteratee(node, i, nodes, parent) === false) {
				return;
			}
			const children = toChildren(node);
			if (children) {
				this.each_(children, node, iteratee);
			}
		}
	}
}

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DTreeData, DTreeDataOptions } from "./d-tree-data";
import { DTreeNode } from "./d-tree-node";
import { DTreeNodeAccessor } from "./d-tree-node-accessor";
import { DTreeNodeAccessorImpl } from "./d-tree-node-accessor-impl";
import { DTreeNodeIteratee } from "./d-tree-node-iteratee";
import { DTreeDataSelection } from "./d-tree-data-selection";

export interface DTreeDataImplParent {
	update(): void;
}

export class DTreeDataImpl<NODE extends DTreeNode> implements DTreeData<NODE> {
	protected _parent: DTreeDataImplParent;
	protected _nodeToFlag: WeakMap<NODE, number>;
	protected _rows: NODE[];
	protected _levels: number[];
	protected _isRowsDirty: boolean;
	protected _selection: DTreeDataSelection<NODE>;
	protected _nodes: NODE[];
	protected _accessor: DTreeNodeAccessor<NODE>;

	constructor(parent: DTreeDataImplParent, options?: DTreeDataOptions<NODE>) {
		this._parent = parent;
		this._nodeToFlag = new WeakMap<NODE, number>();
		this._selection = new DTreeDataSelection(this);
		this._rows = [];
		this._levels = [];
		this._accessor = new DTreeNodeAccessorImpl(options);

		const nodes = options?.nodes;
		if (nodes != null) {
			this._nodes = nodes;
			this._isRowsDirty = true;
		} else {
			this._nodes = [];
			this._isRowsDirty = false;
		}
	}

	get nodes(): NODE[] {
		return this._nodes;
	}

	set nodes(nodes: NODE[]) {
		this._nodes = nodes;
		this._isRowsDirty = true;
		this._selection.onNodeChange(nodes);
		this.update();
	}

	get rows(): NODE[] {
		if (this._isRowsDirty) {
			this._isRowsDirty = false;
			this.updateRows(this._nodes);
		}
		return this._rows;
	}

	get levels(): number[] {
		if (this._isRowsDirty) {
			this._isRowsDirty = false;
			this.updateRows(this._nodes);
		}
		return this._levels;
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
		this._isRowsDirty = true;
		this.update();
		return true;
	}

	expand(target: NODE): boolean {
		const nodeToFlag = this._nodeToFlag;
		if (!nodeToFlag.has(target)) {
			nodeToFlag.set(target, 1);
			this._isRowsDirty = true;
			this.update();
			return true;
		}
		return false;
	}

	collapse(target: NODE): boolean {
		const nodeToFlag = this._nodeToFlag;
		if (nodeToFlag.has(target)) {
			nodeToFlag.delete(target);
			this._isRowsDirty = true;
			this.update();
			return true;
		}
		return false;
	}

	expandAll(): void {
		let isRowsDirty = false;
		const nodeToFlag = this._nodeToFlag;
		this.each((node): void => {
			if (!nodeToFlag.has(node)) {
				nodeToFlag.set(node, 1);
				isRowsDirty = true;
			}
		});
		if (isRowsDirty) {
			this._isRowsDirty = true;
			this.update();
		}
	}

	collapseAll(): void {
		let isRowsDirty = false;
		const nodeToFlag = this._nodeToFlag;
		this.each((node): void => {
			if (nodeToFlag.has(node)) {
				nodeToFlag.delete(node);
				isRowsDirty = true;
			}
		});
		if (isRowsDirty) {
			this._isRowsDirty = true;
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
			this._isRowsDirty = true;
			this._selection.clear();
			this.update();
		}
	}

	remove(target: NODE): boolean {
		let isRowDirty = false;
		this.each((node, index, nodes): boolean => {
			if (node === target) {
				nodes.splice(index, 1);
				isRowDirty = true;
				return false;
			}
			return true;
		});
		if (isRowDirty) {
			this._isRowsDirty = true;
			this._selection.remove(target);
			this.update();
		}
		return isRowDirty;
	}

	add(target: NODE, parent?: NODE): boolean {
		let isRowDirty = false;
		if (parent) {
			const accessor = this._accessor;
			const children = accessor.toChildren(parent);
			if (children) {
				children.push(target);
				isRowDirty = true;
			} else {
				const newChildren = accessor.newChildren(parent);
				if (newChildren) {
					newChildren.push(target);
					isRowDirty = true;
				}
			}
		} else {
			const nodes = this._nodes;
			if (nodes) {
				nodes.push(target);
			} else {
				this._nodes = [target];
			}
			isRowDirty = true;
		}
		if (isRowDirty) {
			this._isRowsDirty = true;
			this.update();
		}
		return true;
	}

	addBefore(target: NODE, sibling: NODE): boolean {
		let isRowDirty = false;
		this.each((node, index, nodes): boolean => {
			if (node === sibling) {
				nodes.splice(index, 0, target);
				isRowDirty = true;
				return false;
			}
			return true;
		});
		if (isRowDirty) {
			this._isRowsDirty = true;
			this.update();
		}
		return isRowDirty;
	}

	addAfter(target: NODE, sibling: NODE): boolean {
		let isRowDirty = false;
		this.each((node, index, nodes): boolean => {
			if (node === sibling) {
				nodes.splice(index + 1, 0, target);
				isRowDirty = true;
				return false;
			}
			return true;
		});
		if (isRowDirty) {
			this._isRowsDirty = true;
			this.update();
		}
		return isRowDirty;
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

	protected updateRows(nodes: NODE[]): void {
		const rows = this._rows;
		const levels = this._levels;
		const irows = this.newRows(nodes, 0, 0, rows, levels);
		if (rows.length !== irows) {
			rows.length = irows;
			levels.length = irows;
		}
	}

	protected newRows(
		nodes: NODE[],
		irows: number,
		ilevel: number,
		rows: NODE[],
		levels: number[]
	): number {
		const nodeToFlag = this._nodeToFlag;
		const toChildren = this._accessor.toChildren;
		for (let i = 0, imax = nodes.length; i < imax; ++i) {
			const node = nodes[i];
			if (irows < rows.length) {
				rows[irows] = node;
				levels[irows] = ilevel;
			} else {
				rows.push(node);
				levels.push(ilevel);
			}
			irows += 1;
			const children = toChildren(node);
			if (children && nodeToFlag.has(node)) {
				irows = this.newRows(children, irows, ilevel + 1, rows, levels);
			}
		}
		return irows;
	}
}

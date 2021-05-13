/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";
import { DTreeNode } from "./d-tree-node";
import { DTreeDataSelectionParent } from "./d-tree-data-selection-parent";

export class DTreeDataSelection<NODE extends DTreeNode> extends utils.EventEmitter {
	protected _parent: DTreeDataSelectionParent<NODE>;
	protected _nodes: Set<NODE>;

	constructor(parent: DTreeDataSelectionParent<NODE>) {
		super();
		this._parent = parent;
		this._nodes = new Set<NODE>();
	}

	/**
	 * A first selected node or null.
	 */
	get first(): NODE | null {
		const nodes = this._nodes;
		if (0 < nodes.size) {
			let result: NODE | null = null;
			nodes.forEach((item: NODE): void => {
				if (result == null) {
					result = item;
				}
			});
			return result;
		}
		return null;
	}

	/**
	 * A last selected node or null.
	 */
	get last(): NODE | null {
		const nodes = this._nodes;
		if (0 < nodes.size) {
			let result: NODE | null = null;
			nodes.forEach((row: NODE): void => {
				result = row;
			});
			return result;
		}
		return null;
	}

	/**
	 * Returns a node at the given index or null.
	 *
	 * @param index an index
	 * @returns a node at the given index or null
	 */
	get(index: number): NODE | null {
		const nodes = this._nodes;
		if (0 <= index && index < nodes.size) {
			let counter = 0;
			let result: NODE | null = null;
			nodes.forEach((node): void => {
				if (counter === index) {
					result = node;
				}
				counter += 1;
			});
			return result;
		}
		return null;
	}

	/**
	 * Adds the given node
	 *
	 * @param target a node
	 * @return true if succeeded.
	 */
	add(target: NODE): boolean {
		const nodes = this._nodes;
		if (!nodes.has(target)) {
			nodes.add(target);
			this.onChange();
			return true;
		}
		return false;
	}

	/**
	 * Removes the given node.
	 *
	 * @param target a node
	 * @return true if succeeded
	 */
	remove(target: NODE): boolean {
		const nodes = this._nodes;
		if (nodes.has(target)) {
			nodes.delete(target);
			this.onChange();
			return true;
		}
		return false;
	}

	/**
	 * Toggles the given node.
	 *
	 * @param target a node
	 * @return true if succeeded.
	 */
	toggle(target: NODE): boolean {
		const nodes = this._nodes;
		if (nodes.has(target)) {
			nodes.delete(target);
		} else {
			nodes.add(target);
		}
		this.onChange();
		return true;
	}

	/**
	 * Clears all the nodes.
	 */
	clear(): void {
		const nodes = this._nodes;
		if (0 < nodes.size) {
			nodes.clear();
			this.onChange();
		}
	}

	/**
	 * Clears all the exisint nodes and adds the given node.
	 *
	 * @param target a node to be added
	 * @returns true if the selection is changed
	 */
	clearAndAdd(target: NODE): boolean {
		const nodes = this._nodes;
		const size = nodes.size;
		if (size === 1) {
			if (nodes.has(target)) {
				return false;
			} else {
				nodes.clear();
				nodes.add(target);
				this.onChange();
				return true;
			}
		} else {
			nodes.clear();
			nodes.add(target);
			this.onChange();
			return true;
		}
	}

	/**
	 * Clears the exising nodes and add all the given nodes.
	 *
	 * @param targets nodes to be added
	 * @returns true if the selection is changed
	 */
	clearAndAddAll(targets: NODE[]): boolean {
		let isDirty = false;
		const newNodes = new Set<NODE>();
		const oldNodes = this._nodes;
		for (let i = 0, imax = targets.length; i < imax; ++i) {
			const target = targets[i];
			if (!oldNodes.has(target)) {
				isDirty = true;
			}
			newNodes.add(target);
		}
		if (!isDirty) {
			oldNodes.forEach((oldItem): void => {
				if (!newNodes.has(oldItem)) {
					isDirty = true;
				}
			});
		}
		if (isDirty) {
			this._nodes = newNodes;
			this.onChange();
		}
		return isDirty;
	}

	/**
	 * Returns true if the given node is selected.
	 *
	 * @param target a node to be checked
	 * @returns true if the given node is selected
	 */
	contains(target: NODE): boolean {
		return this._nodes.has(target);
	}

	/**
	 * Returns the number of selected nodes.
	 *
	 * @returns the number of selected nodes
	 */
	size(): number {
		return this._nodes.size;
	}

	/**
	 * Returns true if the selection is empty.
	 *
	 * @returns true if the selection is empty
	 */
	isEmpty(): boolean {
		return this._nodes.size <= 0;
	}

	/**
	 * Iterates over selected nodes.
	 *
	 * @param iteratee an iteratee
	 */
	each(iteratee: (node: NODE) => boolean | void): void {
		let isCanceled = false;
		this._nodes.forEach((item): void => {
			if (!isCanceled) {
				if (iteratee(item) === false) {
					isCanceled = true;
				}
			}
		});
	}

	protected onChange(): void {
		this._parent.update();
		this.emit("change", this);
	}

	onNodeChange(nodes: NODE[] | undefined): void {
		if (nodes != null) {
			const oldNodes = this._nodes;
			const newNodes = this.newNodes(nodes, oldNodes, new Set<NODE>());
			if (oldNodes.size !== newNodes.size) {
				this._nodes = newNodes;
				this.onChange();
			}
		} else {
			const nodes = this._nodes;
			if (0 < nodes.size) {
				nodes.clear();
				this.onChange();
			}
		}
	}

	protected newNodes(items: NODE[], existing: Set<NODE>, result: Set<NODE>): Set<NODE> {
		const toChildren = this._parent.accessor.toChildren;
		for (let i = 0, imax = items.length; i < imax; ++i) {
			const item = items[i];
			if (existing.has(item)) {
				result.add(item);
			}
			const children = toChildren(item);
			if (children) {
				this.newNodes(children, existing, result);
			}
		}
		return result;
	}
}

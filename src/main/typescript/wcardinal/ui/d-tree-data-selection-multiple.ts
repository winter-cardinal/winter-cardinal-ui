/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";
import { DTreeNode } from "./d-tree-node";
import { DTreeDataSelectionParent } from "./d-tree-data-selection-parent";
import {
	DTreeDataSelection,
	DTreeDataSelectionOptions,
	DTreeDataSelectionType
} from "./d-tree-data-selection";

export class DTreeDataSelectionMultiple<NODE extends DTreeNode>
	extends utils.EventEmitter
	implements DTreeDataSelection<NODE>
{
	protected _parent: DTreeDataSelectionParent<NODE>;
	protected _nodes: Set<NODE>;

	constructor(parent: DTreeDataSelectionParent<NODE>, options?: DTreeDataSelectionOptions<NODE>) {
		super();
		this._parent = parent;
		this._nodes = new Set<NODE>();

		// Events
		const on = options?.on;
		if (on) {
			for (const name in on) {
				const handler = on[name];
				if (handler) {
					this.on(name, handler);
				}
			}
		}
	}

	get type(): DTreeDataSelectionType {
		return DTreeDataSelectionType.MULTIPLE;
	}

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

	add(target: NODE): boolean {
		const nodes = this._nodes;
		if (!nodes.has(target)) {
			nodes.add(target);
			this.onChange();
			return true;
		}
		return false;
	}

	remove(target: NODE): boolean {
		const nodes = this._nodes;
		if (nodes.has(target)) {
			nodes.delete(target);
			this.onChange();
			return true;
		}
		return false;
	}

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

	clear(): boolean {
		const nodes = this._nodes;
		if (0 < nodes.size) {
			nodes.clear();
			this.onChange();
			return true;
		}
		return false;
	}

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

	contains(target: NODE): boolean {
		return this._nodes.has(target);
	}

	size(): number {
		return this._nodes.size;
	}

	isEmpty(): boolean {
		return this._nodes.size <= 0;
	}

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

	toArray(): NODE[] {
		const result: NODE[] = [];
		this._nodes.forEach((item): void => {
			result.push(item);
		});
		return result;
	}

	protected onChange(): void {
		this._parent.update();
		this.emit("change", this);
	}

	onNodeChange(nodes: NODE[]): void {
		const oldNodes = this._nodes;
		if (0 < oldNodes.size) {
			const newNodes = this.newNodes(nodes, oldNodes, new Set<NODE>());
			if (oldNodes.size !== newNodes.size) {
				this._nodes = newNodes;
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

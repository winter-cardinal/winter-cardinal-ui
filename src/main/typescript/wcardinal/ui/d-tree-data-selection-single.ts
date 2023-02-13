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

export class DTreeDataSelectionSingle<NODE extends DTreeNode>
	extends utils.EventEmitter
	implements DTreeDataSelection<NODE>
{
	protected _parent: DTreeDataSelectionParent<NODE>;
	protected _node: NODE | null;

	constructor(parent: DTreeDataSelectionParent<NODE>, options?: DTreeDataSelectionOptions<NODE>) {
		super();
		this._parent = parent;
		this._node = null;

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
		return DTreeDataSelectionType.SINGLE;
	}

	get first(): NODE | null {
		return this._node;
	}

	get last(): NODE | null {
		return this._node;
	}

	get(index: number): NODE | null {
		if (index === 0) {
			return this._node;
		}
		return null;
	}

	add(target: NODE): boolean {
		if (this._node !== target) {
			this._node = target;
			this.onChange();
			return true;
		}
		return false;
	}

	remove(target: NODE): boolean {
		if (this._node === target) {
			this._node = null;
			this.onChange();
			return true;
		}
		return false;
	}

	toggle(target: NODE): boolean {
		if (this._node === target) {
			this._node = null;
		} else {
			this._node = target;
		}
		this.onChange();
		return true;
	}

	clear(): boolean {
		if (this._node != null) {
			this._node = null;
			this.onChange();
			return true;
		}
		return false;
	}

	clearAndAdd(target: NODE): boolean {
		if (this._node === target) {
			return false;
		} else {
			this._node = target;
			this.onChange();
			return true;
		}
	}

	clearAndAddAll(targets: NODE[]): boolean {
		if (0 < targets.length) {
			const last = targets[targets.length - 1];
			return this.clearAndAdd(last);
		} else {
			return this.clear();
		}
	}

	contains(target: NODE): boolean {
		return this._node === target;
	}

	size(): number {
		return this._node != null ? 1 : 0;
	}

	isEmpty(): boolean {
		return this._node == null;
	}

	each(iteratee: (node: NODE) => boolean | void): void {
		const node = this._node;
		if (node != null) {
			iteratee(node);
		}
	}

	toArray(): NODE[] {
		const node = this._node;
		if (node != null) {
			return [node];
		}
		return [];
	}

	protected onChange(): void {
		this._parent.update();
		this.emit("change", this);
	}

	onNodeChange(nodes: NODE[]): void {
		const oldNode = this._node;
		if (oldNode != null) {
			const newNode = this.newNode(nodes, oldNode);
			if (oldNode !== newNode) {
				this._node = newNode;
				this.onChange();
			}
		}
	}

	protected newNode(items: NODE[], existing: NODE | null): NODE | null {
		const toChildren = this._parent.accessor.toChildren;
		for (let i = 0, imax = items.length; i < imax; ++i) {
			const item = items[i];
			if (existing === item) {
				return item;
			}
			const children = toChildren(item);
			if (children) {
				const result = this.newNode(children, existing);
				if (result != null) {
					return result;
				}
			}
		}
		return null;
	}
}

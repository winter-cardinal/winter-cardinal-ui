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

export class DTreeDataSelectionNone<NODE extends DTreeNode>
	extends utils.EventEmitter
	implements DTreeDataSelection<NODE>
{
	protected _parent: DTreeDataSelectionParent<NODE>;

	constructor(parent: DTreeDataSelectionParent<NODE>, options?: DTreeDataSelectionOptions<NODE>) {
		super();
		this._parent = parent;

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
		return DTreeDataSelectionType.NONE;
	}

	get first(): NODE | null {
		return null;
	}

	get last(): NODE | null {
		return null;
	}

	get(index: number): NODE | null {
		return null;
	}

	add(target: NODE): boolean {
		return false;
	}

	remove(target: NODE): boolean {
		return false;
	}

	toggle(target: NODE): boolean {
		return false;
	}

	clear(): boolean {
		return false;
	}

	clearAndAdd(target: NODE): boolean {
		return false;
	}

	clearAndAddAll(targets: NODE[]): boolean {
		return false;
	}

	contains(target: NODE): boolean {
		return false;
	}

	size(): number {
		return 0;
	}

	isEmpty(): boolean {
		return true;
	}

	each(iteratee: (node: NODE) => boolean | void): void {
		// DO NOTHING
	}

	toArray(): NODE[] {
		return [];
	}

	onNodeChange(nodes: NODE[]): void {
		// DO NOTHING
	}
}

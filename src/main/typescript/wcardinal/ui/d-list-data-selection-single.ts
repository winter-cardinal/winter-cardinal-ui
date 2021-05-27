/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";
import { DListDataSelectionParent } from "./d-list-data-selection-parent";
import {
	DListDataSelection,
	DListDataSelectionType,
	DListDataSelectionOptions
} from "./d-list-data-selection";
import { DListItemAccessor, DListItemToId } from "./d-list-item-accessor";

export class DListDataSelectionSingle<ITEM>
	extends utils.EventEmitter
	implements DListDataSelection<ITEM> {
	protected _parent: DListDataSelectionParent<ITEM>;
	protected _accessor: DListItemAccessor<ITEM>;
	protected _item: ITEM | null;

	constructor(
		parent: DListDataSelectionParent<ITEM>,
		accessor: DListItemAccessor<ITEM>,
		options?: DListDataSelectionOptions<ITEM>
	) {
		super();

		this._parent = parent;
		this._accessor = accessor;
		this._item = null;

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

	get type(): DListDataSelectionType {
		return DListDataSelectionType.SINGLE;
	}

	get first(): ITEM | null {
		return this._item;
	}

	get last(): ITEM | null {
		return this.get(this.size() - 1);
	}

	get(index: number): ITEM | null {
		if (0 === index) {
			return this._item;
		}
		return null;
	}

	add(target: ITEM): boolean {
		if (this._item !== target) {
			this._item = target;
			this.onChange();
			return true;
		}
		return false;
	}

	remove(target: ITEM): boolean {
		if (this._item === target) {
			this._item = null;
			this.onChange();
			return true;
		}
		return false;
	}

	toggle(target: ITEM): boolean {
		if (this._item === target) {
			this._item = null;
		} else {
			this._item = target;
		}
		this.onChange();
		return true;
	}

	clear(): void {
		if (this._item != null) {
			this._item = null;
			this.onChange();
		}
	}

	clearAndAdd(target: ITEM): boolean {
		if (this._item !== target) {
			this._item = target;
			this.onChange();
			return true;
		}
		return false;
	}

	clearAndAddAll(targets: ITEM[]): boolean {
		const targetsLength = targets.length;
		if (0 < targetsLength) {
			const last = targets[targetsLength - 1];
			if (this._item !== last) {
				this._item = last;
				this.onChange();
				return true;
			}
		} else {
			if (this._item != null) {
				this._item = null;
				this.onChange();
				return true;
			}
		}
		return false;
	}

	contains(target: ITEM): boolean {
		return this._item === target;
	}

	size(): number {
		return this._item != null ? 1 : 0;
	}

	isEmpty(): boolean {
		return this.size() <= 0;
	}

	each(iteratee: (item: ITEM) => boolean | void): void {
		const item = this._item;
		if (item != null) {
			iteratee(item);
		}
	}

	toArray(): ITEM[] {
		const item = this._item;
		if (item != null) {
			return [item];
		}
		return [];
	}

	protected onChange(): void {
		this._parent.update();
		this.emit("change", this);
	}

	protected findById(id: unknown, toId: DListItemToId<ITEM>, items: ITEM[]): ITEM | null {
		for (let i = 0, imax = items.length; i < imax; ++i) {
			const item = items[i];
			const itemId = toId(item);
			if (id === itemId) {
				return item;
			}
		}
		return null;
	}

	protected find(target: ITEM, items: ITEM[]): ITEM | null {
		for (let i = 0, imax = items.length; i < imax; ++i) {
			const item = items[i];
			if (target === item) {
				return item;
			}
		}
		return null;
	}

	onItemChange(before: ITEM[], items: ITEM[], after: ITEM[]): void {
		const oldItem = this._item;
		if (oldItem == null) {
			return;
		}
		let newItem: ITEM | null = null;
		const toId = this._accessor.toId;
		if (toId) {
			const oldItemId = toId(oldItem);
			newItem =
				this.findById(oldItemId, toId, before) ||
				this.findById(oldItemId, toId, items) ||
				this.findById(oldItemId, toId, after);
		} else {
			newItem =
				this.find(oldItem, before) ||
				this.find(oldItem, items) ||
				this.find(oldItem, after);
		}
		if (oldItem !== newItem) {
			this._item = newItem;
			this.onChange();
		}
	}
}

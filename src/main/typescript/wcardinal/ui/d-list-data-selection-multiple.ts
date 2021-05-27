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

export class DListDataSelectionMultiple<ITEM>
	extends utils.EventEmitter
	implements DListDataSelection<ITEM> {
	protected _parent: DListDataSelectionParent<ITEM>;
	protected _accessor: DListItemAccessor<ITEM>;
	protected _items: Set<ITEM>;

	constructor(
		parent: DListDataSelectionParent<ITEM>,
		accessor: DListItemAccessor<ITEM>,
		options?: DListDataSelectionOptions<ITEM>
	) {
		super();

		this._parent = parent;
		this._accessor = accessor;
		this._items = new Set<ITEM>();

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
		return DListDataSelectionType.MULTIPLE;
	}

	get first(): ITEM | null {
		return this.get(0);
	}

	get last(): ITEM | null {
		return this.get(this.size() - 1);
	}

	get(index: number): ITEM | null {
		const items = this._items;
		if (0 <= index && index < items.size) {
			let counter = 0;
			let result: ITEM | null = null;
			items.forEach((item): void => {
				if (counter === index) {
					result = item;
				}
				counter += 1;
			});
			return result;
		}
		return null;
	}

	add(target: ITEM): boolean {
		const items = this._items;
		if (!items.has(target)) {
			items.add(target);
			this.onChange();
			return true;
		}
		return false;
	}

	remove(target: ITEM): boolean {
		const items = this._items;
		if (items.has(target)) {
			items.delete(target);
			this.onChange();
			return true;
		}
		return false;
	}

	toggle(target: ITEM): boolean {
		const items = this._items;
		if (items.has(target)) {
			items.delete(target);
		} else {
			items.add(target);
		}
		this.onChange();
		return true;
	}

	clear(): void {
		const items = this._items;
		if (0 < items.size) {
			items.clear();
			this.onChange();
		}
	}

	clearAndAdd(target: ITEM): boolean {
		const items = this._items;
		const size = items.size;
		if (size === 1) {
			if (items.has(target)) {
				return false;
			} else {
				items.clear();
				items.add(target);
				this.onChange();
				return true;
			}
		} else {
			items.clear();
			items.add(target);
			this.onChange();
			return true;
		}
	}

	clearAndAddAll(targets: ITEM[]): boolean {
		let isDirty = false;
		const newNodes = new Set<ITEM>();
		const oldNodes = this._items;
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
			this._items = newNodes;
			this.onChange();
		}
		return isDirty;
	}

	contains(target: ITEM): boolean {
		return this._items.has(target);
	}

	size(): number {
		return this._items.size;
	}

	isEmpty(): boolean {
		return this.size() <= 0;
	}

	each(iteratee: (item: ITEM) => boolean | void): void {
		let isCanceled = false;
		this._items.forEach((item): void => {
			if (!isCanceled) {
				if (iteratee(item) === false) {
					isCanceled = true;
				}
			}
		});
	}

	toArray(): ITEM[] {
		const result: ITEM[] = [];
		this._items.forEach((item) => {
			result.push(item);
		});
		return result;
	}

	protected onChange(): void {
		this._parent.update();
		this.emit("change", this);
	}

	protected toItemIdMap(
		items: ITEM[],
		toId: DListItemToId<ITEM>,
		result: Map<unknown, ITEM>
	): void {
		for (let i = 0, imax = items.length; i < imax; ++i) {
			const item = items[i];
			result.set(toId(item), item);
		}
	}

	protected toItemSet(items: ITEM[], result: Set<ITEM>): void {
		for (let i = 0, imax = items.length; i < imax; ++i) {
			result.add(items[i]);
		}
	}

	onItemChange(before: ITEM[], items: ITEM[], after: ITEM[]): void {
		const oldItems = this._items;
		const newItems = new Set<ITEM>();
		const toId = this._accessor.toId;
		if (toId) {
			const newItemIdMap = new Map<unknown, ITEM>();
			this.toItemIdMap(before, toId, newItemIdMap);
			this.toItemIdMap(items, toId, newItemIdMap);
			this.toItemIdMap(after, toId, newItemIdMap);
			oldItems.forEach((oldItem): void => {
				const oldItemId = toId(oldItem);
				const newItem = newItemIdMap.get(oldItemId);
				if (newItem != null) {
					newItems.add(newItem);
				}
			});
			this._items = newItems;
			this.onChange();
		} else {
			const newItemSet = new Set<ITEM>();
			this.toItemSet(before, newItemSet);
			this.toItemSet(items, newItemSet);
			this.toItemSet(after, newItemSet);
			oldItems.forEach((oldItem): void => {
				if (newItemSet.has(oldItem)) {
					newItems.add(oldItem);
				}
			});
			if (oldItems.size !== newItems.size) {
				this._items = newItems;
				this.onChange();
			}
		}
	}

	protected newItems(items: ITEM[], existing: Set<ITEM>, result: Set<ITEM>): Set<ITEM> {
		for (let i = 0, imax = items.length; i < imax; ++i) {
			const item = items[i];
			if (existing.has(item)) {
				result.add(item);
			}
		}
		return result;
	}
}

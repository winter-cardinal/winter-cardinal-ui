/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DListData, DListDataIteratee, DListDataOptions } from "./d-list-data";
import { DListDataMapped } from "./d-list-data-mapped";
import { DListDataMappedImpl } from "./d-list-data-mapped-impl";
import { DListDataSelection, DListDataSelectionType } from "./d-list-data-selection";
import { DListDataSelectionMultiple } from "./d-list-data-selection-multiple";
import { DListDataSelectionNone } from "./d-list-data-selection-none";
import { DListDataSelectionSingle } from "./d-list-data-selection-single";
import { DListItemAccessor } from "./d-list-item-accessor";
import { DListItemAccessorImpl } from "./d-list-item-accessor-impl";

export interface DListDataImplParent {
	update(forcibly?: boolean): void;
}

export interface DListDataImplSelection<ITEM> extends DListDataSelection<ITEM> {
	onItemChange(before: ITEM[], items: ITEM[], after: ITEM[]): void;
}

export class DListDataImpl<ITEM> implements DListData<ITEM> {
	protected _parent: DListDataImplParent;
	protected _before: ITEM[];
	protected _items: ITEM[];
	protected _after: ITEM[];
	protected _accessor: DListItemAccessorImpl<ITEM>;
	protected _selection: DListDataImplSelection<ITEM>;
	protected _mapped: DListDataMapped<ITEM>;

	constructor(parent: DListDataImplParent, options?: DListDataOptions<ITEM>) {
		this._parent = parent;
		if (options) {
			this._before = options.before || [];
			this._items = options.items || [];
			this._after = options.after || [];
		} else {
			this._before = [];
			this._items = [];
			this._after = [];
		}
		const accessor = new DListItemAccessorImpl<ITEM>(options);
		this._accessor = accessor;
		this._selection = this.toSelection(accessor, options);
		this._mapped = new DListDataMappedImpl<ITEM>(this);
	}

	protected toSelection(
		accessor: DListItemAccessorImpl<ITEM>,
		options?: DListDataOptions<ITEM>
	): DListDataImplSelection<ITEM> {
		const selection = options?.selection;
		switch (selection?.type) {
			case DListDataSelectionType.NONE:
			case "NONE":
				return new DListDataSelectionNone<ITEM>(this, accessor, selection);
			case DListDataSelectionType.MULTIPLE:
			case "MULTIPLE":
				return new DListDataSelectionMultiple<ITEM>(this, accessor, selection);
			default:
				return new DListDataSelectionSingle<ITEM>(this, accessor, selection);
		}
	}

	get before(): ITEM[] {
		return this._before;
	}

	set before(before: ITEM[]) {
		this._before = before;
		this._selection.onItemChange(before, this._items, this._after);
		this.update();
	}

	get items(): ITEM[] {
		return this._items;
	}

	set items(items: ITEM[]) {
		this._items = items;
		this._selection.onItemChange(this._before, items, this._after);
		this.update();
	}

	get after(): ITEM[] {
		return this._after;
	}

	set after(after: ITEM[]) {
		this._after = after;
		this._selection.onItemChange(this._before, this._items, after);
		this.update();
	}

	get mapped(): DListDataMapped<ITEM> {
		return this._mapped;
	}

	get accessor(): DListItemAccessor<ITEM> {
		return this._accessor;
	}

	get selection(): DListDataSelection<ITEM> {
		return this._selection;
	}

	update(forcibly?: boolean): void {
		this._parent.update(forcibly);
	}

	size(): number {
		return this._items.length;
	}

	clear(): void {
		const items = this._items;
		if (0 < items.length) {
			items.length = 0;
			this.onChange();
		}
	}

	clearAndAdd(item: ITEM): void {
		const items = this._items;
		items.length = 0;
		items.push(item);
		this.onChange();
	}

	clearAndAddAll(newItems: ITEM[]): void {
		let isChanged = false;
		const items = this._items;
		if (0 < items.length) {
			items.length = 0;
			isChanged = true;
		}
		if (0 < newItems.length) {
			for (let i = 0, imax = newItems.length; i < imax; ++i) {
				items.push(newItems[i]);
			}
			isChanged = true;
		}
		if (isChanged) {
			this.onChange();
		}
	}

	add(item: ITEM, index?: number): void {
		const items = this._items;
		if (index == null) {
			items.push(item);
			this.onChange();
		} else if (0 <= index && index < items.length) {
			items.splice(index, 0, item);
			this.onChange();
		}
	}

	addAll(newItems: ITEM[], index?: number): void {
		if (0 < newItems.length) {
			const items = this._items;
			const itemsLength = items.length;
			if (index == null) {
				for (let i = 0, imax = newItems.length; i < imax; ++i) {
					items.push(newItems[i]);
				}
				this.onChange();
			} else if (0 <= index && index < itemsLength) {
				for (let i = 0, imax = newItems.length; i < imax; ++i) {
					items.splice(index + i, 0, newItems[i]);
				}
				this.onChange();
			}
		}
	}

	get(index: number): ITEM | null {
		const items = this._items;
		if (0 <= index && index < items.length) {
			return items[index];
		}
		return null;
	}

	set(index: number, item: ITEM): ITEM | null {
		const items = this._items;
		if (0 <= index && index < items.length) {
			const result = items[index];
			items[index] = item;
			this.onChange();
			return result;
		}
		return null;
	}

	remove(index: number): ITEM | null {
		const items = this._items;
		if (0 <= index && index < items.length) {
			const result = items.splice(index, 1)[0];
			this.onChange();
			return result;
		}
		return null;
	}

	each(iteratee: DListDataIteratee<ITEM>, from?: number, to?: number): void {
		const items = this._items;
		const size = items.length;
		const ifrom = from != null ? Math.max(0, from) : 0;
		const ito = to != null ? Math.min(size, to) : size;
		for (let i = ifrom; i < ito; ++i) {
			if (iteratee(items[i], i) === false) {
				break;
			}
		}
	}

	protected onChange(): void {
		this.update();
	}
}

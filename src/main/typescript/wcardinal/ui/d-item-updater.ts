/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";

export interface DItemUpdaterItem<VALUE> extends DBase {
	readonly value?: VALUE;
	set(value: VALUE, index: number, forcibly?: boolean): void;
	unset(): void;
}

export type DItemUpdaterNewItem<DATA, ITEM> = (data: DATA) => ITEM;

export interface DItemUpdaterOptions<VALUE, DATA, ITEM> {
	newItem?: DItemUpdaterNewItem<DATA, ITEM>;
}

export interface DItemUpdaterDataSelection<VALUE> {
	contains(value: VALUE): boolean;
}

export interface DItemUpdaterDataMapped<VALUE> {
	size(): number;
	each(iteratee: (value: VALUE, index: number) => void | boolean, from: number, to: number): void;
}

export interface DItemUpdaterData<VALUE> {
	readonly selection: DItemUpdaterDataSelection<VALUE>;
}

/**
 * The primary purpose of this class is to minimize the number of rendered items (e.g., {@link DListItem})
 * as low as possible and to update their positions and states. For this sake, the updater calculates the
 * required number of items whenever their container size changes and creates items if needed.
 */
export abstract class DItemUpdater<
	VALUE = unknown,
	DATA extends DItemUpdaterData<VALUE> = DItemUpdaterData<VALUE>,
	DATA_MAPPED extends DItemUpdaterDataMapped<VALUE> = DItemUpdaterDataMapped<VALUE>,
	ITEM extends DItemUpdaterItem<VALUE> = DItemUpdaterItem<VALUE>,
	OPTIONS extends DItemUpdaterOptions<VALUE, DATA, ITEM> = DItemUpdaterOptions<VALUE, DATA, ITEM>
> {
	protected _updateItemsCount: number;
	protected _isUpdateItemsCalled: boolean;
	protected _isUpdateItemsCalledForcibly: boolean;
	protected _itemHeight: number;
	protected _itemIndexStart: number;
	protected _itemIndexEnd: number;
	protected _workItems: ITEM[];
	protected _data: DATA;
	protected _content: DBase;
	protected _container: DBase;
	protected _newItem: DItemUpdaterNewItem<DATA, ITEM>;

	constructor(data: DATA, content: DBase, container: DBase, options?: OPTIONS) {
		this._updateItemsCount = 0;
		this._isUpdateItemsCalled = false;
		this._isUpdateItemsCalledForcibly = false;
		this._itemHeight = -1;
		this._itemIndexStart = 0;
		this._itemIndexEnd = 0;
		this._workItems = [];
		this._data = data;
		this._content = content;
		this._container = container;
		this._newItem = this.toNewItem(options);
	}

	protected toNewItem(
		options?: DItemUpdaterOptions<VALUE, DATA, ITEM>
	): DItemUpdaterNewItem<DATA, ITEM> {
		return options?.newItem || this.newItem;
	}

	protected abstract newItem(this: undefined, data: DATA): ITEM;

	lock(): void {
		this._updateItemsCount += 1;
		if (this._updateItemsCount === 1) {
			this._isUpdateItemsCalled = false;
			this._isUpdateItemsCalledForcibly = false;
		}
	}

	unlock(callIfNeeded: boolean): void {
		this._updateItemsCount -= 1;
		if (this._updateItemsCount === 0) {
			if (callIfNeeded && this._isUpdateItemsCalled) {
				this.update(this._isUpdateItemsCalledForcibly);
			}
			this._isUpdateItemsCalled = false;
			this._isUpdateItemsCalledForcibly = false;
		}
	}

	update(forcibly?: boolean): void {
		if (0 < this._updateItemsCount) {
			this._isUpdateItemsCalled = true;
			if (forcibly) {
				this._isUpdateItemsCalledForcibly = true;
			}
			return;
		}

		const content = this._content;
		const container = this._container;
		const items = container.children as ITEM[];
		const height = content.parent.height;

		const data = this._data;
		const mapped = this.toMapped(data);
		const dataSize = mapped.size();

		const oldItemIndexStart = this._itemIndexStart;
		let oldItemIndexEnd = this._itemIndexEnd;
		let oldItemCount = oldItemIndexEnd - oldItemIndexStart;

		const newItem = this._newItem;
		let itemHeight = this._itemHeight;
		if (this._itemHeight < 0) {
			if (0 < items.length) {
				itemHeight = Math.max(1, items[0].height);
			} else {
				const item = newItem(data);
				item.state.isAlternated = oldItemIndexStart % 2 === 0;
				container.addChild(item);
				itemHeight = Math.max(1, item.height);
				oldItemIndexEnd += 1;
				oldItemCount += 1;
			}
			this._itemHeight = itemHeight;
		}

		const y = content !== container ? container.transform.position.y : 0;
		const newHeight = dataSize * itemHeight;
		const newContentHeight = Math.max(height, newHeight);
		const newContentY = Math.max(height - newContentHeight, content.position.y);

		const newItemIndexLowerBound = Math.floor((0 - (newContentY + y)) / itemHeight);
		const newItemIndexUpperBound = Math.floor((height - (newContentY + y)) / itemHeight);
		const newItemIndexStart =
			newItemIndexLowerBound - (newItemIndexLowerBound % 2 === 0 ? 2 : 1);
		let newItemIndexEnd =
			newItemIndexUpperBound +
			((newItemIndexUpperBound - newItemIndexStart + 1) % 2 === 0 ? 3 : 2);
		let newItemCount = newItemIndexEnd - newItemIndexStart;
		if (newItemCount < oldItemCount && oldItemCount - 2 <= newItemCount) {
			newItemCount = oldItemCount;
			newItemIndexEnd = newItemIndexStart + newItemCount;
		}

		if (oldItemCount < newItemCount) {
			for (let i = oldItemCount; i < newItemCount; ++i) {
				const oldItemIndex = oldItemIndexStart + i;
				const item = newItem(data);
				item.state.isAlternated = oldItemIndex % 2 === 0;
				container.addChild(item);
			}
			oldItemCount = newItemCount;
			oldItemIndexEnd = oldItemIndexStart + oldItemCount;
		} else if (newItemCount < oldItemCount) {
			for (let i = oldItemCount - 1; newItemCount <= i; --i) {
				container.removeChild(items[i]);
			}
			oldItemCount = newItemCount;
			oldItemIndexEnd = oldItemIndexStart + oldItemCount;
		}

		this._itemIndexStart = newItemIndexStart;
		this._itemIndexEnd = newItemIndexEnd;

		const itemIndexStartDelta = newItemIndexStart - oldItemIndexStart;
		const itemIndexStartDeltaAbs = Math.abs(itemIndexStartDelta);
		const itemsLength = items.length;
		if (0 < itemIndexStartDeltaAbs && itemIndexStartDeltaAbs < itemsLength) {
			const work = this._workItems;
			if (0 < itemIndexStartDelta) {
				for (let i = 0; i < itemIndexStartDeltaAbs; ++i) {
					const item = items[i];
					this.reset(item);
					work.push(item);
				}
				for (let i = itemIndexStartDeltaAbs; i < itemsLength; ++i) {
					items[i - itemIndexStartDeltaAbs] = items[i];
				}
				for (let i = 0; i < itemIndexStartDeltaAbs; ++i) {
					items[itemsLength - itemIndexStartDeltaAbs + i] = work[i];
				}
			} else {
				for (let i = 0; i < itemIndexStartDeltaAbs; ++i) {
					const item = items[itemsLength - itemIndexStartDeltaAbs + i];
					this.reset(item);
					work.push(item);
				}
				for (let i = itemsLength - itemIndexStartDeltaAbs - 1; 0 <= i; --i) {
					items[i + itemIndexStartDeltaAbs] = items[i];
				}
				for (let i = 0; i < itemIndexStartDeltaAbs; ++i) {
					items[i] = work[i];
				}
			}
			work.length = 0;
		}

		mapped.each(
			(datum: VALUE, index: number): void | boolean => {
				const item = items[index - newItemIndexStart];
				item.position.y = index * itemHeight;
				this.set(item, datum, index, forcibly);
			},
			newItemIndexStart,
			newItemIndexStart + itemsLength
		);

		for (let i = 0; newItemIndexStart + i < 0 && i < itemsLength; ++i) {
			const item = items[i];
			const index = newItemIndexStart + i;
			item.position.y = index * itemHeight;
			this.unset(item);
		}

		for (let i = itemsLength - 1; dataSize <= newItemIndexStart + i && 0 <= i; --i) {
			const item = items[i];
			const index = newItemIndexStart + i;
			item.position.y = index * itemHeight;
			this.unset(item);
		}

		this.lock();
		content.position.y = newContentY;
		content.height = newContentHeight;
		if (content !== container) {
			container.height = newHeight;
		}
		this.unlock(false);
	}

	protected abstract toMapped(data: DATA): DATA_MAPPED;

	protected set(item: ITEM, value: VALUE, index: number, forcibly?: boolean): void {
		item.set(value, index, forcibly);
	}

	protected unset(item: ITEM): void {
		item.unset();
	}

	protected reset(item: ITEM): ITEM {
		item.blur(true);
		const cells = item.children;
		for (let i = 0, imax = cells.length; i < imax; ++i) {
			const cell = cells[i];
			if (cell instanceof DBase) {
				cell.state.isPressed = false;
			}
		}
		return item;
	}
}

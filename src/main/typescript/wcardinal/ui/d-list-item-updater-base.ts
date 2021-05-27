/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DBaseState } from "./d-base-state";

export interface DListItemUpdaterBaseDataSelection<VALUE> {
	contains(value: VALUE): boolean;
}

export interface DListItemUpdaterBaseDataMapped<VALUE> {
	size(): number;
	each(iteratee: (value: VALUE, index: number) => void | boolean, from: number, to: number): void;
}

export interface DListItemUpdaterBaseData<VALUE> {
	readonly selection: DListItemUpdaterBaseDataSelection<VALUE>;
}

export abstract class DListItemUpdaterBase<
	VALUE = unknown,
	DATA extends DListItemUpdaterBaseData<VALUE> = DListItemUpdaterBaseData<VALUE>,
	DATA_MAPPED extends DListItemUpdaterBaseDataMapped<VALUE> = DListItemUpdaterBaseDataMapped<VALUE>,
	ITEM extends DBase = DBase
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

	constructor(itemHeight: number, data: DATA, content: DBase, container: DBase) {
		this._updateItemsCount = 0;
		this._isUpdateItemsCalled = false;
		this._isUpdateItemsCalledForcibly = false;
		this._itemHeight = itemHeight;
		this._itemIndexStart = 0;
		this._itemIndexEnd = 0;
		this._workItems = [];
		this._data = data;
		this._content = content;
		this._container = container;
	}

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
		const itemHeight = this._itemHeight;

		const data = this._data;
		const mapped = this.toMapped(data);
		const dataSize = mapped.size();

		const oldItemIndexStart = this._itemIndexStart;
		let oldItemIndexEnd = this._itemIndexEnd;
		let oldItemCount = oldItemIndexEnd - oldItemIndexStart;

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
				const newItem = this.create(data, mapped, oldItemIndex % 2 === 0);
				container.addChild(newItem);
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
					work.push(this.reset(items[i]));
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
					work.push(this.reset(item));
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

		const selection = data.selection;
		mapped.each(
			(datum: VALUE, index: number): void | boolean => {
				this.set(
					datum,
					data,
					mapped,
					itemHeight,
					selection.contains(datum),
					items[index - newItemIndexStart],
					index,
					forcibly
				);
			},
			newItemIndexStart,
			newItemIndexStart + itemsLength
		);

		for (let i = 0; newItemIndexStart + i < 0 && i < itemsLength; ++i) {
			this.unset(itemHeight, items[i], newItemIndexStart + i);
		}

		for (let i = itemsLength - 1; dataSize <= newItemIndexStart + i && 0 <= i; --i) {
			this.unset(itemHeight, items[i], newItemIndexStart + i);
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

	protected set(
		value: VALUE,
		data: DATA,
		mapped: DATA_MAPPED,
		itemHeight: number,
		isSelected: boolean,
		item: ITEM,
		index: number,
		forcibly?: boolean
	): void {
		// Position
		item.position.y = index * itemHeight;

		// State
		const state = item.state;
		state.lock();
		state.set(DBaseState.ACTIVE, isSelected);
		state.remove(DBaseState.DISABLED);
		state.unlock();
	}

	protected unset(itemHeight: number, item: ITEM, index: number): void {
		// Position
		item.position.y = index * itemHeight;

		// State
		const state = item.state;
		state.lock();
		state.add(DBaseState.DISABLED);
		state.remove(DBaseState.ACTIVE);
		state.unlock();
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

	protected abstract create(data: DATA, mapped: DATA_MAPPED, isEven: boolean): ITEM;
}

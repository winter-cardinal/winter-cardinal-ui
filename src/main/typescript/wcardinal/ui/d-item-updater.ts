/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DApplications } from "./d-applications";
import { DBase } from "./d-base";
import { isNumber } from "./util/is-number";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";

export interface DItemUpdaterItem<VALUE> extends DBase {
	readonly value?: VALUE;
	readonly index?: number;
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
	protected _itemWidth: number;
	protected _multiplicity: number;
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
		this._itemWidth = -1;
		this._multiplicity = 1;
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

	get multiplicity(): number {
		return this._multiplicity;
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
		const contentParent = content.parent;
		if (contentParent == null) {
			return;
		}

		const container = this._container;
		const items = container.children as ITEM[];
		const height = contentParent.height;

		const data = this._data;
		const mapped = this.toMapped(data);
		const dataSize = mapped.size();

		const oldItemIndexStart = this._itemIndexStart;
		let oldItemIndexEnd = this._itemIndexEnd;
		let oldItemCount = oldItemIndexEnd - oldItemIndexStart;

		const newItem = this._newItem;
		let itemHeight = this._itemHeight;
		let itemWidth = this._itemWidth;
		if (this._itemHeight < 0) {
			let item: ITEM;
			if (0 < items.length) {
				item = items[0];
			} else {
				item = newItem(data);
				item.state.isAlternated = oldItemIndexStart % 2 === 0;
				container.addChild(item);
				oldItemIndexEnd += 1;
				oldItemCount += 1;
			}
			itemHeight = Math.max(1, item.height);
			if (isNumber(item.getWidth())) {
				itemWidth = Math.max(1, item.width);
			}
			this._itemHeight = itemHeight;
			this._itemWidth = itemWidth;
		}
		const multiplicity = 0 < itemWidth ? Math.max(1, Math.floor(content.width / itemWidth)) : 1;
		this._multiplicity = multiplicity;

		const y = content !== container ? container.transform.position.y : 0;
		const newHeight = Math.ceil(dataSize / multiplicity) * itemHeight;
		const newContentHeight = Math.max(height, newHeight);
		const newContentY = Math.max(height - newContentHeight, content.position.y);

		const newItemIndexLowerBound = Math.floor(
			((0 - (newContentY + y)) * multiplicity) / itemHeight
		);
		const newItemIndexUpperBound = Math.floor(
			((height - (newContentY + y)) * multiplicity) / itemHeight
		);
		let newItemIndexStart = newItemIndexLowerBound - multiplicity;
		if (newItemIndexStart % 2 !== 0) {
			newItemIndexStart -= 1;
		}
		let newItemIndexEnd = newItemIndexUpperBound + multiplicity + multiplicity;
		if (newItemIndexEnd % 2 !== 0) {
			newItemIndexEnd += 1;
		}
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
				const ix = index % multiplicity;
				const iy = Math.floor(index / multiplicity);
				item.position.set(ix * itemWidth, iy * itemHeight);
				this.set(item, datum, index, forcibly);
			},
			newItemIndexStart,
			newItemIndexStart + itemsLength
		);

		for (let i = 0; newItemIndexStart + i < 0 && i < itemsLength; ++i) {
			const item = items[i];
			const index = newItemIndexStart + i;
			const ix = index % multiplicity;
			const iy = Math.floor(index / multiplicity);
			item.position.set(ix * itemWidth, iy * itemHeight);
			this.unset(item);
		}

		for (let i = itemsLength - 1; dataSize <= newItemIndexStart + i && 0 <= i; --i) {
			const item = items[i];
			const index = newItemIndexStart + i;
			const ix = index % multiplicity;
			const iy = Math.floor(index / multiplicity);
			item.position.set(ix * itemWidth, iy * itemHeight);
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

	moveFocus(
		e: KeyboardEvent,
		target: DBase,
		moveVertically: boolean,
		moveHorizontally: boolean
	): boolean {
		if (!(moveVertically || moveHorizontally)) {
			return false;
		}
		const isUp = moveVertically && UtilKeyboardEvent.isArrowUpKey(e);
		const isDown = moveVertically && UtilKeyboardEvent.isArrowDownKey(e);
		const isLeft = moveHorizontally && UtilKeyboardEvent.isArrowLeftKey(e);
		const isRight = moveHorizontally && UtilKeyboardEvent.isArrowRightKey(e);
		if (!(isUp || isDown || isLeft || isRight)) {
			return false;
		}
		if (!target.state.isActionable) {
			return false;
		}
		const layer = DApplications.getLayer(target);
		if (layer == null) {
			return false;
		}
		const focusController = layer.getFocusController();
		const focused = focusController.get();
		if (focused == null) {
			return false;
		}
		const container = this._container;
		if (focused.parent !== container) {
			return false;
		}
		const item = focused as ITEM;
		const index = item.index;
		if (index == null) {
			return false;
		}
		const multiplicity = this._multiplicity;
		const data = this._data;
		const mapped = this.toMapped(data);
		const dataSize = mapped.size();
		let newIndex = index;
		if (isLeft || isRight) {
			if (isLeft) {
				if (0 <= newIndex - 1) {
					newIndex -= 1;
				}
			} else {
				if (newIndex + 1 < dataSize) {
					newIndex += 1;
				}
			}
		}
		if (isUp || isDown) {
			if (isUp) {
				if (0 <= newIndex - multiplicity) {
					newIndex -= multiplicity;
				}
			} else {
				if (newIndex + multiplicity < dataSize) {
					newIndex += multiplicity;
				}
			}
		}
		if (newIndex === index) {
			return false;
		}
		const items = container.children as ITEM[];
		const itemIndex = items.indexOf(item);
		if (itemIndex < 0) {
			return false;
		}
		const newItemIndex = itemIndex + (newIndex - index);
		if (newItemIndex < 0 || items.length <= newItemIndex) {
			return false;
		}
		const newItem = items[newItemIndex];
		focusController.focus(newItem);
		return true;
	}
}

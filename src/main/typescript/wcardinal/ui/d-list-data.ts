/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DListDataMapped } from "./d-list-data-mapped";
import { DListDataSelection, DListDataSelectionOptions } from "./d-list-data-selection";
import { DListItemAccessor, DListItemAccessorOptions } from "./d-list-item-accessor";

export type DListDataIteratee<ITEM> = (item: ITEM, index: number) => void | boolean;

/**
 * {@link DListData} options.
 */
export interface DListDataOptions<ITEM> extends DListItemAccessorOptions<ITEM> {
	/**
	 * Items inserted before the items specified by the option {@link items}.
	 */
	before?: ITEM[];

	/**
	 * List of items.
	 */
	items?: ITEM[];

	/**
	 * Items inserted after the items spacified by the option {@link items}.
	 */
	after?: ITEM[];

	/**
	 * A selection options.
	 */
	selection?: DListDataSelectionOptions<ITEM>;
}

/**
 * {@link DList} data.
 */
export interface DListData<ITEM> {
	before: ITEM[];
	items: ITEM[];
	after: ITEM[];
	readonly mapped: DListDataMapped<ITEM>;
	readonly accessor: DListItemAccessor<ITEM>;
	readonly selection: DListDataSelection<ITEM>;

	/**
	 * Returns a size of data.
	 */
	size(): number;

	/**
	 * Returns an item at the specified index.
	 * The index is an index on itemsrows filters and sorters are not applied.
	 *
	 * @param index  an index on rows filters and sorters are not applied
	 */
	get(index: number): ITEM | null;

	/**
	 * Replaces an item at the specified index with the given item.
	 *
	 * @param index an index of the item to be replaced.
	 * @param item an item
	 * @return a replaced item or null
	 */
	set(index: number, item: ITEM): ITEM | null;

	/**
	 * Adds the given item.
	 * If the index is given, inserts the given item at that index.
	 *
	 * @param item an item
	 * @param index an index
	 * @return true if the data is changed
	 */
	add(item: ITEM, index?: number): boolean;

	/**
	 * Adds all the given items.
	 * If the index is given, inserts all the given items at that index.
	 *
	 * @param newItems items
	 * @param index an index
	 * @return true if the data is changed
	 */
	addAll(newItems: ITEM[], index?: number): boolean;

	/**
	 * Removes an item at the given index.
	 *
	 * @param index an index of the item to be removed.
	 * @return a removed item or null
	 */
	remove(index: number): ITEM | null;

	/**
	 * Removes all the items.
	 *
	 * @return true if the data is changed
	 */
	clear(): boolean;

	/**
	 * Removes all the existing items and adds the given item.
	 *
	 * @param item an item
	 * @return true if the data is changed
	 */
	clearAndAdd(item: ITEM): boolean;

	/**
	 * Removes all the existing items and adds all the given items.
	 *
	 * @param newItems items to be inserted
	 * @return true if the data is changed.
	 */
	clearAndAddAll(newItems: ITEM[]): boolean;

	/**
	 * Calls the specified iteratee on each datum of the specified index range.
	 * If called iteratee explicitly returns false, stops an iteration.
	 *
	 * @param iteratee an function called on each datum
	 * @param ifrom an index to start an iteration
	 * @param ito an index before which an interation stops
	 */
	each(iteratee: DListDataIteratee<ITEM>, ifrom?: number, ito?: number): void;
}

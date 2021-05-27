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
	 * Calls the specified iteratee on each datum of the specified index range.
	 * If called iteratee explicitly returns false, stops an iteration.
	 *
	 * @param iteratee an function called on each datum
	 * @param ifrom an index to start an iteration
	 * @param ito an index before which an interation stops
	 */
	each(iteratee: DListDataIteratee<ITEM>, ifrom?: number, ito?: number): void;
}

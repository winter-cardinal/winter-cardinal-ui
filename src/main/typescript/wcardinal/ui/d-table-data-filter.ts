/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";

/**
 * A filter function.
 */
export type DTableDataFilterFunction<ROW> = (row: ROW, index: number) => boolean;

/**
 * A filter object.
 */
export interface DTableDataFilterObject<ROW> {
	test(row: ROW, index: number): boolean;
}

/**
 * A filterer.
 */
export type DTableDataFilterer<ROW> = DTableDataFilterFunction<ROW> | DTableDataFilterObject<ROW>;

/**
 * Table data filter.
 */
export interface DTableDataFilter<ROW> extends utils.EventEmitter {
	readonly id: number;

	/**
	 * An indices of filtered rows.
	 * Must not change this indices directly.
	 */
	readonly indices: number[] | null;

	/**
	 * Applys a filter.
	 */
	apply(): void;

	/**
	 * Unapplys a filter.
	 */
	unapply(): void;

	/**
	 * Returns true if a filter is applied.
	 */
	isApplied(): boolean;

	/**
	 * Returns a current filter.
	 */
	get(): DTableDataFilterer<ROW> | null;

	/**
	 * Sets to the given filter.
	 *
	 * @param filter A filter
	 */
	set(filter: DTableDataFilterer<ROW> | null): void;

	/**
	 * Returns a mapped index of the specified sorted index.
	 *
	 * @param sortedIndex an sorted index
	 */
	map(sortedIndex: number): number | null;

	/**
	 * Returns an sorted index of the specified mapped index.
	 * A mapped index is an index on rows filters and sorters are applied.
	 *
	 * @param index a mapped index
	 */
	unmap(index: number): number;
}

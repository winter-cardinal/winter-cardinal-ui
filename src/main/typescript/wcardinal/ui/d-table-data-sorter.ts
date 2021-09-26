/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";

/**
 * A row comparator function.
 */
export type DTableDataComparatorFunction<ROW> = (
	rowA: ROW,
	rowB: ROW,
	indexA: number,
	indexB: number
) => number;

/**
 * A row comparator object.
 */
export interface DTableDataComparatorObject<ROW> {
	compare(rowA: ROW, rowB: ROW, indexA: number, indexB: number): number;
}

/**
 * A row comparator.
 */
export type DTableDataComparator<ROW> =
	| DTableDataComparatorFunction<ROW>
	| DTableDataComparatorObject<ROW>;

/**
 * A sort order.
 */
export const DTableDataOrder = {
	ASCENDING: 0,
	DESCENDING: 1
} as const;

export type DTableDataOrder = typeof DTableDataOrder[keyof typeof DTableDataOrder];

/**
 * Table data sorter.
 */
export interface DTableDataSorter<ROW> extends utils.EventEmitter {
	readonly id: number;

	/**
	 * An indices of sorted rows.
	 * Must not change this indices directly.
	 */
	readonly indices: number[] | null;

	/**
	 * A sort order.
	 */
	order: DTableDataOrder;

	/**
	 * Applys a sorting.
	 */
	apply(): void;

	/**
	 * Unapplys a sorting.
	 */
	unapply(): void;

	/**
	 * Returns true if a sorting is applied.
	 */
	isApplied(): boolean;

	/**
	 * Returns a current comparator.
	 */
	get(): DTableDataComparator<ROW> | null;

	/**
	 * Sets to the given comparator.
	 *
	 * @param comparator A comparator
	 */
	set(comparator: DTableDataComparator<ROW> | null): void;

	/**
	 * Returns a sorted index of the specified unmapped index.
	 *
	 * @param unmappedIndex an unmapped index
	 */
	map(unmappedIndex: number): number | null;

	/**
	 * Returns an unmapped index of the specified sorted index.
	 *
	 * @param index a mapped index
	 */
	unmap(index: number): number;
}

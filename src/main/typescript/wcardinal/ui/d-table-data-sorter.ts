/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";

/**
 * A row comparator function.
 */
export type DTableDataComparatorFunction<ROW> =
	( rowA: ROW, rowB: ROW, indexA: number, indexB: number ) => number;

/**
 * A row comparator object.
 */
export interface DTableDataComparatorObject<ROW> {
	compare( rowA: ROW, rowB: ROW, indexA: number, indexB: number ): number;
}

/**
 * A sort order.
 */
export enum DTableDataOrder {
	ASCENDING,
	DESCENDING
}

/**
 * Table data sorter.
 */
export interface DTableDataSorter<ROW> extends utils.EventEmitter {
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
	get(): DTableDataComparatorFunction<ROW> | DTableDataComparatorObject<ROW> | null;

	/**
	 * Sets to the given comparator.
	 *
	 * @param comparator A comparator
	 */
	set( comparator: DTableDataComparatorFunction<ROW> | DTableDataComparatorObject<ROW> | null ): void;
}

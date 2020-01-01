/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";

/**
 * A filter function.
 */
export type DTableDataFilterFunction<ROW> = ( row: ROW, index: number ) => boolean;

/**
 * A filter object.
 */
export interface DTableDataFilterObject<ROW> {
	test( row: ROW, index: number ): boolean;
}

/**
 * Table data filter.
 */
export interface DTableDataFilter<ROW> extends utils.EventEmitter {
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
	get(): DTableDataFilterFunction<ROW> | DTableDataFilterObject<ROW> | null;

	/**
	 * Sets to the given filter.
	 *
	 * @param filter A filter
	 */
	set( filter: DTableDataFilterFunction<ROW> | DTableDataFilterObject<ROW> | null ): void;
}

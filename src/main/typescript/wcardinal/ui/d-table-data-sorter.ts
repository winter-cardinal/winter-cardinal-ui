/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export type DTableDataSorterFunction<ROW> =
	( rowA: ROW, rowB: ROW, indexA: number, indexB: number ) => number;

export interface DTableDataSorterObject<ROW> {
	compare( rowA: ROW, rowB: ROW, indexA: number, indexB: number ): number;
}

export interface DTableDataSorter<ROW> {
	readonly indices: number[] | null;

	apply(): void;
	unapply(): void;
	isApplied(): boolean;
	get(): DTableDataSorterFunction<ROW> | DTableDataSorterObject<ROW> | null;
	set( filter: DTableDataSorterFunction<ROW> | DTableDataSorterObject<ROW> | null ): void;
}

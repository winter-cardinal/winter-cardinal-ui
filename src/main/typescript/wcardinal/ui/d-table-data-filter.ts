/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export type DTableDataFilterFunction<ROW> = ( row: ROW, index: number ) => boolean;

export interface DTableDataFilterObject<ROW> {
	test( row: ROW, index: number ): boolean;
}

export interface DTableDataFilter<ROW> {
	readonly indices: number[] | null;

	apply(): void;
	unapply(): void;
	isApplied(): boolean;
	get(): DTableDataFilterFunction<ROW> | DTableDataFilterObject<ROW> | null;
	set( filter: DTableDataFilterFunction<ROW> | DTableDataFilterObject<ROW> | null ): void;
}

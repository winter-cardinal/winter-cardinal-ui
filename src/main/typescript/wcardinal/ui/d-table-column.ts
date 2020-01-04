/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "./d-align-horizontal";
import { DDialogSelect, DDialogSelectOptions } from "./d-dialog-select";
import { DMenu, DMenuOptions } from "./d-menu";
import { DTableBodyCellCheckOptions } from "./d-table-body-cell-check";
import { DTableBodyCellColorOptions } from "./d-table-body-cell-color";
import { DTableBodyCellDateOptions } from "./d-table-body-cell-date";
import { DTableBodyCellDatetimeOptions } from "./d-table-body-cell-datetime";
import { DTableBodyCellIndexOptions } from "./d-table-body-cell-index";
import { DTableBodyCellInputIntegerOptions } from "./d-table-body-cell-input-integer";
import { DTableBodyCellInputRealOptions } from "./d-table-body-cell-input-real";
import { DTableBodyCellInputTextOptions } from "./d-table-body-cell-input-text";
import { DTableBodyCellSelectDialogOptions } from "./d-table-body-cell-select-dialog";
import { DTableBodyCellSelectFetcherOptions } from "./d-table-body-cell-select-fetcher";
import { DTableBodyCellSelectMenuOptions } from "./d-table-body-cell-select-menu";
import { DTableBodyCellTextOptions } from "./d-table-body-cell-text";
import { DTableBodyCellTimeOptions } from "./d-table-body-cell-time";
import { DTableDataComparatorFunction, DTableDataComparatorObject } from "./d-table-data-sorter";
import { DTableHeaderCellOptions } from "./d-table-header-cell";

export enum DTableColumnType {
	INDEX,
	TEXT,
	INTEGER,
	REAL,
	CHECK,
	COLOR,
	BUTTON,
	SELECT,
	DATE,
	DATETIME,
	TIME
}

export type DTableGetter<ROW> = ( row: ROW, index: number ) => unknown;
export type DTableSetter<ROW> = ( row: ROW, index: number, cell: unknown ) => void;
export type DTableFormatter = ( cell: unknown ) => string;
export type DTableEditingFormatter = ( cell: unknown ) => string;
export type DTableEditingUnformatter = ( cell: string ) => unknown;
export type DTableEditingValidator = ( cell: unknown ) => unknown;
export type DTableSelectingGetter = ( selected: unknown ) => unknown;

export type DTableBodyCellOptionsUnion<ROW> = DTableBodyCellTextOptions<ROW> | DTableBodyCellInputTextOptions<ROW> |
	DTableBodyCellInputIntegerOptions<ROW> | DTableBodyCellInputRealOptions<ROW> | DTableBodyCellIndexOptions<ROW> |
	DTableBodyCellColorOptions<ROW> | DTableBodyCellCheckOptions<ROW> | DTableBodyCellSelectDialogOptions<ROW> |
	DTableBodyCellSelectFetcherOptions<ROW> | DTableBodyCellSelectMenuOptions<ROW> | DTableBodyCellDateOptions<ROW> |
	DTableBodyCellDatetimeOptions<ROW> | DTableBodyCellTimeOptions<ROW>;

export type DTableBodyCellOptionsMerged<ROW> = DTableBodyCellTextOptions<ROW> & DTableBodyCellInputTextOptions<ROW> &
	DTableBodyCellInputIntegerOptions<ROW> & DTableBodyCellInputRealOptions<ROW> & DTableBodyCellIndexOptions<ROW> &
	DTableBodyCellColorOptions<ROW> & DTableBodyCellCheckOptions<ROW> & DTableBodyCellSelectDialogOptions<ROW> &
	DTableBodyCellSelectFetcherOptions<ROW> & DTableBodyCellSelectMenuOptions<ROW> & DTableBodyCellDateOptions<ROW> &
	DTableBodyCellDatetimeOptions<ROW> & DTableBodyCellTimeOptions<ROW>;

export interface DTableColumnEditingOptions {
	enable?: boolean;
	formatter?: DTableEditingFormatter;
	unformatter?: DTableEditingUnformatter;
	validator?: DTableEditingValidator;
}

export interface DTableColumnEditing {
	enable: boolean;
	formatter: DTableEditingFormatter;
	unformatter: DTableEditingUnformatter;
	validator?: DTableEditingValidator;
}

export interface DTableColumnSortingOptions<ROW> {
	enable?: boolean;
	comparator?: DTableDataComparatorFunction<ROW> | DTableDataComparatorObject<ROW>;
}

export interface DTableColumnSorting<ROW> {
	enable: boolean;
	comparator?: DTableDataComparatorFunction<ROW> | DTableDataComparatorObject<ROW>;
}

export interface DTableColumnSelectingOptions {
	getter?: DTableSelectingGetter;

	menu?: DMenuOptions<unknown> | DMenu<unknown>;
	dialog?: DDialogSelectOptions<unknown> | DDialogSelect<unknown>;
	fetcher?: () => Promise<unknown>;
}

export interface DTableColumnSelecting {
	getter: DTableSelectingGetter;

	menu?: DMenu<unknown>;
	dialog?: DDialogSelect<unknown>;
	fetcher?: () => Promise<unknown>;
}

export interface DTableColumnOptions<ROW> {
	weight?: number;
	width?: number;

	type?: (keyof typeof DTableColumnType) | DTableColumnType;
	label?: string;
	getter?: DTableGetter<ROW>;
	setter?: DTableSetter<ROW>;
	formatter?: DTableFormatter;
	align?: (keyof typeof DAlignHorizontal) | DAlignHorizontal;

	editable?: boolean;
	editing?: DTableColumnEditingOptions;

	sortable?: boolean;
	sorting?: DTableColumnSortingOptions<ROW>;

	header?: DTableHeaderCellOptions<ROW>;
	body?: DTableBodyCellOptionsUnion<ROW>;

	selecting?: DTableColumnSelectingOptions;

	category?: string;
	frozen?: boolean;
}

export interface DTableColumn<ROW> {
	weight: number | undefined;
	width: number | undefined;

	type: DTableColumnType;
	label: string;
	getter: DTableGetter<ROW>;
	setter: DTableSetter<ROW>;
	formatter?: DTableFormatter;
	align: DAlignHorizontal;

	editing: DTableColumnEditing;
	sorting: DTableColumnSorting<ROW>;

	header?: DTableHeaderCellOptions<ROW>;
	body?: DTableBodyCellOptionsUnion<ROW>;

	selecting: DTableColumnSelecting;

	category?: string;
	frozen?: boolean;
	offset: number;
}

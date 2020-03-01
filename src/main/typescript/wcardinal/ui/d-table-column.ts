/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "./d-align-horizontal";
import { DDialogSelectOptions } from "./d-dialog-select";
import { DMenu, DMenuOptions } from "./d-menu";
import { DTableBodyCellButtonOptions } from "./d-table-body-cell-button";
import { DTableBodyCellCheckOptions } from "./d-table-body-cell-check";
import { DTableBodyCellColorOptions } from "./d-table-body-cell-color";
import { DTableBodyCellDateOptions } from "./d-table-body-cell-date";
import { DTableBodyCellDatetimeOptions } from "./d-table-body-cell-datetime";
import { DTableBodyCellIndexOptions } from "./d-table-body-cell-index";
import { DTableBodyCellInputIntegerOptions } from "./d-table-body-cell-input-integer";
import { DTableBodyCellInputRealOptions } from "./d-table-body-cell-input-real";
import { DTableBodyCellInputTextOptions } from "./d-table-body-cell-input-text";
import { DTableBodyCellLinkLinkOptions, DTableBodyCellLinkOptions } from "./d-table-body-cell-link";
import { DTableBodyCellSelectDialogOptions } from "./d-table-body-cell-select-dialog";
import { DTableBodyCellSelectMenuOptions } from "./d-table-body-cell-select-menu";
import { DTableBodyCellSelectMultipleOptions } from "./d-table-body-cell-select-multiple";
import { DTableBodyCellSelectPromiseOptions } from "./d-table-body-cell-select-promise";
import { DTableBodyCellTextOptions } from "./d-table-body-cell-text";
import { DTableBodyCellTimeOptions } from "./d-table-body-cell-time";
import { DTableBodyCellTreeOptions } from "./d-table-body-cell-tree";
import { DTableDataComparatorFunction, DTableDataComparatorObject } from "./d-table-data-sorter";
import { DTableHeaderCellOptions } from "./d-table-header-cell";

export enum DTableColumnType {
	INDEX,
	TEXT,
	INTEGER,
	REAL,
	CHECK,
	CHECK_SINGLE,
	COLOR,
	BUTTON,
	SELECT,
	DATE,
	DATETIME,
	TIME,
	ACTION,
	LINK,
	TREE
}

export type DTableGetter<ROW, CELL> = ( row: ROW, columnIndex: number ) => CELL;
export type DTableSetter<ROW, CELL> = ( row: ROW, columnIndex: number, cell: CELL ) => void;
export type DTableFormatter<CELL> = ( cell: CELL ) => string;
export type DTableEditingFormatter<CELL> = ( cell: CELL ) => string;
export type DTableEditingUnformatter<CELL> = ( formatted: string ) => CELL;
export type DTableEditingValidator<CELL> = ( cell: CELL ) => string | null;
export type DTableSelectingGetter<CELL, DIALOG> = ( dialog: DIALOG ) => CELL;
export type DTableSelectingSetter<CELL, DIALOG> = ( dialog: DIALOG, cell: CELL ) => void;
export type DTableEditable<ROW> = ( row: ROW, columnIndex: number ) => boolean;
export type DTableRenderable<ROW> = ( row: ROW, columnIndex: number ) => boolean;

export type DTableBodyCellOptionsUnion<ROW> = DTableBodyCellTextOptions<ROW> | DTableBodyCellInputTextOptions<ROW> |
	DTableBodyCellInputIntegerOptions<ROW> | DTableBodyCellInputRealOptions<ROW> | DTableBodyCellIndexOptions<ROW> |
	DTableBodyCellColorOptions<ROW> | DTableBodyCellCheckOptions<ROW> | DTableBodyCellSelectDialogOptions<ROW> |
	DTableBodyCellSelectPromiseOptions<ROW> | DTableBodyCellSelectMenuOptions<ROW> | DTableBodyCellDateOptions<ROW> |
	DTableBodyCellDatetimeOptions<ROW> | DTableBodyCellTimeOptions<ROW> | DTableBodyCellButtonOptions<ROW> |
	DTableBodyCellLinkOptions<ROW> | DTableBodyCellSelectMultipleOptions<ROW> | DTableBodyCellTreeOptions<ROW>;

export type DTableBodyCellOptionsMerged<ROW> = DTableBodyCellTextOptions<ROW> & DTableBodyCellInputTextOptions<ROW> &
	DTableBodyCellInputIntegerOptions<ROW> & DTableBodyCellInputRealOptions<ROW> & DTableBodyCellIndexOptions<ROW> &
	DTableBodyCellColorOptions<ROW> & DTableBodyCellCheckOptions<ROW> & DTableBodyCellSelectDialogOptions<ROW> &
	DTableBodyCellSelectPromiseOptions<ROW> & DTableBodyCellSelectMenuOptions<ROW> & DTableBodyCellDateOptions<ROW> &
	DTableBodyCellDatetimeOptions<ROW> & DTableBodyCellTimeOptions<ROW> & DTableBodyCellButtonOptions<ROW> &
	DTableBodyCellLinkOptions<ROW> & DTableBodyCellSelectMenuOptions<ROW> & DTableBodyCellTreeOptions<ROW>;

export interface DTableColumnEditingOptions<ROW, CELL> {
	enable?: boolean | DTableEditable<ROW> | "auto" | "AUTO";
	formatter?: DTableEditingFormatter<CELL>;
	unformatter?: DTableEditingUnformatter<CELL>;
	validator?: DTableEditingValidator<CELL>;
}

export interface DTableColumnEditing<ROW, CELL> {
	enable: boolean | DTableEditable<ROW>;
	formatter: DTableEditingFormatter<CELL>;
	unformatter: DTableEditingUnformatter<CELL>;
	validator?: DTableEditingValidator<CELL>;
}

export interface DTableColumnSortingOptions<ROW> {
	enable?: boolean;
	comparator?: DTableDataComparatorFunction<ROW> | DTableDataComparatorObject<ROW>;
}

export interface DTableColumnSorting<ROW> {
	enable: boolean;
	comparator?: DTableDataComparatorFunction<ROW> | DTableDataComparatorObject<ROW>;
}

export interface DTableColumnSelectingDialog<VALUE> {
	readonly value: VALUE;
	open(): Promise<void>;
}

export interface DTableColumnSelectingOptions<
	CELL,
	DIALOG_VALUE,
	DIALOG extends DTableColumnSelectingDialog<DIALOG_VALUE>
> {
	getter?: DTableSelectingGetter<CELL, DIALOG>;
	setter?: DTableSelectingSetter<CELL, DIALOG>;

	menu?: DMenuOptions<CELL> | DMenu<CELL>;
	multiple?: DMenuOptions<CELL> | DMenu<CELL>;
	dialog?: DDialogSelectOptions<DIALOG_VALUE> | DIALOG;
	promise?: () => Promise<CELL>;
}

export interface DTableColumnSelecting<
	CELL,
	DIALOG_VALUE,
	DIALOG extends DTableColumnSelectingDialog<DIALOG_VALUE>
> {
	getter: DTableSelectingGetter<CELL, DIALOG>;
	setter: DTableSelectingSetter<CELL, DIALOG>;

	menu?: DMenu<CELL>;
	multiple?: DMenu<CELL>;
	dialog?: DIALOG;
	promise?: () => Promise<CELL>;
}

export interface DTableColumnOptions<
	ROW,
	CELL = any,
	DIALOG_VALUE = any,
	DIALOG extends DTableColumnSelectingDialog<DIALOG_VALUE> = any
> {
	weight?: number;
	width?: number;

	type?: (keyof typeof DTableColumnType) | DTableColumnType;
	label?: string;
	getter?: DTableGetter<ROW, CELL>;
	setter?: DTableSetter<ROW, CELL>;
	path?: string;
	default?: CELL;
	formatter?: DTableFormatter<CELL>;
	align?: (keyof typeof DAlignHorizontal) | DAlignHorizontal;

	/**
	 * If the renderable is
	 *
	 * * true, cells get rendered.
	 * * false, cells do not get rendered.
	 * * a function, cells get rendered only when that function returns true.
	 * * "AUTO", cells get rendered only when the cell data exit.
	 */
	renderable?: boolean | DTableRenderable<ROW> | "auto" | "AUTO";

	/**
	 * If the editable is
	 *
	 * * true, cells get editable.
	 * * false, cells do not get editable.
	 * * a function, cells are editable only when that function returns true.
	 * * "AUTO", cells are editable only when the cell data exist.
	 */
	editable?: boolean | DTableEditable<ROW> | "auto" | "AUTO";
	editing?: DTableColumnEditingOptions<ROW, CELL>;

	sortable?: boolean;
	sorting?: DTableColumnSortingOptions<ROW>;

	header?: DTableHeaderCellOptions<ROW>;
	body?: DTableBodyCellOptionsUnion<ROW>;

	selecting?: DTableColumnSelectingOptions<CELL, DIALOG_VALUE, DIALOG>;

	category?: string | string[];
	frozen?: boolean;

	link?: DTableBodyCellLinkLinkOptions<ROW>;
}

export interface DTableColumn<
	ROW,
	CELL = unknown,
	DIALOG_VALUE = unknown,
	DIALOG extends DTableColumnSelectingDialog<DIALOG_VALUE> = DTableColumnSelectingDialog<DIALOG_VALUE>
> {
	weight: number | undefined;
	width: number | undefined;

	type: DTableColumnType;
	label: string;
	getter: DTableGetter<ROW, CELL>;
	setter: DTableSetter<ROW, CELL>;
	formatter?: DTableFormatter<CELL>;
	align: DAlignHorizontal;
	renderable: boolean | DTableRenderable<ROW>;

	editing: DTableColumnEditing<ROW, CELL>;
	sorting: DTableColumnSorting<ROW>;

	header?: DTableHeaderCellOptions<ROW>;
	body?: DTableBodyCellOptionsUnion<ROW>;

	selecting: DTableColumnSelecting<CELL, DIALOG_VALUE, DIALOG>;

	category?: string | string[];
	frozen?: boolean;
	offset: number;

	link?: DTableBodyCellLinkLinkOptions<ROW>;
}

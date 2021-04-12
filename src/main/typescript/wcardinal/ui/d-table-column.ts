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
import { DTableDataComparator } from "./d-table-data-sorter";
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

export type DTableGetter<ROW_VALUE, CELL_VALUE> = (
	row: ROW_VALUE,
	columnIndex: number
) => CELL_VALUE;
export type DTableSetter<ROW_VALUE, CELL_VALUE> = (
	row: ROW_VALUE,
	columnIndex: number,
	cell: CELL_VALUE
) => void;
export type DTableFormatter<CELL_VALUE> = (cell: CELL_VALUE) => string;
export type DTableEditingFormatter<CELL_VALUE> = (cell: CELL_VALUE) => string;
export type DTableEditingUnformatter<CELL_VALUE> = (formatted: string) => CELL_VALUE;
export type DTableEditingValidator<CELL_VALUE> = (cell: CELL_VALUE) => string | null;
export type DTableSelectingGetter<CELL_VALUE, DIALOG> = (dialog: DIALOG) => CELL_VALUE;
export type DTableSelectingSetter<CELL_VALUE, DIALOG> = (dialog: DIALOG, cell: CELL_VALUE) => void;
export type DTableEditable<ROW_VALUE> = (row: ROW_VALUE, columnIndex: number) => boolean;
export type DTableRenderable<ROW_VALUE> = (row: ROW_VALUE, columnIndex: number) => boolean;

export type DTableBodyCellOptionsUnion<ROW_VALUE> =
	| DTableBodyCellTextOptions<ROW_VALUE>
	| DTableBodyCellInputTextOptions<ROW_VALUE>
	| DTableBodyCellInputIntegerOptions<ROW_VALUE>
	| DTableBodyCellInputRealOptions<ROW_VALUE>
	| DTableBodyCellIndexOptions<ROW_VALUE>
	| DTableBodyCellColorOptions<ROW_VALUE>
	| DTableBodyCellCheckOptions<ROW_VALUE>
	| DTableBodyCellSelectDialogOptions<ROW_VALUE>
	| DTableBodyCellSelectPromiseOptions<ROW_VALUE>
	| DTableBodyCellSelectMenuOptions<ROW_VALUE>
	| DTableBodyCellDateOptions<ROW_VALUE>
	| DTableBodyCellDatetimeOptions<ROW_VALUE>
	| DTableBodyCellTimeOptions<ROW_VALUE>
	| DTableBodyCellButtonOptions<ROW_VALUE>
	| DTableBodyCellLinkOptions<ROW_VALUE>
	| DTableBodyCellSelectMultipleOptions<ROW_VALUE>
	| DTableBodyCellTreeOptions<ROW_VALUE>;

export interface DTableColumnEditingOptions<ROW_VALUE, CELL_VALUE> {
	enable?: boolean | DTableEditable<ROW_VALUE> | "auto" | "AUTO";
	formatter?: DTableEditingFormatter<CELL_VALUE>;
	unformatter?: DTableEditingUnformatter<CELL_VALUE>;
	validator?: DTableEditingValidator<CELL_VALUE>;
}

export interface DTableColumnEditing<ROW_VALUE, CELL_VALUE> {
	enable: boolean | DTableEditable<ROW_VALUE>;
	formatter?: DTableEditingFormatter<CELL_VALUE>;
	unformatter?: DTableEditingUnformatter<CELL_VALUE>;
	validator?: DTableEditingValidator<CELL_VALUE>;
}

export interface DTableColumnSortingOptions<ROW_VALUE> {
	enable?: boolean;
	comparator?: DTableDataComparator<ROW_VALUE>;
}

export interface DTableColumnSorting<ROW_VALUE> {
	enable: boolean;
	comparator?: DTableDataComparator<ROW_VALUE>;
}

export interface DTableColumnSelectingDialog<DIALOG_VALUE> {
	readonly value: DIALOG_VALUE;
	open(): Promise<DIALOG_VALUE>;
}

export interface DTableColumnSelectingOptions<
	CELL_VALUE,
	DIALOG_VALUE,
	DIALOG extends DTableColumnSelectingDialog<DIALOG_VALUE>
> {
	getter?: DTableSelectingGetter<CELL_VALUE, DIALOG>;
	setter?: DTableSelectingSetter<CELL_VALUE, DIALOG>;

	menu?: DMenuOptions<CELL_VALUE> | DMenu<CELL_VALUE>;
	multiple?: DMenuOptions<CELL_VALUE> | DMenu<CELL_VALUE>;
	dialog?: DDialogSelectOptions<DIALOG_VALUE> | DIALOG;
	promise?: () => Promise<CELL_VALUE>;
}

export interface DTableColumnSelecting<
	CELL_VALUE,
	DIALOG_VALUE,
	DIALOG extends DTableColumnSelectingDialog<DIALOG_VALUE>
> {
	getter: DTableSelectingGetter<CELL_VALUE, DIALOG>;
	setter: DTableSelectingSetter<CELL_VALUE, DIALOG>;

	menu?: DMenu<CELL_VALUE>;
	multiple?: DMenu<CELL_VALUE>;
	dialog?: DIALOG;
	promise?: () => Promise<CELL_VALUE>;
}

export interface DTableColumnOptions<
	ROW_VALUE,
	CELL_VALUE = any,
	DIALOG_VALUE = any,
	DIALOG extends DTableColumnSelectingDialog<DIALOG_VALUE> = any
> {
	weight?: number;
	width?: number;

	type?: keyof typeof DTableColumnType | DTableColumnType;
	label?: string;
	getter?: DTableGetter<ROW_VALUE, CELL_VALUE>;
	setter?: DTableSetter<ROW_VALUE, CELL_VALUE>;
	path?: string;
	default?: CELL_VALUE;
	formatter?: DTableFormatter<CELL_VALUE>;
	align?: keyof typeof DAlignHorizontal | DAlignHorizontal;

	/**
	 * If the renderable is
	 *
	 * * true, cells get rendered.
	 * * false, cells do not get rendered.
	 * * a function, cells get rendered only when that function returns true.
	 * * "AUTO", cells get rendered only when the cell data exit.
	 */
	renderable?: boolean | DTableRenderable<ROW_VALUE> | "auto" | "AUTO";

	/**
	 * If the editable is
	 *
	 * * true, cells get editable.
	 * * false, cells do not get editable.
	 * * a function, cells are editable only when that function returns true.
	 * * "AUTO", cells are editable only when the cell data exist.
	 */
	editable?: boolean | DTableEditable<ROW_VALUE> | "auto" | "AUTO";
	editing?: DTableColumnEditingOptions<ROW_VALUE, CELL_VALUE>;

	sortable?: boolean;
	sorting?: DTableColumnSortingOptions<ROW_VALUE>;

	header?: DTableHeaderCellOptions<ROW_VALUE>;
	body?: DTableBodyCellOptionsUnion<ROW_VALUE>;

	selecting?: DTableColumnSelectingOptions<CELL_VALUE, DIALOG_VALUE, DIALOG>;

	category?: string | string[];
	frozen?: boolean;

	link?: DTableBodyCellLinkLinkOptions<ROW_VALUE, CELL_VALUE>;
}

export interface DTableColumn<
	ROW_VALUE,
	CELL_VALUE,
	DIALOG_VALUE = CELL_VALUE,
	DIALOG extends DTableColumnSelectingDialog<DIALOG_VALUE> = DTableColumnSelectingDialog<DIALOG_VALUE>
> {
	weight: number | undefined;
	width: number | undefined;

	type: DTableColumnType;
	label: string;
	getter: DTableGetter<ROW_VALUE, CELL_VALUE>;
	setter: DTableSetter<ROW_VALUE, CELL_VALUE>;
	formatter?: DTableFormatter<CELL_VALUE>;
	align: DAlignHorizontal;
	renderable: boolean | DTableRenderable<ROW_VALUE>;

	editing: DTableColumnEditing<ROW_VALUE, CELL_VALUE>;
	sorting: DTableColumnSorting<ROW_VALUE>;

	header?: DTableHeaderCellOptions<ROW_VALUE>;
	body?: DTableBodyCellOptionsUnion<ROW_VALUE>;

	selecting: DTableColumnSelecting<CELL_VALUE, DIALOG_VALUE, DIALOG>;

	category?: string | string[];
	frozen?: boolean;
	offset: number;

	link?: DTableBodyCellLinkLinkOptions<ROW_VALUE, CELL_VALUE>;
}

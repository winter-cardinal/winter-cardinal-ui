/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "./d-align-horizontal";
import { DDialogCommand } from "./d-dialog-command";
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

export type DTableGetter<ROW> = ( row: ROW, columnIndex: number ) => unknown;
export type DTableSetter<ROW> = ( row: ROW, columnIndex: number, cell: unknown ) => void;
export type DTableFormatter = ( cell: unknown ) => string;
export type DTableEditingFormatter = ( cell: unknown ) => string;
export type DTableEditingUnformatter = ( cell: string ) => unknown;
export type DTableEditingValidator = ( cell: unknown ) => unknown;
export type DTableSelectingGetter = ( dialog: DTableColumnSelectingDialog ) => unknown;
export type DTableSelectingSetter = ( dialog: DTableColumnSelectingDialog, value: unknown ) => unknown;
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

export interface DTableColumnEditingOptions<ROW> {
	enable?: boolean | DTableEditable<ROW> | "auto" | "AUTO";
	formatter?: DTableEditingFormatter;
	unformatter?: DTableEditingUnformatter;
	validator?: DTableEditingValidator;
}

export interface DTableColumnEditing<ROW> {
	enable: boolean | DTableEditable<ROW>;
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

export interface DTableColumnSelectingDialog extends DDialogCommand {
	readonly value: unknown;
}

export interface DTableColumnSelectingOptions {
	getter?: DTableSelectingGetter;
	setter?: DTableSelectingSetter;

	menu?: DMenuOptions<unknown> | DMenu<unknown>;
	multiple?: DMenuOptions<unknown> | DMenu<unknown>;
	dialog?: DDialogSelectOptions<unknown> | DTableColumnSelectingDialog;
	promise?: () => Promise<unknown>;
}

export interface DTableColumnSelecting {
	getter: DTableSelectingGetter;
	setter: DTableSelectingSetter;

	menu?: DMenu<unknown>;
	multiple?: DMenu<unknown>;
	dialog?: DTableColumnSelectingDialog;
	promise?: () => Promise<unknown>;
}

export interface DTableColumnOptions<ROW> {
	weight?: number;
	width?: number;

	type?: (keyof typeof DTableColumnType) | DTableColumnType;
	label?: string;
	getter?: DTableGetter<ROW>;
	setter?: DTableSetter<ROW>;
	path?: string;
	default?: unknown;
	formatter?: DTableFormatter;
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
	editing?: DTableColumnEditingOptions<ROW>;

	sortable?: boolean;
	sorting?: DTableColumnSortingOptions<ROW>;

	header?: DTableHeaderCellOptions<ROW>;
	body?: DTableBodyCellOptionsUnion<ROW>;

	selecting?: DTableColumnSelectingOptions;

	category?: string | string[];
	frozen?: boolean;

	link?: DTableBodyCellLinkLinkOptions<ROW>;
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
	renderable: boolean | DTableRenderable<ROW>;

	editing: DTableColumnEditing<ROW>;
	sorting: DTableColumnSorting<ROW>;

	header?: DTableHeaderCellOptions<ROW>;
	body?: DTableBodyCellOptionsUnion<ROW>;

	selecting: DTableColumnSelecting;

	category?: string | string[];
	frozen?: boolean;
	offset: number;

	link?: DTableBodyCellLinkLinkOptions<ROW>;
}

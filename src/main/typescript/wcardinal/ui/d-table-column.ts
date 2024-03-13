/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";
import { DAlignHorizontal } from "./d-align-horizontal";
import { DTableBodyCellLinkLinkOptions } from "./d-table-body-cell-link";
import { DTableBodyCellOptions } from "./d-table-body-cell-options";
import {
	DTableColumnEditing,
	DTableColumnEditingOptions,
	DTableColumnEditable
} from "./d-table-column-editing";
import { DTableColumnFormatter } from "./d-table-column-formatter";
import { DTableColumnGetter } from "./d-table-column-getter";
import { DTableColumnRenderable } from "./d-table-column-renderable";
import {
	DTableColumnSelecting,
	DTableColumnSelectingDialog,
	DTableColumnSelectingOptions
} from "./d-table-column-selecting";
import { DTableColumnSetter } from "./d-table-column-setter";
import { DTableColumnSorting, DTableColumnSortingOptions } from "./d-table-column-sorting";
import { DTableColumnState, DTableColumnStateModifier } from "./d-table-column-state";
import { DTableColumnType } from "./d-table-column-type";
import { DTableColumnUpdate } from "./d-table-column-update";
import { DTableHeaderCellOptions } from "./d-table-header-cell";

export interface DTableColumnOptions<
	ROW_VALUE,
	CELL_VALUE = any,
	DIALOG_VALUE = any,
	DIALOG extends DTableColumnSelectingDialog<DIALOG_VALUE> = any
> {
	weight?: number;
	width?: number;
	resizable?: boolean;

	type?: keyof typeof DTableColumnType | DTableColumnType;
	label?: string;
	getter?: DTableColumnGetter<ROW_VALUE, CELL_VALUE>;
	setter?: DTableColumnSetter<ROW_VALUE, CELL_VALUE>;
	path?: string;
	default?: CELL_VALUE;

	/**
	 * A shortcut of body#text#formatter.
	 */
	formatter?: DTableColumnFormatter<CELL_VALUE>;

	/**
	 * A shortcut of body#text#align#horizontal.
	 */
	align?: keyof typeof DAlignHorizontal | DAlignHorizontal;

	/**
	 * A state option.
	 */
	state?: string | string[] | DTableColumnStateModifier<ROW_VALUE>;

	/**
	 * If the renderable is
	 *
	 * * true, cells get rendered.
	 * * false, cells do not get rendered.
	 * * a function, cells get rendered only when that function returns true.
	 * * "AUTO", cells get rendered only when the cell data exit.
	 */
	renderable?: boolean | DTableColumnRenderable<ROW_VALUE> | "auto" | "AUTO";

	/**
	 * If the editable is
	 *
	 * * true, cells get editable.
	 * * false, cells do not get editable.
	 * * a function, cells are editable only when that function returns true.
	 * * "AUTO", cells are editable only when the cell data exist.
	 */
	editable?: boolean | DTableColumnEditable<ROW_VALUE> | "auto" | "AUTO";
	editing?: DTableColumnEditingOptions<ROW_VALUE, CELL_VALUE>;

	sortable?: boolean;
	sorting?: DTableColumnSortingOptions<ROW_VALUE>;

	header?: DTableHeaderCellOptions<ROW_VALUE>;
	body?: DTableBodyCellOptions<ROW_VALUE>;

	selecting?: DTableColumnSelectingOptions<CELL_VALUE, DIALOG_VALUE, DIALOG>;

	category?: string | string[];
	frozen?: boolean;

	link?: DTableBodyCellLinkLinkOptions<ROW_VALUE, CELL_VALUE>;

	/**
	 * An update region when cells get edited.
	 *
	 * * CELL: Edited cells (Default).
	 * * ROW: Rows that edited cells belongs to.
	 * * ALL: All the rows.
	 */
	update?: keyof typeof DTableColumnUpdate | DTableColumnUpdate;
}

export interface DTableColumn<
	ROW_VALUE,
	CELL_VALUE = unknown,
	DIALOG_VALUE = CELL_VALUE,
	DIALOG extends
		DTableColumnSelectingDialog<DIALOG_VALUE> = DTableColumnSelectingDialog<DIALOG_VALUE>
> extends utils.EventEmitter {
	weight?: number;
	minWeight: number;
	width?: number;
	minWidth: number;
	readonly resizable: boolean;

	readonly type: DTableColumnType;
	label: string;
	readonly getter: DTableColumnGetter<ROW_VALUE, CELL_VALUE>;
	readonly setter: DTableColumnSetter<ROW_VALUE, CELL_VALUE>;
	readonly formatter?: DTableColumnFormatter<CELL_VALUE>;
	readonly align: DAlignHorizontal;
	readonly state: DTableColumnState<ROW_VALUE>;
	readonly renderable: boolean | DTableColumnRenderable<ROW_VALUE>;

	readonly editing: DTableColumnEditing<ROW_VALUE, CELL_VALUE>;
	readonly sorting: DTableColumnSorting<ROW_VALUE>;

	readonly header?: DTableHeaderCellOptions<ROW_VALUE>;
	readonly body?: DTableBodyCellOptions<ROW_VALUE>;

	readonly selecting: DTableColumnSelecting<CELL_VALUE, DIALOG_VALUE, DIALOG>;

	readonly category?: string | string[];
	readonly frozen?: boolean;
	offset: number;

	readonly link?: DTableBodyCellLinkLinkOptions<ROW_VALUE, CELL_VALUE>;

	readonly update: DTableColumnUpdate;
}

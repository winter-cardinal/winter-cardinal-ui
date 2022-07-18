/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DTableBodyCellButtonOptions } from "./d-table-body-cell-button";
import { DTableBodyCellCheckOptions } from "./d-table-body-cell-check";
import { DTableBodyCellColorOptions } from "./d-table-body-cell-color";
import { DTableBodyCellDateOptions } from "./d-table-body-cell-date";
import { DTableBodyCellDatetimeOptions } from "./d-table-body-cell-datetime";
import { DTableBodyCellIndexOptions } from "./d-table-body-cell-index";
import { DTableBodyCellInputIntegerOptions } from "./d-table-body-cell-input-integer";
import { DTableBodyCellInputRealOptions } from "./d-table-body-cell-input-real";
import { DTableBodyCellInputTextOptions } from "./d-table-body-cell-input-text";
import { DTableBodyCellLinkOptions } from "./d-table-body-cell-link";
import { DTableBodyCellSelectDialogOptions } from "./d-table-body-cell-select-dialog";
import { DTableBodyCellSelectMenuOptions } from "./d-table-body-cell-select-menu";
import { DTableBodyCellSelectMultipleOptions } from "./d-table-body-cell-select-multiple";
import { DTableBodyCellSelectPromiseOptions } from "./d-table-body-cell-select-promise";
import { DTableBodyCellTextOptions } from "./d-table-body-cell-text";
import { DTableBodyCellTimeOptions } from "./d-table-body-cell-time";
import { DTableBodyCellTreeOptions } from "./d-table-body-cell-tree";

export type DTableBodyCellOptions<ROW_VALUE> =
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

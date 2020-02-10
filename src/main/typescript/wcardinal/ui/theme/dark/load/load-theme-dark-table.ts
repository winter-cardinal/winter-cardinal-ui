/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkTable } from "../d-theme-dark-table";
import { DThemeDarkTableBody } from "../d-theme-dark-table-body";
import { DThemeDarkTableBodyCellActionDialog } from "../d-theme-dark-table-body-cell-action-dialog";
import { DThemeDarkTableBodyCellActionMenu } from "../d-theme-dark-table-body-cell-action-menu";
import { DThemeDarkTableBodyCellActionPromise } from "../d-theme-dark-table-body-cell-action-promise";
import { DThemeDarkTableBodyCellButton } from "../d-theme-dark-table-body-cell-button";
import { DThemeDarkTableBodyCellCheck } from "../d-theme-dark-table-body-cell-check";
import { DThemeDarkTableBodyCellColor } from "../d-theme-dark-table-body-cell-color";
import { DThemeDarkTableBodyCellDate } from "../d-theme-dark-table-body-cell-date";
import { DThemeDarkTableBodyCellDatetime } from "../d-theme-dark-table-body-cell-datetime";
import { DThemeDarkTableBodyCellIndex } from "../d-theme-dark-table-body-cell-index";
import { DThemeDarkTableBodyCellInputInteger } from "../d-theme-dark-table-body-cell-input-integer";
import { DThemeDarkTableBodyCellInputReal } from "../d-theme-dark-table-body-cell-input-real";
import { DThemeDarkTableBodyCellInputText } from "../d-theme-dark-table-body-cell-input-text";
import { DThemeDarkTableBodyCellLink } from "../d-theme-dark-table-body-cell-link";
import { DThemeDarkTableBodyCellSelectDialog } from "../d-theme-dark-table-body-cell-select-dialog";
import { DThemeDarkTableBodyCellSelectMenu } from "../d-theme-dark-table-body-cell-select-menu";
import { DThemeDarkTableBodyCellSelectPromise } from "../d-theme-dark-table-body-cell-select-promise";
import { DThemeDarkTableBodyCellText } from "../d-theme-dark-table-body-cell-text";
import { DThemeDarkTableBodyCellTime } from "../d-theme-dark-table-body-cell-time";
import { DThemeDarkTableBodyRow } from "../d-theme-dark-table-body-row";
import { DThemeDarkTableCategory } from "../d-theme-dark-table-category";
import { DThemeDarkTableCategoryCell } from "../d-theme-dark-table-category-cell";
import { DThemeDarkTableHeader } from "../d-theme-dark-table-header";
import { DThemeDarkTableHeaderCell } from "../d-theme-dark-table-header-cell";
import { DThemeDarkTableRow } from "../d-theme-dark-table-row";
import { loadThemeDarkButtonCheck } from "./load-theme-dark-button-check";
import { loadThemeDarkButtonColor } from "./load-theme-dark-button-color";
import { loadThemeDarkButtonDate } from "./load-theme-dark-button-date";
import { loadThemeDarkButtonDatetime } from "./load-theme-dark-button-datetime";
import { loadThemeDarkDialogSelect } from "./load-theme-dark-dialog-select";
import { loadThemeDarkInputInteger } from "./load-theme-dark-input-integer";
import { loadThemeDarkInputReal } from "./load-theme-dark-input-real";
import { loadThemeDarkInputText } from "./load-theme-dark-input-text";
import { loadThemeDarkMenu } from "./load-theme-dark-menu";

export const loadThemeDarkTable = () => {
	DThemeDark.set( "DTableBodyCellActionDialog", DThemeDarkTableBodyCellActionDialog );
	DThemeDark.set( "DTableBodyCellActionMenu", DThemeDarkTableBodyCellActionMenu );
	DThemeDark.set( "DTableBodyCellActionPromise", DThemeDarkTableBodyCellActionPromise );
	DThemeDark.set( "DTableBodyCellButton", DThemeDarkTableBodyCellButton );
	DThemeDark.set( "DTableBodyCellCheck", DThemeDarkTableBodyCellCheck );
	DThemeDark.set( "DTableBodyCellColor", DThemeDarkTableBodyCellColor );
	DThemeDark.set( "DTableBodyCellDate", DThemeDarkTableBodyCellDate );
	DThemeDark.set( "DTableBodyCellDatetime", DThemeDarkTableBodyCellDatetime );
	DThemeDark.set( "DTableBodyCellIndex", DThemeDarkTableBodyCellIndex );
	DThemeDark.set( "DTableBodyCellInputInteger", DThemeDarkTableBodyCellInputInteger );
	DThemeDark.set( "DTableBodyCellInputReal", DThemeDarkTableBodyCellInputReal );
	DThemeDark.set( "DTableBodyCellInputText", DThemeDarkTableBodyCellInputText );
	DThemeDark.set( "DTableBodyCellLink", DThemeDarkTableBodyCellLink );
	DThemeDark.set( "DTableBodyCellSelectDialog", DThemeDarkTableBodyCellSelectDialog );
	DThemeDark.set( "DTableBodyCellSelectMenu", DThemeDarkTableBodyCellSelectMenu );
	DThemeDark.set( "DTableBodyCellSelectPromise", DThemeDarkTableBodyCellSelectPromise );
	DThemeDark.set( "DTableBodyCellText", DThemeDarkTableBodyCellText );
	DThemeDark.set( "DTableBodyCellTime", DThemeDarkTableBodyCellTime );
	DThemeDark.set( "DTableBodyRow", DThemeDarkTableBodyRow );
	DThemeDark.set( "DTableBody", DThemeDarkTableBody );
	DThemeDark.set( "DTableCategoryCell", DThemeDarkTableCategoryCell );
	DThemeDark.set( "DTableCategory", DThemeDarkTableCategory );
	DThemeDark.set( "DTableHeaderCell", DThemeDarkTableHeaderCell );
	DThemeDark.set( "DTableHeader", DThemeDarkTableHeader );
	DThemeDark.set( "DTableRow", DThemeDarkTableRow );
	DThemeDark.set( "DTable", DThemeDarkTable );
	loadThemeDarkButtonCheck();
	loadThemeDarkButtonColor();
	loadThemeDarkButtonDate();
	loadThemeDarkButtonDatetime();
	loadThemeDarkInputInteger();
	loadThemeDarkInputReal();
	loadThemeDarkInputText();
	loadThemeDarkDialogSelect();
	loadThemeDarkMenu();
};

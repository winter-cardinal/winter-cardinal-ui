/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkTable } from "../theme/dark/d-theme-dark-table";
import { DThemeDarkTableBodyCellCheck } from "../theme/dark/d-theme-dark-table-body-cell-check";
import { DThemeDarkTableBodyCellColor } from "../theme/dark/d-theme-dark-table-body-cell-color";
import { DThemeDarkTableBodyCellDate } from "../theme/dark/d-theme-dark-table-body-cell-date";
import { DThemeDarkTableBodyCellDatetime } from "../theme/dark/d-theme-dark-table-body-cell-datetime";
import { DThemeDarkTableCategory } from "../theme/dark/d-theme-dark-table-category";
import { DThemeDarkTableCategoryCell } from "../theme/dark/d-theme-dark-table-category-cell";
import { DThemeDarkTableHeader } from "../theme/dark/d-theme-dark-table-header";
import { DThemeDarkTableHeaderCell } from "../theme/dark/d-theme-dark-table-header-cell";
import { DThemeDarkTableRow } from "../theme/dark/d-theme-dark-table-row";
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
	DThemeDark.set( "DTableBodyCellCheck", DThemeDarkTableBodyCellCheck );
	DThemeDark.set( "DTableBodyCellColor", DThemeDarkTableBodyCellColor );
	DThemeDark.set( "DTableBodyCellDate", DThemeDarkTableBodyCellDate );
	DThemeDark.set( "DTableBodyCellDatetime", DThemeDarkTableBodyCellDatetime );
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

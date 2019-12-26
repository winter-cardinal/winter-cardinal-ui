/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteTable } from "../theme/default/d-theme-default-table";
import { DThemeWhiteTableBody } from "../theme/default/d-theme-default-table-body";
import { DThemeWhiteTableBodyCellCheck } from "../theme/default/d-theme-default-table-body-cell-check";
import { DThemeWhiteTableBodyCellColor } from "../theme/default/d-theme-default-table-body-cell-color";
import { DThemeWhiteTableBodyCellDate } from "../theme/default/d-theme-default-table-body-cell-date";
import { DThemeWhiteTableBodyCellDatetime } from "../theme/default/d-theme-default-table-body-cell-datetime";
import { DThemeWhiteTableBodyCellIndex } from "../theme/default/d-theme-default-table-body-cell-index";
import { DThemeWhiteTableBodyCellInputInteger } from "../theme/default/d-theme-default-table-body-cell-input-integer";
import { DThemeWhiteTableBodyCellInputReal } from "../theme/default/d-theme-default-table-body-cell-input-real";
import { DThemeWhiteTableBodyCellInputText } from "../theme/default/d-theme-default-table-body-cell-input-text";
import { DThemeWhiteTableBodyCellSelectDialog } from "../theme/default/d-theme-default-table-body-cell-select-dialog";
import { DThemeWhiteTableBodyCellSelectFetcher } from "../theme/default/d-theme-default-table-body-cell-select-fetcher";
import { DThemeWhiteTableBodyCellSelectMenu } from "../theme/default/d-theme-default-table-body-cell-select-menu";
import { DThemeWhiteTableBodyCellText } from "../theme/default/d-theme-default-table-body-cell-text";
import { DThemeWhiteTableBodyCellTime } from "../theme/default/d-theme-default-table-body-cell-time";
import { DThemeWhiteTableBodyRow } from "../theme/default/d-theme-default-table-body-row";
import { DThemeWhiteTableBodyRowEven } from "../theme/default/d-theme-default-table-body-row-even";
import { DThemeWhiteTableBodyRowOdd } from "../theme/default/d-theme-default-table-body-row-odd";
import { DThemeWhiteTableHeader } from "../theme/default/d-theme-default-table-header";
import { DThemeWhiteTableHeaderCell } from "../theme/default/d-theme-default-table-header-cell";
import { DThemeWhiteTableRow } from "../theme/default/d-theme-default-table-row";
import { loadThemeWhiteButtonCheck } from "./load-theme-default-button-check";
import { loadThemeWhiteButtonColor } from "./load-theme-default-button-color";
import { loadThemeWhiteButtonDate } from "./load-theme-default-button-date";
import { loadThemeWhiteButtonDatetime } from "./load-theme-default-button-datetime";
import { loadThemeWhiteDialogSelect } from "./load-theme-default-dialog-select";
import { loadThemeWhiteInputInteger } from "./load-theme-default-input-integer";
import { loadThemeWhiteInputReal } from "./load-theme-default-input-real";
import { loadThemeWhiteInputText } from "./load-theme-default-input-text";
import { loadThemeWhiteMenu } from "./load-theme-default-menu";

export const loadThemeWhiteTable = () => {
	DThemeWhite.set( "DTableBodyCellCheck", DThemeWhiteTableBodyCellCheck );
	DThemeWhite.set( "DTableBodyCellColor", DThemeWhiteTableBodyCellColor );
	DThemeWhite.set( "DTableBodyCellDate", DThemeWhiteTableBodyCellDate );
	DThemeWhite.set( "DTableBodyCellDatetime", DThemeWhiteTableBodyCellDatetime );
	DThemeWhite.set( "DTableBodyCellIndex", DThemeWhiteTableBodyCellIndex );
	DThemeWhite.set( "DTableBodyCellInputInteger", DThemeWhiteTableBodyCellInputInteger );
	DThemeWhite.set( "DTableBodyCellInputReal", DThemeWhiteTableBodyCellInputReal );
	DThemeWhite.set( "DTableBodyCellInputText", DThemeWhiteTableBodyCellInputText );
	DThemeWhite.set( "DTableBodyCellSelectDialog", DThemeWhiteTableBodyCellSelectDialog );
	DThemeWhite.set( "DTableBodyCellSelectFetcher", DThemeWhiteTableBodyCellSelectFetcher );
	DThemeWhite.set( "DTableBodyCellSelectMenu", DThemeWhiteTableBodyCellSelectMenu );
	DThemeWhite.set( "DTableBodyCellText", DThemeWhiteTableBodyCellText );
	DThemeWhite.set( "DTableBodyCellTime", DThemeWhiteTableBodyCellTime );
	DThemeWhite.set( "DTableBodyRowEven", DThemeWhiteTableBodyRowEven );
	DThemeWhite.set( "DTableBodyRowOdd", DThemeWhiteTableBodyRowOdd );
	DThemeWhite.set( "DTableBodyRow", DThemeWhiteTableBodyRow );
	DThemeWhite.set( "DTableBody", DThemeWhiteTableBody );
	DThemeWhite.set( "DTableHeaderCell", DThemeWhiteTableHeaderCell );
	DThemeWhite.set( "DTableHeader", DThemeWhiteTableHeader );
	DThemeWhite.set( "DTableRow", DThemeWhiteTableRow );
	DThemeWhite.set( "DTable", DThemeWhiteTable );
	loadThemeWhiteButtonCheck();
	loadThemeWhiteButtonColor();
	loadThemeWhiteButtonDate();
	loadThemeWhiteButtonDatetime();
	loadThemeWhiteInputInteger();
	loadThemeWhiteInputReal();
	loadThemeWhiteInputText();
	loadThemeWhiteDialogSelect();
	loadThemeWhiteMenu();
};

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultTable } from "../theme/default/d-theme-default-table";
import { DThemeDefaultTableBody } from "../theme/default/d-theme-default-table-body";
import { DThemeDefaultTableBodyCellCheck } from "../theme/default/d-theme-default-table-body-cell-check";
import { DThemeDefaultTableBodyCellColor } from "../theme/default/d-theme-default-table-body-cell-color";
import { DThemeDefaultTableBodyCellDate } from "../theme/default/d-theme-default-table-body-cell-date";
import { DThemeDefaultTableBodyCellDatetime } from "../theme/default/d-theme-default-table-body-cell-datetime";
import { DThemeDefaultTableBodyCellIndex } from "../theme/default/d-theme-default-table-body-cell-index";
import { DThemeDefaultTableBodyCellInputInteger } from "../theme/default/d-theme-default-table-body-cell-input-integer";
import { DThemeDefaultTableBodyCellInputReal } from "../theme/default/d-theme-default-table-body-cell-input-real";
import { DThemeDefaultTableBodyCellInputText } from "../theme/default/d-theme-default-table-body-cell-input-text";
import { DThemeDefaultTableBodyCellSelectDialog } from "../theme/default/d-theme-default-table-body-cell-select-dialog";
import {
	DThemeDefaultTableBodyCellSelectFetcher
} from "../theme/default/d-theme-default-table-body-cell-select-fetcher";
import { DThemeDefaultTableBodyCellSelectMenu } from "../theme/default/d-theme-default-table-body-cell-select-menu";
import { DThemeDefaultTableBodyCellText } from "../theme/default/d-theme-default-table-body-cell-text";
import { DThemeDefaultTableBodyCellTime } from "../theme/default/d-theme-default-table-body-cell-time";
import { DThemeDefaultTableBodyRow } from "../theme/default/d-theme-default-table-body-row";
import { DThemeDefaultTableBodyRowEven } from "../theme/default/d-theme-default-table-body-row-even";
import { DThemeDefaultTableBodyRowOdd } from "../theme/default/d-theme-default-table-body-row-odd";
import { DThemeDefaultTableHeader } from "../theme/default/d-theme-default-table-header";
import { DThemeDefaultTableHeaderCell } from "../theme/default/d-theme-default-table-header-cell";
import { DThemeDefaultTableRow } from "../theme/default/d-theme-default-table-row";
import { loadThemeDefaultButtonCheck } from "./load-theme-default-button-check";
import { loadThemeDefaultButtonColor } from "./load-theme-default-button-color";
import { loadThemeDefaultButtonDate } from "./load-theme-default-button-date";
import { loadThemeDefaultButtonDatetime } from "./load-theme-default-button-datetime";
import { loadThemeDefaultDialogSelect } from "./load-theme-default-dialog-select";
import { loadThemeDefaultInputInteger } from "./load-theme-default-input-integer";
import { loadThemeDefaultInputReal } from "./load-theme-default-input-real";
import { loadThemeDefaultInputText } from "./load-theme-default-input-text";
import { loadThemeDefaultMenu } from "./load-theme-default-menu";

export const loadThemeDefaultTable = () => {
	DThemeDefault.set( "DTableBodyCellCheck", DThemeDefaultTableBodyCellCheck );
	DThemeDefault.set( "DTableBodyCellColor", DThemeDefaultTableBodyCellColor );
	DThemeDefault.set( "DTableBodyCellDate", DThemeDefaultTableBodyCellDate );
	DThemeDefault.set( "DTableBodyCellDatetime", DThemeDefaultTableBodyCellDatetime );
	DThemeDefault.set( "DTableBodyCellIndex", DThemeDefaultTableBodyCellIndex );
	DThemeDefault.set( "DTableBodyCellInputInteger", DThemeDefaultTableBodyCellInputInteger );
	DThemeDefault.set( "DTableBodyCellInputReal", DThemeDefaultTableBodyCellInputReal );
	DThemeDefault.set( "DTableBodyCellInputText", DThemeDefaultTableBodyCellInputText );
	DThemeDefault.set( "DTableBodyCellSelectDialog", DThemeDefaultTableBodyCellSelectDialog );
	DThemeDefault.set( "DTableBodyCellSelectFetcher", DThemeDefaultTableBodyCellSelectFetcher );
	DThemeDefault.set( "DTableBodyCellSelectMenu", DThemeDefaultTableBodyCellSelectMenu );
	DThemeDefault.set( "DTableBodyCellText", DThemeDefaultTableBodyCellText );
	DThemeDefault.set( "DTableBodyCellTime", DThemeDefaultTableBodyCellTime );
	DThemeDefault.set( "DTableBodyRowEven", DThemeDefaultTableBodyRowEven );
	DThemeDefault.set( "DTableBodyRowOdd", DThemeDefaultTableBodyRowOdd );
	DThemeDefault.set( "DTableBodyRow", DThemeDefaultTableBodyRow );
	DThemeDefault.set( "DTableBody", DThemeDefaultTableBody );
	DThemeDefault.set( "DTableHeaderCell", DThemeDefaultTableHeaderCell );
	DThemeDefault.set( "DTableHeader", DThemeDefaultTableHeader );
	DThemeDefault.set( "DTableRow", DThemeDefaultTableRow );
	DThemeDefault.set( "DTable", DThemeDefaultTable );
	loadThemeDefaultButtonCheck();
	loadThemeDefaultButtonColor();
	loadThemeDefaultButtonDate();
	loadThemeDefaultButtonDatetime();
	loadThemeDefaultInputInteger();
	loadThemeDefaultInputReal();
	loadThemeDefaultInputText();
	loadThemeDefaultDialogSelect();
	loadThemeDefaultMenu();
};

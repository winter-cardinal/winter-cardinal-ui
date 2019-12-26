/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */


import { loadThemeWhite } from "./load-theme-default";
import { loadThemeWhiteBase } from "./load-theme-default-base";
import { loadThemeWhiteBoard } from "./load-theme-default-board";
import { loadThemeWhiteButtonAll } from "./load-theme-default-button-all";
import { loadThemeWhiteCanvasContainer } from "./load-theme-default-canvas-container";
import { loadThemeWhiteChart } from "./load-theme-default-chart";
import { loadThemeWhiteDiagram } from "./load-theme-default-diagram";
import { loadThemeWhiteDiagramEditor } from "./load-theme-default-diagram-editor";
import { loadThemeWhiteDialogAll } from "./load-theme-default-dialog-all";
import { loadThemeWhiteDropdown } from "./load-theme-default-dropdown";
import { loadThemeWhiteExpandable } from "./load-theme-default-expandable";
import { loadThemeWhiteHTMLElement } from "./load-theme-default-html-element";
import { loadThemeWhiteImage } from "./load-theme-default-image";
import { loadThemeWhiteInputAll } from "./load-theme-default-input-all";
import { loadThemeWhiteLayout } from "./load-theme-default-layout";
import { loadThemeWhiteList } from "./load-theme-default-list";
import { loadThemeWhiteMenu } from "./load-theme-default-menu";
import { loadThemeWhiteMenuBar } from "./load-theme-default-menu-bar";
import { loadThemeWhiteMenuSided } from "./load-theme-default-menu-sided";
import { loadThemeWhiteNote } from "./load-theme-default-note";
import { loadThemeWhitePane } from "./load-theme-default-pane";
import { loadThemeWhitePickerColor } from "./load-theme-default-picker-color";
import { loadThemeWhitePickerColorGradient } from "./load-theme-default-picker-color-gradient";
import { loadThemeWhitePickerDate } from "./load-theme-default-picker-date";
import { loadThemeWhitePickerDatetime } from "./load-theme-default-picker-datetime";
import { loadThemeWhitePickerTime } from "./load-theme-default-picker-time";
import { loadThemeWhiteSelect } from "./load-theme-default-select";
import { loadThemeWhiteTable } from "./load-theme-default-table";
import { loadThemeWhiteText } from "./load-theme-default-text";
import { loadThemeWhiteView } from "./load-theme-white-view";

export const loadThemeWhiteAll = () => {
	loadThemeWhite();
	loadThemeWhiteBase();
	loadThemeWhiteBoard();
	loadThemeWhiteButtonAll();
	loadThemeWhiteView();
	loadThemeWhiteCanvasContainer();
	loadThemeWhiteChart();
	loadThemeWhiteDiagramEditor();
	loadThemeWhiteDiagram();
	loadThemeWhiteDialogAll();
	loadThemeWhiteDropdown();
	loadThemeWhiteExpandable();
	loadThemeWhiteHTMLElement();
	loadThemeWhiteImage();
	loadThemeWhiteInputAll();
	loadThemeWhiteLayout();
	loadThemeWhiteList();
	loadThemeWhiteMenuBar();
	loadThemeWhiteMenuSided();
	loadThemeWhiteMenu();
	loadThemeWhiteNote();
	loadThemeWhitePane();
	loadThemeWhitePickerColorGradient();
	loadThemeWhitePickerColor();
	loadThemeWhitePickerDate();
	loadThemeWhitePickerDatetime();
	loadThemeWhitePickerTime();
	loadThemeWhiteSelect();
	loadThemeWhiteTable();
	loadThemeWhiteText();
};

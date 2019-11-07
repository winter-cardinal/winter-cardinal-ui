/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { loadThemeWhite } from "./load-theme-white";
import { loadThemeWhiteBase } from "./load-theme-white-base";
import { loadThemeWhiteBoard } from "./load-theme-white-board";
import { loadThemeWhiteButtonAll } from "./load-theme-white-button-all";
import { loadThemeWhiteCanvasContainer } from "./load-theme-white-canvas-container";
import { loadThemeWhiteChart } from "./load-theme-white-chart";
import { loadThemeWhiteDiagram } from "./load-theme-white-diagram";
import { loadThemeWhiteDiagramEditor } from "./load-theme-white-diagram-editor";
import { loadThemeWhiteDialogAll } from "./load-theme-white-dialog-all";
import { loadThemeWhiteDropdown } from "./load-theme-white-dropdown";
import { loadThemeWhiteExpandable } from "./load-theme-white-expandable";
import { loadThemeWhiteHTMLElement } from "./load-theme-white-html-element";
import { loadThemeWhiteImage } from "./load-theme-white-image";
import { loadThemeWhiteInputAll } from "./load-theme-white-input-all";
import { loadThemeWhiteLayout } from "./load-theme-white-layout";
import { loadThemeWhiteList } from "./load-theme-white-list";
import { loadThemeWhiteMenu } from "./load-theme-white-menu";
import { loadThemeWhiteMenuBar } from "./load-theme-white-menu-bar";
import { loadThemeWhiteMenuSided } from "./load-theme-white-menu-sided";
import { loadThemeWhiteNote } from "./load-theme-white-note";
import { loadThemeWhitePane } from "./load-theme-white-pane";
import { loadThemeWhitePickerColor } from "./load-theme-white-picker-color";
import { loadThemeWhitePickerColorGradient } from "./load-theme-white-picker-color-gradient";
import { loadThemeWhitePickerDate } from "./load-theme-white-picker-date";
import { loadThemeWhitePickerDatetime } from "./load-theme-white-picker-datetime";
import { loadThemeWhitePickerTime } from "./load-theme-white-picker-time";
import { loadThemeWhiteSelect } from "./load-theme-white-select";
import { loadThemeWhiteTable } from "./load-theme-white-table";
import { loadThemeWhiteText } from "./load-theme-white-text";

export const loadThemeWhiteAll = () => {
	loadThemeWhite();
	loadThemeWhiteBase();
	loadThemeWhiteBoard();
	loadThemeWhiteButtonAll();
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

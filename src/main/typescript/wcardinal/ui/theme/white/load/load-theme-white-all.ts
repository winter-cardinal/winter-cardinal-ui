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
import { loadThemeWhiteExpandable } from "./load-theme-white-expandable";
import { loadThemeWhiteHtmlElement } from "./load-theme-white-html-element";
import { loadThemeWhiteImage } from "./load-theme-white-image";
import { loadThemeWhiteInputAll } from "./load-theme-white-input-all";
import { loadThemeWhiteLayout } from "./load-theme-white-layout";
import { loadThemeWhiteLink } from "./load-theme-white-link";
import { loadThemeWhiteList } from "./load-theme-white-list";
import { loadThemeWhiteMenu } from "./load-theme-white-menu";
import { loadThemeWhiteMenuBar } from "./load-theme-white-menu-bar";
import { loadThemeWhiteMenuSided } from "./load-theme-white-menu-sided";
import { loadThemeWhiteNote } from "./load-theme-white-note";
import { loadThemeWhitePagination } from "./load-theme-white-pagination";
import { loadThemeWhitePane } from "./load-theme-white-pane";
import { loadThemeWhitePickerColor } from "./load-theme-white-picker-color";
import { loadThemeWhitePickerColorGradient } from "./load-theme-white-picker-color-gradient";
import { loadThemeWhitePickerDate } from "./load-theme-white-picker-date";
import { loadThemeWhitePickerDatetime } from "./load-theme-white-picker-datetime";
import { loadThemeWhitePickerTime } from "./load-theme-white-picker-time";
import { loadThemeWhiteSelect } from "./load-theme-white-select";
import { loadThemeWhiteSlider } from "./load-theme-white-slider";
import { loadThemeWhiteTable } from "./load-theme-white-table";
import { loadThemeWhiteText } from "./load-theme-white-text";
import { loadThemeWhiteTree } from "./load-theme-white-tree";
import { loadThemeWhiteView } from "./load-theme-white-view";

export const loadThemeWhiteAll = (): void => {
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
	loadThemeWhiteExpandable();
	loadThemeWhiteHtmlElement();
	loadThemeWhiteImage();
	loadThemeWhiteInputAll();
	loadThemeWhiteLayout();
	loadThemeWhiteLink();
	loadThemeWhiteList();
	loadThemeWhiteTree();
	loadThemeWhiteMenuBar();
	loadThemeWhiteMenuSided();
	loadThemeWhiteMenu();
	loadThemeWhiteNote();
	loadThemeWhitePane();
	loadThemeWhitePagination();
	loadThemeWhitePickerColorGradient();
	loadThemeWhitePickerColor();
	loadThemeWhitePickerDate();
	loadThemeWhitePickerDatetime();
	loadThemeWhitePickerTime();
	loadThemeWhiteSelect();
	loadThemeWhiteTable();
	loadThemeWhiteText();
	loadThemeWhiteSlider();
};

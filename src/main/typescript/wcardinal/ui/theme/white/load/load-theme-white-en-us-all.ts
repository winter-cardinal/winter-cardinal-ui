/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { loadThemeWhite } from "./load-theme-white";
import { loadThemeWhiteBase } from "./load-theme-white-base";
import { loadThemeWhiteBoard } from "./load-theme-white-board";
import { loadThemeWhiteEnUsButtonAll } from "./load-theme-white-en-us-button-all";
import { loadThemeWhiteCanvasContainer } from "./load-theme-white-canvas-container";
import { loadThemeWhiteChart } from "./load-theme-white-chart";
import { loadThemeWhiteColor } from "./load-theme-white-color";
import { loadThemeWhiteEnUsDiagram } from "./load-theme-white-en-us-diagram";
import { loadThemeWhiteEnUsDiagramEditor } from "./load-theme-white-en-us-diagram-editor";
import { loadThemeWhiteEnUsDialogAll } from "./load-theme-white-en-us-dialog-all";
import { loadThemeWhiteExpandable } from "./load-theme-white-expandable";
import { loadThemeWhiteHtmlElement } from "./load-theme-white-html-element";
import { loadThemeWhiteImage } from "./load-theme-white-image";
import { loadThemeWhiteEnUsInputAll } from "./load-theme-white-en-us-input-all";
import { loadThemeWhiteLayout } from "./load-theme-white-layout";
import { loadThemeWhiteEnUsLink } from "./load-theme-white-en-us-link";
import { loadThemeWhiteList } from "./load-theme-white-list";
import { loadThemeWhiteMenu } from "./load-theme-white-menu";
import { loadThemeWhiteMenuBar } from "./load-theme-white-menu-bar";
import { loadThemeWhiteMenuSided } from "./load-theme-white-menu-sided";
import { loadThemeWhiteEnUsNote } from "./load-theme-white-en-us-note";
import { loadThemeWhitePagination } from "./load-theme-white-pagination";
import { loadThemeWhitePane } from "./load-theme-white-pane";
import { loadThemeWhiteEnUsPickerColor } from "./load-theme-white-en-us-picker-color";
import { loadThemeWhiteEnUsPickerColorGradient } from "./load-theme-white-en-us-picker-color-gradient";
import { loadThemeWhiteEnUsPickerDate } from "./load-theme-white-en-us-picker-date";
import { loadThemeWhiteEnUsPickerDatetime } from "./load-theme-white-en-us-picker-datetime";
import { loadThemeWhiteEnUsPickerTime } from "./load-theme-white-en-us-picker-time";
import { loadThemeWhiteSelect } from "./load-theme-white-select";
import { loadThemeWhiteSlider } from "./load-theme-white-slider";
import { loadThemeWhiteEnUsTable } from "./load-theme-white-en-us-table";
import { loadThemeWhiteText } from "./load-theme-white-text";
import { loadThemeWhiteTree } from "./load-theme-white-tree";
import { loadThemeWhiteView } from "./load-theme-white-view";
import { loadThemeWhiteEnUsIndicatorProcessing } from "./load-theme-white-en-us-indicator-processing";

export const loadThemeWhiteEnUsAll = (): void => {
	loadThemeWhite();
	loadThemeWhiteBase();
	loadThemeWhiteBoard();
	loadThemeWhiteEnUsButtonAll();
	loadThemeWhiteView();
	loadThemeWhiteCanvasContainer();
	loadThemeWhiteChart();
	loadThemeWhiteColor();
	loadThemeWhiteEnUsDiagramEditor();
	loadThemeWhiteEnUsDiagram();
	loadThemeWhiteEnUsDialogAll();
	loadThemeWhiteExpandable();
	loadThemeWhiteHtmlElement();
	loadThemeWhiteImage();
	loadThemeWhiteEnUsIndicatorProcessing();
	loadThemeWhiteEnUsInputAll();
	loadThemeWhiteLayout();
	loadThemeWhiteEnUsLink();
	loadThemeWhiteList();
	loadThemeWhiteTree();
	loadThemeWhiteMenuBar();
	loadThemeWhiteMenuSided();
	loadThemeWhiteMenu();
	loadThemeWhiteEnUsNote();
	loadThemeWhitePane();
	loadThemeWhitePagination();
	loadThemeWhiteEnUsPickerColorGradient();
	loadThemeWhiteEnUsPickerColor();
	loadThemeWhiteEnUsPickerDate();
	loadThemeWhiteEnUsPickerDatetime();
	loadThemeWhiteEnUsPickerTime();
	loadThemeWhiteSelect();
	loadThemeWhiteEnUsTable();
	loadThemeWhiteText();
	loadThemeWhiteSlider();
};

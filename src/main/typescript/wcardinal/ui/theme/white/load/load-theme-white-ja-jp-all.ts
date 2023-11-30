/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { loadThemeWhite } from "./load-theme-white";
import { loadThemeWhiteBase } from "./load-theme-white-base";
import { loadThemeWhiteBoard } from "./load-theme-white-board";
import { loadThemeWhiteJaJpButtonAll } from "./load-theme-white-ja-jp-button-all";
import { loadThemeWhiteCanvasContainer } from "./load-theme-white-canvas-container";
import { loadThemeWhiteChart } from "./load-theme-white-chart";
import { loadThemeWhiteColor } from "./load-theme-white-color";
import { loadThemeWhiteDiagram } from "./load-theme-white-diagram";
import { loadThemeWhiteJaJpDiagramEditor } from "./load-theme-white-ja-jp-diagram-editor";
import { loadThemeWhiteJaJpDialogAll } from "./load-theme-white-ja-jp-dialog-all";
import { loadThemeWhiteExpandable } from "./load-theme-white-expandable";
import { loadThemeWhiteHtmlElement } from "./load-theme-white-html-element";
import { loadThemeWhiteImage } from "./load-theme-white-image";
import { loadThemeWhiteJaJpInputAll } from "./load-theme-white-ja-jp-input-all";
import { loadThemeWhiteLayout } from "./load-theme-white-layout";
import { loadThemeWhiteJaJpLink } from "./load-theme-white-ja-jp-link";
import { loadThemeWhiteList } from "./load-theme-white-list";
import { loadThemeWhiteMenu } from "./load-theme-white-menu";
import { loadThemeWhiteMenuBar } from "./load-theme-white-menu-bar";
import { loadThemeWhiteMenuSided } from "./load-theme-white-menu-sided";
import { loadThemeWhiteJaJpNote } from "./load-theme-white-ja-jp-note";
import { loadThemeWhitePagination } from "./load-theme-white-pagination";
import { loadThemeWhitePane } from "./load-theme-white-pane";
import { loadThemeWhiteJaJpPickerColor } from "./load-theme-white-ja-jp-picker-color";
import { loadThemeWhiteJaJpPickerColorGradient } from "./load-theme-white-ja-jp-picker-color-gradient";
import { loadThemeWhiteJaJpPickerDate } from "./load-theme-white-ja-jp-picker-date";
import { loadThemeWhiteJaJpPickerDatetime } from "./load-theme-white-ja-jp-picker-datetime";
import { loadThemeWhiteJaJpPickerTime } from "./load-theme-white-ja-jp-picker-time";
import { loadThemeWhiteSelect } from "./load-theme-white-select";
import { loadThemeWhiteSlider } from "./load-theme-white-slider";
import { loadThemeWhiteJaJpTable } from "./load-theme-white-ja-jp-table";
import { loadThemeWhiteText } from "./load-theme-white-text";
import { loadThemeWhiteTree } from "./load-theme-white-tree";
import { loadThemeWhiteView } from "./load-theme-white-view";

export const loadThemeWhiteJaJpAll = (): void => {
	loadThemeWhite();
	loadThemeWhiteBase();
	loadThemeWhiteBoard();
	loadThemeWhiteJaJpButtonAll();
	loadThemeWhiteView();
	loadThemeWhiteCanvasContainer();
	loadThemeWhiteChart();
	loadThemeWhiteColor();
	loadThemeWhiteJaJpDiagramEditor();
	loadThemeWhiteDiagram();
	loadThemeWhiteJaJpDialogAll();
	loadThemeWhiteExpandable();
	loadThemeWhiteHtmlElement();
	loadThemeWhiteImage();
	loadThemeWhiteJaJpInputAll();
	loadThemeWhiteLayout();
	loadThemeWhiteJaJpLink();
	loadThemeWhiteList();
	loadThemeWhiteTree();
	loadThemeWhiteMenuBar();
	loadThemeWhiteMenuSided();
	loadThemeWhiteMenu();
	loadThemeWhiteJaJpNote();
	loadThemeWhitePane();
	loadThemeWhitePagination();
	loadThemeWhiteJaJpPickerColorGradient();
	loadThemeWhiteJaJpPickerColor();
	loadThemeWhiteJaJpPickerDate();
	loadThemeWhiteJaJpPickerDatetime();
	loadThemeWhiteJaJpPickerTime();
	loadThemeWhiteSelect();
	loadThemeWhiteJaJpTable();
	loadThemeWhiteText();
	loadThemeWhiteSlider();
};

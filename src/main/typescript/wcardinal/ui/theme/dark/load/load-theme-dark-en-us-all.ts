/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { loadThemeDark } from "./load-theme-dark";
import { loadThemeDarkBase } from "./load-theme-dark-base";
import { loadThemeDarkBoard } from "./load-theme-dark-board";
import { loadThemeDarkEnUsButtonAll } from "./load-theme-dark-en-us-button-all";
import { loadThemeDarkCanvasContainer } from "./load-theme-dark-canvas-container";
import { loadThemeDarkChart } from "./load-theme-dark-chart";
import { loadThemeDarkColor } from "./load-theme-dark-color";
import { loadThemeDarkEnUsDiagram } from "./load-theme-dark-en-us-diagram";
import { loadThemeDarkEnUsDiagramEditor } from "./load-theme-dark-en-us-diagram-editor";
import { loadThemeDarkEnUsDialogAll } from "./load-theme-dark-en-us-dialog-all";
import { loadThemeDarkExpandable } from "./load-theme-dark-expandable";
import { loadThemeDarkHtmlElement } from "./load-theme-dark-html-element";
import { loadThemeDarkImage } from "./load-theme-dark-image";
import { loadThemeDarkEnUsInputAll } from "./load-theme-dark-en-us-input-all";
import { loadThemeDarkLayout } from "./load-theme-dark-layout";
import { loadThemeDarkEnUsLink } from "./load-theme-dark-en-us-link";
import { loadThemeDarkList } from "./load-theme-dark-list";
import { loadThemeDarkMenu } from "./load-theme-dark-menu";
import { loadThemeDarkMenuBar } from "./load-theme-dark-menu-bar";
import { loadThemeDarkMenuSided } from "./load-theme-dark-menu-sided";
import { loadThemeDarkEnUsNote } from "./load-theme-dark-en-us-note";
import { loadThemeDarkPagination } from "./load-theme-dark-pagination";
import { loadThemeDarkPane } from "./load-theme-dark-pane";
import { loadThemeDarkEnUsPickerColor } from "./load-theme-dark-en-us-picker-color";
import { loadThemeDarkEnUsPickerColorGradient } from "./load-theme-dark-en-us-picker-color-gradient";
import { loadThemeDarkEnUsPickerDate } from "./load-theme-dark-en-us-picker-date";
import { loadThemeDarkEnUsPickerDatetime } from "./load-theme-dark-en-us-picker-datetime";
import { loadThemeDarkEnUsPickerTime } from "./load-theme-dark-en-us-picker-time";
import { loadThemeDarkSelect } from "./load-theme-dark-select";
import { loadThemeDarkSlider } from "./load-theme-dark-slider";
import { loadThemeDarkEnUsTable } from "./load-theme-dark-en-us-table";
import { loadThemeDarkText } from "./load-theme-dark-text";
import { loadThemeDarkTree } from "./load-theme-dark-tree";
import { loadThemeDarkView } from "./load-theme-dark-view";
import { loadThemeDarkEnUsIndicatorProcessing } from "./load-theme-dark-en-us-indicator-processing";

export const loadThemeDarkEnUsAll = (): void => {
	loadThemeDark();
	loadThemeDarkBase();
	loadThemeDarkBoard();
	loadThemeDarkEnUsButtonAll();
	loadThemeDarkView();
	loadThemeDarkCanvasContainer();
	loadThemeDarkChart();
	loadThemeDarkColor();
	loadThemeDarkEnUsDiagramEditor();
	loadThemeDarkEnUsDiagram();
	loadThemeDarkEnUsDialogAll();
	loadThemeDarkExpandable();
	loadThemeDarkHtmlElement();
	loadThemeDarkImage();
	loadThemeDarkEnUsIndicatorProcessing();
	loadThemeDarkEnUsInputAll();
	loadThemeDarkLayout();
	loadThemeDarkEnUsLink();
	loadThemeDarkList();
	loadThemeDarkTree();
	loadThemeDarkMenuBar();
	loadThemeDarkMenuSided();
	loadThemeDarkMenu();
	loadThemeDarkEnUsNote();
	loadThemeDarkPane();
	loadThemeDarkPagination();
	loadThemeDarkEnUsPickerColorGradient();
	loadThemeDarkEnUsPickerColor();
	loadThemeDarkEnUsPickerDate();
	loadThemeDarkEnUsPickerDatetime();
	loadThemeDarkEnUsPickerTime();
	loadThemeDarkSelect();
	loadThemeDarkEnUsTable();
	loadThemeDarkText();
	loadThemeDarkSlider();
};

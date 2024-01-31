/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { loadThemeDark } from "./load-theme-dark";
import { loadThemeDarkBase } from "./load-theme-dark-base";
import { loadThemeDarkBoard } from "./load-theme-dark-board";
import { loadThemeDarkJaJpButtonAll } from "./load-theme-dark-ja-jp-button-all";
import { loadThemeDarkCanvasContainer } from "./load-theme-dark-canvas-container";
import { loadThemeDarkChart } from "./load-theme-dark-chart";
import { loadThemeDarkColor } from "./load-theme-dark-color";
import { loadThemeDarkJaJpDiagram } from "./load-theme-dark-ja-jp-diagram";
import { loadThemeDarkJaJpDiagramEditor } from "./load-theme-dark-ja-jp-diagram-editor";
import { loadThemeDarkJaJpDialogAll } from "./load-theme-dark-ja-jp-dialog-all";
import { loadThemeDarkExpandable } from "./load-theme-dark-expandable";
import { loadThemeDarkHtmlElement } from "./load-theme-dark-html-element";
import { loadThemeDarkImage } from "./load-theme-dark-image";
import { loadThemeDarkJaJpInputAll } from "./load-theme-dark-ja-jp-input-all";
import { loadThemeDarkLayout } from "./load-theme-dark-layout";
import { loadThemeDarkJaJpLink } from "./load-theme-dark-ja-jp-link";
import { loadThemeDarkList } from "./load-theme-dark-list";
import { loadThemeDarkMenu } from "./load-theme-dark-menu";
import { loadThemeDarkMenuBar } from "./load-theme-dark-menu-bar";
import { loadThemeDarkMenuSided } from "./load-theme-dark-menu-sided";
import { loadThemeDarkJaJpNote } from "./load-theme-dark-ja-jp-note";
import { loadThemeDarkPagination } from "./load-theme-dark-pagination";
import { loadThemeDarkPane } from "./load-theme-dark-pane";
import { loadThemeDarkJaJpPickerColor } from "./load-theme-dark-ja-jp-picker-color";
import { loadThemeDarkJaJpPickerColorGradient } from "./load-theme-dark-ja-jp-picker-color-gradient";
import { loadThemeDarkJaJpPickerDate } from "./load-theme-dark-ja-jp-picker-date";
import { loadThemeDarkJaJpPickerDatetime } from "./load-theme-dark-ja-jp-picker-datetime";
import { loadThemeDarkJaJpPickerTime } from "./load-theme-dark-ja-jp-picker-time";
import { loadThemeDarkSelect } from "./load-theme-dark-select";
import { loadThemeDarkSlider } from "./load-theme-dark-slider";
import { loadThemeDarkJaJpTable } from "./load-theme-dark-ja-jp-table";
import { loadThemeDarkText } from "./load-theme-dark-text";
import { loadThemeDarkTree } from "./load-theme-dark-tree";
import { loadThemeDarkView } from "./load-theme-dark-view";
import { loadThemeDarkJaJpIndicatorProcessing } from "./load-theme-dark-ja-jp-indicator-processing";

export const loadThemeDarkJaJpAll = (): void => {
	loadThemeDark();
	loadThemeDarkBase();
	loadThemeDarkBoard();
	loadThemeDarkJaJpButtonAll();
	loadThemeDarkView();
	loadThemeDarkCanvasContainer();
	loadThemeDarkChart();
	loadThemeDarkColor();
	loadThemeDarkJaJpDiagramEditor();
	loadThemeDarkJaJpDiagram();
	loadThemeDarkJaJpDialogAll();
	loadThemeDarkExpandable();
	loadThemeDarkHtmlElement();
	loadThemeDarkImage();
	loadThemeDarkJaJpIndicatorProcessing();
	loadThemeDarkJaJpInputAll();
	loadThemeDarkLayout();
	loadThemeDarkJaJpLink();
	loadThemeDarkList();
	loadThemeDarkTree();
	loadThemeDarkMenuBar();
	loadThemeDarkMenuSided();
	loadThemeDarkMenu();
	loadThemeDarkJaJpNote();
	loadThemeDarkPane();
	loadThemeDarkPagination();
	loadThemeDarkJaJpPickerColorGradient();
	loadThemeDarkJaJpPickerColor();
	loadThemeDarkJaJpPickerDate();
	loadThemeDarkJaJpPickerDatetime();
	loadThemeDarkJaJpPickerTime();
	loadThemeDarkSelect();
	loadThemeDarkJaJpTable();
	loadThemeDarkText();
	loadThemeDarkSlider();
};

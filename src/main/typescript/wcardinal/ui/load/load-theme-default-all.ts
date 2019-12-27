/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { loadThemeDefault } from "./load-theme-default";
import { loadThemeDefaultBase } from "./load-theme-default-base";
import { loadThemeDefaultBoard } from "./load-theme-default-board";
import { loadThemeDefaultButtonAll } from "./load-theme-default-button-all";
import { loadThemeDefaultCanvasContainer } from "./load-theme-default-canvas-container";
import { loadThemeDefaultChart } from "./load-theme-default-chart";
import { loadThemeDefaultDiagram } from "./load-theme-default-diagram";
import { loadThemeDefaultDiagramEditor } from "./load-theme-default-diagram-editor";
import { loadThemeDefaultDialogAll } from "./load-theme-default-dialog-all";
import { loadThemeDefaultDropdown } from "./load-theme-default-dropdown";
import { loadThemeDefaultExpandable } from "./load-theme-default-expandable";
import { loadThemeDefaultHTMLElement } from "./load-theme-default-html-element";
import { loadThemeDefaultImage } from "./load-theme-default-image";
import { loadThemeDefaultInputAll } from "./load-theme-default-input-all";
import { loadThemeDefaultLayout } from "./load-theme-default-layout";
import { loadThemeDefaultList } from "./load-theme-default-list";
import { loadThemeDefaultMenu } from "./load-theme-default-menu";
import { loadThemeDefaultMenuBar } from "./load-theme-default-menu-bar";
import { loadThemeDefaultMenuSided } from "./load-theme-default-menu-sided";
import { loadThemeDefaultNote } from "./load-theme-default-note";
import { loadThemeDefaultPane } from "./load-theme-default-pane";
import { loadThemeDefaultPickerColor } from "./load-theme-default-picker-color";
import { loadThemeDefaultPickerColorGradient } from "./load-theme-default-picker-color-gradient";
import { loadThemeDefaultPickerDate } from "./load-theme-default-picker-date";
import { loadThemeDefaultPickerDatetime } from "./load-theme-default-picker-datetime";
import { loadThemeDefaultPickerTime } from "./load-theme-default-picker-time";
import { loadThemeDefaultSelect } from "./load-theme-default-select";
import { loadThemeDefaultTable } from "./load-theme-default-table";
import { loadThemeDefaultText } from "./load-theme-default-text";
import { loadThemeDefaultView } from "./load-theme-default-view";

export const loadThemeDefaultAll = () => {
	loadThemeDefault();
	loadThemeDefaultBase();
	loadThemeDefaultBoard();
	loadThemeDefaultButtonAll();
	loadThemeDefaultCanvasContainer();
	loadThemeDefaultChart();
	loadThemeDefaultDiagramEditor();
	loadThemeDefaultDiagram();
	loadThemeDefaultDialogAll();
	loadThemeDefaultDropdown();
	loadThemeDefaultExpandable();
	loadThemeDefaultHTMLElement();
	loadThemeDefaultImage();
	loadThemeDefaultInputAll();
	loadThemeDefaultLayout();
	loadThemeDefaultList();
	loadThemeDefaultMenuBar();
	loadThemeDefaultMenuSided();
	loadThemeDefaultMenu();
	loadThemeDefaultNote();
	loadThemeDefaultPane();
	loadThemeDefaultPickerColorGradient();
	loadThemeDefaultPickerColor();
	loadThemeDefaultPickerDate();
	loadThemeDefaultPickerDatetime();
	loadThemeDefaultPickerTime();
	loadThemeDefaultSelect();
	loadThemeDefaultTable();
	loadThemeDefaultText();
	loadThemeDefaultView();
};

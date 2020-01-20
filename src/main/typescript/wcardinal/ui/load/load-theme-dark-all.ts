/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { loadThemeDark } from "./load-theme-dark";
import { loadThemeDarkBase } from "./load-theme-dark-base";
import { loadThemeDarkBoard } from "./load-theme-dark-board";
import { loadThemeDarkButtonAll } from "./load-theme-dark-button-all";
import { loadThemeDarkCanvasContainer } from "./load-theme-dark-canvas-container";
import { loadThemeDarkDialogAll } from "./load-theme-dark-dialog-all";
import { loadThemeDarkDropdown } from "./load-theme-dark-dropdown";
import { loadThemeDarkExpandable } from "./load-theme-dark-expandable";
import { loadThemeDarkHTMLElement } from "./load-theme-dark-html-element";
import { loadThemeDarkImage } from "./load-theme-dark-image";
import { loadThemeDarkInputAll } from "./load-theme-dark-input-all";
import { loadThemeDarkLayout } from "./load-theme-dark-layout";
import { loadThemeDarkList } from "./load-theme-dark-list";
import { loadThemeDarkMenu } from "./load-theme-dark-menu";
import { loadThemeDarkMenuBar } from "./load-theme-dark-menu-bar";
import { loadThemeDarkMenuSided } from "./load-theme-dark-menu-sided";
import { loadThemeDarkNote } from "./load-theme-dark-note";
import { loadThemeDarkPane } from "./load-theme-dark-pane";
import { loadThemeDarkPickerColor } from "./load-theme-dark-picker-color";
import { loadThemeDarkPickerColorGradient } from "./load-theme-dark-picker-color-gradient";
import { loadThemeDarkPickerDate } from "./load-theme-dark-picker-date";
import { loadThemeDarkPickerDatetime } from "./load-theme-dark-picker-datetime";
import { loadThemeDarkPickerTime } from "./load-theme-dark-picker-time";
import { loadThemeDarkScrollBar } from "./load-theme-dark-scroll-bar";
import { loadThemeDarkSelect } from "./load-theme-dark-select";
import { loadThemeDarkText } from "./load-theme-dark-text";
import { loadThemeDarkView } from "./load-theme-dark-view";

export const loadThemeDarkAll = () => {
	loadThemeDark();
	loadThemeDarkBase();
	loadThemeDarkBoard();
	loadThemeDarkButtonAll();
	loadThemeDarkCanvasContainer();
	loadThemeDarkDialogAll();
	loadThemeDarkDropdown();
	loadThemeDarkExpandable();
	loadThemeDarkHTMLElement();
	loadThemeDarkImage();
	loadThemeDarkInputAll();
	loadThemeDarkLayout();
	loadThemeDarkList();
	loadThemeDarkMenu();
	loadThemeDarkMenuBar();
	loadThemeDarkMenuSided();
	loadThemeDarkNote();
	loadThemeDarkPane();
	loadThemeDarkPickerColor();
	loadThemeDarkPickerColorGradient();
	loadThemeDarkPickerDate();
	loadThemeDarkPickerDatetime();
	loadThemeDarkPickerTime();
	loadThemeDarkScrollBar();
	loadThemeDarkSelect();
	loadThemeDarkText();
	loadThemeDarkView();
};

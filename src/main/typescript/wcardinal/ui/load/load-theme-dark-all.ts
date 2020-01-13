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
import { loadThemeDarkHTMLElement } from "./load-theme-dark-html-element";
import { loadThemeDarkImage } from "./load-theme-dark-image";
import { loadThemeDarkInputAll } from "./load-theme-dark-input-all";
import { loadThemeDarkLayout } from "./load-theme-dark-layout";
import { loadThemeDarkNote } from "./load-theme-dark-note";
import { loadThemeDarkPane } from "./load-theme-dark-pane";
import { loadThemeDarkPickerColor } from "./load-theme-dark-picker-color";
import { loadThemeDarkPickerColorGradient } from "./load-theme-dark-picker-color-gradient";
import { loadThemeDarkScrollBar } from "./load-theme-dark-scroll-bar";
import { loadThemeDarkText } from "./load-theme-dark-text";
import { loadThemeDarkView } from "./load-theme-dark-view";

export const loadThemeDarkAll = () => {
	loadThemeDark();
	loadThemeDarkBase();
	loadThemeDarkBoard();
	loadThemeDarkButtonAll();
	loadThemeDarkCanvasContainer();
	loadThemeDarkDialogAll();
	loadThemeDarkHTMLElement();
	loadThemeDarkImage();
	loadThemeDarkInputAll();
	loadThemeDarkLayout();
	loadThemeDarkNote();
	loadThemeDarkPane();
	loadThemeDarkPickerColor();
	loadThemeDarkPickerColorGradient();
	loadThemeDarkScrollBar();
	loadThemeDarkText();
	loadThemeDarkView();
};

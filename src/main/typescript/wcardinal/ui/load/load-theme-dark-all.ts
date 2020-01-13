/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { loadThemeDark } from "./load-theme-dark";
import { loadThemeDarkBase } from "./load-theme-dark-base";
import { loadThemeDarkHTMLElement } from "./load-theme-dark-html-element";
import { loadThemeDarkImage } from "./load-theme-dark-image";
import { loadThemeDarkNote } from "./load-theme-dark-note";
import { loadThemeDarkScrollBar } from "./load-theme-dark-scroll-bar";
import { loadThemeDarkText } from "./load-theme-dark-text";
import { loadThemeDarkView } from "./load-theme-dark-view";

export const loadThemeDarkAll = () => {
	loadThemeDark();
	loadThemeDarkBase();
	loadThemeDarkHTMLElement();
	loadThemeDarkImage();
	loadThemeDarkNote();
	loadThemeDarkScrollBar();
	loadThemeDarkText();
	loadThemeDarkView();
};

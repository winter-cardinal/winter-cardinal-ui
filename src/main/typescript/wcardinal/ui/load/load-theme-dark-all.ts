/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { loadThemeDark } from "./load-theme-dark";
import { loadThemeDarkBase } from "./load-theme-dark-base";
import { loadThemeDarkHTMLElement } from "./load-theme-dark-html-element";
import { loadThemeDarkImage } from "./load-theme-dark-image";
import { loadThemeDarkText } from "./load-theme-dark-text";

export const loadThemeDarkAll = () => {
	loadThemeDark();
	loadThemeDarkBase();
	loadThemeDarkHTMLElement();
	loadThemeDarkImage();
	loadThemeDarkText();
};

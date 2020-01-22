/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkHtmlElement } from "../d-theme-dark-html-element";

export const loadThemeDarkHtmlElement = () => {
	DThemeDark.set( "DHtmlElement", DThemeDarkHtmlElement );
};

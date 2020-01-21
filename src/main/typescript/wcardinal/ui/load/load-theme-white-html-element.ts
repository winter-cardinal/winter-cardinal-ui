/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteHtmlElement } from "../theme/white/d-theme-white-html-element";

export const loadThemeWhiteHtmlElement = () => {
	DThemeWhite.set( "DHtmlElement", DThemeWhiteHtmlElement );
};

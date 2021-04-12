/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteHtmlElement } from "../d-theme-white-html-element";

export const loadThemeWhiteHtmlElement = (): void => {
	DThemeWhite.set("DHtmlElement", DThemeWhiteHtmlElement);
};

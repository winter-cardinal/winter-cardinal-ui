/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteHTMLElement } from "../theme/white/d-theme-white-html-element";

export const loadThemeWhiteHTMLElement = () => {
	DThemeWhite.set( "DHTMLElement", DThemeWhiteHTMLElement );
};

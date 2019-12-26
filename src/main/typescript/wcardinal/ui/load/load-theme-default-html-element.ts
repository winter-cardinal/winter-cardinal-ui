/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteHTMLElement } from "../theme/default/d-theme-default-html-element";

export const loadThemeWhiteHTMLElement = () => {
	DThemeWhite.set( "DHTMLElement", DThemeWhiteHTMLElement );
};
